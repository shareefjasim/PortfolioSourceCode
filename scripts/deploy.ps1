# Define the paths
$SOURCE_DIR = "/Users/ShareefJasim/Portfolio/PortfolioSourceCode"
$BUILD_DIR = "/Users/ShareefJasim/Portfolio/PortfolioSourceCode/build"  # Assuming build folder is in source
$DEPLOY_DIR = "/Users/ShareefJasim/Portfolio/PortfolioPublicCode"

# Step 1: Build the project (if required)
Write-Host "Building the project..."
Set-Location $SOURCE_DIR
npm run build

# Step 2: Navigate to deployment repository and pull latest changes
Write-Host "Navigating to deployment repository..."
Set-Location $DEPLOY_DIR

Write-Host "Pulling latest changes from deployment repository..."
git pull origin main

# Step 3: Clear existing files (except .git folder and important files)
Write-Host "Clearing existing deployment files..."
Get-ChildItem -Path $DEPLOY_DIR -Exclude ".git", ".gitignore", "README.md" | Remove-Item -Recurse -Force

# Step 4: Copy the build artifacts to the deployment repository
Write-Host "Copying build artifacts to the deployment repository..."
Copy-Item -Path "$BUILD_DIR\*" -Destination $DEPLOY_DIR -Recurse -Force

# Step 5: Commit and push the changes to the deployment repository
Write-Host "Deploying the changes..."
Set-Location $DEPLOY_DIR
git add .
git commit -m "Deploy updated build - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main

Write-Host "Deployment successful!"