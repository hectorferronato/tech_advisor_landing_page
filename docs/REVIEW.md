# Header, whole-card navigation, and deployment refresh

Pulled the user's latest image uploads from main before making changes. The updated advisory image now has 1122 × 1402 intrinsic dimensions, reflected in the markup. Uploaded bytes are preserved. All image and shared-asset URLs are versioned so browsers request the new files rather than cached copies.

Both service cards now have one native link stretched across the entire panel. Duplicate title links are removed. Clicking the heading, photo, description, or whitespace follows the same service destination; configured form URLs continue to target the correct service. Keyboard focus draws a visible full-card outline. No JavaScript card click handlers or nested links were introduced.

The real headshot, VP of Engineering / Founder & Operator / Applied AI credentials, and full-stack experience line move to the right-aligned header on all three pages. The Services and Discuss your project header links are removed; the hero retains its two customer-focused actions. On mobile, the credentials occupy a compact right-aligned second header row.

The footer Get in touch action is centered, larger, and highlighted as a light button, with identity/copyright and LinkedIn details beneath. Prices, scope, application configuration, two-section homepage, and existing detail routes are unchanged.

## Validation

- Static checks pass for all three pages, 35 local references, metadata, image paths, pricing/hour limits, and two homepage sections.
- JavaScript syntax and whitespace checks pass.
- 15 local Chromium renders cover three pages at 320, 375, 768, 1024, and 1440px.
- Verified header right alignment, removed header links, centered footer button dimensions/position, updated image decoding, and no overflow or broken assets.
- Actual mouse clicks on card photos and descriptions navigate to each service detail page. Native keyboard Enter and no-JavaScript card navigation work.
- Hit testing confirms the link covers the full card, with exactly one interactive target in each panel.
- With separate hosted form URLs configured, full-card clicks reach the correct corresponding form. Invalid URLs preserve working defaults. Test form destinations were intercepted locally; no external requests occurred.
- Internal navigation, contact/email fallbacks, metadata, and all photo paths pass. No HTTP/JavaScript errors.
- Desktop, mobile, and tablet screenshots inspected. Latest image bytes remain untouched by this change.

## Delivery

The user merged the value-first redesign and explicitly authorized direct main updates. This change goes directly to main without a PR and uses the existing GitHub Pages branch deployment. No environment settings or deployment workflow changes are needed. Live deployment status is not independently verified from this environment.
