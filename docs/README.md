# Nebari Superset Pack Documentation

This directory contains the [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) site for the Nebari Superset Pack.

## Prerequisites

- Node.js `>= 22` (enforced by the `engines` field in `package.json`)
- npm (bundled with Node.js)

## Install

```bash
npm ci
```

## Local development

```bash
npm run dev
```

Starts the Astro dev server with hot reload on http://localhost:4321/.

## Production build

```bash
npm run build
```

Emits static files to `docs/dist/`.

## Preview the production build

```bash
npm run preview
```

## Unit tests

```bash
npm test
```

## Link checking

```bash
bash ../scripts/check-links.sh
```

To test with the production base path: `BASE=/superset-pack/ bash ../scripts/check-links.sh`

## Content

Pages live in `src/content/docs/`. Each `.md` or `.mdx` file becomes a page. The sidebar is configured in `astro.config.mjs` under `starlight.sidebar`.

## Updating nebari design tokens

`src/styles/nebari-tokens.css` is copied from the [nebari-design](https://github.com/nebari-dev/nebari-design) repository. To update the primitive color ramps, fetch the latest from the reference pack:

```bash
gh api "repos/nebari-dev/llm-serving-pack/contents/docs/src/styles/nebari-tokens.css?ref=main" \
  --jq '.content' | base64 -d > src/styles/nebari-tokens.css
```

## CI

The [`docs` workflow](../.github/workflows/docs.yml) builds the site and deploys to [Cloudflare Pages](https://pages.cloudflare.com) on every push to `main`. Pull requests get a preview URL posted as a comment.
