# Hector Ferronato — independent technical advisory

A lightweight, conversion-focused marketing site for founders and business owners. The homepage has exactly two main sections: a compact customer value proposition and two service panels. There is no site header. Hector's larger real portrait sits beside the desktop hero promise, with his name and credentials beneath the photograph. Mobile uses a centered introduction and portrait, two stacked contact/service buttons and an understated background link beneath the portrait credentials. Each service card presents its audience, price, and duration before a supporting image.

Semantic HTML, shared CSS, and minimal progressive-enhancement JavaScript. No framework, build step, backend, database, or installation is required.

## Current offers

| Offer | Price | Advisor time | Focus |
| --- | --- | --- | --- |
| Founder Build Sprint | $2,500 / 3 weeks | Up to 8 hours total | Private guided sessions, structured assignments, and engineering feedback; the founder builds |
| Technical Advisory | From $2,000 / month | Up to 4 hours monthly | Senior technical judgment, focused reviews, and recommendations; month-to-month with direct-message access |

The detail pages retain scope, exclusions, scheduling expectations, and renewal/no-guarantee language. Advisory is not full-time CTO responsibility, on-call support, or day-to-day development ownership. There are no FAQ blocks in the current site.

## Local development and checks

Use the existing checkout:

```sh
cd /workspace/tech_advisor_landing_page
python3 -m http.server 8000 --bind 127.0.0.1
```

Run `python3 scripts/check.py` to validate local links/assets, anchors, heading hierarchy, metadata, homepage structure, prices, and advisor-hour limits. With Node available, run `node --check assets/site.js` and `node --check assets/config.js`. The site also works with JavaScript disabled using its static image and navigation paths.

## Files and editing

- `index.html`: customer-focused hero with a visible engineering/founder/teaching credibility paragraph, two action buttons (contact and services), and a portrait-associated story link, plus two stage-specific service panels with visible pricing.
- `experience.html`: first-person credibility page covering engineering leadership, education, teaching, and selected ventures with honest role/status labels.
- `assets/experience.css`: page-specific editorial columns, reading widths, and responsive venture rows.
- `founder-build-sprint.html`, `technical-advisory.html`: unchanged public routes with fuller scope and explanations.
- `assets/style.css`: charcoal palette, shared layouts, responsive crops, focus/hover states, and reduced-motion support.
- `assets/config.js`: public general inquiry and separate service application URLs, contact fallback, local photo overrides, and optional local analytics.
- `assets/site.js`: applies configured destinations and same-origin image overrides while retaining working static defaults.
- `assets/social.png`, `assets/favicon.svg`: social preview and favicon consistent with the current visual direction.
- `.nojekyll`: bypasses Jekyll for GitHub Pages.

Update prices/time limits in the homepage, corresponding detail page, SEO/Open Graph descriptions, README table, and static check expectations together. Footer markup is shared by convention across all four HTML pages; update all four. Bump the shared stylesheet/script query version in all four pages when publishing asset changes.

## Contact and application configuration

Set `buildApplicationUrl` and `advisoryApplicationUrl` independently to full HTTPS hosted form URLs, such as Tally. Current destinations: Founder Build Sprint uses https://tally.so/r/J11QEz; Technical Advisory uses https://tally.so/r/DqqjEj. Keep each detail page’s static application link and label in sync for no-JavaScript visitors.

- Homepage **Explore the Sprint** and **Explore Advisory** always go to their existing detail pages. The whole card is one native link, including its title, photo, description, and whitespace; keyboard and no-JavaScript navigation work too.
- Detail-page application actions use their matching form URL, otherwise the verified `contactEmail`, otherwise the configured LinkedIn profile.
- The hero uses **Discuss your project** only when a valid HTTPS `projectInquiryUrl` is configured. Otherwise its label explicitly names the actual method: **Message me on LinkedIn**, or **Email me about your project** when `contactEmail` is set. Its supporting copy follows the selected route. Neither service application is reused for the general inquiry.
- `projectInquiryUrl` is currently empty: a real general inquiry URL still needs configuration if a dedicated project intake is desired. LinkedIn remains the working default. The centered footer **Get in touch** keeps the email/LinkedIn fallback.
- **Read my story and experience →** sits beneath the portrait credentials and opens `experience.html` directly, independent of form configuration. The two hero buttons stack on mobile.
- Invalid/non-HTTPS form URLs retain the working defaults. No fake form, booking UI, or response collection is implemented here.

Optional hosted intake fields: name, email, company, website, service, current stage, primary challenge, desired outcome, budget, and timeline. Form responses belong on the hosted form service. Never add secrets to this public repository.

## Photographs

All images use the requested direct local paths, with no JavaScript replacement needed:

| Canonical image | Usage | Original uploaded file retained |
| --- | --- | --- |
| `assets/hector-building.jpg` | Sprint card and detail page | `assets/founder-build-sprint.jpg` |
| `assets/hector-advisory.jpg` | Advisory card and detail page | `assets/technical-advisory.jpg` |
| `assets/hector-profile.jpg` | Homepage hero and the experience-page portrait | `assets/hector profile photo.jpeg` |

The files use the uploaded images, including replacements pulled from main. Original filenames remain available for compatibility. Image URLs include a version query to avoid stale cached copies; bump it in the HTML and matching config defaults when replacing images. The two service scenes are AI-generated illustrations, not documentary photos of client engagements; alt text states this. The portrait is the actual headshot.

Service image areas use shared content-aligned card rows, shallow desktop/tablet frames, and a 16:10 mobile aspect ratio, with independent object positions to keep faces visible. Home and experience portraits share the responsive `--portrait-size` setting: 320px desktop, 280px tablet, and 144px mobile. After replacing a photo, inspect the crop on desktop and mobile. Legacy `assets/build.svg` and `assets/advisory.svg` are unused.

## GitHub Pages

The existing branch-based deployment setup is unchanged. After review and approval, publish approved content through the repository's deployment branch. To confirm the settings: **Settings → Pages → Deploy from a branch → main → /(root)**.

Expected URL: https://hectorferronato.github.io/tech_advisor_landing_page/

All navigation, styles, scripts, and image paths work under that project subdirectory. No build workflow is needed. Check both detail routes and `experience.html` after deployment. Canonical/Open Graph URLs use the project URL; update them in all four pages if moving domains.

For a custom domain, configure it in Pages, add the documented DNS records, enable HTTPS, and add the exact hostname to `CNAME` if needed. Update canonical/social URLs and verify redirects.

## Optional analytics

Analytics are disabled. `analyticsScriptUrl` accepts a same-origin script and `analyticsSiteId` becomes its `data-website-id` attribute. Other providers may require adapting the script. The site does not need analytics to run.

## Delivery preference

Push authorized updates directly to main and use the existing GitHub Pages deployment unless the latest task explicitly asks for a review branch. Fetch current main first and preserve any images/files uploaded through GitHub. Version shared stylesheet/scripts and image URLs when refreshing the deployed site.
