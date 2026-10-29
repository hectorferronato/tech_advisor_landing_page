## Summary

Create a three-page static website for Hector Ferronato's independent advisory practice, with Founder Build Sprint ($2,500 / three weeks / up to eight advisor hours) and AI Product & Technical Advisory (from $2,000/month / up to four advisor hours). Copy reflects programming since 2009, full-stack experience, and building businesses since 2022.

Includes responsive editorial styling, keyboard-operable FAQs, service scope and boundaries, configurable application links with an honest LinkedIn/email fallback, metadata, social image, favicon, optional analytics, and GitHub Pages-compatible relative paths.

## Files

- `index.html`, `founder-build-sprint.html`, `technical-advisory.html`
- `assets/`: shared styles, client script, public configuration, favicon, social image, two original product illustrations
- `.nojekyll`, `scripts/check.py`, expanded `README.md`

## Validation

- Static checker: three pages and 49 local links/assets pass; headings, fragments, metadata, image alt attributes checked.
- Node syntax checks pass for both scripts.
- Chromium: nine page renders at 375, 768, and 1440 pixels under `/tech_advisor_landing_page/`; no overflow, broken images, HTTP errors, or JavaScript errors.
- Verified keyboard FAQ interaction, LinkedIn fallback, and independent hosted form configurations.
- Inspected desktop and mobile screenshots.
- Offline browser rerun: zero external page requests; verified local photo replacement and rejection of cross-origin photo/analytics URLs. Local SVG assets served as photo-loading fixtures; supplied photos are not included.

## Deployment

After merge: Settings → Pages → Deploy from a branch → main → /(root) → Save. No build workflow or backend required. Pages has not been enabled by this change.

## Contact and optional photography

- LinkedIn is the working contact fallback. Hosted application URLs and email are optional configuration.
- The design uses local illustrations and a monogram. Local-only photo slots are ready for the supplied headshot, building photo, and advisory photo. The inline chat images were not exposed as files in the execution workspace, so the photographs are not included in this commit.
- No external API, stock-photo request, LinkedIn download, or environment change is required.
- Review pricing, scope, availability, and deployed navigation.

## Delivery

The user handled the initial PR. Further changes are committed directly on the existing branch, without creating another PR. This offline task does not fetch, push, or call GitHub APIs.
