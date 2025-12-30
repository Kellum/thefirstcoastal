# Railway Deployment Guide

This guide walks you through deploying The First Coastal website to Railway.

## Prerequisites

- Railway account (sign up at https://railway.app)
- Git repository pushed to GitHub/GitLab
- Railway CLI (optional, for local deployment)

## Step 1: Create a New Project on Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Authorize Railway to access your GitHub account
5. Select the `thefirstcoastal` repository

## Step 2: Configure Environment Variables

Railway will auto-detect your Next.js app, but you need to add your environment variables:

1. In your Railway project, click on your service
2. Go to the "Variables" tab
3. Add the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=y0gns0g3
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Important:** Do NOT add the `VERCEL_OIDC_TOKEN` - that's Vercel-specific and not needed.

## Step 3: Deploy

Railway will automatically:
- Detect your `railway.toml` configuration
- Install dependencies
- Run `npm run build`
- Start the app with `npm run start`

The deployment will begin automatically when you connect your repo.

## Step 4: Access Your Deployed Site

1. Once deployed, Railway will provide you with a URL
2. It will look like: `your-app-name.up.railway.app`
3. Click on the URL to view your site

## Step 5: Custom Domain (Optional)

To add a custom domain:

1. Go to your service settings
2. Click "Settings" → "Domains"
3. Click "Custom Domain"
4. Enter your domain name
5. Follow the DNS configuration instructions

Railway will provide you with DNS records to add to your domain provider.

## Monitoring & Logs

- **Logs**: Click on your service → "Deployments" → Select a deployment → "View Logs"
- **Metrics**: Available in the service dashboard
- **Build Status**: Shows in real-time during deployment

## Automatic Deployments

Railway automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Railway will detect the push and trigger a new deployment.

## Troubleshooting

### Build Fails

- Check the build logs in Railway dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### App Doesn't Start

- Check that `npm run start` works locally
- Verify `next.config.js` is compatible with Railway
- Check the runtime logs for errors

### Sanity Integration Issues

- Verify all Sanity environment variables are set
- Ensure Sanity CORS settings allow your Railway domain
- Update Sanity Studio allowed origins if needed

## Cost

Railway offers:
- **Hobby Plan**: $5/month for 500 hours
- **Pro Plan**: $20/month with additional resources
- Free trial credits available

## Removing Vercel Deployment

Once you've confirmed Railway is working:

1. Go to your Vercel dashboard
2. Select the project
3. Settings → Delete Project

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Railway Status: https://status.railway.app
