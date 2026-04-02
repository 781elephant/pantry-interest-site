# Pantry Interest Website

A GitHub-ready React landing page for gathering indication of interest across multiple cities.

## Cities included
- Dubai
- London
- New York
- Miami
- West Palm
- Abu Dhabi
- Paris

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy options
### Option 1: Vercel
- Push this repo to GitHub
- Import the repo into Vercel
- Deploy

### Option 2: Netlify
- Push this repo to GitHub
- Import the repo into Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages
If deploying under a repo subpath, change `base` in `vite.config.js` from `/` to `/<your-repo-name>/`

Then run:
```bash
npm install
npm run build
npm run deploy
```