# CHANGE: Add social preview image (og-default.png)

Date: 2026-10-11
Type: feature
ADR: none

## What changed

- public/og-default.png: new — 1200x630 social-share image, cropped from the already-approved
  `public/img/brayden-hero.jpg` (Brayden's homepage hero photo) using sharp's attention-based
  cropping to keep his face centered. Generated on the barn with the project's own bundled
  `sharp` dependency (no new tooling added).

## Why

Operator instruction on card BRAY-4 (2026-10-11 14:50): "use the hero photo for the preview image."
`src/layouts/Layout.astro` has referenced `/og-default.png` as the default `og:image` since the
original skeleton build, but the file never existed, so every link share of the site was previously
missing a preview image.

## Risk

LOW

Static asset addition to an unpublished site; reuses an already-approved photo, no new personal
content. No deploy triggered.

## Verified

- [x] Tests pass — `npm run build` green, all 7 pages generated.
- [x] No regressions observed — `dist/og-default.png` present after build; `og:image` meta tag on
  every page resolves to `https://braydenstrong.org/og-default.png`.
- [x] Behavior matches intent — visually reviewed the crop before committing; face is centered,
  no other people cropped awkwardly into frame.
