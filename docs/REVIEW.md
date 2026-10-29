# Value-first advisory redesign

The previous homepage led with an enormous personal name. This redesign leads with the customer's problem and two ways to hire Hector. The name and “Independent Technical Advisor” are a compact header brand; the hero uses “Build with AI. Backed by real engineering experience.” with the requested supporting message, two clear actions, and a small real-portrait credibility strip.

The homepage retains exactly two main sections: value proposition and services. The services are the visual centerpiece: two stage-specific panels with audience, outcome, prominent uploaded photography, visible price/time allowance, and an obvious next step. The new charcoal/ivory/steel palette, restrained headings, aligned content, and quieter footer remove the oversized personal-portfolio hierarchy.

## Offers and scope

| Offer | Price | Advisor time | Focus |
| --- | --- | --- | --- |
| Founder Build Sprint | $2,500 / 3 weeks | Up to 8 hours total | Guided sessions, assignments, and engineering feedback; the founder builds |
| Technical Advisor | From $2,000 / month | Up to 4 hours monthly | Senior judgment, focused reviews, and recommendations; month-to-month, with direct-message access |

Detail pages, scope language, metadata, social preview, documentation, and consistency checks use these terms. Sprint expectations and renewal/no-guarantee boundaries remain. Advisory explicitly excludes full-time CTO responsibility, implementation, on-call support, and day-to-day development ownership.

## Images

The requested paths were not present initially, but all three original uploads were available under their earlier filenames. The new canonical paths are exact byte copies:

- `assets/hector-building.jpg` from `assets/founder-build-sprint.jpg`.
- `assets/hector-advisory.jpg` from `assets/technical-advisory.jpg`.
- `assets/hector-profile.jpg` from `assets/hector profile photo.jpeg`.

Original paths remain available for compatibility. Images use direct local HTML sources and render without JavaScript. The two service scenes are explicitly described as AI-generated illustrations, not actual client engagements. No new photography, collage, stock substitute, or SVG service illustration is used.

Desktop crops were reviewed and given enough height to keep faces intact and show useful work context. Tablet crops and 16:10 mobile crops were separately inspected.

## Conversion behavior

The hero's Explore services action scrolls to the panels; Discuss your project uses the existing email/LinkedIn fallback. With no forms configured, each panel's Explore action opens its matching existing detail route. When a valid hosted application URL is configured, only that service's primary action opens its configured form, while its service-title link keeps the detail page accessible. Detail application actions retain their form/contact fallback. No fake form or booking UI is introduced.

## Validation

- Static checker passes for all three pages: 38 local references, metadata, headings, anchors, exactly two homepage sections, real image assets, and price/scope consistency.
- Node syntax checks and whitespace validation pass.
- Chromium: 15 renders across 320, 375, 768, 1024, and 1440px widths. All three pages reviewed; no overflow, broken images, or HTTP/JavaScript errors.
- Services begin at y=482px on a 1440px-wide desktop viewport and y=467px at 1024px width, well within the first screen. At 375px mobile width they begin at y=513px, after the customer message and actions.
- All primary CTA targets are at least 44px tall. Default links, independently configured forms, invalid-form fallbacks, contact/email fallbacks, and every internal route pass.
- Keyboard skip navigation and JavaScript-disabled image/contact behavior pass. No external page requests occur during validation.
- Desktop, tablet, mobile, and detail-page crops visually inspected. Independent design and pricing/scope audits completed.

## Delivery

Prepared on `redesign/value-first` for user review. No merge, PR, live deployment, environment change, framework, backend, or dependency installation is performed. The existing GitHub Pages project structure and both detail routes are retained. Main and the live site remain unchanged until the user approves publishing.
