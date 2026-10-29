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

- `index.html`: homepage, services, background, process, FAQ.
- `founder-build-sprint.html`, `technical-advisory.html`: detailed service pages.
- `assets/style.css`: shared responsive design; warm neutrals, deep teal, editorial serif headings, system sans-serif body text, reduced-motion support.
- `assets/config.js`: public application URLs, contact email, LinkedIn fallback, portrait path, availability, optional analytics.
- `assets/site.js`: progressive enhancement of working static links. Without JavaScript, LinkedIn remains available.
- `assets/build.svg`, `assets/advisory.svg`: original product illustrations used while requested stock photographs are unavailable.
- `.nojekyll`: bypasses Jekyll.

Edit prices and engagement details in the homepage service cards and corresponding service pages together. Edit FAQ scope statements when changing an engagement. Search for `$2,500`, `$2,000`, `8 hours`, and `4 hours`. Update availability through `assets/config.js`; keep the static homepage fallback in sync. Shared header/footer markup is intentionally duplicated across only three pages; update all three when changing navigation or contact wording.

## Applications and contact

Set `buildApplicationUrl` and `advisoryApplicationUrl` separately to full HTTPS hosted form URLs, for example Tally. Blank or invalid URLs fall back to your verified `contactEmail`, if supplied, otherwise your LinkedIn profile. No fake form is shown and this site collects no responses. Configured form buttons become “Apply for a Build Sprint” and “Request Technical Advisory.”

Recommended hosted form fields: name, email, company, optional website, service, current stage, primary challenge, desired outcome, budget, and timeline. Configure appropriate privacy disclosures and response handling on the form host. Never add secrets to this public repository.

## Portrait and stock photos — outstanding

LinkedIn and Unsplash access were blocked by the environment's network policy during implementation. The site currently uses an HF monogram and two original illustrations; it does not contain Hector's LinkedIn portrait or stock photographs yet.

Download your actual LinkedIn profile photo (or supply the original), save as `assets/hector.jpg`, and set `portraitUrl: "assets/hector.jpg"`. The monogram stays visible if the image fails to load. Do not use an expiring LinkedIn CDN URL in production.

For the two requested stock photographs, download appropriately licensed images of a software-building workspace and architectural/technical planning (no meeting stock photos). Save optimized local files and replace the two illustration sources on the homepage and corresponding service pages. Use empty alt for decorative card images; describe meaningful images on detail pages. Record the source, photographer, and license here. Keep exactly two distinct stock photographs.

Prefer locally hosted images under 200 KB each; no external image requests occur in the current site.

## GitHub Pages deployment

Pages has **not** been enabled by this implementation. After reviewing and merging the site into `main`:

1. Go to the repository **Settings → Pages**.
2. Under Build and deployment choose **Deploy from a branch**.
3. Choose **main**, folder **/(root)**, then **Save**.
4. Wait for GitHub's Pages deployment to complete and check https://hectorferronato.github.io/tech_advisor_landing_page/ and both service pages.

No Actions build workflow is necessary. A repository administrator may need to enable Pages. All navigation, scripts, styles, favicon, and images use relative paths. Canonical, Open Graph, and social image URLs use the expected public project URL; update them when changing domains.

## Custom domain later

Configure and verify the domain in repository Pages settings, add the DNS records GitHub documents for the chosen apex/subdomain, and enable HTTPS. Let Pages create `CNAME` or add the exact hostname yourself. Update canonical and Open Graph URLs in all three HTML files. Verify both the old project URL redirect and the new domain.

## Optional analytics

Analytics are disabled. `analyticsScriptUrl` can load an HTTPS analytics script; `analyticsSiteId` becomes `data-website-id` (compatible with services using that attribute). Other providers may require adapting `assets/site.js`. Configure a provider only after assessing consent/disclosure obligations and adding an appropriate privacy notice. No API keys belong in this file.

## Pre-launch checklist

- Supply and review the real portrait and two licensed stock images.
- Configure both hosted applications or a verified contact email; test submission on the host.
- Confirm copy, prices, time limits, boundaries, availability, and scheduling expectations.
- Confirm no employer/client details or unsupported claims are present.
- Run static checks and test keyboard navigation, native FAQ controls, and mobile layouts.
- Verify metadata/social preview, all navigation, and images at the deployed project URL.
- Enable Pages and confirm deployment. Enable analytics only when ready.
