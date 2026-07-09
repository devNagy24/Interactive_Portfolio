# Interactive Developer Portfolio

A deployable Vite + React portfolio I've built for myself.

## Edit Your Content

Most personal content lives in `src/content.js`:

- `profile.name`
- `profile.email`
- `profile.github`
- `profile.linkedin`
- `profile.resumeUrl`
- `experience`
- `projects`
- `skillGroups`

Replace the draft project cards with real case studies when you are ready.

## Local Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

The production build will be created in `dist/`.

## GitHub Pages Hosting

This project is configured with `base: "./"` in `vite.config.js`, which works well for GitHub Pages project sites.

Automatic deployment is included at `.github/workflows/deploy.yml`.

1. Create a GitHub repository for the portfolio.
2. Push this folder to the repository.
3. In the repo settings, set Pages to use **GitHub Actions**.
4. Push to `main`; the workflow will build and publish `dist/`.

For a user site named `your-github.github.io`, this config still works. For a project site named something like `portfolio`, the relative Vite base also works.
