# Contrast, typography, and alignment refinement

The homepage uses a darker background, lighter blue-charcoal panels, brighter secondary text, and clearer borders. The primary introductory sentence increases from 32px to 36px maximum (27px on mobile); the final clause becomes quieter supporting text for a clearer hierarchy.

The right hero column groups the portrait, name, and descriptor in one restrained panel. They share a left edge, with a 168px portrait on desktop, 152px on tablet, and 112px on mobile. The name remains below the portrait. The two-column hero stacks on mobile.

Service titles use consistent two-line headings. Their photographs, descriptions, prices, and links now share the same left inset. The photographs retain their 70% width and follow their titles. Description text increases to 15px with a shorter line length. Tablet price rows have matching minimum heights, and the experience section stacks cleanly before its two experience entries.

All three uploaded photographs, prices, service limits, contact fallbacks, and static page routes are preserved. The centered footer action remains. Shared asset versions and page theme colors are updated.

## Validation

- Static validation passes for all three pages: 36 local references, headings, metadata, anchors, three homepage sections, and actual image files.
- JavaScript syntax and whitespace checks pass.
- Chromium passes 15 renders: all three pages at 320, 375, 768, 1024, and 1440 pixels.
- Measured hero and service alignment, tablet price baselines, larger lead, centered footer action, and actual image decoding pass.
- Main lead, name, and service-description foreground/background pairs meet WCAG AA text-contrast requirements. This is a targeted check, not a full accessibility audit.
- No horizontal overflow, broken images, empty frames, HTTP/JavaScript errors, or external page requests occur.
- All internal links return HTTP 200 under the GitHub Pages project subdirectory.
- Keyboard skip links, LinkedIn/email fallback, independent application URLs, and JavaScript-disabled pages pass.
- Desktop, mobile, and tablet screenshots inspected, with an independent design review.

Changes target main directly. GitHub Pages deployment is not independently verified from this environment.
