# مجتبی حسینی — personal profile

A single-page personal profile site, built with Astro as a fully static
site (no backend, no database, no client-side JavaScript). Typography
(self-hosted Vazirmatn) carries the design.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

This starts a dev server at `http://localhost:4321`.

## 3. Build for production

```bash
npm run build
```

Static output is written to `dist/`.

## 4. Preview the production build

```bash
npm run preview
```

## 5. Deploy to GitHub Pages

This project already includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and deploys automatically.

**Before your first deploy**, open `astro.config.mjs` and:

- set `site` → `https://<your-github-username>.github.io`
- uncomment `base` and set it → `/<your-repo-name>` (leave it commented
  out only if your repo is named exactly
  `<your-github-username>.github.io`)

Then:

1. Push this project to a GitHub repository, on the `main` branch.
2. On GitHub, go to your repository's **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. Push a commit (or re-run the workflow from the **Actions** tab). The
   workflow builds the site and publishes it automatically.
5. Your site will be live at the `site` + `base` URL you configured
   above.

Every future push to `main` redeploys automatically.

## Project structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── SocialLink.astro   # one social-link item
│   ├── data/
│   │   └── social-links.ts    # edit links here — nothing else
│   ├── layouts/
│   │   └── BaseLayout.astro   # <html>, <head>, SEO, font imports
│   ├── pages/
│   │   └── index.astro        # the only page, currently
│   └── styles/
│       └── global.css         # design tokens, reset, layout, motion
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Editing content

- **Name / bio**: edit the `title` and `description` constants at the
  top of `src/pages/index.astro`.
- **Social links**: edit the array in `src/data/social-links.ts`. The
  page re-renders every entry automatically — no markup changes
  needed.
- **Colors / spacing / type scale**: all defined as CSS custom
  properties at the top of `src/styles/global.css`.

## Adding pages later

Any new `.astro` file under `src/pages/` automatically becomes a new
route (e.g. `src/pages/about.astro` → `/about`). Wrap it in
`BaseLayout` to keep the same fonts, SEO setup, and `<html dir="rtl">`
shell. If pages start sharing more structure, factor a second layout
out of `BaseLayout` rather than duplicating the `<head>`.
