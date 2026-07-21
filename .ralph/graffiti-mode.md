# Site-wide collaborative graffiti mode

Implement a site-wide graffiti mood for DJ Cremosa using the existing static Next.js export and playhtml 2.13.1 realtime service.

## Goals
- Press `G` anywhere outside editable controls to toggle graffiti mode on/off.
- Show a spray-can cursor with a nearby instruction label; use Portuguese site copy while retaining the requested G interaction.
- Let users spray-paint over the site via pointer/touch drag without changing layout or breaking normal navigation when inactive.
- Synchronize finalized strokes persistently with playhtml PageData so visitors see the shared mural after reloads and on every route.
- Synchronize active stroke previews ephemerally with playhtml Presence so other visitors see painting happen live.
- Keep the feature safe for a public room: bounded stroke/point payloads, local rate limiting, no arbitrary HTML, graceful realtime failure.
- Preserve GitHub Pages static export and existing visitor metrics initialization.
- Add accessible controls, reduced-motion/mobile behavior, and Playwright coverage.

## Checklist
- [x] Extract/reuse a singleton playhtml loader so visitor metrics and graffiti share one initialized room.
- [x] Add graffiti data types, deterministic spray rendering helpers, bounded persistence and presence channel constants.
- [x] Build the client graffiti runtime/layer with G toggle, pointer capture, responsive canvas, custom cursor/hint, palette/size controls, and clean-mode pass-through.
- [x] Integrate the runtime at the root layout and add Win95/Y2K styling without interfering with existing chrome.
- [x] Add tests for toggle behavior, editable-field exemption, drawing, inactive click-through, and static-export-safe realtime failure.
- [x] Run relevant ESLint/Playwright checks and production build; full lint reports only pre-existing unrelated errors.
- [x] Update README/SPEC docs and capture durable wiki observations/retro.

## Verification
- `npx eslint components/GraffitiRuntime.tsx lib/graffiti.ts lib/playhtml.ts lib/visitorStats.ts content/text-files.ts tests/e2e/11-graffiti.spec.ts` — pass
- `npx tsc --noEmit --pretty false` — pass
- `npx playwright test tests/e2e/11-graffiti.spec.ts` — 4 passed
- `npm run build` — pass; audio source warning only, deploys without local audio
- `git diff --check` — pass
- `npm run lint` — existing errors remain in `PressStartGate.tsx` and `Paint95TextEditor.tsx` (`react-hooks/set-state-in-effect`); no errors in graffiti files
- Iteration 2 revalidation: `npx tsc --noEmit --pretty false`, `git diff --check`, and graffiti Playwright suite all pass; working tree contains only the documented implementation/docs files plus Ralph state.

## Decisions / Notes
- Recommended default: one global viewport mural shared across all routes. Strokes use normalized viewport coordinates so they remain responsive across devices and route changes.
- Use PageData for finalized strokes and Presence for active stroke previews. playhtml's public hosted room is intentionally unencrypted, so graffiti payloads must remain public/non-sensitive.
- Do not add a destructive public clear button in the first pass; cap the mural and leave moderation/reset as a follow-up.
- The site is Portuguese; hints are `PRESSIONE G PARA GRAFITAR` and active-mode `G PARA SAIR · ARRASTE PARA PULVERIZAR`.
- The completed implementation lives in `components/GraffitiRuntime.tsx`, `lib/graffiti.ts`, `lib/playhtml.ts`, `public/cursors/spray-can.svg`, and root layout/CSS integration.
- The Playwright suite is `tests/e2e/11-graffiti.spec.ts`.
- Build also surfaced and fixed an existing `TextFile` manifest/type mismatch (`content/text-files.ts`) and missing test `Window.__printCalled` declaration; these are unrelated but required for a clean production type check.
