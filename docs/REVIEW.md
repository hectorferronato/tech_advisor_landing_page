# Dark minimal redesign review

The homepage now has exactly two sections: a name-led introduction and two service panels. A consistent #101216 / #191D23 palette, sans-serif typography, restrained icy-blue accent, subtle borders, and a compact footer replace the light editorial design and decorative content.

The two existing service routes keep their prices, advisor-hour limits, founder responsibilities, scope boundaries, and contact/application behavior. Static image sources now point to the requested JPGs on the homepage and each respective detail page. SVG service illustrations are no longer rendered. Metadata, social image, favicon, and theme colors match the redesign.

## Validation

- JavaScript syntax checks pass for `assets/config.js` and `assets/site.js`.
- Static validation passes for three page structures, 35 relative links, anchors, metadata, heading hierarchy, two homepage sections, and exact static JPG references with accurate illustrative-scene alt text.
- Local Chromium checks pass for 12 layouts: all three pages at 320, 375, 768, and 1440 pixels. No horizontal overflow; desktop panels have equal columns and mobile panels stack.
- Keyboard skip links, LinkedIn fallbacks, independent configured application URLs, and JavaScript-disabled static navigation/image references were verified.
- Desktop/mobile screenshots were inspected. No external page requests or JavaScript errors occurred.
- Full validation remains **failed** because required photos are missing. Browser image requests return 404. Image loading, image identity, and face/crop acceptance cannot pass until files are supplied.

## Required assets

The following paths were absent in both the working checkout and the latest fetched `main`:

- `assets/hector-building.jpg`
- `assets/hector-advisory.jpg`
- `assets/hector-profile.jpg`

Upload the actual files at these exact paths. No replacement images or hidden fallbacks have been added. The optional headshot is omitted, but its configured path is ready. After upload, run `python3 scripts/check.py` and recheck source image identity and face framing at desktop/mobile widths. The service images must show separately on the homepage and on their respective detail pages.

## Delivery

Changes are prepared on `redesign/dark-minimal`. `main` and the live GitHub Pages deployment are unchanged pending review. No PR is created. After review, deploy the approved branch contents through the existing Pages deployment branch; no build workflow or environment change is needed.
