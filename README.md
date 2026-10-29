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

- `index.html`: exactly two main sections — introduction and ways to work together — followed by a minimal footer.
- `founder-build-sprint.html`, `technical-advisory.html`: detailed service pages.
- `assets/style.css`: shared responsive design; consistent dark surfaces, icy-blue accents, oversized sans-serif name typography, responsive panels, and reduced-motion support.
- `assets/config.js`: public application URLs, contact email, LinkedIn fallback, local photo paths, availability, optional local analytics.
- `assets/site.js`: progressive enhancement of working static links. Without JavaScript, LinkedIn remains available.
- `assets/build.svg`, `assets/advisory.svg`: original local product illustrations; retained unless local photos are configured.
- `.nojekyll`: bypasses Jekyll.

Edit prices and engagement details in the homepage service cards and corresponding service pages together. Keep the detail-page scope statements in sync when changing an engagement. Search for `$2,500`, `$2,000`, `8 hours`, and `4 hours`. Update availability through `assets/config.js`; keep the static homepage fallback in sync. Shared header/footer markup is intentionally duplicated across only three pages; update all three when changing navigation or contact wording.

## Applications and contact

Set `buildApplicationUrl` and `advisoryApplicationUrl` separately to full HTTPS hosted form URLs, for example Tally. Blank or invalid URLs fall back to your verified `contactEmail`, if supplied, otherwise your LinkedIn profile. No fake form is shown and this site collects no responses. Configured form buttons become “Apply for a Build Sprint” and “Request Technical Advisory.”

Recommended hosted form fields: name, email, company, optional website, service, current stage, primary challenge, desired outcome, budget, and timeline. Configure appropriate privacy disclosures and response handling on the form host. Never add secrets to this public repository.

## Local photography

The repository does not currently contain the supplied JPG photos. The site therefore uses a complete text-only layout, with no substitute images, missing-image requests, or empty photo frames.

To add the actual files later, place them at these paths and set the matching field in `assets/config.js`:

| Asset | Configuration | Usage |
| --- | --- | --- |
| `assets/hector-building.jpg` | `buildImageUrl` | Build Sprint panel and detail page |
| `assets/hector-advisory.jpg` | `advisoryImageUrl` | Advisory panel and detail page |
| `assets/hector-profile.jpg` | `portraitUrl` | Optional headshot; currently omitted |

Leave a field blank while its file is unavailable. Photo slots are hidden until a configured same-origin image loads successfully, so a failed image cannot leave a broken icon or reserve space. The default page layout and contact links also work without JavaScript.

The service scenes are AI-generated illustrations, not documentary photos of client engagements. Their alt text states this. Framing uses `object-fit: cover` and separate positions for the two compositions; detail pages retain their source proportions. Check face framing once the actual files are available. `scripts/check.py` rejects missing files that are rendered or configured; it does not require unused optional assets.

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
