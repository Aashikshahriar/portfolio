# Portfolio — Khondakar Ashik Shahriar

Personal academic portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.
Statically exported so it can be hosted directly on GitHub Pages.

## Pages

- `/` — Home: photos, affiliations, education, research interests, publication highlights
- `/publications` — Full publication list (journal articles + conference proceedings)
- `/cv` — Full CV with a downloadable PDF
- `/blog` — Personal blog (posts live in `src/data/blog.ts`)
- `/misc` — Travel / personal photo gallery

Light/dark mode is a manual toggle (top right), persisted in `localStorage`.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

All CV/profile data lives in plain TypeScript objects — no CMS, no database:

- `src/data/profile.ts` — name, bio, education, affiliations, skills, honors, references, social links
- `src/data/publications.ts` — journal articles + conference papers
- `src/data/blog.ts` — blog posts (add new entries to the array)

Photos and the CV PDF live in `public/` (`photo_main.jpg`, `photo_alaska.jpg`, `photo_bungee.jpg`, `cv.pdf`).

**To do:** `src/data/profile.ts` has placeholder (`#`) URLs for LinkedIn and Facebook — replace
them with your real profile links.

## Build

```bash
npm run build
```

Static output is written to `out/`.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys automatically on
every push to `main` via GitHub Actions.

1. Push this repo to GitHub.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it.

**Base path:**

- If your repo is named `<your-username>.github.io` (a user/org page), the site is served from
  the domain root — no changes needed.
- If it's a project repo (e.g. `portfolio`), the site is served from
  `https://<your-username>.github.io/<repo>/`. Set the `NEXT_PUBLIC_BASE_PATH` environment
  variable to `/<repo>` in `.github/workflows/deploy.yml` (see the commented-out example in that
  file) before pushing.
