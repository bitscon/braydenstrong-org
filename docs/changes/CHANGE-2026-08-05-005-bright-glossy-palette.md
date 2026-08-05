# CHANGE: Brighten palette + add glossy buttons/band

Date: 2026-08-05
Type: refactor
ADR: none

## What changed

- src/styles/global.css: brightened brand tokens per operator direction — orange now hot tangerine
  (#ff7a1f) with a gloss highlight (#ff9440); blue now bright royal (#1f6fd0); heading blue lifted from
  dark navy to #1a5bb0. Buttons given gradient gloss + defined edge; added .band-bright and .accent-bar;
  hairline (--color-line) strengthened so lines read crisp, not blurred.
- src/pages/index.astro: the "one thing to remember" band swapped from dark navy to the bright glossy
  blue band with an orange accent bar (no more heavy/somber block).
- src/layouts/Layout.astro: theme-color updated to the bright blue (#1f6fd0).
- public/favicon.svg: recolored to the bright blue + tangerine.

## Why

Operator feedback: the first palette read too dark/somber; Brayden was a happy boy and the site should feel
bright, bold, and shiny with colors and lines that pop.

## Risk

LOW

Presentation only; no content or structure change. Body text stays dark ink for legibility.

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — all 7 pages rebuild; band/buttons render from tokens.
- [x] Behavior matches intent — full palette re-checked: all 15 key color pairs (incl. every button
  gradient stop where text sits) clear WCAG AA. Not eyeballed in-browser (host localhost unreachable here).
