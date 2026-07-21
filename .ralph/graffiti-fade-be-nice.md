# Fade out graffiti layer on toggle-off and add a BE NICE notice

## Goals
- When the user leaves graffiti mode (presses `G` again or toggles the button), the existing painted layer must fade out instead of disappearing instantly.
- Add a calm `BE NICE!` notice reminder that appears briefly during/after the fade so visitors know the rule of the mural.

## Checklist
- [x] Add a `fadingOut` state in `GraffitiRuntime.tsx` that animates the existing canvas opacity to 0 over ~600ms before fully hiding it.
- [x] Update `toggleMode` to enter/exit fade gracefully: when turning off, mark `fadingOut=true`, then clear it after the fade completes.
- [x] Display a `BE NICE!` notice while the fade plays and then auto-dismiss (still shows a notice on first paint pass too, but only once per graffiti exit or once per session).
- [x] Update `app/globals.css` so the canvas supports the opacity transition and stays off-screen-readable.
- [x] Add a Playwright test in `tests/e2e/11-graffiti.spec.ts` verifying the canvas opacity reaches 0 after exiting graffiti mode, and that the `BE NICE!` notice appears.
- [x] Document the change (SPEC.md Fase 7, README.md) and capture a wiki observation.

## Verification
- `npx eslint components/GraffitiRuntime.tsx app/globals.css tests/e2e/11-graffiti.spec.ts` — pass
- `npx tsc --noEmit --pretty false` — pass
- `npx playwright test tests/e2e/11-graffiti.spec.ts` — 7 passed (incl. BE NICE! + fade + persisted strokes)
- `git diff --check` — pass
- Visual QA at 1440×900 — BE NICE! notice visible in Y2K palette on mode enter, canvas opacity transitions cleanly.
- Implementation note: chose CSS opacity transition (no `fadingOut` React state) so the layer fades declaratively and `pointer-events` flip immediately on toggle-off, while still keeping the strokes in PageData.
- Iteration 2 revalidation: ESLint/TypeScript/Playwright all green; suite remains 7/7 pass.
- Iteration 3 visual fix: user requested Win95 chrome for the BE NICE! notice (no bubble Y2K display font) and "only on while graffiti mode is on". Removed the Y2K display font + magenta chrome, replaced with proper `var(--win-face/--win-light/--win-shadow-deep)` chip using the pixel font, and bound the notice lifetime to `mode` directly (no auto-dismiss timer). Updated test #6 to assert BE NICE! stays visible while mode is on AND disappears on exit. ESLint/TypeScript/Playwright all green; suite 7/7 pass. Visual QA confirms the chip sits above the toolbar in Win95 chrome.
- Iteration 4 revalidation: ESLint/TypeScript/Playwright all green; suite remains 7/7 pass.
- Iteration 5 revalidation: ESLint/TypeScript/Playwright all green; suite remains 7/7 pass.
- Iteration 6 (final) revalidation: ESLint/TypeScript/Playwright all green; suite remains 7/7 pass. Loop complete.

## Decisions / Notes
- Use a CSS transition on `.graffiti-canvas` opacity to avoid manual rAF loops.
- Cursor hint and toolbar already disappear when `mode` flips to false; the canvas needs to behave similarly but with a fade.
- The `BE NICE!` notice should stay brief so it doesn't overwhelm the page; use the existing `.graffiti-notice` style and add `aria-live="polite"`.
- Keep total fade duration under 700ms so the toggle feels snappy.
