# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> smoke — every page >> videos (/videos/) loads cleanly
- Location: tests/e2e/smoke.spec.ts:58:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1').first()

```

```yaml
- banner:
  - text: Cremosa · Seletora · Curadoria · Discotecagem
  - navigation "Principal":
    - list:
      - listitem:
        - link "Início":
          - /url: /
          - button
      - listitem:
        - link "Agenda":
          - /url: /agenda/
          - button "Agenda"
      - listitem:
        - link "Música":
          - /url: /musica/
          - button "Música"
      - listitem:
        - link "Galeria":
          - /url: /galeria/
          - button "Galeria"
      - listitem:
        - link "Vídeos":
          - /url: /videos/
          - button "Vídeos"
      - listitem:
        - link "Sobre":
          - /url: /sobre/
          - button "Sobre"
      - listitem:
        - link "Contato":
          - /url: /contato/
          - button "Contato"
      - listitem:
        - link "Booking →":
          - /url: mailto:franciellipdias@gmail.com?subject=Booking%20%2F%20proposta%20de%20show
          - button "Booking →"
- main:
  - paragraph: // lives · sets filmados
  - img "@cremos4 channel banner"
  - img "@cremos4 avatar"
  - paragraph: CREMOSA
  - paragraph: "@cremos4"
  - paragraph: 8 vídeos · canal ativo
  - link "★ Subscribe":
    - /url: https://www.youtube.com/@cremos4?sub_confirmation=1
    - button "★ Subscribe"
  - paragraph: // em destaque
  - heading "Mais recentes" [level=2]
  - link "ver canal completo ↗":
    - /url: https://www.youtube.com/@cremos4
    - button "ver canal completo ↗"
  - text: youtube.exe — principal
  - button "Reproduzir baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]":
    - img "baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]"
  - paragraph: baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]
  - link "↗ YouTube":
    - /url: https://www.youtube.com/watch?v=2o0d2s5WBuA
    - button "↗ YouTube"
  - text: youtube.exe — set 2
  - 'button "Reproduzir baguncinha em casa 3 #djset"':
    - 'img "baguncinha em casa 3 #djset"'
  - paragraph: "baguncinha em casa 3 #djset"
  - link "↗ YouTube":
    - /url: https://www.youtube.com/watch?v=EEaDRLWC3Ds
    - button "↗ YouTube"
  - text: youtube.exe — set 3
  - button "Reproduzir domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes":
    - img "domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes"
  - paragraph: domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes
  - link "↗ YouTube":
    - /url: https://www.youtube.com/watch?v=LxOZZ7YF6e8
    - button "↗ YouTube"
  - paragraph: // arquivo
  - heading "Todos os vídeos" [level=2]
  - list:
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=2o0d2s5WBuA
        - article:
          - text: "@cremos4 · 2o0d2s5WBuA"
          - img "baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]"
          - paragraph: baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=EEaDRLWC3Ds
        - article:
          - text: "@cremos4 · EEaDRLWC3Ds"
          - 'img "baguncinha em casa 3 #djset"'
          - paragraph: "baguncinha em casa 3 #djset"
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=LxOZZ7YF6e8
        - article:
          - text: "@cremos4 · LxOZZ7YF6e8"
          - img "domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes"
          - paragraph: domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=Q2ueq_Hetao
        - article:
          - text: "@cremos4 · Q2ueq_Hetao"
          - 'img "baguncinha pop em casa #djset"'
          - paragraph: "baguncinha pop em casa #djset"
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=QjCSHgYK5Eo
        - article:
          - text: "@cremos4 · QjCSHgYK5Eo"
          - 'img "baguncinha d''levs em casa #djset"'
          - paragraph: "baguncinha d'levs em casa #djset"
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=cF-gz5nd1kU
        - article:
          - text: "@cremos4 · cF-gz5nd1kU"
          - 'img "baguncinha animada em casa #djset"'
          - paragraph: "baguncinha animada em casa #djset"
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=hjYRSZnOyCw
        - article:
          - text: "@cremos4 · hjYRSZnOyCw"
          - img "Cremosidades na Agoji Vibes"
          - paragraph: Cremosidades na Agoji Vibes
          - text: youtube.com ▶ assistir
    - listitem:
      - link:
        - /url: https://www.youtube.com/watch?v=uhrGVExy8as
        - article:
          - text: "@cremos4 · uhrGVExy8as"
          - 'img "nucleo vivo #2 djset cremosa [jungle x dnb x dub x house x funk]"'
          - paragraph: "nucleo vivo #2 djset cremosa [jungle x dnb x dub x house x funk]"
          - text: youtube.com ▶ assistir
  - text: cremosa — youtube channel
  - paragraph: // sobre o canal
  - paragraph:
    - text: Os vídeos vivem no YouTube porque é onde a audiência já está — cada set fica gravado em HD, com data e link永久 compartilhável. Quando algum vídeo novo sair, ele aparece aqui automaticamente (via o canal
    - link "@cremos4":
      - /url: https://www.youtube.com/@cremos4
    - text: ).
  - link "★ Subscribe":
    - /url: https://www.youtube.com/@cremos4?sub_confirmation=1
    - button "★ Subscribe"
  - link "↗ abrir canal":
    - /url: https://www.youtube.com/@cremos4
    - button "↗ abrir canal"
- contentinfo:
  - status "Barra de status":
    - text: ● Pronto · Porto Alegre, RS — Brasil Cremosa · desde 2016
    - link "Booking →":
      - /url: /contato/
    - text: 21:11
- alert
```

# Test source

```ts
  1   | import { test, expect, type Page } from "@playwright/test";
  2   | 
  3   | /**
  4   |  * Smoke test — every page should:
  5   |  *   - respond 200
  6   |  *   - render without console errors
  7   |  *   - have the SiteNav header
  8   |  *   - have the SiteFooter (status bar)
  9   |  *   - have a visible <h1> or page title
  10  |  *
  11  |  * Run with: `npx playwright test smoke`
  12  |  */
  13  | 
  14  | const PAGES = [
  15  |   { path: "/", name: "home (with press start)" },
  16  |   { path: "/?skipGate=1", name: "home (skip gate)" },
  17  |   { path: "/agenda/", name: "agenda" },
  18  |   { path: "/sobre/", name: "sobre" },
  19  |   { path: "/contato/", name: "contato" },
  20  |   { path: "/musica/", name: "musica" },
  21  |   { path: "/videos/", name: "videos" },
  22  |   { path: "/galeria/", name: "galeria" },
  23  | ] as const;
  24  | 
  25  | /**
  26  |  * Wrap each page in a helper that captures console errors and 4xx/5xx
  27  |  * responses. Returns an object the tests can assert against.
  28  |  */
  29  | async function loadPage(page: Page, path: string) {
  30  |   const errors: string[] = [];
  31  |   const badResponses: string[] = [];
  32  | 
  33  |   page.on("console", (msg) => {
  34  |     if (msg.type() === "error") errors.push(msg.text());
  35  |   });
  36  |   page.on("response", (response) => {
  37  |     if (response.status() >= 400) {
  38  |       badResponses.push(`${response.status()} ${response.url()}`);
  39  |     }
  40  |   });
  41  | 
  42  |   // /musica's auto-load + Web Audio requestAnimationFrame loop never
  43  |   // reaches a true "networkidle" state, so use domcontentloaded + a
  44  |   // short settle. Other pages go to networkidle so any late XHR /
  45  |   // image fetch is caught.
  46  |   const waitUntil = path.startsWith("/musica")
  47  |     ? "domcontentloaded"
  48  |     : "networkidle";
  49  |   const response = await page.goto(path, { waitUntil });
  50  |   // Give the page a moment to settle (CSS-in-JS keyframes, RAF).
  51  |   await page.waitForLoadState("domcontentloaded");
  52  |   await page.waitForTimeout(500);
  53  |   return { response, errors, badResponses };
  54  | }
  55  | 
  56  | test.describe("smoke — every page", () => {
  57  |   for (const { path, name } of PAGES) {
  58  |     test(`${name} (${path}) loads cleanly`, async ({ page }) => {
  59  |       const { response, errors, badResponses } = await loadPage(page, path);
  60  | 
  61  |       // 1. The page responded successfully.
  62  |       expect(response, `no response for ${path}`).not.toBeNull();
  63  |       expect(response!.status(), `${path} did not return 200`).toBe(200);
  64  | 
  65  |       // 2. No console errors (warnings/info are fine).
  66  |       // /musica has a known audio-context warning during dev that doesn't
  67  |       // affect production. We allow one specific warning there.
  68  |       const realErrors = errors.filter(
  69  |         (e) =>
  70  |           !path.startsWith("/musica") ||
  71  |           !/AudioContext|autoplay|NotAllowedError/i.test(e),
  72  |       );
  73  |       expect(
  74  |         realErrors,
  75  |         `console errors on ${path}:\n${realErrors.join("\n")}`,
  76  |       ).toEqual([]);
  77  | 
  78  |       // 3. No 4xx/5xx network responses (404s on assets etc.).
  79  |       const significant = badResponses.filter(
  80  |         (r) => !r.includes("favicon") && !r.includes("robots.txt"),
  81  |       );
  82  |       expect(
  83  |         significant,
  84  |         `bad network responses on ${path}:\n${significant.join("\n")}`,
  85  |       ).toEqual([]);
  86  | 
  87  |       // 4. SiteNav header + footer are present in the DOM. (Visible
  88  |       // only on non-splash pages; on `/` the splash hides the header.)
  89  |       await expect(page.locator("header").first()).toBeAttached();
  90  |       await expect(page.locator("footer").first()).toBeAttached();
  91  | 
  92  |       // 5. The page has a visible <h1> (or main heading).
  93  |       // On `/` (with splash) the home h1 is intentionally hidden until
  94  |       // the splash is dismissed.
  95  |       if (path !== "/") {
  96  |         const h1 = page.locator("h1").first();
> 97  |         await expect(h1).toBeVisible();
      |                          ^ Error: expect(locator).toBeVisible() failed
  98  |       }
  99  |     });
  100 |   }
  101 | });
  102 | 
  103 | test.describe("smoke — press start gate", () => {
  104 |   test("press start splash appears on /", async ({ page }) => {
  105 |     await page.goto("/");
  106 |     // Use getByLabel with a case-insensitive regex — the rendered
  107 |     // aria-label is "Press start to enter the Cremosa site" with a
  108 |     // capital P, so a plain CSS attr selector would miss it.
  109 |     const splash = page.getByRole("dialog", {
  110 |       name: /press start/i,
  111 |     });
  112 |     await expect(splash).toBeVisible();
  113 |     await expect(splash.getByText(/press start/i)).toBeVisible();
  114 |   });
  115 | 
  116 |   test("skip gate via ?skipGate=1 bypasses the splash", async ({ page }) => {
  117 |     await page.goto("/?skipGate=1");
  118 |     const splash = page.getByRole("dialog", { name: /press start/i });
  119 |     await expect(splash).toHaveCount(0);
  120 |     await expect(page.locator("h1").first()).toBeVisible();
  121 |   });
  122 | 
  123 |   test("clicking the splash reveals the home", async ({ page }) => {
  124 |     await page.goto("/");
  125 |     const splash = page.getByRole("dialog", { name: /press start/i });
  126 |     await expect(splash).toBeVisible();
  127 |     await splash.getByText(/press start/i).click();
  128 |     // Wait for the splash to fade out + unmount.
  129 |     await expect(splash).toHaveCount(0, { timeout: 5_000 });
  130 |     await expect(page.locator("h1").first()).toBeVisible();
  131 |   });
  132 | 
  133 |   test("site nav is hidden while splash is showing", async ({ page }) => {
  134 |     await page.goto("/");
  135 |     // body[data-gate-active="true"] → CSS hides the SiteNav header.
  136 |     const dataAttr = await page.evaluate(() =>
  137 |       document.body.getAttribute("data-gate-active"),
  138 |     );
  139 |     expect(dataAttr).toBe("true");
  140 |   });
  141 | });
  142 | 
  143 | test.describe("smoke — static assets", () => {
  144 |   test("favicon resolves", async ({ request }) => {
  145 |     const res = await request.get("/favicon.ico");
  146 |     // favicon.ico may 404 in dev; only require it for static export
  147 |     // builds. For now we tolerate any response < 500.
  148 |     expect(res.status()).toBeLessThan(500);
  149 |   });
  150 | 
  151 |   test("audio files in /public/audio/ are accessible", async ({ request }) => {
  152 |     // Just check the default track for now — the others can be
  153 |     // smoke-tested if this passes.
  154 |     const res = await request.get("/audio/20-minutinhos.mp3");
  155 |     // Audio is static-exported; in dev it may not be served by Next
  156 |     // but should be when running against the production build.
  157 |     if (res.status() !== 200) {
  158 |       test.skip(true, "Audio not accessible (probably dev server)");
  159 |     }
  160 |   });
  161 | });
  162 | 
```