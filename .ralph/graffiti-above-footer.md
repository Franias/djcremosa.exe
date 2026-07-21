# Move graffiti toolbar and cursor hint above the footer

## Goals
- Pin both `.graffiti-toolbar` and `.graffiti-cursor-hint` above the site footer/status bar (i.e., bottom-anchored but offset enough that they never collide with the Win95 status bar, even on small phones).
- Keep `graffiti-toggle` accessible and unobstructed; keep the existing spray-can cursor, palette, sizes, and live-status label behavior.
- Preserve the responsive behavior (mobile vs desktop) and the existing safe-area accounting.

## Checklist
- [x] Inspect current global footer/status bar geometry and select a bottom offset that clears it on desktop and mobile viewports.
- [x] Update `.graffiti-toolbar`, `.graffiti-toggle`, `.graffiti-cursor-hint`, and `.graffiti-notice` so they sit above the footer (`bottom: max(...)` instead of `top: max(...)`); remove the temporary desktop offsets where they no longer apply.
- [x] Adjust mobile breakpoint rules so the toolbar/toggle/hint fit the smaller viewport without colliding with the footer or with each other.
- [x] Run ESLint on touched files; type-check; rerun the graffiti Playwright suite; visually QA via headless screenshot at 1440×900 and 390×844.
- [x] Document the change in `.ralph/graffiti-above-footer.md` and `SPEC.md` if needed.

## Verification
- Desktop 1440×900: toolbar `top:774 bottom:812`, toggle `top:770 bottom:808`, footer `top:836 bottom:900` — toolbar/toggle sit clearly above the footer with a 24px gap.
- Mobile 390×844: toolbar `top:730 bottom:768`, toggle `top:730 bottom:768`, footer `top:793 bottom:844` — 25px gap, mobile toolbar still leaves room for content.
- `npx eslint components/GraffitiRuntime.tsx` — pass
- `npx tsc --noEmit --pretty false` — pass
- `npx playwright test tests/e2e/11-graffiti.spec.ts` — 4 passed
- `git diff --check` — pass
- Iteration 1 revalidation: ESLint/TypeScript/Playwright still green after the loop entry.

## Decisions / Notes
- Keep `graffiti-canvas` as a viewport-sized sheet of glass (full screen) — only the UI affordances move.
- Footer is `Win95StatusBar` rendered by `SiteFooter`; its height is roughly 1.6rem (24px) plus a 1px border. Plan a bottom offset of ~`3rem` so the toolbar/toggle/hint float clearly above it on desktop.
- On mobile (≤640px), the toggle may collide with the toolbar if both are bottom-anchored at the same line — split them: toolbar on the left, toggle on the right, both above the footer; cursor-hint remains pointer-following.
- Reuse existing CSS tokens (`--win-face`, `--win-shadow-deep`, etc.) so the new placement keeps the Win95 chrome aesthetic.
- Final desktop offset uses `bottom: max(5.5rem, env(safe-area-inset-bottom) + 4.75rem)` for the toolbar and `bottom: max(5.75rem, env(safe-area-inset-bottom) + 5rem)` for the toggle; mobile uses `bottom: max(4.75rem, env(safe-area-inset-bottom) + 4rem)` for both. Cursor hint clamp uses `POINTER_HINT_BOTTOM_GUTTER = 96` so it floats above the toolbar line.