# Hero, footer, and service photography update

The hero places enlarged introductory text on the left and the smaller Hector Ferronato heading on the right. On mobile the smaller right-aligned identity stacks above the statement. The experience section remains below both services. A larger Get in touch button occupies its own centered footer row on all three pages, with contact/application links beneath.

The two image files arrived on main during the layout update. Those uploads were preserved, and their actual filenames are now referenced directly in HTML and the default configuration:

- `assets/founder-build-sprint.jpg`: 964 × 809, used for Founder Build Sprint.
- `assets/technical-advisory.jpg`: 829 × 941, used for Technical Advisory.

Both photos render separately on the homepage and on their corresponding detail pages, including without JavaScript. Alt text accurately identifies the AI-generated illustrative scenes. Source proportions and responsive crops were visually inspected for face visibility. No substitute photos or SVGs are used.

## Validation

- Static validation: three pages, 36 local references, valid metadata/anchors, three homepage sections, distinct static service image sources, and existing rendered/configured files.
- JavaScript syntax and whitespace checks pass.
- Chromium: all three pages at 320, 375, 768, and 1440 pixels; actual JPEG decoding, correct source identity and natural dimensions verified.
- Desktop/mobile screenshots inspected, including the Advisory detail photo.
- Smaller name/right-side placement, enlarged statement, experience order, footer centering and button dimensions verified.
- All internal links return HTTP 200 under the GitHub Pages project subdirectory. No overflow, broken images, empty frames, HTTP errors, JavaScript errors, or external page requests.
- Keyboard skip links, LinkedIn/email fallback, configured application links, and JavaScript-disabled pages pass.
- Shared assets have versioned URLs to avoid stale stylesheet/script combinations.

The reviewed work targets main without a new PR. Live GitHub Pages deployment has not been independently verified from this environment.

## Portrait and smaller product photos

Added the uploaded 800 × 800 `assets/hector profile photo.jpeg` as a static hero portrait above the name on the right. HTML and configuration encode the spaces in the filename. Portrait dimensions are 144px on desktop and 112px on mobile; the static source works without JavaScript.

Service-card titles now precede their photographs, followed by the descriptions. Photo frames are centered at 70% of the card width (a 30% reduction), preserving the existing crop proportions. Detail-page photos are also 30% narrower. Shared asset versions were bumped.

All 12 responsive checks pass, including actual decoding of all three image files, portrait placement above the name, title/photo/description order, and measured service photo width. Desktop and mobile screenshots were inspected.
