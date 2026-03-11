#!/usr/bin/env bash
# deploy-workflow.sh
# Deploys the Articles Generator workflow to an n8n instance via its REST API.
#
# Usage:
#   N8N_URL=https://n8n.example.com N8N_API_KEY=<key> ./n8n/deploy-workflow.sh
#
# Required environment variables:
#   N8N_URL       - Base URL of the n8n instance (no trailing slash)
#   N8N_API_KEY   - n8n API key (generate in n8n → Settings → API)
#
# Optional environment variables:
#   GEMINI_CREDENTIAL_NAME - Name of the Google Gemini credential in n8n
#                            (default: "Google Gemini (admin@zapli.co.il)")

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKFLOW_FILE="$SCRIPT_DIR/articles-generator.json"

: "${N8N_URL:?N8N_URL is required}"
: "${N8N_API_KEY:?N8N_API_KEY is required}"

GEMINI_CREDENTIAL_NAME="${GEMINI_CREDENTIAL_NAME:-Google Gemini (admin@zapli.co.il)}"
WORKFLOW_NAME="Articles Generator"

echo "==> Connecting to n8n at $N8N_URL"

# ── Helper ─────────────────────────────────────────────────────────────────────
n8n_request() {
  local method="$1"
  local path="$2"
  local data="${3:-}"

  if [[ -n "$data" ]]; then
    curl -sf -X "$method" \
      -H "X-N8N-API-KEY: $N8N_API_KEY" \
      -H "Content-Type: application/json" \
      -d "$data" \
      "$N8N_URL/api/v1$path"
  else
    curl -sf -X "$method" \
      -H "X-N8N-API-KEY: $N8N_API_KEY" \
      "$N8N_URL/api/v1$path"
  fi
}

# ── 1. Resolve the Google Gemini credential ID ─────────────────────────────────
echo "==> Looking up Google Gemini credential..."

CREDENTIALS_JSON=$(n8n_request GET "/credentials" | python3 -c "
import sys, json
creds = json.load(sys.stdin)
data = creds.get('data', creds) if isinstance(creds, dict) else creds
print(json.dumps(data))
")

GEMINI_ID=$(echo "$CREDENTIALS_JSON" | python3 -c "
import sys, json
creds = json.load(sys.stdin)
target = '$GEMINI_CREDENTIAL_NAME'
for c in creds:
    if c.get('name') == target:
        print(c['id'])
        sys.exit(0)
print('')
")

if [[ -z "$GEMINI_ID" ]]; then
  echo "ERROR: Could not find a credential named '$GEMINI_CREDENTIAL_NAME'."
  echo "       Please create or rename the Google Gemini credential in n8n."
  exit 1
fi

echo "    Found credential ID: $GEMINI_ID"

# ── 2. Patch the workflow JSON with the real credential ID ─────────────────────
echo "==> Patching workflow JSON with credential ID..."

PATCHED_WORKFLOW=$(python3 - "$WORKFLOW_FILE" "$GEMINI_ID" <<'PYEOF'
import sys, json

workflow_path = sys.argv[1]
gemini_id = sys.argv[2]

with open(workflow_path) as f:
    wf = json.load(f)

for node in wf.get("nodes", []):
    creds = node.get("credentials", {})
    if "googleGeminiApi" in creds:
        creds["googleGeminiApi"]["id"] = gemini_id

print(json.dumps(wf))
PYEOF
)

# ── 3. Check if workflow already exists ────────────────────────────────────────
echo "==> Checking for existing workflow..."

EXISTING_ID=$(n8n_request GET "/workflows" | python3 -c "
import sys, json
wfs = json.load(sys.stdin)
data = wfs.get('data', wfs) if isinstance(wfs, dict) else wfs
target = '$WORKFLOW_NAME'
for w in data:
    if w.get('name') == target:
        print(w['id'])
        sys.exit(0)
print('')
")

# ── Helper: print workflow name and id from JSON ───────────────────────────────
wf_summary() {
  python3 -c "import sys,json; w=json.load(sys.stdin); print(w.get('name','?'), '- id:', w.get('id','?'))"
}

# ── 4. Create or update the workflow ──────────────────────────────────────────
if [[ -n "$EXISTING_ID" ]]; then
  echo "==> Updating existing workflow (id=$EXISTING_ID)..."
  RESULT=$(n8n_request PUT "/workflows/$EXISTING_ID" "$PATCHED_WORKFLOW")
  echo "    Updated: $(echo "$RESULT" | wf_summary)"
else
  echo "==> Creating new workflow..."
  RESULT=$(n8n_request POST "/workflows" "$PATCHED_WORKFLOW")
  EXISTING_ID=$(echo "$RESULT" | python3 -c "import sys,json; w=json.load(sys.stdin); print(w.get('id','?'))")
  echo "    Created: $(echo "$RESULT" | wf_summary)"
fi

# ── 5. Activate the workflow ───────────────────────────────────────────────────
echo "==> Activating workflow..."
n8n_request PATCH "/workflows/$EXISTING_ID" '{"active":true}' > /dev/null
echo "    Workflow is now active."

echo ""
echo "✓ Articles Generator workflow deployed successfully."
echo "  It will run every 6 hours and post new articles to https://zapli.co.il/api/articles"

