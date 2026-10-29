# Consistent pricing and clearer navigation

Founder Build Sprint is $3,000 / 3 weeks. Technical Advisory is $2,000 / month. Both prices now agree across the homepage, detail pages, search/Open Graph descriptions, social-sharing image, README, and static checks. Advisory is displayed as a fixed monthly price. The existing hour limits, direct-message access, service scope, and all three Tally destinations are unchanged.

The social preview is rendered from `scripts/social-preview.html` at 1200 × 630. Its image query is refreshed on the homepage and both service pages so previews can request the corrected asset. The experience page continues to use the real headshot for social sharing.

## Navigation

- The portrait-associated story link uses brighter text, a visible underline, and a readable 14px size. It remains a text link to `experience.html`, with a 44px target and visible keyboard focus.
- The experience page's Back to home control and both service pages' Back to engagements controls use the existing outline-button treatment with a left arrow. Their original home/services destinations are preserved. Arrows are hidden from assistive technology.
- The shared stylesheet query is updated on all four pages.

## Validation

- `python3 scripts/check.py` passes for four pages and 46 relative references, including local assets, anchors, metadata, prices, hour limits, and homepage structure. Pricing checks now cover homepage metadata, README, and social-preview source as well.
- JavaScript syntax and whitespace checks pass.
- Chromium review covers all four pages at 1280px, 390px, and 320px: visible prices, metadata, story/back navigation, keyboard focus, 44px targets, and no horizontal overflow or missing assets.
- The homepage still has two hero buttons and equal-width service-card controls. Original form destinations are preserved. No external requests or form submissions were made during these checks.
- The refreshed social image and desktop/mobile screenshots were visually reviewed. Artifacts are in `/workspace/artifacts/pricing-navigation/`.
