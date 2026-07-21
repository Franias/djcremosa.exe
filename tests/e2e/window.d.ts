import type { PlayHTMLComponents } from "playhtml";

export {};

declare global {
  interface Window {
    __printCalled: number;
    playhtml: PlayHTMLComponents;
    createPageData?: PlayHTMLComponents["createPageData"];
    presence?: PlayHTMLComponents["presence"];
  }
}