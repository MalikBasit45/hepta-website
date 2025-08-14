# Deployment Guide

This project is configured for deployment on Vercel.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite framework
3. The build command is: `npm run build`
4. Output directory is: `dist`
5. The `vercel.json` file handles SPA routing

## Environment Variables

No environment variables are required for this project.

## Build Output

The build process creates a `dist` folder containing:
- Static HTML files
- CSS bundles
- JavaScript bundles
- Assets (images, fonts, etc.)

## Routing

This is a Single Page Application (SPA) with client-side routing using React Router. The `vercel.json` file includes rewrites to handle all routes properly.
