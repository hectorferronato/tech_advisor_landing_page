# General messages and explicit service-card actions

The hero keeps two buttons, ordered Compare services followed by Message me. Compare services targets the existing services section. Message me uses the supplied general-message form, and the supporting note now describes that route. Every Get in touch footer button uses the same general form. The smaller LinkedIn profile links remain labeled LinkedIn.

Each service card now has two independent controls at the bottom: a service-specific application button and a See details link to the corresponding local detail page. Card photos, headings, pricing, descriptions, and whitespace do not navigate. The stretched link overlay and whole-card hover hint are removed; keyboard focus styling remains on the actual links.

| Action | Destination |
| --- | --- |
| Hero Message me and all Get in touch footers | https://tally.so/r/Eqq29l |
| Apply for a Build Sprint | https://tally.so/r/J11QEz |
| Request advisory | https://tally.so/r/DqqjEj |
| Sprint See details | founder-build-sprint.html |
| Advisory See details | technical-advisory.html |

Configuration, JavaScript routing, and static HTML hrefs agree, including no-JavaScript navigation. A valid general-message URL takes precedence over email/LinkedIn for general contact; service applications stay independent. Existing fallbacks still work if configuration is unset or invalid.

The headline, credibility copy, portrait block, local images, two-section homepage structure, service descriptions, pricing, hour limits, and detail/experience content are preserved. Desktop card action rows remain aligned. Mobile stacks each card's application button and See details link, and the hero buttons follow the requested order.

## Validation

- Existing static checks pass: four pages, 42 relative references, metadata, assets, anchors, exactly two homepage sections, prices and hour limits.
- JavaScript syntax and whitespace checks pass.
- Five homepage previews at 1440/1024/768/390/320px and six other-page previews at 1440/320px pass with no overflow, missing assets, or page errors.
- Real card image/title/audience/price clicks stay on the homepage; hit-testing confirms there is no anchor covering those areas.
- Actual application-button and See details navigation, hero service anchor, general message navigation, all footer destinations, keyboard focus/Enter, and native no-JavaScript routes pass.
- Every action has at least a 44px target; desktop card action rows align. Independent routing and visual review found no blockers.
- General form/email/LinkedIn fallback configurations were checked. Hosted-form requests were intercepted locally without submitting information or inspecting remote form contents.
- Source comparison confirms unchanged hero message/portrait, detail/experience main content, service form URLs, and unrelated configuration.

Screenshots are in `/workspace/artifacts/message-card-actions/`. These are local rendered previews; GitHub Pages publication is checked separately during delivery.

## Delivery

The user has authorized direct-main publication and automatic GitHub Pages deployment. No environment, framework, or deployment configuration changes are required.
