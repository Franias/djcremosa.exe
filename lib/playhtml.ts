"use client";

import type { PlayHTMLComponents } from "playhtml";

/** Shared public playhtml room used by all site-wide collaborative features. */
export const SITE_ROOM = "dj-cremosa-site";

let playhtmlPromise: Promise<PlayHTMLComponents | null> | null = null;

/**
 * Load playhtml only in the browser. Its runtime touches `document` while
 * evaluating, so importing it from a server component would break the static
 * Next.js export. The singleton also prevents visitor metrics and graffiti
 * from opening separate connections to the same room.
 */
export function loadPlayhtml(): Promise<PlayHTMLComponents | null> {
  if (!playhtmlPromise) {
    playhtmlPromise = import("playhtml")
      .then(async ({ playhtml }) => {
        await playhtml.init({
          room: SITE_ROOM,
          onError: () => {
            console.warn("[cremosa] realtime service unavailable");
          },
        });
        return playhtml;
      })
      .catch(() => null);
  }

  return playhtmlPromise;
}
