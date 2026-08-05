# CHANGE: Build Astro site skeleton + CDC awareness pages

Date: 2026-08-05
Type: feature
ADR: none

## What changed

- package.json, astro.config.mjs, tsconfig.json, .gitignore: new — Astro 6 + Tailwind 4 scaffold,
  pinned to the saltydawg-proven versions (astro 6.4.7 / vite 7.3.5 / tailwindcss 4.3.1; vite override
  keeps it off the rolldown build that breaks @tailwindcss/vite).
- src/styles/global.css: new — BraydenStrong Orange + Blue brand tokens (proposed hexes, WCAG-AA verified),
  buttons, cards, prose, placeholder marker, motion-safe reveal.
- src/data/site.ts: new — all site copy in one file; personal/memorial content marked as PLACEHOLDER,
  awareness copy drafted from the current CDC pages, shop in a "coming soon" state (store is new/empty).
- src/layouts/Layout.astro, src/components/{Header,Footer,PageHeader,Placeholder}.astro: new — shared shell,
  nav that omits Contact, honesty status note in footer, per-page SEO/OG, noindex support.
- src/pages/{index,brayden,about-naegleria-fowleri,prevention,how-to-help,remember,contact}.astro: new —
  all 7 pages. Contact ships hidden (noindex, not in nav, not in sitemap).
- public/{favicon.svg,robots.txt,sitemap.xml}: new — sitemap omits /contact; robots disallows it too.

## Why

Phase 3 build: stand up the approved site skeleton and draft the two CDC-sourced awareness pages for
operator review, leaving operator-authored memorial content and the store link as placeholders.

## Risk

LOW

Static site in a private repo; nothing deployed and no live service touched. Awareness copy is drafted for
review and must be re-checked against the current CDC pages at publish; palette hexes are proposed, not final.

## Verified

- [x] Tests pass — `npm run build` green; all 7 pages generated.
- [x] No regressions observed — new project, no prior code; contact confirmed noindex + absent from
  sitemap and nav via built-output grep.
- [x] Behavior matches intent — CDC facts present on awareness pages (source cited, reviewed 2026-08-05);
  full palette clears WCAG AA (computed). Not visually eyeballed in-browser (connected Chrome cannot reach
  the host's localhost); operator to review the look and approve the proposed palette.
