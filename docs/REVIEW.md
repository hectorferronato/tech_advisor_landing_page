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

## Deployment

After merge: Settings → Pages → Deploy from a branch → main → /(root) → Save. No build workflow or backend required. Pages has not been enabled by this change.

## Before launch

- Configure hosted application URLs or a verified contact email in `assets/config.js`.
- Add Hector's actual LinkedIn portrait and replace the two illustrations with licensed stock photos. Asset downloads were blocked by the current environment network policy; no substitute person or fabricated photo is used.
- Review pricing, scope, availability, and deployed navigation.

Cloud startup instructions and network-domain additions were saved separately in the environment configuration draft; review/save and publish there to activate them.
