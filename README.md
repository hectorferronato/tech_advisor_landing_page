# Hector Ferronato — independent technical advisory

A lightweight, conversion-focused marketing site for founders and business owners. The homepage has exactly two main sections: a compact customer value proposition and two service panels. Hector's name is the header brand; the real portrait and engineering/founder credentials support the offer.

Semantic HTML, shared CSS, and minimal progressive-enhancement JavaScript. No framework, build step, backend, database, or installation is required.

## Current offers

| Offer | Price | Advisor time | Focus |
| --- | --- | --- | --- |
| Founder Build Sprint | $2,500 / 3 weeks | Up to 8 hours total | Private guided sessions, structured assignments, and engineering feedback; the founder builds |
| Technical Advisor | From $2,000 / month | Up to 4 hours monthly | Senior technical judgment, focused reviews, and recommendations; month-to-month with direct-message access |

The detail pages retain scope, exclusions, scheduling expectations, and renewal/no-guarantee language. Advisory is not full-time CTO responsibility, on-call support, or day-to-day development ownership. There are no FAQ blocks in the current site.

## Local development and checks

Use the existing checkout:

```sh
cd /workspace/tech_advisor_landing_page
python3 -m http.server 8000 --bind 127.0.0.1
```

Run `python3 scripts/check.py` to validate local links/assets, anchors, heading hierarchy, metadata, homepage structure, prices, and advisor-hour limits. With Node available, run `node --check assets/site.js` and `node --check assets/config.js`. The site also works with JavaScript disabled using its static image and navigation paths.

## Files and editing

- `index.html`: customer-focused hero, small credibility strip, and two stage-specific service panels with visible pricing.
- `founder-build-sprint.html`, `technical-advisory.html`: unchanged public routes with fuller scope and explanations.
- `assets/style.css`: charcoal palette, shared layouts, responsive crops, focus/hover states, and reduced-motion support.
- `assets/config.js`: public application URLs, contact fallback, local photo overrides, and optional local analytics.
- `assets/site.js`: applies configured destinations and same-origin image overrides while retaining working static defaults.
- `assets/social.png`, `assets/favicon.svg`: social preview and favicon consistent with the current visual direction.
- `.nojekyll`: bypasses Jekyll for GitHub Pages.

Update prices/time limits in the homepage, corresponding detail page, SEO/Open Graph descriptions, README table, and static check expectations together. Header/footer markup is shared by convention across the three HTML files; update all three. Bump the shared stylesheet/script query version in all three pages when publishing asset changes.

## Contact and application configuration

Set `buildApplicationUrl` and `advisoryApplicationUrl` independently to full HTTPS hosted form URLs, such as Tally.

- With no form configured, homepage **Explore the Sprint** and **Explore Advisory** go to their existing detail pages. Service title links always offer those detail routes.
- A valid configured form URL changes only its matching homepage service action to **Apply for a Build Sprint** or **Request advisory**, opening the correct form.
- Detail-page application actions use their matching form URL, otherwise the verified `contactEmail`, otherwise the configured LinkedIn profile.
- **Discuss your project** and footer **Get in touch** use the email/LinkedIn contact fallback.
- Invalid/non-HTTPS form URLs retain the working defaults. No fake form, booking UI, or response collection is implemented here.

Optional hosted intake fields: name, email, company, website, service, current stage, primary challenge, desired outcome, budget, and timeline. Form responses belong on the hosted form service. Never add secrets to this public repository.

## Photographs

All images use the requested direct local paths, with no JavaScript replacement needed:

| Canonical image | Usage | Original uploaded file retained |
| --- | --- | --- |
| `assets/hector-building.jpg` | Sprint card and detail page | `assets/founder-build-sprint.jpg` |
| `assets/hector-advisory.jpg` | Advisory card and detail page | `assets/technical-advisory.jpg` |
| `assets/hector-profile.jpg` | Small real headshot in hero credibility strip | `assets/hector profile photo.jpeg` |

The canonical files are exact byte copies of the existing uploads, not newly generated images. Original filenames remain available for compatibility. The two service scenes are AI-generated illustrations, not documentary photos of client engagements; alt text states this. The portrait is the actual headshot.

Service image areas share consistent desktop/tablet heights and a 16:10 mobile aspect ratio, with independent object positions to keep faces visible. After replacing a photo, inspect the crop on desktop and mobile. Legacy `assets/build.svg` and `assets/advisory.svg` are unused.

## GitHub Pages

The existing branch-based deployment setup is unchanged. After review and approval, publish approved content through the repository's deployment branch. To confirm the settings: **Settings → Pages → Deploy from a branch → main → /(root)**.

Expected URL: https://hectorferronato.github.io/tech_advisor_landing_page/

All navigation, styles, scripts, and image paths work under that project subdirectory. No build workflow is needed. Check both detail routes after deployment. Canonical/Open Graph URLs use the project URL; update them in all three pages if moving domains.

For a custom domain, configure it in Pages, add the documented DNS records, enable HTTPS, and add the exact hostname to `CNAME` if needed. Update canonical/social URLs and verify redirects.

## Optional analytics

Analytics are disabled. `analyticsScriptUrl` accepts a same-origin script and `analyticsSiteId` becomes its `data-website-id` attribute. Other providers may require adapting the script. The site does not need analytics to run.

## Review delivery

Prepared on `redesign/value-first`; do not merge or deploy to main before user review. No new PR or environment changes are required. Review pricing, form/contact destinations, desktop/mobile crops, navigation, and the deployed project path before publishing approved content.
