# PROJECT STATUS

## Current State
Site skeleton BUILT (Astro 6 + Tailwind 4). All 7 pages generate; `npm run build` is green. The two
awareness pages (About the Amoeba, Prevention & Warning Signs) are drafted from the current CDC
*Naegleria fowleri* pages and cite the source. Contact/Press ships hidden (noindex, not in nav, not in
sitemap). Photos are in (optimized): Brayden's homepage hero + a three-photo gallery on his story page. The header
logo is in (emblem + wordmark). The shop is LIVE — "How to Help" links out to the Printful storefront
(braydenstrong.printful.me). Still placeholder: the written memorial content (story, dates) and the contact
email. Palette hexes are proposed and WCAG-AA verified. The site is NOT deployed yet — deploy method is
rsync (per AGENTS.md/README); repo stays private until launch.

## Completed
- [ project scaffold + registered static-web in AGENT_OS.md Section 17 ]
- [ git + private GitHub remote bitscon/braydenstrong-org ]
- [ Kanboard board created (barn, project id=7) ]
- [ Phase 2: site plan authored + operator-approved (docs/SITE-PLAN.md) ]
- [ Phase 3: Astro skeleton + 7 pages + CDC awareness drafts built and build-verified ]
- [ Palette approved by operator (bright glossy tangerine + royal blue), WCAG AA verified ]

## Next Steps
- Operator: supply the written memorial content (Brayden's story, dates) and any more photos, and confirm
  the contact email — photos, header logo, the live shop, and the social preview image are done; the
  written content remains placeholder.
- Eyeball the built site in a real browser (not done in any session yet).
- Deploy to braydenstrong.org via rsync when content is ready (not deployed yet).

## How verified (Phase 3, 2026-08-05; re-checked 2026-10-11)
- `npm run build` green; 7 pages built (re-run 2026-10-11 on Node 24.19.0).
- Built-output checks: contact carries noindex and is the only page that does; sitemap and homepage nav
  both exclude /contact; CDC facts present on the awareness pages; `og:image` resolves to
  `og-default.png` on every page and the file is present in `dist/` after build.
- WCAG AA contrast computed for every key color pair (all pass).
- CDC awareness copy re-verified against the live CDC pages on 2026-10-11 (direct fetch, not cached
  knowledge): one drift found and fixed — "Loss of balance" removed from the later-symptoms list to match
  CDC's current dedicated signs-and-symptoms page. Everything else (case counts, transmission facts,
  timeline, prevention steps, sinus-rinse guidance) still matches. See
  docs/changes/CHANGE-2026-10-11-013-cdc-reverify.md.
- Social preview image supplied 2026-10-11 (operator's instruction: use the hero photo) — cropped from
  the approved `brayden-hero.jpg` to a 1200x630 og:image. See
  docs/changes/CHANGE-2026-10-11-014-social-preview-image.md.
- Not visually eyeballed in a browser in any session (no browser reachable from either agent environment
  used so far).
