#!/bin/bash
set -e

IMAGE="me-west1-docker.pkg.dev/zapli-gke/zapli-images-telaviv/www:latest"

echo "Building Docker image..."
docker build -t "$IMAGE" .

echo "Pushing image to Artifact Registry..."
docker push "$IMAGE"

echo "Rolling out www deployment..."
kubectl rollout restart deployment/www

echo "Waiting for rollout to complete..."
kubectl rollout status deployment/www

echo "Deploy complete."
