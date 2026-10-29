# Executive homepage refinement

This branch refines the existing dark static site. The name is the dominant, unboxed hero element, followed by “Build smarter. Move faster.” and the requested supporting copy and credentials. The uploaded headshot remains in the hero. The separate Experience section is removed, leaving exactly two main sections: hero and services.

Both service cards retain their uploaded photos, now in full-width matching 16:10 frames. Individual crop positions preserve face visibility. Titles and concise descriptions are left aligned; prices and engagement terms are clearly separated. Mobile uses deliberate name/headline line breaks, compact spacing, and service CTA targets at least 44px tall. The footer retains a compact contact action and links.

## Offers and scope

| Offer | Price | Advisor time | Engagement |
| --- | --- | --- | --- |
| Founder Build Sprint | $3,000 / 3-week sprint | Up to 8 hours total | One-time teaching and structured founder-led building; renewable by agreement |
| Technical Advisor | $2,000 / month | Up to 3 hours per month | Month-to-month focused technical judgment, reviews, and recommendations |

Both existing detail routes are preserved. Prices, advisor-hour limits, scope prose, SEO descriptions, Open Graph descriptions/titles, CTA labels, and README are updated consistently. Sprint no-guarantee language is retained. Advisory excludes full implementation, on-call CTO work, day-to-day management, unlimited debugging, and production ownership. There are no FAQ blocks in the current site.

The social preview image uses the new headline and credentials. All three real/local image files are preserved. No replacement photos, SVG service illustrations, frameworks, dependencies, backend, or environment changes were introduced.

## Validation

- Existing static validation passes for three pages, 35 local references, metadata, headings, anchors, exactly two homepage sections, distinct photographs, and matching visible/metadata pricing and advisor-hour limits.
- Node syntax checks and `git diff --check` pass.
- Local Chromium: 15 page renders, covering all three pages at 320, 375, 768, 1024, and 1440 pixels.
- Verified dominant unboxed name, requested hero text/credentials, full-width matching photo frames, actual photo decoding, balanced desktop cards, and service CTA touch targets of at least 44px.
- All internal links return HTTP 200 under `/tech_advisor_landing_page/`. No overflow, broken images, HTTP/JavaScript errors, or external page requests.
- Verified keyboard skip links, LinkedIn/email fallbacks, independent hosted application URLs, and static image/contact behavior with JavaScript disabled.
- Desktop and mobile screenshots inspected; an independent audit confirmed offer/scope consistency and photo framing.

## Review and deployment

Prepared on `refine/executive-review` for user review. Main and the live GitHub Pages site remain unchanged. No PR or merge is performed automatically.

After approval, publish the approved branch contents through the existing GitHub Pages deployment branch. No build step or workflow change is required. Live deployment is not part of this review branch validation.
