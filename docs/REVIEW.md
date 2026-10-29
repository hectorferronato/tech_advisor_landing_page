# Header-free pages, alternate mobile hero, and first-person experience

The homepage keeps the existing charcoal identity, customer headline, two-section structure, service cards, pricing, and contact behavior. This revision removes the header entirely, offers a different mobile hero composition, and retains the substantive experience page.

## Changes for review

- A split desktop hero places the customer promise and actions on the left, with the real 320px headshot on the right. Hector's name and existing credentials sit beneath the portrait. On mobile, the centered promise leads into a 144px centered portrait with name and credentials below. A full-width inquiry action leads a two-column row of secondary actions; below 360px all three actions stack.
- The site header and its unused styles are removed from all four pages. Homepage experience/service actions, detail-page back links, and footer home links preserve navigation.
- Desktop hero spacing keeps the key buying information visible: both service durations end around y771 in a 1440×900 viewport. Card audience, price, duration, photo order, full-card click behavior, and footer remain intact.
- `experience.html` is rewritten in first person around engineering leadership, company-building, and teaching. Current engineering depth comes first, followed by a specific personal/education story, teaching and social impact, four selected venture rows, and relevance to a prospective founder.
- The supplied facts include Porto Ferreira/public-school education, IT-focused education beginning in 2009, T-shirt sales and the Caldeirão do Huck challenge, Franklin & Marshall's Computer Science/Economics double major and 2017 graduation, programming teaching in 2016–2017, Attollo Code, Global Teen Leader/We Are Family Foundation, and Global Changemakers.
- Venture roles/statuses are explicit: KNEX AI is a past co-founded venture, DocXplore is education/mentorship and operating work, HydroPOP remains in development, and HubCar is earlier operating experience that Hector does not currently manage. HubCar's sector/product is not invented where the supplied facts do not specify it.
- No employer/client names, private exit details, metrics, rankings, invented achievements, citation markers, optional association links, or endorsement logos are introduced. Early technical education is distinguished from current leadership experience.
- New `assets/experience.css` contains page-specific editorial styles. Obsolete experience selectors were removed from the shared stylesheet. Titles, metadata, navigation, local headshot and service links remain consistent with the GitHub Pages project URL.

## Checks performed

- `python3 scripts/check.py`: four page structures, 42 local references, metadata, anchors, exactly two homepage sections, correct images, pricing and time allocations passed.
- JavaScript syntax checks and `git diff --check` passed; no JavaScript or public configuration changes were needed.
- Installed Chromium rendered all four pages at 1440, 1024, 390 and 320px: 16 responsive renders, refreshed after removing all headers and adding the centered mobile arrangement. Desktop/mobile screenshots were visually inspected.
- Verified split-hero portrait and caption placement, centered mobile portrait/identity and full-width primary action, experience headline and supplied factual coverage, portrait decoding, readable layouts without horizontal overflow, and CTA targets at least 44px tall.
- Verified native full-card/photo/text/price and keyboard navigation, Compare services and experience routes, independent service applications, general inquiry/email/LinkedIn and invalid URL fallbacks, and native no-JavaScript links/images.
- All local requests under `/tech_advisor_landing_page/` returned 200. No console/page errors or external requests occurred.
- Compared every HTML page against the prior review commit: all existing content/components are unchanged except header removal and stylesheet cache versions. Prices, engagement boundaries, application settings, and routing script are unchanged.
- Independent factual/privacy and visual reviews found no blockers.

Previews are at `/workspace/artifacts/headerless-mobile/`: `1440-home.png`, `390-home.png`, `1440-experience.html.png`, `390-experience.html.png`, `390-hero.png`, `320-hero.png`, and all four pages at each tested width. These are local renders, not a live deployment check.

## Configuration and delivery

The general inquiry URL remains unconfigured; LinkedIn is the working fallback with explicit wording. Existing separate application settings are preserved.

Prepared on `refine/service-selection` for review. This update follows the instruction not to merge automatically. The previous split-portrait/header option remains available in commit `9640343`; main and deployment settings are unchanged.
