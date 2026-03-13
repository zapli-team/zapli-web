const https = require("https");
const fs = require("fs");

const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyM2E1MGI4OS0yMWFjLTQ3ZDAtYWZiMi1iYTU0ZjlmODQwZWQiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiNTJiZjQ3N2YtMGE1MC00Y2Y0LTg2ZGYtOTFkYmQyZjRlYzU1IiwiaWF0IjoxNzczMjQzMDI1fQ.OHo-Ay_ofilL8LJoppf6Hlh9tQbWxXSRkqnJQ-naGMM";
const HOST = "primary.n8n.zapli.co.il";
const WORKFLOW_ID = "ZpABRDKJdReLt7kO5s80X";
const GCS_CRED_ID = "gXrh9Xm1bHFgLz2e";
const GCS_CRED_NAME = "Google Cloud Storage account";
const SERPAPI_KEY =
    "ae711a48df7be8775a09d45375ccdc615a5dd350abcc2210578972bf89cae2c9";

function api(method, path, body) {
    return new Promise((resolve, reject) => {
        const data = body ? JSON.stringify(body) : null;
        const opts = {
            hostname: HOST,
            path: "/api/v1" + path,
            method,
            headers: {
                "X-N8N-API-KEY": API_KEY,
                "Content-Type": "application/json",
            },
        };
        if (data) opts.headers["Content-Length"] = Buffer.byteLength(data);
        const req = https.request(opts, (res) => {
            let d = "";
            res.on("data", (c) => (d += c));
            res.on("end", () => resolve({ status: res.statusCode, body: d }));
        });
        req.on("error", reject);
        if (data) req.write(data);
        req.end();
    });
}

// ══════════════════════════════════════════════════════════
// Code node JavaScript strings (embedded as template literals)
// ══════════════════════════════════════════════════════════

const prepareImagesCode = `
const article = $input.first().json;
const content = article.content || '';
const featuredUrl = article.featuredImageUrl || null;
const slug = article.slug || 'unknown';
const originalTitle = $('Prepare Gemini Input').first().json.title || 'AI technology';

const imageUrls = [];
const seen = new Set();

if (featuredUrl) {
  imageUrls.push(featuredUrl);
  seen.add(featuredUrl);
}

const imgRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
let m;
while ((m = imgRe.exec(content)) !== null) {
  const u = m[1];
  if (!seen.has(u)) { seen.add(u); imageUrls.push(u); }
}

if (imageUrls.length === 0) {
  return [{
    json: {
      noImages: true,
      searchQuery: originalTitle,
      slug: slug
    }
  }];
}

function guessExt(url) {
  const lower = url.toLowerCase();
  if (lower.match(/\\.png(\\?|$)/)) return 'png';
  if (lower.match(/\\.webp(\\?|$)/)) return 'webp';
  if (lower.match(/\\.avif(\\?|$)/)) return 'avif';
  return 'jpg';
}

return imageUrls.map((url, index) => ({
  json: {
    url: url,
    index: index,
    slug: slug,
    ext: guessExt(url),
    isFeatured: index === 0 && url === featuredUrl,
    noImages: false
  }
}));
`;

const parseSerpApiCode = `
const serpResult = $input.first().json;
const prepItem = $('Prepare Images').first().json;
const slug = prepItem.slug || 'unknown';

function isImageUrl(url) {
  if (!url) return false;
  const lower = url.toLowerCase();
  // Must have a recognizable image extension or image-serving domain
  const hasImageExt = /\\.(jpg|jpeg|png|gif|webp|avif|bmp|svg|tiff?)(\\?|#|$)/i.test(lower);
  // Block known non-image redirect/wrapper URLs
  const isWrapper = /lookaside\\.instagram\\.com|\\/seo\\/|google_widget|crawler/i.test(lower);
  if (isWrapper) return false;
  // Accept if has image extension or is from a known image CDN
  const isImageCdn = /(i\\.imgur\\.com|pbs\\.twimg\\.com|images\\.unsplash\\.com|cdn\\.pixabay\\.com|upload\\.wikimedia\\.org)/i.test(lower);
  return hasImageExt || isImageCdn;
}

const allImages = (serpResult.images_results || []);
const images = allImages.filter(img => isImageUrl(img.original)).slice(0, 3);

if (images.length === 0) {
  return [{ json: { url: null, noImages: true, slug: slug } }];
}

function guessExt(url) {
  const lower = (url || '').toLowerCase();
  if (lower.match(/\\.png(\\?|$)/)) return 'png';
  if (lower.match(/\\.webp(\\?|$)/)) return 'webp';
  return 'jpg';
}

return images.map((img, index) => ({
  json: {
    url: img.original,
    index: index,
    slug: slug,
    ext: guessExt(img.original),
    isFeatured: index === 0,
    noImages: false,
    fromSerpApi: true
  }
}));
`;

const filterSourceDownloadsCode = `
const items = $input.all();
const metaItems = $('Prepare Images').all().filter(i => i.json.url);
const originalTitle = $('Prepare Gemini Input').first().json.title || 'AI technology';
const slug = metaItems.length > 0 ? metaItems[0].json.slug : 'unknown';

const results = [];
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const meta = metaItems[i] ? metaItems[i].json : {};

  // Skip items that failed to download (no binary = 429 or other error)
  if (!item.binary || !item.binary.data) continue;

  results.push({
    json: {
      url: meta.url || '',
      index: meta.index !== undefined ? meta.index : i,
      slug: meta.slug || slug,
      ext: meta.ext || 'jpg',
      isFeatured: meta.isFeatured || false,
      fromSerpApi: false
    },
    binary: item.binary
  });
}

// All downloads failed → trigger SerpApi fallback
if (results.length === 0) {
  return [{ json: { noImages: true, searchQuery: originalTitle, slug: slug } }];
}

return results;
`;

const mergeSerpApiDataCode = `
const items = $input.all();
const metaItems = $('Parse SerpApi').all().filter(i => i.json.url);

const results = [];
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const meta = metaItems[i] ? metaItems[i].json : {};

  if (!item.binary || !item.binary.data) continue;

  // Verify the downloaded content is actually an image, not HTML or other
  const mime = (item.binary.data.mimeType || '').toLowerCase();
  if (mime && !mime.startsWith('image/')) continue;

  results.push({
    json: {
      url: meta.url || '',
      index: meta.index !== undefined ? meta.index : i,
      slug: meta.slug || 'unknown',
      ext: meta.ext || 'jpg',
      isFeatured: meta.isFeatured || false,
      fromSerpApi: true
    },
    binary: item.binary
  });
}

// All SerpApi downloads failed — use their original URLs directly
if (results.length === 0) {
  return metaItems.map((meta, i) => ({
    json: {
      url: meta.json.url || '',
      index: meta.json.index !== undefined ? meta.json.index : i,
      slug: meta.json.slug || 'unknown',
      ext: meta.json.ext || 'jpg',
      isFeatured: meta.json.isFeatured || false,
      fromSerpApi: true,
      useOriginalUrl: true
    }
  }));
}

return results;
`;

const buildFinalCode = `
const article = { ...$('Is Relevant?').first().json };
let content = article.content || '';
let featuredUrl = article.featuredImageUrl || null;
const slug = article.slug || 'unknown';

let metaItems = [];
try { metaItems = $('Merge SerpApi Data').all().map(i => i.json).filter(i => i.url); } catch(e) {}
if (metaItems.length === 0) {
  try { metaItems = $('Filter Source Downloads').all().map(i => i.json).filter(i => i.url); } catch(e) {}
}

const fromSerpApi = metaItems.length > 0 && metaItems[0].fromSerpApi;
const useOriginalUrl = metaItems.length > 0 && metaItems[0].useOriginalUrl;

// No images at all — return article as-is
if (metaItems.length === 0) {
  return [{ json: article }];
}

if (fromSerpApi) {
  const firstMeta = metaItems.find(m => m.isFeatured) || metaItems[0];
  if (firstMeta && firstMeta.url) featuredUrl = firstMeta.url;

  // Collect non-featured SerpApi images to inject
  const toInject = metaItems.filter(m => !m.isFeatured && m.url);

  if (toInject.length > 0) {
    // Extract article title for contextual captions
    const articleTitle = article.title || '';

    // Split content into sections at </p>, </h2>, </h3>, </ul>, </ol>, </blockquote>
    const splitRe = new RegExp('(<\\/p>|<\\/h[23]>|<\\/ul>|<\\/ol>|<\\/blockquote>)', 'gi');
    const parts = content.split(splitRe);

    // Reassemble into blocks (each block = content + its closing tag)
    const blocks = [];
    for (let i = 0; i < parts.length; i += 2) {
      blocks.push(parts[i] + (parts[i + 1] || ''));
    }

    // Only place images in the first 2/3 of blocks
    const maxBlock = Math.max(1, Math.floor(blocks.length * 2 / 3));

    // Calculate evenly-spaced positions for images (never at the end)
    const positions = [];
    const step = Math.max(1, Math.floor(maxBlock / (toInject.length + 1)));
    for (let i = 0; i < toInject.length; i++) {
      const pos = Math.min(step * (i + 1), maxBlock - 1);
      if (positions.indexOf(pos) === -1) positions.push(pos);
      else if (pos + 1 < maxBlock) positions.push(pos + 1);
    }

    // Build figure HTML for each image
    const defaultCaptions = [
      articleTitle,
      articleTitle ? articleTitle + ' - ' + '\u05ea\u05de\u05d5\u05e0\u05d4 \u05e7\u05e9\u05d5\u05e8\u05d4' : '\u05ea\u05de\u05d5\u05e0\u05d4 \u05e7\u05e9\u05d5\u05e8\u05d4',
      '\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d4 \u05de\u05ea\u05e7\u05d3\u05de\u05ea \u05d1\u05ea\u05d7\u05d5\u05dd \u05d4' + 'AI'
    ];

    // Insert images at calculated positions
    let injected = 0;
    for (let p = 0; p < positions.length && injected < toInject.length; p++) {
      const idx = positions[p] + injected; // adjust for previously inserted blocks
      if (idx >= blocks.length) break;

      const meta = toInject[injected];
      const cls = injected % 2 === 0 ? 'img-full' : 'img-half';
      const caption = defaultCaptions[injected % defaultCaptions.length];
      const figHtml = '<figure class="' + cls + '"><img src="' + meta.url +
        '" alt="' + caption + '" />' +
        '<figcaption>' + caption + '</figcaption></figure>';

      // For img-half, ensure next block starts with <p>, otherwise use img-full
      let finalCls = cls;
      if (cls === 'img-half' && idx + 1 < blocks.length) {
        const nextBlock = blocks[idx + 1] || '';
        if (!nextBlock.trim().match(new RegExp('^<p[\\\\s>]', 'i'))) {
          finalCls = 'img-full';
          const figHtmlFull = '<figure class="img-full"><img src="' + meta.url +
            '" alt="' + caption + '" />' +
            '<figcaption>' + caption + '</figcaption></figure>';
          blocks.splice(idx + 1, 0, figHtmlFull);
          injected++;
          continue;
        }
      }

      blocks.splice(idx + 1, 0, figHtml);
      injected++;
    }

    content = blocks.join('');
  }
}

// Remove consecutive images — if two figures are adjacent with no text between, drop the second
const figureRe = new RegExp('<figure[^>]*>[\\s\\S]*?<\/figure>', 'gi');
let match;
const figurePositions = [];
while ((match = figureRe.exec(content)) !== null) {
  figurePositions.push({ start: match.index, end: match.index + match[0].length });
}
for (let i = figurePositions.length - 1; i > 0; i--) {
  const between = content.substring(figurePositions[i-1].end, figurePositions[i].start).trim();
  // If nothing meaningful between two figures (only whitespace)
  if (!between || between.length < 10) {
    content = content.substring(0, figurePositions[i].start) + content.substring(figurePositions[i].end);
  }
}

// Replace URLs with GCS URLs (skip if using original SerpApi URLs)
if (!useOriginalUrl) {
  for (let i = 0; i < metaItems.length; i++) {
    const meta = metaItems[i];
    if (!meta || !meta.url) continue;

    const gcsUrl = 'https://storage.googleapis.com/zapli-portal/articles/' +
      meta.slug + '/img-' + meta.index + '.' + meta.ext;

    content = content.split(meta.url).join(gcsUrl);
    if (meta.url === featuredUrl) featuredUrl = gcsUrl;
  }
}

if (featuredUrl) {
  let pos = content.indexOf(featuredUrl);
  while (pos !== -1) {
    const figStart = content.lastIndexOf('<figure', pos);
    if (figStart !== -1 && figStart > pos - 200) {
      const figEnd = content.indexOf('</figure>', pos);
      if (figEnd !== -1) {
        content = content.substring(0, figStart) + content.substring(figEnd + 9);
        break;
      }
    }
    pos = content.indexOf(featuredUrl, pos + 1);
  }
}

return [{
  json: {
    ...article,
    content: content,
    featuredImageUrl: featuredUrl
  }
}];
`;

// ══════════════════════════════════════════════════════════
// Main deployment
// ══════════════════════════════════════════════════════════

async function main() {
    console.log("Reading current workflow...");
    const current = JSON.parse(
        fs.readFileSync("__n8n_current_workflow.json", "utf8"),
    );

    // Remove the broken "Upload Images to GCS" node
    const nodes = current.nodes.filter(
        (n) => n.name !== "Upload Images to GCS",
    );

    // ── Patch Gemini prompt with updated image rules ──
    const geminiNode = nodes.find((n) => n.name === "Filter & Rewrite Article");
    if (geminiNode) {
        const oldPrompt = geminiNode.parameters.messages.values[0].content;
        const newImageRules = `IMAGES:
You will receive a list of image URLs extracted from the source article. You MUST use them as follows:
- Pick the BEST, most visually representative image as the "featuredImageUrl" (the header image). This should be a high-quality photo or illustration that represents the article topic. Avoid logos, icons, author headshots, or tiny thumbnails.
- Place remaining images throughout the article body using <figure> tags with appropriate classes:
  • Full-width image: <figure class="img-full"><img src="URL" alt="תיאור בעברית" /><figcaption>כיתוב</figcaption></figure>
  • Half-width image (text flows beside it): <figure class="img-half"><img src="URL" alt="תיאור בעברית" /><figcaption>כיתוב</figcaption></figure>

CRITICAL IMAGE PLACEMENT RULES:
- NEVER place images at the bottom or end of the article. Images must appear in the FIRST TWO-THIRDS of the content only.
- A half-width image (img-half) MUST always be placed BEFORE a paragraph so that text flows beside it. Never place img-half before a heading, list, or blockquote — only before <p> tags.
- Alternate between img-full and img-half for visual variety.
- Every image MUST have a meaningful, descriptive Hebrew figcaption that relates to the article content near it. NEVER use generic captions like "תמונה להמחשה" or "איור". Write a caption that adds context or insight, e.g. "מערכת AI מנתחת נתוני לקוחות בזמן אמת" or "השוואת ביצועים בין כלי אוטומציה מובילים".
- Every image MUST have a meaningful Hebrew alt text that describes what the image shows.
- If only 1 image is available, use it as featuredImageUrl and don't put images in the body.
- If 0 images are available, set featuredImageUrl to null and write the article without images.
- Do NOT invent or fabricate image URLs. Only use the provided URLs.`;
        const updatedPrompt = oldPrompt.replace(
            /IMAGES:[\s\S]*?Do NOT invent or fabricate image URLs\. Only use the provided URLs\./,
            newImageRules,
        );
        geminiNode.parameters.messages.values[0].content = updatedPrompt;
        console.log("Patched Gemini prompt with updated image rules.");
    }

    // ── New nodes ──

    // 1. Prepare Images (Code)
    nodes.push({
        parameters: { jsCode: prepareImagesCode },
        type: "n8n-nodes-base.code",
        typeVersion: 2,
        position: [1984, 224],
        id: "a1000001-0001-0001-0001-000000000010",
        name: "Prepare Images",
    });

    // 2. Has Images? (IF)
    nodes.push({
        parameters: {
            conditions: {
                options: {
                    caseSensitive: true,
                    leftValue: "",
                    typeValidation: "strict",
                    version: 2,
                },
                conditions: [
                    {
                        id: "cond-has-img",
                        leftValue: "={{ $json.noImages }}",
                        rightValue: "",
                        operator: {
                            type: "boolean",
                            operation: "false",
                            singleValue: true,
                        },
                    },
                ],
                combinator: "and",
            },
            options: {},
        },
        type: "n8n-nodes-base.if",
        typeVersion: 2.2,
        position: [2200, 224],
        id: "a1000001-0001-0001-0001-000000000011",
        name: "Has Images?",
    });

    // 3. SerpApi Search (HTTP Request)
    nodes.push({
        parameters: {
            url: "https://serpapi.com/search.json",
            sendQuery: true,
            queryParameters: {
                parameters: [
                    { name: "engine", value: "google_images" },
                    { name: "q", value: "={{ $json.searchQuery }}" },
                    { name: "api_key", value: SERPAPI_KEY },
                    { name: "num", value: "5" },
                    { name: "safe", value: "active" },
                    { name: "tbs", value: "itp:photo" },
                    { name: "imgsz", value: "l" },
                ],
            },
            options: {},
        },
        type: "n8n-nodes-base.httpRequest",
        typeVersion: 4.2,
        position: [2860, 480],
        id: "a1000001-0001-0001-0001-000000000012",
        name: "SerpApi Search",
    });

    // 4. Parse SerpApi (Code)
    nodes.push({
        parameters: { jsCode: parseSerpApiCode },
        type: "n8n-nodes-base.code",
        typeVersion: 2,
        position: [3080, 480],
        id: "a1000001-0001-0001-0001-000000000013",
        name: "Parse SerpApi",
    });

    // 5. Has SerpApi Images? (IF)
    nodes.push({
        parameters: {
            conditions: {
                options: {
                    caseSensitive: true,
                    leftValue: "",
                    typeValidation: "strict",
                    version: 2,
                },
                conditions: [
                    {
                        id: "cond-has-serp-img",
                        leftValue: "={{ $json.noImages }}",
                        rightValue: "",
                        operator: {
                            type: "boolean",
                            operation: "false",
                            singleValue: true,
                        },
                    },
                ],
                combinator: "and",
            },
            options: {},
        },
        type: "n8n-nodes-base.if",
        typeVersion: 2.2,
        position: [3300, 480],
        id: "a1000001-0001-0001-0001-000000000014",
        name: "Has SerpApi Images?",
    });

    // 6. Download Source Image (HTTP Request binary — for source article images)
    nodes.push({
        parameters: {
            url: "={{ $json.url }}",
            options: {
                response: {
                    response: {
                        responseFormat: "file",
                        outputPropertyName: "data",
                    },
                },
                batching: {
                    batch: {
                        batchSize: 1,
                        batchInterval: 2000,
                    },
                },
            },
        },
        type: "n8n-nodes-base.httpRequest",
        typeVersion: 4.2,
        position: [2420, 124],
        id: "a1000001-0001-0001-0001-000000000015",
        name: "Download Source Image",
        onError: "continueRegularOutput",
    });

    // 7. Filter Source Downloads (Code — filters failed, fallback trigger)
    nodes.push({
        parameters: { jsCode: filterSourceDownloadsCode },
        type: "n8n-nodes-base.code",
        typeVersion: 2,
        position: [2640, 124],
        id: "a1000001-0001-0001-0001-000000000020",
        name: "Filter Source Downloads",
    });

    // 8. Has Source Downloads? (IF)
    nodes.push({
        parameters: {
            conditions: {
                options: {
                    caseSensitive: true,
                    leftValue: "",
                    typeValidation: "strict",
                    version: 2,
                },
                conditions: [
                    {
                        id: "cond-has-src-dl",
                        leftValue: "={{ $json.noImages }}",
                        rightValue: "",
                        operator: {
                            type: "boolean",
                            operation: "false",
                            singleValue: true,
                        },
                    },
                ],
                combinator: "and",
            },
            options: {},
        },
        type: "n8n-nodes-base.if",
        typeVersion: 2.2,
        position: [2860, 124],
        id: "a1000001-0001-0001-0001-000000000021",
        name: "Has Source Downloads?",
    });

    // 9. Download SerpApi Image (HTTP Request binary — for SerpApi fallback images)
    nodes.push({
        parameters: {
            url: "={{ $json.url }}",
            options: {
                response: {
                    response: {
                        responseFormat: "file",
                        outputPropertyName: "data",
                    },
                },
                batching: {
                    batch: {
                        batchSize: 1,
                        batchInterval: 2000,
                    },
                },
            },
        },
        type: "n8n-nodes-base.httpRequest",
        typeVersion: 4.2,
        position: [3520, 480],
        id: "a1000001-0001-0001-0001-000000000022",
        name: "Download SerpApi Image",
        onError: "continueRegularOutput",
    });

    // 10. Merge SerpApi Data (Code — re-attaches metadata to SerpApi downloads)
    nodes.push({
        parameters: { jsCode: mergeSerpApiDataCode },
        type: "n8n-nodes-base.code",
        typeVersion: 2,
        position: [3740, 480],
        id: "a1000001-0001-0001-0001-000000000023",
        name: "Merge SerpApi Data",
    });

    // 10b. Has SerpApi Downloads? (IF — routes downloaded vs use-original-url)
    nodes.push({
        parameters: {
            conditions: {
                options: {
                    caseSensitive: true,
                    leftValue: "",
                    typeValidation: "strict",
                    version: 2,
                },
                conditions: [
                    {
                        id: "cond-has-serp-dl",
                        leftValue: "={{ $json.useOriginalUrl }}",
                        rightValue: "",
                        operator: {
                            type: "boolean",
                            operation: "false",
                            singleValue: true,
                        },
                    },
                ],
                combinator: "and",
            },
            options: {},
        },
        type: "n8n-nodes-base.if",
        typeVersion: 2.2,
        position: [3960, 480],
        id: "a1000001-0001-0001-0001-000000000024",
        name: "Has SerpApi Downloads?",
    });

    // 11. Upload to GCS (Google Cloud Storage)
    nodes.push({
        parameters: {
            resource: "object",
            operation: "create",
            bucketName: "zapli-portal",
            objectName:
                "=articles/{{ $json.slug }}/img-{{ $json.index }}.{{ $json.ext }}",
            binaryPropertyName: "data",
        },
        type: "n8n-nodes-base.googleCloudStorage",
        typeVersion: 1,
        position: [4180, 224],
        id: "a1000001-0001-0001-0001-000000000017",
        name: "Upload to GCS",
        credentials: {
            googleCloudStorageOAuth2Api: {
                id: GCS_CRED_ID,
                name: GCS_CRED_NAME,
            },
        },
    });

    // 12. Build Final Article (Code)
    nodes.push({
        parameters: { jsCode: buildFinalCode },
        type: "n8n-nodes-base.code",
        typeVersion: 2,
        position: [4420, 224],
        id: "a1000001-0001-0001-0001-000000000018",
        name: "Build Final Article",
    });

    // Move Post to Website
    const postNode = nodes.find((n) => n.name === "Post to Website");
    if (postNode) postNode.position = [4660, 224];

    // ── Connections ──
    const connections = {};

    // Existing connections (unchanged)
    connections["VentureBeat RSS"] = {
        main: [[{ node: "Normalize RSS Data", type: "main", index: 0 }]],
    };
    connections["TechnologyReview RSS"] = {
        main: [[{ node: "Normalize RSS Data", type: "main", index: 0 }]],
    };
    connections["ArtificialIntelligenceNews RSS"] = {
        main: [[{ node: "Normalize RSS Data", type: "main", index: 0 }]],
    };
    connections["Normalize RSS Data"] = {
        main: [[{ node: "Fetch Article Content", type: "main", index: 0 }]],
    };
    connections["Fetch Article Content"] = {
        main: [[{ node: "Prepare Gemini Input", type: "main", index: 0 }]],
    };
    connections["Prepare Gemini Input"] = {
        main: [[{ node: "Filter & Rewrite Article", type: "main", index: 0 }]],
    };
    connections["Filter & Rewrite Article"] = {
        main: [[{ node: "Parse & Prepare Payload", type: "main", index: 0 }]],
    };
    connections["Parse & Prepare Payload"] = {
        main: [[{ node: "Is Relevant?", type: "main", index: 0 }]],
    };

    // Updated: Is Relevant? → Prepare Images (true branch)
    connections["Is Relevant?"] = {
        main: [
            [{ node: "Prepare Images", type: "main", index: 0 }],
            [], // false branch (not relevant) → nothing
        ],
    };

    // New image pipeline connections
    connections["Prepare Images"] = {
        main: [[{ node: "Has Images?", type: "main", index: 0 }]],
    };

    connections["Has Images?"] = {
        main: [
            [{ node: "Download Source Image", type: "main", index: 0 }], // true: has source images → download
            [{ node: "SerpApi Search", type: "main", index: 0 }], // false: no images → SerpApi
        ],
    };

    connections["Download Source Image"] = {
        main: [[{ node: "Filter Source Downloads", type: "main", index: 0 }]],
    };

    connections["Filter Source Downloads"] = {
        main: [[{ node: "Has Source Downloads?", type: "main", index: 0 }]],
    };

    connections["Has Source Downloads?"] = {
        main: [
            [{ node: "Upload to GCS", type: "main", index: 0 }], // true: downloads succeeded → upload
            [{ node: "SerpApi Search", type: "main", index: 0 }], // false: all failed → SerpApi fallback
        ],
    };

    connections["SerpApi Search"] = {
        main: [[{ node: "Parse SerpApi", type: "main", index: 0 }]],
    };

    connections["Parse SerpApi"] = {
        main: [[{ node: "Has SerpApi Images?", type: "main", index: 0 }]],
    };

    connections["Has SerpApi Images?"] = {
        main: [
            [{ node: "Download SerpApi Image", type: "main", index: 0 }], // true: has SerpApi images → download
            [{ node: "Build Final Article", type: "main", index: 0 }], // false: no images at all → skip
        ],
    };

    connections["Download SerpApi Image"] = {
        main: [[{ node: "Merge SerpApi Data", type: "main", index: 0 }]],
    };

    connections["Merge SerpApi Data"] = {
        main: [[{ node: "Has SerpApi Downloads?", type: "main", index: 0 }]],
    };

    connections["Has SerpApi Downloads?"] = {
        main: [
            [{ node: "Upload to GCS", type: "main", index: 0 }], // true: has binary → upload
            [{ node: "Build Final Article", type: "main", index: 0 }], // false: useOriginalUrl → skip upload
        ],
    };

    connections["Upload to GCS"] = {
        main: [[{ node: "Build Final Article", type: "main", index: 0 }]],
    };

    connections["Build Final Article"] = {
        main: [[{ node: "Post to Website", type: "main", index: 0 }]],
    };

    // ── Build PUT body ──
    const putBody = {
        name: current.name,
        nodes: nodes,
        connections: connections,
        settings: {
            executionOrder: current.settings.executionOrder,
            errorWorkflow: current.settings.errorWorkflow,
            callerPolicy: current.settings.callerPolicy,
        },
        staticData: current.staticData,
    };

    console.log("Total nodes:", nodes.length);
    console.log("Nodes:", nodes.map((n) => n.name).join(", "));

    // Write to file for debugging
    fs.writeFileSync(
        "__n8n_workflow_v3.json",
        JSON.stringify(putBody, null, 2),
    );
    console.log("Wrote workflow to __n8n_workflow_v3.json");

    // Upload
    console.log("\nUploading workflow...");
    const putRes = await api("PUT", "/workflows/" + WORKFLOW_ID, putBody);
    console.log("PUT status:", putRes.status);
    if (putRes.status >= 400) {
        const errBody = JSON.parse(putRes.body);
        console.log("PUT error:", JSON.stringify(errBody).substring(0, 1500));
        return;
    }
    console.log("Workflow uploaded successfully!");

    // Activate
    console.log("\nActivating...");
    const actRes = await api(
        "POST",
        "/workflows/" + WORKFLOW_ID + "/activate",
        {},
    );
    console.log("Activate status:", actRes.status);
    if (actRes.status >= 400) {
        console.log("Activate error:", actRes.body.substring(0, 500));
    } else {
        console.log("DONE! Workflow active with image pipeline.");
    }
}

main().catch((e) => console.error("Fatal:", e));
