# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

## Manual Build & Deploy

### Build the Project
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Custom Domain

1. Add custom domain in Vercel dashboard
2. Update DNS records
3. Update `next.config.js` if needed

## Performance Optimization

- Images are automatically optimized by Next.js
- CSS is minified and optimized
- JavaScript is bundled and minified
- Static assets are cached

## Analytics Setup

1. Create Google Analytics account
2. Add tracking ID to `layout.js`
3. Verify tracking in production 