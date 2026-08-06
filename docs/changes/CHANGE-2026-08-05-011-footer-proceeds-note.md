# CHANGE: Footer note — proceeds fund awareness

Date: 2026-08-05
Type: docs
ADR: none

## What changed

- src/data/site.ts (footer.statusNote): reworded the "About this site" note to state that the family keeps
  none of the proceeds and that what the shop makes goes back into spreading awareness or is donated to
  another amoeba-awareness non-profit. Kept the honesty line intact (not a registered non-profit; purchases
  are ordinary sales and not tax-deductible).

## Why

Operator wants the footer to make clear the money is not kept by the family but funds awareness (or is
donated to an amoeba-awareness non-profit).

## Risk

LOW

Copy only. Honesty guardrail preserved — still explicitly not a non-profit and not tax-deductible, so no
implication of a charitable/tax-deductible donation by the buyer. Recipient kept general (no specific
foundation named).

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — new note renders in the global footer across pages.
- [x] Behavior matches intent — states proceeds are not kept and fund awareness/donation, without claiming
  non-profit status or tax deductibility. Not eyeballed live (operator reviews on deploy).
