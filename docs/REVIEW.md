# Service selection and inquiry refinement

The existing charcoal palette, typography, borders, muted accent, two-section homepage, static architecture, and public routes are preserved. This change puts buying information ahead of imagery and makes the inquiry destination explicit.

## Changes for review

- The real local headshot and existing credentials now introduce Hector under the hero description, before the actions. Headers contain only the personal brand; the experience page retains its own portrait and background.
- Both full-card links present category, service name, audience, price and duration before the photo, followed by three scope points and a service-specific Explore action. Content-driven grid rows align both desktop offers without fixed text heights.
- Prices and scope remain $2,500 total / three weeks / up to eight total advisor hours, and from $2,000 per month / month-to-month / up to four total advisor hours. Direct-message access is retained within the advisory allocation.
- The service name is consistently Technical Advisory; Technical Advisor remains Hector's professional role. Detail-page changes are limited to naming, explicitly counting preparation, and clarifying existing CTO/security-review boundaries. Sprint renewal and no-guarantee terms remain intact.
- Current uploaded images are preserved, including the latest advisory replacement from main. Frames are 260px on desktop (slightly above the suggested starting range to preserve both faces), 220px on tablet, and 16:10 on mobile, with individual object positions. Alt text continues to identify service scenes as AI-generated illustrations.
- Explore actions always lead to the corresponding detail page. Separate service application URLs remain supported on those pages.
- The hero uses a separate optional `projectInquiryUrl`. With the current empty inquiry URL and email, it honestly says Message me on LinkedIn and explains what to send. A valid general inquiry URL enables Discuss your project; a configured email gets an explicit email label. No placeholder form or booking interface was created.

## Checks performed

- `python3 scripts/check.py`: four page structures, 45 local references, anchors, metadata, asset existence, exactly two homepage sections, canonical images, pricing, and hour allocations passed.
- `node --check assets/site.js`, `node --check assets/config.js`, and `git diff --check` passed.
- Installed Chromium rendered all four pages at 1440, 1024, 390, and 320px: 16 responsive renders, visually inspected at desktop/mobile. Both offer durations end around y882 in the 1440×900 homepage viewport.
- Verified offer information precedes each photo; desktop titles, pricing, images and CTAs align; real portrait and all images decode; CTA targets are at least 44px tall; footer action remains centered.
- Actual navigation from card photos, audience text, prices and keyboard Enter reaches the correct detail page. Compare services and experience navigation work. Native no-JavaScript card navigation and image loading also pass.
- Tested blank/general inquiry/email/invalid URL configurations, independently configured Sprint and Advisory applications, correct labels and microcopy, and fixed Explore destinations.
- Local previews were served under `/tech_advisor_landing_page/`. All internal requests returned 200; no horizontal overflow, console/page errors, or external requests occurred.

Screenshots are available in the execution workspace at `/workspace/artifacts/service-selection/`: `1440-home.png`, `desktop-viewport.png`, `390-home.png`, `320-home.png`, and all detail/experience pages at the four widths. These are local rendered previews, not verification of a live deployment.

## Configuration and delivery

A dedicated general inquiry URL is still unconfigured. The existing LinkedIn profile is the working contact fallback; no further information is needed to review or use the current flow.

Prepared on `refine/service-selection` for review, following this brief's instruction not to merge automatically. Main and GitHub Pages deployment settings are unchanged. The branch starts from main commit `2c3879f`, preserving the latest GitHub image upload.
