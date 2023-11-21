# Define the paths
$BUILD_DIR = "D:\portfolio\WebsitePortfolio\Website\build" # Update this path
$DEPLOY_DIR = "D:\portfolio\WebsitePortfolio\Website\build_deploy\Portfolio" # Update this path

# Step 1: Build the project (if required)
Write-Host "Building the project..."
Set-Location $BUILD_DIR
npm run build

# Step 2: Copy the build artifacts to the deployment repository
Write-Host "Copying build artifacts to the deployment repository..."
Copy-Item -Path "$BUILD_DIR\*" -Destination $DEPLOY_DIR -Recurse -Force

# Step 3: Commit and push the changes to the deployment repository
Write-Host "Deploying the changes..."
Set-Location $DEPLOY_DIR
git add .
git commit -m "Deploy updated build"
git push origin main

Write-Host "Deployment successful!"
