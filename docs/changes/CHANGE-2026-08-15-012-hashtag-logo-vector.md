# CHANGE: Hashtag BraydenStrong logo, vectorised

Date: 2026-08-15
Type: feature
ADR: none

## What changed

- print/hashtag/: new vertical logo lockup reading `#BraydenStrong` instead of `BraydenStrong`, in four
  colourways (`white` = white art + colour wordmark for dark garments, `onlight` = black art + colour
  wordmark, `allwhite` and `allblack` = single-colour screen print).
- print/hashtag/*.svg: each colourway as a resolution-independent SVG. All artwork is outlined paths —
  no font file is needed to open, edit, or print them.
- print/hashtag/*-300dpi.png: each colourway rasterised at 3300 x 4564 px (11 x 15.2 in at 300 DPI),
  matching the canvas of the existing print masters.
- print/: the four pre-existing 300 DPI masters are now tracked in git; they had been sitting untracked.

## Why

Operator asked for the wordmark to read `#BraydenStrong` so the mark doubles as the awareness hashtag,
and asked for an SVG so the logo is no longer trapped in raster.

## Risk

LOW

New files only. No existing asset was overwritten and no site source, template, or deployed page changed.

## Verified

- [x] Tests pass — n/a for the change surface (static-web, and no site source touched). The project's
  `npm run build` gate could NOT be executed: the barn's Node is v18.19.1 and the pinned Astro requires
  `>=22.12.0`. Reported to the operator as a standing environment blocker, not waived. The change contains
  no site source, so the build has no surface to regress against.
- [x] No regressions observed — the four original `print/*.png` masters are byte-unchanged; new work
  lands entirely under `print/hashtag/`.
- [x] Behavior matches intent — verified by measurement, not inspection:
  - Wordmark typeface identified as **Lato Bold** by per-glyph pixel comparison across 28 candidate
    fonts (mean glyph IoU 0.933; next best 0.895). The `#` is set in the same font and weight.
  - Brand colours sampled from the original art: blue `#1F6FD0`, orange `#F58220`. The `#` takes the blue.
  - Bird-and-rider artwork vectorised from the 300 DPI master; traced result matches the original at
    **98.8%** pixel overlap (395,954 vs 396,013 ink pixels).
  - Lockup width and canvas are unchanged from the originals. Because the `#` adds 8% to the wordmark
    width, the type sits ~12% smaller than before so the mark keeps its original footprint and margins.
    Operator confirmed this trade on 2026-08-15.
  - All four colourways rendered and visually checked on both light and dark backgrounds.

## Known gaps (registered, not fixed here)

- Commit `c8ccb1d` (dark-garment logo variants, 2026-08-15) shipped without a Change Record and without
  the conventional commit prefix. Not retro-fixed here — it would need an operator decision.
- `public/img/brayden-emblem.png` remains untracked; its tracking status is still undecided.
