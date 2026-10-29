# Hector Ferronato — independent technical advisory

A lightweight, conversion-focused marketing site for founders and business owners. The homepage has exactly two main sections: a compact customer value proposition and two service panels. There is no site header. Hector's larger real portrait sits beside the desktop hero promise, with his name and credentials beneath the photograph. Mobile uses a centered introduction and portrait, two stacked contact/service buttons and an understated background link beneath the portrait credentials. Each service card presents its audience, price, and duration before a supporting image.

Semantic HTML, shared CSS, and minimal progressive-enhancement JavaScript. No framework, build step, backend, database, or installation is required.

## Current offers

| Offer | Price | Advisor time | Focus |
| --- | --- | --- | --- |
| Founder Build Sprint | $3,000 / 3 weeks | Up to 8 hours total | Private guided sessions, structured assignments, and engineering feedback; the founder builds |
| Technical Advisory | $2,000 / month | Up to 4 hours monthly | Senior technical judgment, focused reviews, and recommendations; month-to-month with direct-message access |

The detail pages retain scope, exclusions, scheduling expectations, and renewal/no-guarantee language. Advisory is not full-time CTO responsibility, on-call support, or day-to-day development ownership. There are no FAQ blocks in the current site.

## Local development and checks

Use the existing checkout:

```sh
cd /workspace/tech_advisor_landing_page
python3 -m http.server 8000 --bind 127.0.0.1
```

Run `python3 scripts/check.py` to validate local links/assets, anchors, heading hierarchy, metadata, homepage structure, prices, and advisor-hour limits. With Node available, run `node --check assets/site.js`, `node --check assets/config.js`, and `node --check assets/forms.js`. The site also works with JavaScript disabled using its static image and navigation paths.

## Files and editing

- `index.html`: customer-focused hero with three editorial proof points and a teaching statement, two action buttons (contact and services), and a portrait-associated story link, plus two stage-specific service panels with visible pricing.
- `experience.html`: first-person credibility page covering engineering leadership, education, teaching, and selected ventures with honest role/status labels.
- `assets/experience.css`: page-specific editorial columns, reading widths, and responsive venture rows.
- `founder-build-sprint.html`, `technical-advisory.html`: unchanged public routes with fuller scope and explanations.
- `assets/style.css`: charcoal palette, shared layouts, responsive crops, focus/hover states, and reduced-motion support.
- `assets/config.js`: public general inquiry and separate service application URLs, contact fallback, local photo overrides, and optional local analytics.
- `assets/site.js`: applies configured destinations and same-origin image overrides while retaining working static defaults.
- `assets/forms.js`: lazy native-dialog Tally embeds, visible close/new-tab controls, and ordinary new-tab fallbacks; no remote widget script or backend.
- `assets/social.png`, `assets/favicon.svg`: social preview and favicon consistent with the current visual direction.
- `.nojekyll`: bypasses Jekyll for GitHub Pages.

Update prices/time limits in the homepage, corresponding detail page, SEO/Open Graph descriptions, README table, social preview source (`scripts/social-preview.html`), and static check expectations together. Re-render the preview source at 1200 × 630 into `assets/social.png` using a browser screenshot, then bump the social image query wherever that preview is referenced. Footer markup is shared by convention across all four HTML pages; update all four. Bump the shared stylesheet/script query version in all four pages when publishing asset changes.

## Contact and application configuration

Set `buildApplicationUrl` and `advisoryApplicationUrl` independently to full HTTPS hosted form URLs, such as Tally. Current destinations: Founder Build Sprint uses https://tally.so/r/J11QEz; Technical Advisory uses https://tally.so/r/DqqjEj. Keep each detail page’s static application link and label in sync for no-JavaScript visitors.

- Each homepage card has a dedicated **Apply for a Build Sprint** or **Request advisory** button for its matching form and a separate **See details** link to its local detail page. Card backgrounds, titles, photos, and description text are not links. Both actions work with keyboard and no-JavaScript navigation.
- Detail-page application actions use their matching form URL, otherwise the verified `contactEmail`, otherwise the configured LinkedIn profile.
- Hero actions are ordered **Message me**, then **Compare services**, following the latest hero brief. The message action uses the valid HTTPS `projectInquiryUrl`; otherwise its label explicitly names the email/LinkedIn fallback. Neither service application is reused for general messages.
- `projectInquiryUrl` is https://tally.so/r/Eqq29l for general messages. The hero **Message me** and centered **Get in touch** footer buttons on all pages use this destination. If it is unset or invalid, email/LinkedIn remains the fallback. Keep static HTML links in sync with config for no-JavaScript visitors.
- **Read my story and experience →** sits beneath the portrait credentials and opens `experience.html` directly, independent of form configuration. The two hero buttons stack on mobile.
- Normal clicks on the configured Tally actions open a native popup containing a lazily loaded hosted iframe. A persistent **Open form in a new tab** link keeps the original URL available. Close/Escape from the dialog controls restore focus to the opener. When focus is inside the cross-origin form, use the visible Close control (reachable by keyboard); its key events are controlled by Tally. Ctrl/Cmd/Shift clicks, missing JavaScript, unsupported dialogs, and dialog-open failures retain native new-tab navigation.
- No Tally requests occur before an explicit form click. No hosted form submissions, fields, or response data are processed by this site. Invalid/non-HTTPS form URLs retain the existing email/LinkedIn fallbacks.

Optional hosted intake fields: name, email, company, website, service, current stage, primary challenge, desired outcome, budget, and timeline. Form responses belong on the hosted form service. Never add secrets to this public repository.

## Hero proof points

The credentials in `index.html` are supplied by Hector: 17 years of programming experience, 100+ engineers under his leadership, and 4 ventures founded or co-founded. Update the programming-years text manually; no precise start date or automatic anniversary is assumed. These values do not describe executive tenure, direct-report counts, exits, or current venture activity.

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
