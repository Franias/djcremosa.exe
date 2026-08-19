# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-home.spec.ts >> 02 — Home page >> welcome chip 'cremosa.exe — welcome' is visible
- Location: tests/e2e/02-home.spec.ts:24:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=cremosa.exe — welcome').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=cremosa.exe — welcome').first()

```

```yaml
- button "Ativar modo graffiti": G · GRAFFITI
- banner:
  - text: Cremosa · Seletora · Curadoria · Discotecagem
  - navigation "Principal":
    - list:
      - listitem:
        - link "Início":
          - /url: /
          - button
      - listitem:
        - link "DJ Verbosa":
          - /url: /dj-verbosa/
          - button "DJ Verbosa"
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
  - heading "Cremosa — Início" [level=1]
  - link "Agenda":
    - /url: /agenda/
    - text: Agenda Ir para Agenda
  - link "Música":
    - /url: /musica/
    - text: Música Ir para Música
  - link "Galeria":
    - /url: /galeria/
    - text: Galeria Ir para Galeria
  - link "Vídeos":
    - /url: /videos/
    - text: Vídeos Ir para Vídeos
  - link "Sobre":
    - /url: /sobre/
    - text: Sobre Ir para Sobre
  - link "Contato":
    - /url: /contato/
    - text: Contato Ir para Contato
  - figure:
    - img "Cremosa em um retrato promocional com a marca CREMOSA"
  - button "Abrir contador de visitantes": visitantes.exe nº visitantes
  - link "Sets":
    - /url: /musica/
    - text: Sets Ir para Sets
  - link "SoundCloud":
    - /url: https://soundcloud.com/djcremosa
    - text: SoundCloud Abrir SoundCloud em nova aba
  - link "Instagram":
    - /url: https://instagram.com/djcremosa
    - text: Instagram Abrir Instagram em nova aba
  - link "Twitch":
    - /url: https://www.twitch.tv/djcremosa
    - text: Twitch Abrir Twitch em nova aba
  - link "TikTok":
    - /url: https://www.tiktok.com/@cremosinh4
    - text: TikTok Abrir TikTok em nova aba
  - text: booking.exe — confirmar
  - button "Fechar": ×
  - paragraph: // quer levar a Cremosa pra sua pista?
  - paragraph: Booking, imprensa, residência — resposta em até 72h úteis.
  - link "Contatar →":
    - /url: /contato/
    - button "Contatar →"
  - navigation "Mapa do site":
    - link "Agenda":
      - /url: /agenda/
    - link "Música":
      - /url: /musica/
    - link "Galeria":
      - /url: /galeria/
    - link "Vídeos":
      - /url: /videos/
    - link "Sobre":
      - /url: /sobre/
    - link "Contato":
      - /url: /contato/
    - link "Booking":
      - /url: /contato/
  - text: cremosa.txt — readme
  - paragraph: // Porto Alegre, RS — Brasil · desde 2016
  - paragraph:
    - text: DJ Cremosa é uma artista da cena de Porto Alegre que atua desde 2016, conhecida por sets intensos que conectam diferentes vertentes da
    - strong: música preta global
    - text: .
  - paragraph:
    - text: Sua pesquisa parte do
    - strong: funk brasileiro
    - text: e se expande por rap, amapiano, house, pop e R&B — pistas marcadas por groove, energia e mistura de estilos.
  - button "Copiar"
  - button "Fechar ×"
  - complementary:
    - text: cremosa — propriedades
    - term: "Nome:"
    - definition: Cremosa
    - term: "Cidade:"
    - definition: Porto Alegre, RS
    - term: "Desde:"
    - definition: "2016"
    - term: "Coletivo:"
    - definition: AfroJams (2025→)
    - term: "Residência:"
    - definition: BatukBaile (2026→)
    - button "OK"
  - paragraph: // próximas datas
  - link "agenda completa →":
    - /url: /agenda/
    - button "agenda completa →"
  - list:
    - listitem:
      - text: AGO 22 · 080 Club · Confirmado
      - article "080 em Flamula /// Sports Bar, Santa Cruz do Sul":
        - text: AGO 22 2026 Confirmado
        - heading "080" [level=3]
        - paragraph: Flamula /// Sports Bar·Santa Cruz do Sul, RS·Brasil·23h
        - paragraph: Line-up:Cremosa
        - paragraph: .
  - paragraph: // pasta do sistema
  - text: cremosa — pasta do sistema
  - button "Fechar": ×
  - img "Cremosa — logotipo oficial"
  - paragraph: .
  - paragraph: Porto Alegre, RS — Brasil
  - paragraph: Contato
  - list:
    - listitem:
      - link "franciellipdias@gmail.com":
        - /url: mailto:franciellipdias@gmail.com
    - listitem:
      - link "+55 51 99372-3158":
        - /url: tel:+5551993723158
  - paragraph: Onde me achar
  - list:
    - listitem:
      - link "Instagram · @djcremosa":
        - /url: https://instagram.com/djcremosa
    - listitem:
      - link "Twitch · djcremosa":
        - /url: https://www.twitch.tv/djcremosa
    - listitem:
      - link "TikTok · @cremosinh4":
        - /url: https://www.tiktok.com/@cremosinh4
    - listitem:
      - link "Próximos shows":
        - /url: /agenda/
- contentinfo:
  - status "Barra de status":
    - text: ● Pronto · Porto Alegre, RS — Brasil Cremosa · desde 2016 Next event countdown ·
    - 'link "Próximo show: 080 — Santa Cruz do Sul"':
      - /url: /agenda/
      - text: 02:22:54:01
    - link "Booking →":
      - /url: /contato/
    - text: 13:05
- alert
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | /**
  4   |  * 02 — Home page (/?skipGate=1)
  5   |  *
  6   |  * The home page is now a Win95.com-style "welcome" dialog with
  7   |  * 12 desktop icons (4×3 grid) + a press highlights section + an
  8   |  * about section (readme + propriedades dialogs). The visible h1
  9   |  * is sr-only; the visual hierarchy is established by the welcome
  10  |  * dialog's title bar.
  11  |  */
  12  | 
  13  | test.describe("02 — Home page", () => {
  14  |   test.beforeEach(async ({ page }) => {
  15  |     await page.goto("/?skipGate=1");
  16  |   });
  17  | 
  18  |   test("sr-only h1 marks the page as 'Cremosa — Início'", async ({ page }) => {
  19  |     const h1 = page.locator("h1").first();
  20  |     await expect(h1).toContainText("Cremosa");
  21  |     await expect(h1).toContainText("Início");
  22  |   });
  23  | 
  24  |   test("welcome chip 'cremosa.exe — welcome' is visible", async ({ page }) => {
  25  |     // The home page keeps a sr-only `<h1>` with the real identity and
  26  |     // relies on visual chrome for hierarchy. On desktop the figure row
  27  |     // IS the "welcome dialog", so we ship a small `cremosa.exe —
  28  |     // welcome` label chip in the hero comment block above the figure
  29  |     // so screen readers / tests have a stable title to anchor on.
  30  |     const welcome = page.locator("text=cremosa.exe — welcome").first();
> 31  |     await expect(welcome).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  32  |   });
  33  | 
  34  |   test("welcome dialog has 11 desktop icons flanking the figure", async ({
  35  |     page,
  36  |   }) => {
  37  |     // Each desktop icon (besides VisitCounter) renders as an `<a>` with
  38  |     // class `win95-icon`. Destaques was dropped in favor of the
  39  |     // visitantes.exe counter (which is a `<button>`, not counted),
  40  |     // so the desktop chrome has 11 anchor tiles around the figure.
  41  |     //
  42  |     // We count VISIBLE icons only because the mobile fallback
  43  |     // (`md:hidden`) also renders the same 11 anchors in the DOM —
  44  |     // they just take `display: none` at md+ so a plain `.count()`
  45  |     // would see 22 (11 desktop + 11 mobile).
  46  |     const icons = page.locator("a.win95-icon:visible");
  47  |     const count = await icons.count();
  48  |     expect(count).toBe(11);
  49  |   });
  50  | 
  51  |   test("all 6 page icons link to the correct routes", async ({ page }) => {
  52  |     const expected = [
  53  |       { label: "Agenda", href: "/agenda/" },
  54  |       { label: "Música", href: "/musica/" },
  55  |       { label: "Galeria", href: "/galeria/" },
  56  |       { label: "Vídeos", href: "/videos/" },
  57  |       { label: "Sobre", href: "/sobre/" },
  58  |       { label: "Contato", href: "/contato/" },
  59  |     ];
  60  | 
  61  |     for (const { label, href } of expected) {
  62  |       // The icon is the <a.win95-icon> with `title={label}`.
  63  |       const icon = page.locator(`a.win95-icon[title="${label}"]`).first();
  64  |       await expect(icon).toBeVisible();
  65  |       await expect(icon).toHaveAttribute("href", href);
  66  |     }
  67  |   });
  68  | 
  69  |   test("SoundCloud icon opens soundcloud.com/djcremosa", async ({ page }) => {
  70  |     const icon = page.locator('a.win95-icon[title="SoundCloud"]').first();
  71  |     await expect(icon).toBeVisible();
  72  |     const href = await icon.getAttribute("href");
  73  |     expect(href).toBe("https://soundcloud.com/djcremosa");
  74  |   });
  75  | 
  76  |   test("Instagram icon opens instagram.com/djcremosa", async ({ page }) => {
  77  |     const icon = page.locator('a.win95-icon[title="Instagram"]').first();
  78  |     await expect(icon).toBeVisible();
  79  |     const href = await icon.getAttribute("href");
  80  |     expect(href).toBe("https://instagram.com/djcremosa");
  81  |   });
  82  | 
  83  |   test("Twitch icon opens twitch.tv/djcremosa", async ({ page }) => {
  84  |     const icon = page.locator('a.win95-icon[title="Twitch"]').first();
  85  |     await expect(icon).toBeVisible();
  86  |     const href = await icon.getAttribute("href");
  87  |     expect(href).toBe("https://www.twitch.tv/djcremosa");
  88  |   });
  89  | 
  90  |   test("TikTok icon opens tiktok.com/@cremosinh4", async ({ page }) => {
  91  |     const icon = page.locator('a.win95-icon[title="TikTok"]').first();
  92  |     await expect(icon).toBeVisible();
  93  |     const href = await icon.getAttribute("href");
  94  |     expect(href).toBe("https://www.tiktok.com/@cremosinh4");
  95  |   });
  96  | 
  97  |   test("SiteNav has 8 link elements (home + 6 pages + booking)", async ({
  98  |     page,
  99  |   }) => {
  100 |     // The desktop nav contains:
  101 |     // - 1 home icon (Link to /)
  102 |     // - 6 page links
  103 |     // - 1 booking mailto link
  104 |     const nav = page.locator('nav[aria-label="Principal"]').first();
  105 |     const links = nav.locator("a");
  106 |     await expect(links).toHaveCount(8);
  107 |   });
  108 | 
  109 |   test("clicking 'Música' in nav navigates to /musica/", async ({ page }) => {
  110 |     await page
  111 |       .locator('nav[aria-label="Principal"]')
  112 |       .getByRole("link", { name: /música/i })
  113 |       .first()
  114 |       .click();
  115 |     await expect(page).toHaveURL(/\/musica\/?$/);
  116 |   });
  117 | 
  118 |   test("press highlights section shows the destaques window", async ({
  119 |     page,
  120 |   }) => {
  121 |     await page
  122 |       .locator("text=cremosa.txt — destaques")
  123 |       .first()
  124 |       .scrollIntoViewIfNeeded();
  125 |     await expect(
  126 |       page.locator("text=cremosa.txt — destaques").first(),
  127 |     ).toBeVisible();
  128 |     // At least one of the 5 highlights
  129 |     await expect(page.getByText(/Rap in Cena/).first()).toBeVisible();
  130 |   });
  131 | 
```