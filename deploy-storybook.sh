#!/bin/bash

# 🚀 Deploy Storybook to Vercel
# Usage: ./deploy-storybook.sh

set -e

echo "🎨 Deploying Storybook to Vercel..."
echo "=================================="

# Step 1: Clean and build Storybook
echo "📦 Building Storybook..."
rm -rf storybook-static
npm run build-storybook

# Step 2: Check if user is logged in to Vercel
echo "🔐 Checking Vercel authentication..."
if ! npx vercel whoami > /dev/null 2>&1; then
    echo "❌ Not logged in to Vercel. Please run:"
    echo "   npx vercel login"
    echo "   Then run this script again."
    exit 1
fi

echo "✅ Authenticated with Vercel"

# Step 3: Deploy to Vercel
echo "🚀 Deploying to Vercel..."
DEPLOY_URL=$(npx vercel --prod --yes)

# Step 4: Display results
echo "=================================="
echo "✅ Storybook deployed successfully!"
echo "🌐 URL: $DEPLOY_URL"
echo "=================================="

echo "📋 Next steps:"
echo "1. Visit the URL to verify deployment"
echo "2. Share the URL with your team"
echo "3. To redeploy: run this script again"
echo ""
echo "💡 Pro tip: Bookmark the URL for easy access!"