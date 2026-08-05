# braydenstrong-org

## Purpose

A memorial and public-awareness website for braydenstrong.org — honoring Brayden and raising awareness of
*Naegleria fowleri* (the "brain-eating amoeba") so fewer families go through the same loss.

## How to Run

```bash
npm install       # once
npm run dev       # local dev server at http://localhost:4321
npm run build     # static build → dist/
npm run preview   # serve the built dist/ locally
```

**Stack:** Astro 6 + Tailwind 4 (static output). Versions are pinned to a known-good set (Vite 7) — see the
`overrides` in `package.json`; do not let them float to the rolldown-based Vite 8, which breaks the Tailwind
plugin.

**Editing content:** all site copy lives in `src/data/site.ts`. Personal/memorial content is marked
`PLACEHOLDER` and rendered in a visible placeholder box until real content is dropped in. Awareness copy is
drafted from the CDC pages listed in that file's `cdc` block — re-verify against the current CDC pages before
publishing.

**Brand:** colors are defined as tokens in `src/styles/global.css` (`@theme`). A palette change is a
one-file edit.

## Structure

- `src/pages/` — the 7 pages (contact ships hidden: noindex, not in nav or sitemap)
- `src/components/`, `src/layouts/` — shared shell (Header, Footer, Layout, PageHeader, Placeholder)
- `src/data/site.ts` — all content + placeholders
- `src/styles/global.css` — brand tokens + base styles
- `public/` — favicon, robots.txt, sitemap.xml (og-default.png still to be supplied)
- `docs/SITE-PLAN.md` — the approved plan · `docs/changes/` — Change Records
- `AGENTS.md` — project identity and governance · `PROJECT_STATUS.md` — current phase and next steps

## Deploy

Static-web: build, then `rsync -avz --delete dist/ → /var/www/vhosts/braydenstrong.org/` (Checkpoint 6).
Not deployed yet; repo stays private until launch.
