# Compact footer and mobile hero order

The helper sentence beneath the hero actions has been removed from HTML and JavaScript, together with its unused styles and `aria-describedby` reference.

At widths of 700px and below, the complete portrait, identity, credentials, public-school story, and background link appear after the introduction and before the proof points. Teaching copy and the two hero actions follow. Source order matches this mobile reading order. Desktop keeps the portrait on the right and the introduction, proof points, teaching, and actions on the left.

Get in touch now sits within the footer's identity/social row on all four pages. Its separate padded contact band is removed. The button retains the muted charcoal treatment and a minimum 44px tap target. Desktop centers it between the identity and LinkedIn link; mobile places it alongside the identity/social group.

## Validation

- The existing static checker passes for all four pages, 46 relative references, local assets, metadata, prices, hour limits, and homepage structure.
- JavaScript syntax and whitespace checks pass.
- Chromium checks cover 1280, 768, 701, 700, 390, and 320px, including both sides of the responsive breakpoint, full portrait-before-KPI order, no helper text with or without JavaScript, two hero actions, equal-width service actions, and no horizontal overflow or missing assets.
- Footer contact checks cover every page. Original form URLs, keyboard focus, popup opening, closing, and focus restoration pass using a local form fixture; no external form requests or submissions were made.
- Desktop and mobile screenshots were visually reviewed. Artifacts: `/workspace/artifacts/compact-hero-footer/`.

| Width | Footer before | Footer after | Homepage before | Homepage after |
| --- | --- | --- | --- | --- |
| 1280px | 223px | 91px | 1642px | 1478px |
| 390px | 205px | 122px | 2812px | 2697px |
| 320px | 205px | 122px | 2897px | 2783px |

Service prices, scopes, images, and the three contact/application destinations are unchanged. Stylesheet and site-script query versions are refreshed across all four pages.
