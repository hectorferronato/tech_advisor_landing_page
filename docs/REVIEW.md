# Hero, footer, and service photography update

The hero places enlarged introductory text on the left and the smaller Hector Ferronato heading on the right. On mobile the smaller right-aligned identity stacks above the statement. The experience section remains below both services. A larger Get in touch button occupies its own centered footer row on all three pages, with contact/application links beneath.

The two image files arrived on main during the layout update. Those uploads were preserved, and their actual filenames are now referenced directly in HTML and the default configuration:

- `assets/founder-build-sprint.jpg`: 964 × 809, used for Founder Build Sprint.
- `assets/technical-advisory.jpg`: 829 × 941, used for Technical Advisory.

Both photos render separately on the homepage and on their corresponding detail pages, including without JavaScript. Alt text accurately identifies the AI-generated illustrative scenes. Source proportions and responsive crops were visually inspected for face visibility. No substitute photos or SVGs are used.

## Validation

- Static validation: three pages, 35 local references, valid metadata/anchors, three homepage sections, distinct static service image sources, and existing rendered/configured files.
- JavaScript syntax and whitespace checks pass.
- Chromium: all three pages at 320, 375, 768, and 1440 pixels; actual JPEG decoding, correct source identity and natural dimensions verified.
- Desktop/mobile screenshots inspected, including the Advisory detail photo.
- Smaller name/right-side placement, enlarged statement, experience order, footer centering and button dimensions verified.
- All internal links return HTTP 200 under the GitHub Pages project subdirectory. No overflow, broken images, empty frames, HTTP errors, JavaScript errors, or external page requests.
- Keyboard skip links, LinkedIn/email fallback, configured application links, and JavaScript-disabled pages pass.
- Shared assets have versioned URLs to avoid stale stylesheet/script combinations.

The reviewed work targets main without a new PR. Live GitHub Pages deployment has not been independently verified from this environment.
