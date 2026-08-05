# PROJECT STATUS

## Current State
Site skeleton BUILT (Astro 6 + Tailwind 4). All 7 pages generate; `npm run build` is green. The two
awareness pages (About the Amoeba, Prevention & Warning Signs) are drafted from the current CDC
*Naegleria fowleri* pages and cite the source. Contact/Press ships hidden (noindex, not in nav, not in
sitemap). Photos are in (optimized): Brayden's homepage hero + a three-photo gallery on his story page. The header
logo is in (emblem + wordmark). The shop is LIVE — "How to Help" links out to the Printful storefront
(braydenstrong.printful.me). Still placeholder: the written memorial content (story, dates) and the contact
email. Palette hexes are proposed and WCAG-AA verified. The site is deployed to prod (braydenstrong.org)
via Plesk git+build; repo stays private.

## Completed
- [ project scaffold + registered static-web in AGENT_OS.md Section 17 ]
- [ git + private GitHub remote bitscon/braydenstrong-org ]
- [ Kanboard board created (barn, project id=7) ]
- [ Phase 2: site plan authored + operator-approved (docs/SITE-PLAN.md) ]
- [ Phase 3: Astro skeleton + 7 pages + CDC awareness drafts built and build-verified ]
- [ Palette approved by operator (bright glossy tangerine + royal blue), WCAG AA verified ]

## Next Steps
- Operator: supply the written memorial content (Brayden's story, dates) and any more photos, and confirm
  the contact email — photos, header logo, and the live shop are done; the written content remains placeholder.
- Re-verify awareness copy against the current CDC pages at publish time.
- Push to the private remote (deferred), then deploy to braydenstrong.org via rsync when content is ready.

## How verified (Phase 3)
- `npm run build` green; 7 pages built.
- Built-output checks: contact carries noindex and is the only page that does; sitemap and homepage nav
  both exclude /contact; CDC facts present on the awareness pages.
- WCAG AA contrast computed for every key color pair (all pass).
- Not visually eyeballed in a browser this session (the connected Chrome could not reach the host's localhost).
