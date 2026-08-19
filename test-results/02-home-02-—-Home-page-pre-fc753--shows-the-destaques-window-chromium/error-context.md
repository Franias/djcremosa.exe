# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-home.spec.ts >> 02 — Home page >> press highlights section shows the destaques window
- Location: tests/e2e/02-home.spec.ts:118:7

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('text=cremosa.txt — destaques').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic "Mural colaborativo de graffiti"
  - button "Ativar modo graffiti" [ref=e2] [cursor=pointer]:
    - generic [ref=e3]: ▰
    - generic [ref=e4]: G · GRAFFITI
  - banner [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e9]: Cremosa · Seletora · Curadoria · Discotecagem
      - generic [ref=e11] [cursor=pointer]:
        - generic [ref=e12]: ─
        - generic [ref=e13]: □
        - generic [ref=e14]: ×
      - navigation "Principal" [ref=e16]:
        - list [ref=e17]:
          - listitem [ref=e18]:
            - link "Início" [ref=e19] [cursor=pointer]:
              - /url: /
              - button [ref=e20]:
                - img [ref=e21]
          - listitem [ref=e24]:
            - link "DJ Verbosa" [ref=e25] [cursor=pointer]:
              - /url: /dj-verbosa/
              - button "DJ Verbosa" [ref=e26]
          - listitem [ref=e27]:
            - link "Agenda" [ref=e28] [cursor=pointer]:
              - /url: /agenda/
              - button "Agenda" [ref=e29]
          - listitem [ref=e30]:
            - link "Música" [ref=e31] [cursor=pointer]:
              - /url: /musica/
              - button "Música" [ref=e32]
          - listitem [ref=e33]:
            - link "Galeria" [ref=e34] [cursor=pointer]:
              - /url: /galeria/
              - button "Galeria" [ref=e35]
          - listitem [ref=e36]:
            - link "Vídeos" [ref=e37] [cursor=pointer]:
              - /url: /videos/
              - button "Vídeos" [ref=e38]
          - listitem [ref=e39]:
            - link "Sobre" [ref=e40] [cursor=pointer]:
              - /url: /sobre/
              - button "Sobre" [ref=e41]
          - listitem [ref=e42]:
            - link "Contato" [ref=e43] [cursor=pointer]:
              - /url: /contato/
              - button "Contato" [ref=e44]
          - listitem [ref=e45]:
            - link "Booking →" [ref=e46] [cursor=pointer]:
              - /url: mailto:franciellipdias@gmail.com?subject=Booking%20%2F%20proposta%20de%20show
              - button "Booking →" [ref=e47]
  - main [ref=e48]:
    - generic [ref=e50]:
      - heading "Cremosa — Início" [level=1] [ref=e51]
      - generic [ref=e52]:
        - generic [ref=e53]:
          - link "Agenda" [ref=e54] [cursor=pointer]:
            - /url: /agenda/
            - generic [ref=e56]: Agenda
            - text: Ir para Agenda
          - link "Música" [ref=e57] [cursor=pointer]:
            - /url: /musica/
            - generic [ref=e59]: Música
            - text: Ir para Música
          - link "Galeria" [ref=e60] [cursor=pointer]:
            - /url: /galeria/
            - generic [ref=e62]: Galeria
            - text: Ir para Galeria
          - link "Vídeos" [ref=e63] [cursor=pointer]:
            - /url: /videos/
            - generic [ref=e65]: Vídeos
            - text: Ir para Vídeos
          - link "Sobre" [ref=e66] [cursor=pointer]:
            - /url: /sobre/
            - generic [ref=e68]: Sobre
            - text: Ir para Sobre
          - link "Contato" [ref=e69] [cursor=pointer]:
            - /url: /contato/
            - generic [ref=e71]: Contato
            - text: Ir para Contato
        - figure [ref=e72]:
          - img "Cremosa em um retrato promocional com a marca CREMOSA" [ref=e74]
        - generic [ref=e75]:
          - button "Abrir contador de visitantes" [ref=e76] [cursor=pointer]:
            - generic [ref=e78]: visitantes.exe
            - text: nº visitantes
          - link "Sets" [ref=e79] [cursor=pointer]:
            - /url: /musica/
            - generic [ref=e81]: Sets
            - text: Ir para Sets
          - link "SoundCloud" [ref=e82] [cursor=pointer]:
            - /url: https://soundcloud.com/djcremosa
            - generic [ref=e84]: SoundCloud
            - text: Abrir SoundCloud em nova aba
          - link "Instagram" [ref=e85] [cursor=pointer]:
            - /url: https://instagram.com/djcremosa
            - generic [ref=e87]: Instagram
            - text: Abrir Instagram em nova aba
          - link "Twitch" [ref=e88] [cursor=pointer]:
            - /url: https://www.twitch.tv/djcremosa
            - generic [ref=e90]: Twitch
            - text: Abrir Twitch em nova aba
          - link "TikTok" [ref=e91] [cursor=pointer]:
            - /url: https://www.tiktok.com/@cremosinh4
            - generic [ref=e93]: TikTok
            - text: Abrir TikTok em nova aba
      - text: Ir para Agenda Ir para Música Ir para Galeria Ir para Vídeos Ir para Sobre Ir para Contato nº visitantes Ir para Sets Abrir SoundCloud em nova aba Abrir Instagram em nova aba Abrir Twitch em nova aba Abrir TikTok em nova aba
      - generic [ref=e96]:
        - generic [ref=e98]: booking.exe — confirmar
        - generic [ref=e99]:
          - generic [ref=e100] [cursor=pointer]: ─
          - generic [ref=e101] [cursor=pointer]: □
          - button "Fechar" [ref=e102] [cursor=pointer]: ×
        - generic [ref=e104]:
          - paragraph [ref=e105]: // quer levar a Cremosa pra sua pista?
          - paragraph [ref=e106]: Booking, imprensa, residência — resposta em até 72h úteis.
          - link "Contatar →" [ref=e108] [cursor=pointer]:
            - /url: /contato/
            - button "Contatar →" [ref=e109]
      - navigation "Mapa do site" [ref=e110]:
        - generic [ref=e111]:
          - link "Agenda" [ref=e112] [cursor=pointer]:
            - /url: /agenda/
          - text: "|"
        - generic [ref=e113]:
          - link "Música" [ref=e114] [cursor=pointer]:
            - /url: /musica/
          - text: "|"
        - generic [ref=e115]:
          - link "Galeria" [ref=e116] [cursor=pointer]:
            - /url: /galeria/
          - text: "|"
        - generic [ref=e117]:
          - link "Vídeos" [ref=e118] [cursor=pointer]:
            - /url: /videos/
          - text: "|"
        - generic [ref=e119]:
          - link "Sobre" [ref=e120] [cursor=pointer]:
            - /url: /sobre/
          - text: "|"
        - generic [ref=e121]:
          - link "Contato" [ref=e122] [cursor=pointer]:
            - /url: /contato/
          - text: "|"
        - link "Booking" [ref=e124] [cursor=pointer]:
          - /url: /contato/
    - generic [ref=e126]:
      - generic [ref=e129]:
        - generic [ref=e131]: cremosa.txt — readme
        - generic [ref=e133] [cursor=pointer]:
          - generic [ref=e134]: ─
          - generic [ref=e135]: □
          - generic [ref=e136]: ×
        - generic [ref=e138]:
          - paragraph [ref=e139]: // Porto Alegre, RS — Brasil · desde 2016
          - generic [ref=e140]:
            - paragraph [ref=e141]:
              - text: DJ Cremosa é uma artista da cena de Porto Alegre que atua desde 2016, conhecida por sets intensos que conectam diferentes vertentes da
              - strong [ref=e142]: música preta global
              - text: .
            - paragraph [ref=e143]:
              - text: Sua pesquisa parte do
              - strong [ref=e144]: funk brasileiro
              - text: e se expande por rap, amapiano, house, pop e R&B — pistas marcadas por groove, energia e mistura de estilos.
          - generic [ref=e145]:
            - button "Copiar" [ref=e146] [cursor=pointer]
            - button "Fechar ×" [ref=e147] [cursor=pointer]
      - complementary [ref=e148]:
        - generic [ref=e150]:
          - generic [ref=e152]: cremosa — propriedades
          - generic [ref=e154] [cursor=pointer]:
            - generic [ref=e155]: ─
            - generic [ref=e156]: □
            - generic [ref=e157]: ×
          - generic [ref=e159]:
            - generic [ref=e160]:
              - term [ref=e161]: "Nome:"
              - definition [ref=e162]: Cremosa
              - term [ref=e163]: "Cidade:"
              - definition [ref=e164]: Porto Alegre, RS
              - term [ref=e165]: "Desde:"
              - definition [ref=e166]: "2016"
              - term [ref=e167]: "Coletivo:"
              - definition [ref=e168]: AfroJams (2025→)
              - term [ref=e169]: "Residência:"
              - definition [ref=e170]: BatukBaile (2026→)
            - button "OK" [ref=e172] [cursor=pointer]
    - generic [ref=e173]:
      - generic [ref=e174]:
        - paragraph [ref=e177]: // próximas datas
        - link "agenda completa →" [ref=e178] [cursor=pointer]:
          - /url: /agenda/
          - button "agenda completa →" [ref=e179]
      - list [ref=e180]:
        - listitem [ref=e181]:
          - generic [ref=e183]:
            - generic [ref=e184]:
              - generic [ref=e185]: AGO 22 · 080
              - generic [ref=e187]: Club · Confirmado
            - generic [ref=e189] [cursor=pointer]:
              - generic [ref=e190]: ─
              - generic [ref=e191]: □
              - generic [ref=e192]: ×
            - article "080 em Flamula /// Sports Bar, Santa Cruz do Sul" [ref=e194]:
              - generic [ref=e195]:
                - generic [ref=e196]: AGO
                - generic [ref=e197]: "22"
                - generic [ref=e198]: "2026"
              - generic [ref=e199]:
                - generic [ref=e200]:
                  - generic [ref=e202]: Confirmado
                  - heading "080" [level=3] [ref=e203]
                  - paragraph [ref=e204]: Flamula /// Sports Bar·Santa Cruz do Sul, RS·Brasil·23h
                - generic [ref=e205]:
                  - paragraph [ref=e206]: Line-up:Cremosa
                  - paragraph [ref=e207]: .
    - generic [ref=e210]:
      - paragraph [ref=e211]: // pasta do sistema
      - generic [ref=e213]:
        - generic [ref=e215]: cremosa — pasta do sistema
        - generic [ref=e216]:
          - generic [ref=e217] [cursor=pointer]: ─
          - generic [ref=e218] [cursor=pointer]: □
          - button "Fechar" [ref=e219] [cursor=pointer]: ×
        - generic [ref=e221]:
          - generic [ref=e222]:
            - img "Cremosa — logotipo oficial" [ref=e223]
            - paragraph [ref=e224]: .
            - paragraph [ref=e225]: Porto Alegre, RS — Brasil
          - generic [ref=e226]:
            - generic [ref=e227]:
              - paragraph [ref=e228]: Contato
              - list [ref=e229]:
                - listitem [ref=e230]:
                  - link "franciellipdias@gmail.com" [ref=e231] [cursor=pointer]:
                    - /url: mailto:franciellipdias@gmail.com
                - listitem [ref=e232]:
                  - link "+55 51 99372-3158" [ref=e233] [cursor=pointer]:
                    - /url: tel:+5551993723158
            - generic [ref=e234]:
              - paragraph [ref=e235]: Onde me achar
              - list [ref=e236]:
                - listitem [ref=e237]:
                  - link "Instagram · @djcremosa" [ref=e238] [cursor=pointer]:
                    - /url: https://instagram.com/djcremosa
                - listitem [ref=e239]:
                  - link "Twitch · djcremosa" [ref=e240] [cursor=pointer]:
                    - /url: https://www.twitch.tv/djcremosa
                - listitem [ref=e241]:
                  - link "TikTok · @cremosinh4" [ref=e242] [cursor=pointer]:
                    - /url: https://www.tiktok.com/@cremosinh4
                - listitem [ref=e243]:
                  - link "Próximos shows" [ref=e244] [cursor=pointer]:
                    - /url: /agenda/
  - contentinfo [ref=e245]:
    - status "Barra de status" [ref=e246]:
      - generic [ref=e247]: ● Pronto · Porto Alegre, RS — Brasil
      - generic [ref=e248]: Cremosa · desde 2016
      - generic [ref=e249]:
        - text: Next event countdown ·
        - 'link "Próximo show: 080 — Santa Cruz do Sul" [ref=e250] [cursor=pointer]':
          - /url: /agenda/
          - text: 02:22:53:44
      - link "Booking →" [ref=e252] [cursor=pointer]:
        - /url: /contato/
      - generic [ref=e253]: 13:06
  - button "Open Next.js Dev Tools" [ref=e259] [cursor=pointer]:
    - img [ref=e260]
  - alert [ref=e263]
```

# Test source

```ts
  24  |   test("welcome chip 'cremosa.exe — welcome' is visible", async ({ page }) => {
  25  |     // The home page keeps a sr-only `<h1>` with the real identity and
  26  |     // relies on visual chrome for hierarchy. On desktop the figure row
  27  |     // IS the "welcome dialog", so we ship a small `cremosa.exe —
  28  |     // welcome` label chip in the hero comment block above the figure
  29  |     // so screen readers / tests have a stable title to anchor on.
  30  |     const welcome = page.locator("text=cremosa.exe — welcome").first();
  31  |     await expect(welcome).toBeVisible();
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
> 124 |       .scrollIntoViewIfNeeded();
      |        ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 5000ms exceeded.
  125 |     await expect(
  126 |       page.locator("text=cremosa.txt — destaques").first(),
  127 |     ).toBeVisible();
  128 |     // At least one of the 5 highlights
  129 |     await expect(page.getByText(/Rap in Cena/).first()).toBeVisible();
  130 |   });
  131 | 
  132 |   test("about section (readme) renders", async ({ page }) => {
  133 |     // The readme dialog is below the fold; scroll to it.
  134 |     await page
  135 |       .locator("text=cremosa.txt — readme")
  136 |       .first()
  137 |       .scrollIntoViewIfNeeded();
  138 |     const readme = page
  139 |       .locator("text=cremosa.txt — readme")
  140 |       .first();
  141 |     await expect(readme).toBeVisible();
  142 |     await expect(
  143 |       page
  144 |         .getByText(/DJ Cremosa é uma artista da cena de Porto Alegre/i)
  145 |         .first(),
  146 |     ).toBeVisible();
  147 |   });
  148 | 
  149 |   test("em destaque section shows the press highlights heading", async ({
  150 |     page,
  151 |   }) => {
  152 |     // "Dez anos na pista, da cena de Porto Alegre pro mundo." is the
  153 |     // h2 of the press highlights section.
  154 |     await page
  155 |       .getByRole("heading", { name: /Dez anos na pista/i, level: 2 })
  156 |       .scrollIntoViewIfNeeded();
  157 |     await expect(
  158 |       page.getByRole("heading", {
  159 |         name: /Dez anos na pista/i,
  160 |         level: 2,
  161 |       }),
  162 |     ).toBeVisible();
  163 |   });
  164 | 
  165 |   test("footer is a Win95 status bar with Pronto indicator", async ({
  166 |     page,
  167 |   }) => {
  168 |     await page.locator("footer").scrollIntoViewIfNeeded();
  169 |     const footer = page.locator("footer");
  170 |     await expect(footer).toBeVisible();
  171 |     await expect(footer.getByText(/Pronto/).first()).toBeVisible();
  172 |   });
  173 | 
  174 |   test("footer has a link to /contato/", async ({ page }) => {
  175 |     // The footer is below the fold; scroll to it before asserting.
  176 |     await page.locator("footer").scrollIntoViewIfNeeded();
  177 |     const footer = page.locator("footer");
  178 |     // Next.js renders Link hrefs with a trailing slash when
  179 |     // `trailingSlash: true` is set in next.config.ts — match both.
  180 |     const contatoLink = footer.locator('a[href="/contato"], a[href="/contato/"]');
  181 |     await expect(contatoLink.first()).toBeVisible();
  182 |   });
  183 | 
  184 |   test("'Fechar ×' on readme dialog hides it and shows a reopen button", async ({
  185 |     page,
  186 |   }) => {
  187 |     // Scope the click to the readme dialog itself — now that the
  188 |     // page's other Win95Windows (booking.exe, pasta do sistema)
  189 |     // have functional title-bar × buttons, a page-wide
  190 |     // `getByRole("button", { name: /fechar/i })` would grab the
  191 |     // first one in DOM order instead of the HomeAbout one.
  192 |     const readmeDialog = page
  193 |       .locator("div.win95-bevel-out", {
  194 |         has: page.locator("text=cremosa.txt — readme"),
  195 |       })
  196 |       .first();
  197 |     await readmeDialog.scrollIntoViewIfNeeded();
  198 |     await expect(readmeDialog).toBeVisible();
  199 |     await readmeDialog.getByRole("button", { name: /fechar/i }).click();
  200 |     await expect(
  201 |       page.locator("text=cremosa.txt — readme (fechado)").first(),
  202 |     ).toBeVisible();
  203 |   });
  204 | 
  205 |   test("'OK' on propriedades dialog hides it and shows a reopen button", async ({
  206 |     page,
  207 |   }) => {
  208 |     await page
  209 |       .locator("text=cremosa — propriedades")
  210 |       .first()
  211 |       .scrollIntoViewIfNeeded();
  212 |     await expect(
  213 |       page.locator("text=cremosa — propriedades").first(),
  214 |     ).toBeVisible();
  215 |     await page.getByRole("button", { name: /^OK$/ }).first().click();
  216 |     await expect(
  217 |       page.locator("text=cremosa — propriedades (fechado)").first(),
  218 |     ).toBeVisible();
  219 |   });
  220 | 
  221 |   test("'Copiar' button copies manifesto to clipboard", async ({
  222 |     page,
  223 |     context,
  224 |   }) => {
```