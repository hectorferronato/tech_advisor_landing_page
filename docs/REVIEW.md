# Missing-photo and layout repair

The merged redesign referenced JPGs that were never present in the repository. This left broken image icons and large empty panels. The repair uses the complete dark text-only layout until actual image files are available. It introduces no substitute photos or illustrations.

Photo slots start hidden, appear only after a configured local image loads successfully, and expand the detail-page layout only when needed. All three pages version their shared stylesheet and scripts so cached files from the old light design cannot mix with the new markup. Application links and the LinkedIn fallback are unchanged.

## Validation

- `python3 scripts/check.py` passes: all rendered/configured files exist; three page structures, 31 relative references, anchors, metadata, two homepage sections, and optional photo slots are valid.
- JavaScript syntax checks and `git diff --check` pass.
- Chromium checks pass across all three pages at 320, 375, 768, and 1440 pixels, with screenshots inspected on desktop/mobile.
- No broken images, visible empty frames, horizontal overflow, HTTP errors, JavaScript errors, or external page requests occur with the default configuration.
- Every internal navigation link returns HTTP 200 under the GitHub Pages project subdirectory.
- The correct dark styles load even when the test supplies stale CSS for the old unversioned URL.
- Keyboard skip links, contact fallbacks, configured form links, and JavaScript-disabled pages pass.
- Optional photo loading and detail layout expansion pass using an existing local test image. This tests behavior only; no replacement photo is deployed.

The actual files `assets/hector-building.jpg`, `assets/hector-advisory.jpg`, and `assets/hector-profile.jpg` remain absent. Their configuration fields stay blank. Actual photo identity and face framing cannot be checked until those files exist.

This repair targets `main`, where the user has already merged and reviewed the redesign. The live GitHub Pages deployment cannot be verified through this environment's restricted public-site access.
