# 🚀 Storybook Deployment Guide

This guide covers multiple deployment options for your Storybook design system.

## 📋 Prerequisites

- GitHub repository: https://github.com/laylaft/my-design-system
- Node.js 18+ installed
- Git configured

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

**Automatic Deployment with GitHub Actions:**

1. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/laylaft/my-design-system
   - Click "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Deploy:**
   ```bash
   # Push your changes to trigger deployment
   git add .
   git commit -m "feat: add Storybook deployment configuration"
   git push origin main
   ```

3. **Access your Storybook:**
   - URL: `https://laylaft.github.io/my-design-system`
   - Deployment happens automatically on every push to main

**Manual Deployment:**
```bash
npm run deploy:github
```

### Option 2: Netlify (Free with Custom Domain)

**Automatic Deployment:**

1. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "New site from Git"
   - Select your repository: `laylaft/my-design-system`
   - Build settings are pre-configured in `netlify.toml`

2. **Deploy:**
   ```bash
   # Push your changes
   git push origin main
   ```

3. **Access your Storybook:**
   - URL: `https://your-site-name.netlify.app`
   - Custom domain available in Netlify dashboard

**Manual Deployment:**
```bash
npm run deploy:netlify
```

### Option 3: Vercel (Free with Custom Domain)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Import your repository
   - Build settings:
     - Build Command: `npm run build-storybook`
     - Output Directory: `storybook-static`

2. **Deploy:**
   ```bash
   git push origin main
   ```

## 🛠️ Available Commands

```bash
# Build Storybook locally
npm run build-storybook

# Preview built Storybook
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy

# Deploy to Netlify (manual)
npm run deploy:netlify

# Clean build artifacts
npm run clean
```

## 🔧 Configuration Files

- **GitHub Actions**: `.github/workflows/deploy-storybook.yml`
- **Netlify**: `netlify.toml`
- **Deployment Script**: `scripts/deploy.sh`

## 📊 Deployment Status

After deployment, you can check status:

- **GitHub Actions**: Repository → Actions tab
- **Netlify**: Netlify dashboard → Deploys
- **Vercel**: Vercel dashboard → Deployments

## 🎯 Recommended Workflow

1. **Development**: Use `npm run storybook` for local development
2. **Testing**: Use `npm run preview` to test production build
3. **Deployment**: Push to main branch for automatic deployment
4. **Monitoring**: Check deployment status in respective platforms

## 🔗 Your Deployed Storybook

Once deployed, your Storybook will be available at:
- **GitHub Pages**: https://laylaft.github.io/my-design-system
- **Netlify**: https://your-site-name.netlify.app
- **Vercel**: https://your-site-name.vercel.app

## 🆘 Troubleshooting

**Build Fails:**
```bash
npm run clean
npm install
npm run build-storybook
```

**Deployment Issues:**
- Check GitHub Actions logs
- Verify repository permissions
- Ensure all dependencies are installed

**Custom Domain:**
- Configure in respective platform settings
- Update DNS records as instructed
