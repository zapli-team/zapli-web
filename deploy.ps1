$ErrorActionPreference = "Stop"

$Image = "me-west1-docker.pkg.dev/zapli-gke/zapli-images-telaviv/www:latest"

Write-Host "Building Docker image..."
docker build -t $Image .

Write-Host "Pushing image to Artifact Registry..."
docker push $Image

Write-Host "Rolling out www deployment..."
kubectl rollout restart deployment/www

Write-Host "Waiting for rollout to complete..."
kubectl rollout status deployment/www

Write-Host "Deploy complete."
