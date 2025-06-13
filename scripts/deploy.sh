#!/bin/bash

# Define the paths
SOURCE_DIR="/Users/ShareefJasim/Portfolio/PortfolioSourceCode"
BUILD_DIR="/Users/ShareefJasim/Portfolio/PortfolioSourceCode/build"
DEPLOY_DIR="/Users/ShareefJasim/Portfolio/PortfolioPublicCode"

# Step 1: Build the project (if required)
echo "Building the project..."
cd "$SOURCE_DIR"
npm run build

# Step 2: Navigate to deployment repository and pull latest changes
echo "Navigating to deployment repository..."
cd "$DEPLOY_DIR"

echo "Pulling latest changes from deployment repository..."
git pull origin main

# Step 3: Clear existing files (except .git folder and important files)
echo "Clearing existing deployment files..."
find . -maxdepth 1 -not -name '.' -not -name '.git' -not -name '.gitignore' -not -name 'README.md' -exec rm -rf {} +

# Step 4: Copy the build artifacts to the deployment repository
echo "Copying build artifacts to the deployment repository..."
cp -r "$BUILD_DIR"/* "$DEPLOY_DIR"/

# Step 5: Commit and push the changes to the deployment repository
echo "Deploying the changes..."
cd "$DEPLOY_DIR"
git add .
git commit -m "Deploy updated build - $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

echo "Deployment successful!"