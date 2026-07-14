# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07-videos.spec.ts >> 07 — Vídeos >> hero shows VÍDEOS bubble title
- Location: tests/e2e/07-videos.spec.ts:22:7

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
    - text: 21:10
- alert
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | /**
  4   |  * 07 — Vídeos (/videos/)
  5   |  *
  6   |  * The videos page shows:
  7   |  *   - Channel header card (banner + avatar + subscribe button)
  8   |  *   - 3 featured YouTube players (lite-embed pattern)
  9   |  *   - 7-8 archive cards (click to open in YouTube directly)
  10  |  *   - Footer dialog with Subscribe + abrir canal buttons
  11  |  *
  12  |  * Tests verify the channel metadata, the lite-embed click-to-play
  13  |  * behavior, and the external YouTube links (target=_blank).
  14  |  */
  15  | 
  16  | test.describe("07 — Vídeos", () => {
  17  |   test.beforeEach(async ({ page }) => {
  18  |     await page.goto("/?skipGate=1");
  19  |     await page.goto("/videos/");
  20  |   });
  21  | 
  22  |   test("hero shows VÍDEOS bubble title", async ({ page }) => {
  23  |     const h1 = page.locator("h1").first();
> 24  |     await expect(h1).toBeVisible();
      |                      ^ Error: expect(locator).toBeVisible() failed
  25  |     await expect(h1).toContainText("VÍDEOS");
  26  |   });
  27  | 
  28  |   test("channel header card renders with banner + avatar", async ({
  29  |     page,
  30  |   }) => {
  31  |     // Banner image
  32  |     const banner = page.locator('img[alt*="channel banner"]').first();
  33  |     await expect(banner).toBeVisible();
  34  |     await expect(banner).toHaveAttribute(
  35  |       "src",
  36  |       /yt3\.googleusercontent\.com/,
  37  |     );
  38  | 
  39  |     // Avatar image (smaller, in the meta row)
  40  |     const avatar = page.locator('img[alt*="avatar"]').first();
  41  |     await expect(avatar).toBeVisible();
  42  |     await expect(avatar).toHaveAttribute("src", /yt3\.googleusercontent\.com/);
  43  |   });
  44  | 
  45  |   test("channel meta shows CREMOSA + @cremos4 + video count", async ({
  46  |     page,
  47  |   }) => {
  48  |     // Channel name (title-text class)
  49  |     await expect(
  50  |       page.locator(".win95-title-text").filter({ hasText: "CREMOSA" }).first(),
  51  |     ).toBeVisible();
  52  | 
  53  |     // Handle
  54  |     await expect(page.getByText("@cremos4").first()).toBeVisible();
  55  | 
  56  |     // Video count (any number followed by "vídeos")
  57  |     const countText = await page.getByText(/vídeos · canal ativo/).first().textContent();
  58  |     expect(countText).toMatch(/\d+\s*v[íi]deos/);
  59  |   });
  60  | 
  61  |   test("hero Subscribe button opens youtube with sub_confirmation=1", async ({
  62  |     page,
  63  |   }) => {
  64  |     const subscribeLink = page
  65  |       .getByRole("link", { name: /subscribe/i })
  66  |       .first();
  67  |     await expect(subscribeLink).toBeVisible();
  68  |     await expect(subscribeLink).toHaveAttribute("target", "_blank");
  69  |     await expect(subscribeLink).toHaveAttribute(
  70  |       "href",
  71  |       "https://www.youtube.com/@cremos4?sub_confirmation=1",
  72  |     );
  73  |   });
  74  | 
  75  |   test("'ver canal completo' opens youtube.com/@cremos4 (no sub_confirmation)", async ({
  76  |     page,
  77  |   }) => {
  78  |     const link = page
  79  |       .getByRole("link", { name: /ver canal completo/i })
  80  |       .first();
  81  |     await expect(link).toBeVisible();
  82  |     await expect(link).toHaveAttribute("target", "_blank");
  83  |     await expect(link).toHaveAttribute(
  84  |       "href",
  85  |       "https://www.youtube.com/@cremos4",
  86  |     );
  87  |   });
  88  | 
  89  |   test("3 featured YouTube players are present", async ({ page }) => {
  90  |     // Featured player thumbnails are buttons with a Reproduzir aria-label
  91  |     const featuredPlayers = page.getByRole("button", {
  92  |       name: /reproduzir/i,
  93  |     });
  94  |     const count = await featuredPlayers.count();
  95  |     expect(count).toBe(3);
  96  |   });
  97  | 
  98  |   test("clicking a featured player mounts the YouTube iframe", async ({
  99  |     page,
  100 |   }) => {
  101 |     // First featured player — click its thumbnail button
  102 |     const firstPlayer = page
  103 |       .getByRole("button", { name: /reproduzir/i })
  104 |       .first();
  105 |     await firstPlayer.click();
  106 | 
  107 |     // An iframe should now exist with youtube.com/embed
  108 |     const iframe = page.locator('iframe[src*="youtube.com/embed"]');
  109 |     await expect(iframe).toBeVisible({ timeout: 5_000 });
  110 |     const src = await iframe.getAttribute("src");
  111 |     expect(src).toMatch(/youtube\.com\/embed\//);
  112 |     expect(src).toContain("autoplay=1");
  113 |   });
  114 | 
  115 |   test("'↗ YouTube' link in player footer opens watch page", async ({
  116 |     page,
  117 |   }) => {
  118 |     // The footer link in each player opens youtube.com/watch?v=ID
  119 |     const watchLink = page
  120 |       .locator('a[href*="youtube.com/watch?v="]')
  121 |       .first();
  122 |     await expect(watchLink).toBeVisible();
  123 |     await expect(watchLink).toHaveAttribute("target", "_blank");
  124 |     const href = await watchLink.getAttribute("href");
```