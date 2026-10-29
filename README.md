# Hector Ferronato — independent technical advisory

A responsive static marketing site for Founder Build Sprint and Technical Advisor. Programming since 2009, full-stack experience, and building businesses since 2022. No framework, build, backend, database, or runtime dependencies.

## Local development

Use the existing checkout; a separate worktree is unnecessary. With Python 3 installed:

```sh
cd /workspace/tech_advisor_landing_page
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the local server in your own development environment. All paths are relative and support the GitHub Pages project subdirectory. Run `python3 scripts/check.py` to check local links, assets, fragment destinations, headings, and metadata. Run `node --check assets/site.js` and `node --check assets/config.js` if Node is available. No installation is required.

## Architecture and editing

- `index.html`: exactly two main sections — a large, unboxed name-led hero and services — followed by a compact contact footer. Professional credibility sits in the hero.
- `founder-build-sprint.html`, `technical-advisory.html`: detailed service pages.
- `assets/style.css`: shared responsive design; the existing charcoal palette, dominant sans-serif name typography, compact mobile hierarchy, full-width service photos, and reduced-motion support.
- `assets/config.js`: public application URLs, contact email, LinkedIn fallback, local photo paths, availability, optional local analytics.
- `assets/site.js`: progressive enhancement of working static links. Without JavaScript, LinkedIn remains available.
- `assets/build.svg`, `assets/advisory.svg`: legacy assets, unused by the website.
- `.nojekyll`: bypasses Jekyll.

Edit prices and engagement details in the homepage service cards and corresponding service pages together. Keep the detail-page scope statements in sync when changing an engagement. Current offers are below; update the visible prices, hour limits, SEO/Open Graph descriptions, and this documentation together. The static checker rejects old prices and hour limits. Availability configuration is reserved in `assets/config.js` for any future availability label. Shared header/footer markup is intentionally duplicated across only three pages; update all three when changing navigation or contact wording.

## Current offers

| Service | Price | Advisor time | Structure |
| --- | --- | --- | --- |
| Founder Build Sprint | $3,000 / 3-week sprint | Up to 8 hours total | One-time teaching and founder-led building; renewable by agreement |
| Technical Advisor | $2,000 / month | Up to 4 hours per month | Month-to-month technical judgment, reviews, recommendations, and direct-message access |

The founder does the building in a sprint. Advisory excludes full implementation and on-call CTO work. The detailed scope and no-guarantee boundaries remain on the existing service pages. There are no FAQ blocks in the current site.

## Applications and contact

Set `buildApplicationUrl` and `advisoryApplicationUrl` separately to full HTTPS hosted form URLs, for example Tally. Blank or invalid URLs fall back to your verified `contactEmail`, if supplied, otherwise your LinkedIn profile. The footer Get in touch button uses the same email/LinkedIn fallback. No fake form is shown and this site collects no responses. Configured form buttons become “Apply for a Build Sprint” and “Request advisory.”

Recommended hosted form fields: name, email, company, optional website, service, current stage, primary challenge, desired outcome, budget, and timeline. Configure appropriate privacy disclosures and response handling on the form host. Never add secrets to this public repository.

## Local photography

All supplied photos are included directly in HTML, so they render without JavaScript:

| Asset | Usage |
| --- | --- |
| `assets/founder-build-sprint.jpg` | Founder Build Sprint panel and detail page |
| `assets/technical-advisory.jpg` | Technical Advisor panel and detail page |
| `assets/hector profile photo.jpeg` | Compact headshot beside the hero summary |

Matching `buildImageUrl` and `advisoryImageUrl` defaults are in `assets/config.js`. Optional same-origin overrides can be configured there. The default paths use the actual uploaded filenames. `portraitUrl` matches the uploaded headshot; HTML and configuration URL-encode the spaces in its filename. The headshot is 128px on desktop, 116px on tablet, and 72px on mobile. Both service cards use edge-to-edge 16:10 photo areas, with individual positions chosen to keep faces visible. The detail-page photos preserve their existing proportions.

The service scenes are AI-generated illustrations, not documentary photos of client engagements. Alt text states this. Framing uses `object-fit: cover` with individual positions, preserving face visibility. Both photographs have been visually checked on desktop and mobile. The old SVG illustrations are unused.

Run `python3 scripts/check.py` after replacing an image: it verifies both distinct static JPG references and that rendered/configured assets exist.

## GitHub Pages deployment

The existing GitHub Pages publishing setup is unchanged. After reviewing and approving the branch, the approved files can go to the deployment branch. To confirm or configure branch-based publishing:

1. Go to the repository **Settings → Pages**.
2. Under Build and deployment choose **Deploy from a branch**.
3. Choose **main**, folder **/(root)**, then **Save**.
4. Wait for GitHub's Pages deployment to complete and check https://hectorferronato.github.io/tech_advisor_landing_page/ and both service pages.

No Actions build workflow is necessary. A repository administrator may need to enable Pages. All navigation, scripts, styles, favicon, and images use relative paths. Canonical, Open Graph, and social image URLs use the expected public project URL; update them when changing domains.

## Custom domain later

Configure and verify the domain in repository Pages settings, add the DNS records GitHub documents for the chosen apex/subdomain, and enable HTTPS. Let Pages create `CNAME` or add the exact hostname yourself. Update canonical and Open Graph URLs in all three HTML files. Verify both the old project URL redirect and the new domain.

## Optional analytics

Analytics are disabled. `analyticsScriptUrl` can load a same-origin, locally hosted analytics script; `analyticsSiteId` becomes `data-website-id` (compatible with services using that attribute). Other providers may require adapting `assets/site.js`. Configure a provider only after assessing consent/disclosure obligations and adding an appropriate privacy notice. No API keys belong in this file.

## Pre-launch checklist

- If adding photos, upload the actual files before configuring their paths and inspect face framing on mobile and desktop.
- Confirm the LinkedIn contact fallback, or optionally configure hosted applications/email.
- Confirm copy, prices, time limits, boundaries, availability, and scheduling expectations.
- Confirm no employer/client details or unsupported claims are present.
- Run static checks and test keyboard navigation, CTA touch targets, and mobile layouts.
- Verify metadata/social preview, all navigation, and images at the deployed project URL.
- Enable Pages and confirm deployment. Enable analytics only when ready.

## Change delivery

The executive refinement was reviewed and merged by the user. Further authorized copy changes go directly to `main`, without a PR. Shared stylesheet/script URLs are versioned in all three pages to prevent stale cached assets from mismatching the HTML.
