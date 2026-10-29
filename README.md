# Hector Ferronato — independent technical advisory

A responsive static marketing site for Founder Build Sprint and AI Product & Technical Advisory. Programming since 2009, full-stack experience, and building businesses since 2022. No framework, build, backend, database, or runtime dependencies.

## Local development

Use the existing checkout; a separate worktree is unnecessary. With Python 3 installed:

```sh
cd /workspace/tech_advisor_landing_page
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the local server in your own development environment. All paths are relative and support the GitHub Pages project subdirectory. Run `python3 scripts/check.py` to check local links, assets, fragment destinations, headings, and metadata. Run `node --check assets/site.js` and `node --check assets/config.js` if Node is available. No installation is required.

## Architecture and editing

- `index.html`: three main sections — introduction, ways to work together, and experience — with an introduction that places enlarged value-proposition text on the left and a smaller name on the right, followed by a footer with a large centered Get in touch button.
- `founder-build-sprint.html`, `technical-advisory.html`: detailed service pages.
- `assets/style.css`: shared responsive design; contrasting dark surfaces, brighter secondary copy, icy-blue accents, a larger lead statement, aligned identity/service panels, and reduced-motion support.
- `assets/config.js`: public application URLs, contact email, LinkedIn fallback, local photo paths, availability, optional local analytics.
- `assets/site.js`: progressive enhancement of working static links. Without JavaScript, LinkedIn remains available.
- `assets/build.svg`, `assets/advisory.svg`: original local product illustrations; retained unless local photos are configured.
- `.nojekyll`: bypasses Jekyll.

Edit prices and engagement details in the homepage service cards and corresponding service pages together. Keep the detail-page scope statements in sync when changing an engagement. Search for `$2,500`, `$2,000`, `8 hours`, and `4 hours`. Update availability through `assets/config.js`; keep the static homepage fallback in sync. Shared header/footer markup is intentionally duplicated across only three pages; update all three when changing navigation or contact wording.

## Applications and contact

Set `buildApplicationUrl` and `advisoryApplicationUrl` separately to full HTTPS hosted form URLs, for example Tally. Blank or invalid URLs fall back to your verified `contactEmail`, if supplied, otherwise your LinkedIn profile. The footer Get in touch button uses the same email/LinkedIn fallback. No fake form is shown and this site collects no responses. Configured form buttons become “Apply for a Build Sprint” and “Request Technical Advisory.”

Recommended hosted form fields: name, email, company, optional website, service, current stage, primary challenge, desired outcome, budget, and timeline. Configure appropriate privacy disclosures and response handling on the form host. Never add secrets to this public repository.

## Local photography

All supplied photos are included directly in HTML, so they render without JavaScript:

| Asset | Usage |
| --- | --- |
| `assets/founder-build-sprint.jpg` | Founder Build Sprint panel and detail page |
| `assets/technical-advisory.jpg` | Technical Advisory panel and detail page |
| `assets/hector profile photo.jpeg` | Hero portrait above the name on the right |

Matching `buildImageUrl` and `advisoryImageUrl` defaults are in `assets/config.js`. Optional same-origin overrides can be configured there. The default paths use the actual uploaded filenames. `portraitUrl` matches the uploaded headshot; HTML and configuration URL-encode the spaces in its filename. The portrait is 168px on desktop, 152px on tablet, and 112px on mobile, grouped with the name in a right-side identity panel. Service-card photos follow the titles at 70% of the card width, with their aspect ratio preserved and their left edges aligned with the title and description. Detail-page photos are also displayed at 70% of their previous width.

The service scenes are AI-generated illustrations, not documentary photos of client engagements. Alt text states this. Framing uses `object-fit: cover` with individual positions, preserving face visibility. Both photographs have been visually checked on desktop and mobile. The old SVG illustrations are unused.

Run `python3 scripts/check.py` after replacing an image: it verifies both distinct static JPG references and that rendered/configured assets exist.

## GitHub Pages deployment

Pages has **not** been enabled by this implementation. When the site files are on the deployment branch (`main` below):

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
- Run static checks and test keyboard navigation, native FAQ controls, and mobile layouts.
- Verify metadata/social preview, all navigation, and images at the deployed project URL.
- Enable Pages and confirm deployment. Enable analytics only when ready.

## Change delivery

The reviewed redesign has been merged by the user. Repair commits go directly to `main`; no new PR or environment change is needed. Shared stylesheet and script URLs include a version query so old cached assets cannot mismatch the new HTML. Bump it in all three pages when deploying a shared asset change.
