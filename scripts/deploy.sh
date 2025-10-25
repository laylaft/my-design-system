#!/bin/bash

# Deploy Storybook to GitHub Pages
echo "🚀 Deploying Storybook to GitHub Pages..."

# Build Storybook
echo "📦 Building Storybook..."
npm run build-storybook

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Your Storybook will be available at:"
    echo "   https://laylaft.github.io/my-design-system"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push this commit to trigger GitHub Actions"
    echo "2. Go to your repository Settings > Pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. Wait for deployment to complete"
else
    echo "❌ Build failed!"
    exit 1
fi
