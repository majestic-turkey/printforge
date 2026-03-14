## PrintForge

PrintForge is a static Next.js App Router site for browsing 3D printing models and categories.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## GitHub Pages deployment

This repository is configured for GitHub Pages static export.

- `next build` outputs the production site to `out/`
- dynamic routes are pre-rendered with `generateStaticParams()`
- the GitHub Actions build automatically uses the repository name as the Pages base path

To deploy:

1. Push the repository to GitHub.
2. Open the repository settings and go to Pages.
3. Set the source to GitHub Actions.
4. Push to `main` to trigger the deployment workflow.

## Production build

To verify the static export locally:

```bash
npm run build
```

The generated site will be written to `out/`.
