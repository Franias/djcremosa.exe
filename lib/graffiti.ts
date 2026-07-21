import type { PageDataChannel } from "playhtml";

export const GRAFFITI_DATA_CHANNEL = "site-graffiti-strokes";
export const GRAFFITI_PRESENCE_CHANNEL = "site-graffiti-active-stroke";

/** Keep the public mural useful and bounded even if it is used for years. */
export const MAX_GRAFFITI_STROKES = 320;
export const MAX_GRAFFITI_POINTS = 128;
export const MAX_GRAFFITI_PREVIEW_POINTS = 24;
export const MAX_STROKES_PER_MINUTE = 40;

/** Author identification so the per-browser eraser only removes its own
 *  strokes without touching other visitors' paintings. */
export const GRAFFITI_AUTHOR_KEY = "cremosa-graffiti-author";
export const GRAFFITI_AUTHOR_LENGTH = 12;

export const GRAFFITI_COLORS = [
  "#c8152e",
  "#d6307a",
  "#ff6fa3",
  "#ffb3cf",
  "#fffefe",
] as const;

/** Spray size range used by the toolbar slider (CSS pixels). */
export const GRAFFITI_SIZE_MIN = 8;
export const GRAFFITI_SIZE_MAX = 96;
export const GRAFFITI_SIZE_DEFAULT = 40;
export const GRAFFITI_SIZE_STEP = 2;

export type GraffitiPoint = [x: number, y: number];

export interface GraffitiStroke {
  id: string;
  /** Stable per-browser identifier of whoever painted the stroke. */
  author: string;
  points: GraffitiPoint[];
  color: string;
  size: number;
  seed: number;
  createdAt: number;
}

export interface GraffitiData {
  version: 1;
  strokes: GraffitiStroke[];
}

export interface GraffitiPreview {
  id: string;
  active: true;
  author: string;
  points: GraffitiPoint[];
  color: string;
  size: number;
  seed: number;
}

export type GraffitiDataChannel = PageDataChannel<GraffitiData>;

export const EMPTY_GRAFFITI_DATA: GraffitiData = {
  version: 1,
  strokes: [],
};

const COLOR_SET = new Set<string>(GRAFFITI_COLORS);

function isPoint(value: unknown): value is GraffitiPoint {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    Number.isFinite(value[0]) &&
    typeof value[1] === "number" &&
    Number.isFinite(value[1])
  );
}

function clampUnit(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function clampSize(value: number): number {
  if (!Number.isFinite(value)) return GRAFFITI_SIZE_DEFAULT;
  return Math.max(
    GRAFFITI_SIZE_MIN,
    Math.min(GRAFFITI_SIZE_MAX, Math.round(value)),
  );
}

function sanitizeAuthor(value: unknown): string {
  if (typeof value !== "string") return "anon";
  return value.slice(0, GRAFFITI_AUTHOR_LENGTH).replace(/[^a-z0-9]/gi, "") || "anon";
}

function sanitizePoints(value: unknown, limit: number): GraffitiPoint[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter(isPoint)
    .slice(-limit)
    .map(([x, y]) => [clampUnit(x), clampUnit(y)] as GraffitiPoint);
}

function sanitizeStroke(value: unknown): GraffitiStroke | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<GraffitiStroke>;
  const points = sanitizePoints(candidate.points, MAX_GRAFFITI_POINTS);
  if (
    typeof candidate.id !== "string" ||
    points.length === 0 ||
    typeof candidate.color !== "string" ||
    !COLOR_SET.has(candidate.color) ||
    typeof candidate.size !== "number" ||
    !Number.isFinite(candidate.size) ||
    typeof candidate.seed !== "number" ||
    !Number.isFinite(candidate.seed)
  ) {
    return null;
  }

  return {
    id: candidate.id.slice(0, 80),
    author: sanitizeAuthor(candidate.author),
    points,
    color: candidate.color,
    size: clampSize(candidate.size),
    seed: Math.floor(candidate.seed),
    createdAt:
      typeof candidate.createdAt === "number" && Number.isFinite(candidate.createdAt)
        ? candidate.createdAt
        : Date.now(),
  };
}

/** Sanitize public shared data before it reaches the canvas renderer. */
export function sanitizeGraffitiData(value: unknown): GraffitiData {
  if (!value || typeof value !== "object") return EMPTY_GRAFFITI_DATA;
  const candidate = value as Partial<GraffitiData>;
  const strokes = Array.isArray(candidate.strokes)
    ? candidate.strokes
        .map(sanitizeStroke)
        .filter((stroke): stroke is GraffitiStroke => stroke !== null)
        .slice(-MAX_GRAFFITI_STROKES)
    : [];

  return { version: 1, strokes };
}

export function sanitizeGraffitiPreview(value: unknown): GraffitiPreview | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Partial<GraffitiPreview>;
  const points = sanitizePoints(candidate.points, MAX_GRAFFITI_PREVIEW_POINTS);
  if (
    candidate.active !== true ||
    typeof candidate.id !== "string" ||
    points.length === 0 ||
    typeof candidate.color !== "string" ||
    !COLOR_SET.has(candidate.color) ||
    typeof candidate.size !== "number" ||
    !Number.isFinite(candidate.size) ||
    typeof candidate.seed !== "number" ||
    !Number.isFinite(candidate.seed)
  ) {
    return null;
  }

  return {
    active: true,
    id: candidate.id.slice(0, 80),
    author: sanitizeAuthor(candidate.author),
    points,
    color: candidate.color,
    size: clampSize(candidate.size),
    seed: Math.floor(candidate.seed),
  };
}

/** Deterministic pseudo-random generator so every visitor sees the same spray. */
function random(seed: number): () => number {
  let state = (seed | 0) || 1;
  return () => {
    state = (state * 1664525 + 1013904223) | 0;
    return (state >>> 0) / 4294967296;
  };
}

function drawSprayStamp(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
  nextRandom: () => number,
): void {
  // Dense brush: more particles, larger core, higher alpha floor,
  // tighter spread. Determinism is preserved via the same seeded PRNG.
  const particles = Math.max(28, Math.round(size * 1.6));
  for (let index = 0; index < particles; index += 1) {
    const angle = nextRandom() * Math.PI * 2;
    const radial = Math.sqrt(nextRandom());
    const distance = radial * size * 0.7;
    // Two-layer particle radii: most are a fine mist, a small share
    // are heavier pigment dabs that anchor the stroke visually.
    const isCore = nextRandom() < 0.32;
    const radius = isCore
      ? 0.95 + nextRandom() * Math.max(1.2, size / 12)
      : 0.55 + nextRandom() * Math.max(0.8, size / 22);
    context.globalAlpha = isCore
      ? 0.55 + nextRandom() * 0.35
      : 0.28 + nextRandom() * 0.32;
    context.fillStyle = color;
    context.beginPath();
    context.arc(
      x + Math.cos(angle) * distance,
      y + Math.sin(angle) * distance,
      radius,
      0,
      Math.PI * 2,
    );
    context.fill();
  }

  // Center dab so consecutive stamps fuse into a continuous brush stroke.
  context.globalAlpha = 0.85;
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, Math.max(0.8, size / 14), 0, Math.PI * 2);
  context.fill();
}

/** Paint one normalized stroke onto a viewport-sized canvas. */
export function drawGraffitiStroke(
  context: CanvasRenderingContext2D,
  stroke: Pick<GraffitiStroke, "points" | "color" | "size" | "seed">,
  width: number,
  height: number,
): void {
  if (stroke.points.length === 0) return;
  const nextRandom = random(stroke.seed);
  const points = stroke.points.map(([x, y]) => [x * width, y * height] as const);

  context.save();
  context.lineCap = "round";
  context.lineJoin = "round";

  const paintPoint = (x: number, y: number) => {
    drawSprayStamp(context, x, y, stroke.size, stroke.color, nextRandom);
  };

  paintPoint(points[0][0], points[0][1]);
  for (let index = 1; index < points.length; index += 1) {
    const [fromX, fromY] = points[index - 1];
    const [toX, toY] = points[index];
    const distance = Math.hypot(toX - fromX, toY - fromY);
    const steps = Math.max(
      1,
      Math.ceil(distance / Math.max(3, stroke.size / 4)),
    );
    for (let step = 1; step <= steps; step += 1) {
      const progress = step / steps;
      paintPoint(
        fromX + (toX - fromX) * progress,
        fromY + (toY - fromY) * progress,
      );
    }
  }

  context.restore();
  context.globalAlpha = 1;
}

/** Random base36 author id, length-preserving and stable across reloads. */
export function generateGraffitiAuthorId(): string {
  let id = "";
  while (id.length < GRAFFITI_AUTHOR_LENGTH) {
    id += Math.floor(Math.random() * 36 ** 8).toString(36);
  }
  return id.slice(0, GRAFFITI_AUTHOR_LENGTH);
}

const SHARE_CAPTION = "CONTRACT CREMOSA FOR YOU SHOW";

/**
 * Compose the current painted mural as a share-ready PNG.
 *
 * Output format:
 *  - Outer Win95-styled frame with chunky bevels (matches the rest of
 *    the site: light/face/shadow tokens).
 *  - Magenta title bar reading "graffiti.exe · CREMOSA".
 *  - The painted mural is blitted into the inset drawing area at its
 *    native viewport size.
 *  - A magenta framed caption strip at the bottom says
 *    "CONTRACT CREMOSA FOR YOU SHOW" in the pixel font.
 *
 * Resolves to a PNG Blob the caller can save via `<a download>` or
 * pass to `navigator.share({ files: [...] })`.
 */
export async function composShareImage(
  source: HTMLCanvasElement,
  options: { title?: string } = {},
): Promise<{ blob: Blob; filename: string; dataUrl: string }> {
  const sourceWidth = source.width;
  const sourceHeight = source.height;
  // CSS-pixel dims we use to lay the chrome out; the source canvas is
  // multiplied by the device pixel ratio so we need to undo that for
  // the visible composition.
  const cssWidth = sourceWidth / (source.dataset.pixelRatio
    ? Number(source.dataset.pixelRatio)
    : 1);
  const cssHeight = sourceHeight / (source.dataset.pixelRatio
    ? Number(source.dataset.pixelRatio)
    : 1);

  // Margins + chrome sizing
  const outerPadding = 24;
  const titleBarHeight = 38;
  const captionBarHeight = 110;
  const canvasWidth = Math.round(cssWidth + outerPadding * 2);
  const canvasHeight = Math.round(
    cssHeight + outerPadding * 2 + titleBarHeight + captionBarHeight,
  );

  const off = document.createElement("canvas");
  off.width = canvasWidth;
  off.height = canvasHeight;
  const context = off.getContext("2d");
  if (!context) {
    throw new Error("could not acquire 2d context for share canvas");
  }

  // Win95 palette resolved locally so the share image is portable.
  const winFace = "#c0c0c0";
  const winFace2 = "#d4d0c8";
  const winLight = "#ffffff";
  const winShadow = "#808080";
  const winShadowDeep = "#404040";
  const winInk = "#000000";
  const magenta = "#d6307a";
  const magentaDeep = "#8a0d1f";
  const crimson = "#c8152e";

  // Outer body fill (Win95 face)
  context.fillStyle = winFace;
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  // Bottom shadow + top highlight: chunky 3D bevel on the whole frame.
  context.fillStyle = winShadowDeep;
  context.fillRect(0, 0, canvasWidth, outerPadding);
  context.fillRect(0, canvasHeight - outerPadding, canvasWidth, outerPadding);
  context.fillRect(0, 0, outerPadding, canvasHeight);
  context.fillStyle = winLight;
  context.fillRect(canvasWidth - outerPadding, 0, outerPadding, canvasHeight);
  context.fillRect(0, 0, canvasWidth, outerPadding);
  context.fillRect(0, canvasHeight - outerPadding, canvasWidth, outerPadding);
  context.fillRect(0, 0, outerPadding, canvasHeight);

  // Inset face (slightly darker than the body to read as a window)
  context.fillStyle = winFace2;
  context.fillRect(
    outerPadding,
    outerPadding,
    canvasWidth - outerPadding * 2,
    canvasHeight - outerPadding * 2,
  );

  // Title bar — magenta gradient (Y2K + Win95-ish)
  const titleGradient = context.createLinearGradient(
    0,
    outerPadding,
    0,
    outerPadding + titleBarHeight,
  );
  titleGradient.addColorStop(0, magenta);
  titleGradient.addColorStop(1, magentaDeep);
  context.fillStyle = titleGradient;
  context.fillRect(
    outerPadding,
    outerPadding,
    canvasWidth - outerPadding * 2,
    titleBarHeight,
  );

  // Title text in pixel-style (we use system mono so the canvas doesn't
  // depend on the loaded web font; reads as VT323-ish on every browser).
  context.fillStyle = winLight;
  context.font =
    'bold 18px "VT323", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';
  context.textBaseline = "middle";
  context.fillText(
    options.title ?? "graffiti.exe · CREMOSA",
    outerPadding + 14,
    outerPadding + titleBarHeight / 2 + 1,
  );

  // Window control boxes (right side, like Win95 minimize/maximize/close)
  const controlY = outerPadding + titleBarHeight / 2 - 7;
  const controlX = canvasWidth - outerPadding - 18 * 3 - 8;
  context.fillStyle = winFace;
  context.fillRect(controlX, controlY, 16, 14);
  context.fillRect(controlX + 18, controlY, 16, 14);
  context.fillRect(controlX + 36, controlY, 16, 14);
  context.fillStyle = winShadowDeep;
  context.fillRect(controlX, controlY + 14, 16, 2);
  context.fillRect(controlX + 18, controlY + 14, 16, 2);
  context.fillRect(controlX + 36, controlY + 14, 16, 2);
  context.fillStyle = winShadow;
  context.fillRect(controlX + 14, controlY, 2, 14);
  context.fillRect(controlX + 32, controlY, 2, 14);
  context.fillRect(controlX + 50, controlY, 2, 14);

  // Inner well where the painted mural goes (sunken)
  const wellX = outerPadding + 8;
  const wellY = outerPadding + titleBarHeight + 8;
  const wellW = canvasWidth - outerPadding * 2 - 16;
  const wellH = cssHeight;
  context.fillStyle = winShadowDeep;
  context.fillRect(wellX - 1, wellY - 1, wellW + 2, wellH + 2);
  context.fillStyle = winLight;
  context.fillRect(wellX, wellY, wellW, wellH);

  // Blit the source mural at its CSS pixel size (preserve DPR strokes).
  context.drawImage(
    source,
    0,
    0,
    sourceWidth,
    sourceHeight,
    wellX,
    wellY,
    wellW,
    wellH,
  );

  // Caption strip — magenta bar with the "CONTRACT CREMOSA FOR YOU SHOW"
  // text centered in pixel font. Top + bottom highlight strip for the
  // classic Win95 bevel.
  const captionY = wellY + wellH + 16;
  const captionX = outerPadding + 8;
  const captionW = canvasWidth - outerPadding * 2 - 16;
  context.fillStyle = crimson;
  context.fillRect(captionX - 4, captionY - 4, captionW + 8, captionBarHeight - 8);

  context.fillStyle = winShadowDeep;
  context.fillRect(
    captionX,
    captionY + captionBarHeight - 12,
    captionW,
    2,
  );
  context.fillStyle = winLight;
  context.fillRect(captionX, captionY, captionW, 2);

  context.fillStyle = winInk;
  context.font =
    'bold 28px "VT323", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(
    SHARE_CAPTION,
    captionX + captionW / 2,
    captionY + captionBarHeight / 2 - 4,
  );

  context.fillStyle = winFace;
  context.font = '12px "VT323", ui-monospace, monospace';
  context.fillText(
    `djcremosa.com.br · ${new Date().toISOString().slice(0, 10)}`,
    captionX + captionW / 2,
    captionY + captionBarHeight - 22,
  );

  context.textAlign = "start";

  const blob: Blob = await new Promise((resolve, reject) => {
    off.toBlob(
      (result) =>
        result ? resolve(result) : reject(new Error("toBlob returned null")),
      "image/png",
    );
  });
  const dataUrl = off.toDataURL("image/png");
  const filename = `cremosa-graffiti-${Date.now()}.png`;
  return { blob, filename, dataUrl };
}

export const SHARE_IMAGE_CAPTION = SHARE_CAPTION;
