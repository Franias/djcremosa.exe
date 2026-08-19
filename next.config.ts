import type { NextConfig } from "next";

/**
 * Next.js configuration for Cremosa.
 *
 * `output: 'export'` → site generates as static HTML/CSS/JS in `./out/`,
 * ready to publish to GitHub Pages (or any static host).
 *
 * `basePath` is conditional:
 *   - In **dev**, `''` so `http://localhost:3000/` IS the site (the
 *     "Press Start" gate lands you directly at the home page).
 *   - In **production**, `'/djcremosa'` so GitHub Pages serves the site
 *     at `https://<user>.github.io/djcremosa/`. The deploy workflow
 *     exports `NEXT_PUBLIC_BASE_PATH` accordingly so asset URLs also
 *     include the prefix.
 *
 * If you ever wire up a custom domain, set both values to `''`.
 *
 * Caveat: dynamic server features (searchParams as Promise, cookies,
 * server actions, API routes) become client-side. The agenda filter is
 * handled by a client component using `useSearchParams`.
 */
const isDev = process.env.NODE_ENV === "development";
// Default fallback matches the GitHub Pages repo slug. Update
// both this and the deploy workflow's NEXT_PUBLIC_BASE_PATH
// when the repo is renamed. 2026-07-16: moved to djcremosa.exe.
const basePath = isDev
  ? ""
  : (process.env.NEXT_PUBLIC_BASE_PATH ?? "/djcremosa.exe");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    // Frozen at build time so every client running the same bundle
    // shares the same "last deploy" anchor. Used by `GraffitiRuntime`
    // to wipe the collaborative mural on every push: any visitor whose
    // built bundle is newer than the shared `lastResetAt` resets the
    // canvas. Override via NEXT_PUBLIC_BUILD_TIMESTAMP in CI to make
    // the stamp deterministic (defaults to `Date.now()` on the
    // machine running the build).
    NEXT_PUBLIC_BUILD_TIMESTAMP: String(
      process.env.NEXT_PUBLIC_BUILD_TIMESTAMP ?? Date.now(),
    ),
    NEXT_PUBLIC_BUILD_SHA: process.env.NEXT_PUBLIC_BUILD_SHA ?? "local",
  },
};

export default nextConfig;
