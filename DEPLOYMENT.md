# Deployment Guide for Hepta Website

## Vercel Deployment

### Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)

### Deployment Steps

1. **Build Locally (Optional)**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```
   Or connect your GitHub repository to Vercel for automatic deployments.

### Configuration Files

- `vercel.json` - Vercel-specific configuration with SPA fallback
- `public/_redirects` - Additional fallback for client-side routing
- `vite.config.ts` - Optimized for production builds

### Key Features

✅ **SPA Fallback** - All routes redirect to index.html for client-side routing
✅ **Asset Optimization** - Manual chunk splitting for better performance
✅ **Security Headers** - XSS protection, content type options, etc.
✅ **Caching** - Static assets cached for 1 year
✅ **TypeScript** - Full type checking during build

### Troubleshooting

**Blank Page on Reload**
- Ensure `vercel.json` rewrites are configured correctly
- Check that all routes are handled by React Router

**404 Errors**
- Verify `public/_redirects` file is present
- Check that `vercel.json` has proper rewrite rules

**Build Failures**
- Run `npm run build:check` to verify TypeScript
- Check for missing dependencies in `package.json`

### Performance Optimizations

- Manual chunk splitting reduces initial bundle size
- DNS prefetch for external resources
- Optimized asset caching
- Disabled source maps in production

### Environment Variables

If needed, add environment variables in Vercel dashboard:
- `VITE_API_URL` - API endpoint
- `VITE_ANALYTICS_ID` - Analytics tracking

### Monitoring

After deployment, monitor:
- Build logs in Vercel dashboard
- Performance metrics
- Error tracking
- Analytics data 