# Nebari Superset Pack Documentation

This directory contains the [Docusaurus 3.5.2](https://docusaurus.io/) site for the Nebari Superset pack.

> **Note:** The site is currently an empty scaffold with a placeholder landing page. Section content will be added in follow-on work.

## Prerequisites

- Node.js `>= 20` (enforced by the `engines` field in `package.json`).

The site is built and tested against Node 20.

## Install

```bash
cd docs
npm install
```

## Local development

```bash
npm start
```

Starts the Docusaurus dev server with hot reload on http://localhost:3000/.

Note: the lunr search index is generated only by `npm run build`. The search box in the dev server will return no results; use a production build to exercise search.

## Production build

```bash
npm run build
```

Emits static files to `docs/build/`. The build step also produces the lunr search index via `docusaurus-lunr-search`.

## Preview the production build

```bash
npm run serve
```

Serves the contents of `docs/build/` locally so you can verify the production output, including search.

## Deployment

The site deploys automatically via GitHub Pages whenever changes land on the `main` branch. The GitHub Actions workflow runs `npm run build` inside `docs/` and publishes the contents of `docs/build/` to the `gh-pages` branch.
