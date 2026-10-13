"use client";

/**
 * AgendaInstructions — small client wrapper around the agenda
 * page's "instructions" dialog. The two buttons (`Imprimir`,
 * `OK`) need browser APIs to function so they live in a client
 * component.
 *
 * Mirrors the `HomeAbout` "cremosa — propriedades" pattern:
 * - OK: dismisses the dialog into a "(fechado) · reabrir" strip.
 * - reabrir: brings the dialog back.
 * The window uses `controls` (not `closeable`), so the title-bar
 * glyphs stay decorative and only the OK button closes it.
 */
import { useState } from "react";
import { Win95Button, Win95Window } from "@/components/ui/win95";

export function AgendaInstructions() {
  const [open, setOpen] = useState(true);

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  function handleOk() {
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="win95-bevel-out bg-win-face p-[2px] w-full text-left"
      >
        <div className="win95-bevel-deep-in bg-win-face px-4 py-3 text-win-ink win-eyebrow hover:bg-bubble/10">
          agenda - instruções (fechado) · reabrir
        </div>
      </button>
    );
  }

  return (
    <Win95Window title="agenda - instruções" controls>
      <div className="p-4 sm:p-5 bg-win-face text-win-ink flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p className="win-body-sm">
          Próximos shows, festivais e residências. Ingressos pelo link.
        </p>
        <div className="flex gap-2 shrink-0">
          <Win95Button onClick={handlePrint}>Imprimir</Win95Button>
          <Win95Button onClick={handleOk} focused>
            OK
          </Win95Button>
        </div>
      </div>
    </Win95Window>
  );
}
