# Cloudflare Pages Configuration

## Build Settings for Cloudflare Pages

**Build command:** `npm run build`  
**Build output directory:** `out`  
**Root directory:** `/` (project root)  
**Node.js version:** `18.x` or `20.x`

## Environment Variables (if needed)
No environment variables required for this static site.

## Important Notes

1. This project uses Next.js with static export (`output: 'export'`)
2. The build output goes to the `out/` directory
3. Make sure to set the build command to `npm run build` in Cloudflare Pages dashboard
4. Set the build output directory to `out` in Cloudflare Pages dashboard

## Manual Setup Steps for Cloudflare Pages:

1. Go to Cloudflare Pages dashboard
2. Connect your GitHub repository
3. Set build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy

The site should be accessible at your assigned cloudflare.pages.dev domain.