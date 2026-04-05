# IRS Online Design Guide — GitHub Pages Edition

This repository has been converted from a server-rendered Express/Webpack app to a **static site** hostable on GitHub Pages.

## What Changed

| Original | GitHub Pages Version |
|---|---|
| Express SSR server | Static files only |
| Custom Webpack config | **Vite** (fast modern bundler) |
| `BrowserRouter` | **`HashRouter`** (works without a server) |
| `ReactDOM.hydrate` | `ReactDOM.render` (client-side only) |
| `~ols-ui` webpack alias | Vite alias → `vendor/ols-ui` |

## Project Structure

```
online-design-guide/
├── .github/workflows/deploy.yml   ← Auto-deploy to GitHub Pages
├── odg-app/
│   ├── vite.config.js             ← NEW: Vite build config
│   ├── index.html                 ← NEW: Vite entry HTML
│   ├── src/client/index.jsx       ← NEW: Client entry (HashRouter)
│   ├── vendor/ols-ui/             ← Pre-built component library
│   └── package.json               ← Updated with Vite
└── ols-ui/                        ← UI component library source
```

## Deploy to GitHub Pages

### Automatic (GitHub Actions)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** and select the **`gh-pages`** branch
3. Every push to `main` auto-builds and deploys

Your site: `https://<username>.github.io/<repo-name>/`

### Manual

```bash
cd odg-app
npm install --legacy-peer-deps
npm run build        # outputs to odg-app/dist/
npm run deploy       # pushes dist/ to gh-pages branch
```

## Local Dev

```bash
cd odg-app
npm install --legacy-peer-deps
npm run dev          # http://localhost:5173
```

## Configuration

If your repo is at `https://username.github.io/my-repo/`, set in `odg-app/vite.config.js`:

```js
base: '/my-repo/',
```

For a root domain (`https://username.github.io/`), use `base: '/'`.

## Notes

- URLs use `#` hashes (e.g. `/#/getting-started`) — required for static hosting
- Node.js 18+ required
