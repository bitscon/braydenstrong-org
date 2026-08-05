# CHANGE: Wire Brayden hero photo into homepage

Date: 2026-08-05
Type: feature
ADR: none

## What changed

- img/received_2213015988796096.jpeg: operator-supplied original photo of Brayden (3600x2400, 638KB),
  kept in-repo as the archival source. `img/` = family originals; `public/img/` = web-optimized served copies.
- public/img/brayden-hero.jpg: web-optimized derivative generated with sharp — resized to 1600x1067,
  mozjpeg q80, 132KB (down from the 638KB / 3600px original).
- src/pages/index.astro: replaced the "A photo of Brayden goes here" placeholder card in the story-hook
  section with the real photo — `object-cover object-[62%_center]` in the existing 4:3 card so his face
  stays centered; intrinsic width/height set to avoid layout shift.

## Why

The operator supplied the first real memorial photo; it fills the homepage's purpose-built photo slot and
gives the site the bright, happy face it was designed around.

## Risk

LOW

Static presentation change in a private repo; reversible. Nothing deployed. Serves an optimized image, not
the raw original.

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — homepage references `/img/brayden-hero.jpg`; the placeholder text is gone
  from `dist/index.html`; `dist/img/brayden-hero.jpg` present (135KB).
- [x] Behavior matches intent — rendered the exact 4:3 object-cover crop (62% horizontal) and confirmed
  Brayden's face and smile are well-framed with no awkward cut. Not eyeballed in a live browser (the
  connected Chrome cannot reach the host's localhost); framing confirmed by rendering the crop.
