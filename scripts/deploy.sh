#!/bin/bash

# Define the paths
SOURCE_DIR="/Users/ShareefJasim/Portfolio/PortfolioSourceCode"
BUILD_DIR="/Users/ShareefJasim/Portfolio/PortfolioSourceCode/build"
DEPLOY_DIR="/Users/ShareefJasim/Portfolio/Portfolio"

echo "=== PORTFOLIO DEPLOYMENT SCRIPT ==="
echo "Source Directory: $SOURCE_DIR"
echo "Build Directory: $BUILD_DIR"
echo "Deploy Directory: $DEPLOY_DIR"
echo ""

# 1. SAFETY CHECKS
echo "=== STEP 1: SAFETY CHECKS ==="

# Verify we're starting in the SOURCE directory
echo "Current directory: $(pwd)"
if [[ "$(pwd)" != "$SOURCE_DIR"* ]]; then
    echo "WARNING: Not starting from source directory. Navigating to source..."
    cd "$SOURCE_DIR" || {
        echo "ERROR: Cannot navigate to source directory: $SOURCE_DIR"
        exit 1
    }
fi
echo "✓ In source directory: $(pwd)"

# Verify directories exist
if [ ! -d "$SOURCE_DIR" ]; then
    echo "ERROR: Source directory does not exist: $SOURCE_DIR"
    exit 1
fi
echo "✓ Source directory exists"

if [ ! -d "$DEPLOY_DIR" ]; then
    echo "ERROR: Deploy directory does not exist: $DEPLOY_DIR"
    echo "Please clone your public repository to: $DEPLOY_DIR"
    exit 1
fi
echo "✓ Deploy directory exists"

# Verify deploy directory is a git repository
if [ ! -d "$DEPLOY_DIR/.git" ]; then
    echo "ERROR: Deploy directory is not a git repository: $DEPLOY_DIR"
    echo "Please run: git clone <your-public-repo-url> $DEPLOY_DIR"
    exit 1
fi
echo "✓ Deploy directory is a git repository"

# Verify directories are different
if [ "$SOURCE_DIR" == "$DEPLOY_DIR" ]; then
    echo "ERROR: Source and deploy directories are the same!"
    exit 1
fi
echo "✓ Source and deploy directories are different"
echo ""

# 2. BUILD PHASE
echo "=== STEP 2: BUILD PHASE ==="
echo "Building project in: $(pwd)"
npm run build

# Verify build was successful
if [ ! -d "$BUILD_DIR" ]; then
    echo "ERROR: Build failed - build directory not found: $BUILD_DIR"
    exit 1
fi
echo "✓ Build completed successfully"
echo "Build directory contents:"
ls -la "$BUILD_DIR"
echo ""

# 3. DEPLOYMENT PREPARATION
echo "=== STEP 3: DEPLOYMENT PREPARATION ==="
echo "Navigating to deploy directory: $DEPLOY_DIR"
cd "$DEPLOY_DIR" || {
    echo "ERROR: Cannot navigate to deploy directory: $DEPLOY_DIR"
    exit 1
}

echo "Current directory: $(pwd)"
if [ "$(pwd)" != "$DEPLOY_DIR" ]; then
    echo "ERROR: Failed to navigate to deploy directory!"
    exit 1
fi
echo "✓ Successfully in deploy directory"

echo "Pulling latest changes from remote..."
git pull origin main || git pull origin master || {
    echo "WARNING: Could not pull from remote (this might be expected for new repos)"
}
echo ""

# 4. FILE SYNCHRONIZATION
echo "=== STEP 4: FILE SYNCHRONIZATION ==="
echo "Current directory check: $(pwd)"
if [ "$(pwd)" != "$DEPLOY_DIR" ]; then
    echo "ERROR: Not in deploy directory! Aborting for safety."
    exit 1
fi

echo "Clearing deployment directory contents (keeping git files)..."
# Only remove files/folders, not hidden files like .git
find . -maxdepth 1 -type f -not -name '.git*' -delete
find . -maxdepth 1 -type d -not -name '.' -not -name '.git' -exec rm -rf {} + 2>/dev/null || true

echo "Copying build files from $BUILD_DIR to $(pwd)"
cp -r "$BUILD_DIR"/* . || {
    echo "ERROR: Failed to copy build files"
    exit 1
}

echo "✓ Files copied successfully"
echo "Deploy directory contents:"
ls -la
echo ""

# 5. GIT OPERATIONS
echo "=== STEP 5: GIT OPERATIONS ==="
echo "Current directory: $(pwd)"

echo "Staging changes..."
git add .

echo "Creating commit..."
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Deploy updated build - $TIMESTAMP" || {
    echo "No changes to commit"
}

echo "Pushing to remote repository..."
git push origin main || git push origin master || {
    echo "ERROR: Failed to push to remote repository"
    exit 1
}
echo ""

# 6. VERIFICATION
echo "=== STEP 6: VERIFICATION ==="
echo "✓ Deployment completed successfully!"
echo "Summary:"
echo "  - Built project in: $SOURCE_DIR"
echo "  - Deployed files to: $DEPLOY_DIR"
echo "  - Timestamp: $TIMESTAMP"
echo "  - Files deployed: $(find . -type f | wc -l) files"
echo ""
echo "🎉 Portfolio deployment complete!"