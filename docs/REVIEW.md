# Hero proof points, balanced actions, and hosted-form popups

The homepage now presents customer benefit, three concrete credentials, a short teaching statement, and then the two actions. The former company-name biography paragraph is removed. The charcoal identity, headline treatment, real portrait, two-section structure, service content, prices, and original form destinations remain intact.

## Changes

- Support: “Learn to build your own software with AI—or get senior technical guidance for the product you’re already building.”
- Editorial proof row: 17 years / Programming experience; 100+ / Engineers under my leadership; 4 ventures / Founded or co-founded. The values are user-supplied. Programming years remain a manually editable HTML value, not an automatic anniversary or executive-tenure claim. The other figures do not imply direct-report counts, exits, profitability, or current venture activity.
- Teaching: “I’ve taught programming to children and adults. I make technical decisions understandable—and help you put them into practice.” It appears once, without another biography or heading.
- Message me is the filled first action; Compare services is the outlined second action, as requested in the attached brief. The helper is “Share what you’re building, or ask a question.”
- Desktop portrait stays on the right and aligns to the top of the hero. Mobile reads headline → support → proof → teaching → actions, followed by the portrait/story block. Three proof columns fit at 390px; below 360px the metrics use three compact value/label rows.
- Both bottom card controls occupy equal halves of the available action row, including on mobile. See details uses the existing outline treatment and still navigates to its local service page. Card backgrounds remain noninteractive.
- Get in touch now uses a muted charcoal fill and restrained border, with readable text and the same comfortable target size.

## Form behavior

A small local `assets/forms.js` enhancement opens the existing Tally forms in a native dialog. It creates a titled iframe only after a plain form-link click; no remote widget script, backend, or initial Tally request is introduced.

| Form | Original destination, preserved |
| --- | --- |
| General message | https://tally.so/r/Eqq29l |
| Founder Build Sprint | https://tally.so/r/J11QEz |
| Technical Advisory | https://tally.so/r/DqqjEj |

The popup provides a visible Close button and a permanent Open form in a new tab link. Closing restores opener focus, unlocks background scrolling, and clears the iframe. Native Escape works from popup controls. Keys inside a cross-origin form are controlled by that form; keyboard users can return to Close with Shift+Tab. No keyboard events inside the hosted form are captured or blocked by the site.

Original links retain their real hrefs plus `target="_blank"` and `rel="noopener noreferrer"`. Modified clicks are left to the browser. Missing JavaScript, unsupported dialogs, or a failed dialog-open call retain native new-tab navigation. See details, services-anchor, and experience navigation are not intercepted. `assets/config.js` is unchanged.

## Validation and previews

- Existing static checker passes across four pages and 46 relative references, including assets, metadata, anchors, pricing, hour caps, and two homepage sections.
- Syntax checks for site/config/forms JavaScript and whitespace checks pass.
- Five Chromium homepage/card renders cover 1280/1024/768/390/320px, including exact copy, all three visible proofs, subordinate metric type, readable labels, equal-width/equal-height card controls, quieter footer, working local links, and no overflow or missing assets.
- Popup tests cover all three form IDs, all relevant page types, desktop and mobile sizing, titled lazy iframes, close button, keyboard return from iframe, Escape from popup controls, backdrop dismissal, focus/scroll cleanup, and the persistent original-URL fallback.
- Actual native new-tab navigation passes with JavaScript disabled, missing dialog support, and forced dialog-open failure. Modifier clicks remain uncancelled. No real form data was submitted.
- Tests intercept Tally locally. Live hosted-form rendering and Safari/mobile-device behavior were not checked. Popup-shell screenshots contain an explicitly labeled local test fixture, not Tally’s actual form contents.
- Independent factual/routing review found no blockers. User-supplied metrics and all original form IDs are preserved; no employers, endorsements, or extra achievement claims were introduced.

| Width | Before hero | After hero |
| --- | --- | --- |
|1280px |541px |578px |
|390px |983px |1011px |
|320px |1097px |1141px |

Before/after screenshots: `/workspace/artifacts/proof-popup-refinement/before/` and `/workspace/artifacts/proof-popup-refinement/after/`. Each contains full-page and hero previews at the representative widths. After also contains the wider responsive set and popup-shell fixtures.

## Delivery

Prepared on `refine/proof-and-form-popups` for review. The attached brief explicitly says not to merge automatically, so this task does not change main or publish a new Pages release. The branch starts from main commit `1dd743b`.
