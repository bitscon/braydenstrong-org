# CHANGE: Populate Brayden story-page photo gallery

Date: 2026-08-05
Type: feature
ADR: none

## What changed

- img/IMG_5374.jpg, img/IMG_5519.jpg: two more operator-supplied originals of Brayden (boat on the water;
  car close-up), archived in-repo.
- public/img/brayden-boat.jpg: optimized derivative of IMG_5374 (1000x1443, mozjpeg q80, 174KB).
- public/img/brayden-car.jpg: optimized derivative of IMG_5519 — small source (418x490), re-encoded to
  24KB, not enlarged.
- src/data/site.ts: filled `brayden.photos` (was empty) with three entries — the homepage hero shot plus
  the two new photos, each with descriptive alt text. This turns the empty gallery placeholder on
  /brayden into a populated three-photo grid.

## Why

The operator supplied two more photos and asked to use them on the site; the story page's photo gallery is
the built-for-it home, and it was still showing a placeholder.

## Risk

LOW

Static presentation change in a private repo; reversible. Nothing deployed. Car photo is low-resolution
(418px) so it is only shown at thumbnail size — never enlarged.

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — /brayden references all three optimized images; the gallery placeholder is
  gone from `dist/brayden/index.html`; all three files present in `dist/img/`.
- [x] Behavior matches intent — rendered the center square crop each thumbnail will show; Brayden's face
  and smile are well-framed in both new photos. Not eyeballed in a live browser (host localhost
  unreachable from the connected Chrome); framing confirmed by rendering the crops.
