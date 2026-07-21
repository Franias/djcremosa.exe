# Graffiti toolbar upgrade: size slider, brush density, user-only eraser

## Goals
- Replace the discrete size buttons with a continuous slider (range input) so the user can fine-tune the spray size.
- Make the spray look more like a paint brush: denser, more pigmented particles, tighter falloff, fewer gaps.
- Add a user-only "eraser" that clears the strokes painted by the current browser without affecting other users' graffiti.
- Keep all existing constraints intact (public playhtml room, normalized coordinates, deterministic rendering, G toggle, accessibility).
- Surface the new affordances in the Win95/Y2K toolbar without breaking the responsive layout.

## Checklist
- [x] Add a stable per-browser author id (localStorage-backed, generated on first load, no PII). Store the id alongside every stroke and forward it through the realtime presence payload so the eraser can recognize the user's own strokes.
- [x] Update the toolbar: replace the 3-button size list with a `<input type="range">` plus numeric readout; add an "Apagar" eraser button to the right of the LIVE/LOCAL status pill.
- [x] Tweak the spray renderer (`lib/graffiti.ts`): increase particle count per stamp, raise alpha floor, widen radius slightly, add a secondary "ink core" stamp so the result reads as pigment rather than mist; keep determinism via the existing seed.
- [x] Implement the eraser in `GraffitiRuntime.tsx`: collect strokes whose `author` matches the current userId, remove them from the local state and from the shared PageData (using `setData(draft => …)`); reset the cursor-hint notice on completion.
- [x] Update ESLint/TypeScript fixes; expand `tests/e2e/11-graffiti.spec.ts` to cover the slider, the brushier visual density (pixel sampling), and the eraser keeps remote strokes intact.
- [x] Document the new affordances in `README.md`, `SPEC.md` (Fase 7), and capture a wiki observation/retro. Run Playwright + visual QA at desktop + mobile.

## Verification
- `npx eslint components/GraffitiRuntime.tsx lib/graffiti.ts tests/e2e/11-graffiti.spec.ts` — pass
- `npx tsc --noEmit --pretty false` — pass
- `npx playwright test tests/e2e/11-graffiti.spec.ts` — 6 passed (incl. slider, brush density, eraser keeps remote strokes)
- `npm run build` — pass; audio source warning only
- `git diff --check` — pass
- Visual QA at 1440×900 and 390×844 — slider thumb visible, APAGAR button present, brushier stroke renders.
- Iteration 1 revalidation: ESLint/TypeScript/Playwright all green; remaining items reflect completion after this re-check.
- Iteration 2 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 3 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 4 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 5 hardening: the eraser test was brittle when prior tests had committed strokes into the public room. Switched the assertion to filter by `author` against the local browser id so the test stays robust under any pre-existing mural state. ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 6 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 7 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 8 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 9 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 10 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 11 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass.
- Iteration 12 revalidation: ESLint/TypeScript/Playwright all green; suite remains 6/6 pass. Loop complete.

## Decisions / Notes
- The playhtml hosted room is public and unencrypted, so author ids must be lightweight pseudonymous ids (random 96-bit, base36). Do not reuse playhtml's player identity because graffiti erases need to be deterministic and not coupled to that identity.
- Slider range: 8 – 96 px (currently 24/40/64); default = 40.
- Brush density: ~2x particles per stamp, alpha 0.25 – 0.6 (was 0.11 – 0.41), radius 0.8 – 1.4 (was 0.55 – 0.55 + size/17). Keep determinism.
- Eraser only acts on the local browser's own strokes; remote strokes stay visible. The eraser is intentionally NOT a public clear.
- Tests for shared public murals must assert by per-author predicate (e.g. local strokes gone, planted remote stroke present) rather than absolute count, because the public channel accumulates strokes across tests.
- Toolbar must remain touch-friendly: large enough slider thumb (≥44px), and the eraser button has the same 44px tap target.