# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> smoke — press start gate >> site nav is hidden while splash is showing
- Location: tests/e2e/smoke.spec.ts:133:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "true"
Received: null
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic:
      - generic: SELETORA · CURADORIA · DISCOTECAGEM
      - generic: PRESS KIT
      - generic: "2026"
  - main [ref=e2]:
    - generic [ref=e4]:
      - heading "Cremosa — Início" [level=1] [ref=e5]
      - paragraph [ref=e6]: //Início › Seletora · Curadoria · Discotecagem
      - generic [ref=e9]:
        - generic [ref=e10]: cremosa.exe — welcome
        - generic [ref=e11]:
          - generic [ref=e12]: ─
          - generic [ref=e13]: □
          - generic [ref=e14]: ×
        - generic [ref=e15]:
          - generic [ref=e16]:
            - paragraph [ref=e17]: // 12 atalhos · clique pra abrir
            - list [ref=e18]:
              - listitem [ref=e19]:
                - link "Agenda Ir para Agenda" [ref=e20] [cursor=pointer]:
                  - /url: /agenda/
                  - generic [ref=e21]: 📅
                  - generic [ref=e22]: Agenda
                  - text: Ir para Agenda
              - listitem [ref=e23]:
                - link "Música Ir para Música" [ref=e24] [cursor=pointer]:
                  - /url: /musica/
                  - generic [ref=e25]: 🎵
                  - generic [ref=e26]: Música
                  - text: Ir para Música
              - listitem [ref=e27]:
                - link "Galeria Ir para Galeria" [ref=e28] [cursor=pointer]:
                  - /url: /galeria/
                  - generic [ref=e29]: 🖼
                  - generic [ref=e30]: Galeria
                  - text: Ir para Galeria
              - listitem [ref=e31]:
                - link "Vídeos Ir para Vídeos" [ref=e32] [cursor=pointer]:
                  - /url: /videos/
                  - generic [ref=e33]: 🎞
                  - generic [ref=e34]: Vídeos
                  - text: Ir para Vídeos
              - listitem [ref=e35]:
                - link "Sobre Ir para Sobre" [ref=e36] [cursor=pointer]:
                  - /url: /sobre/
                  - generic [ref=e37]: 📖
                  - generic [ref=e38]: Sobre
                  - text: Ir para Sobre
              - listitem [ref=e39]:
                - link "Contato Ir para Contato" [ref=e40] [cursor=pointer]:
                  - /url: /contato/
                  - generic [ref=e41]: ✉
                  - generic [ref=e42]: Contato
                  - text: Ir para Contato
              - listitem [ref=e43]:
                - link "Sets Ir para Sets" [ref=e44] [cursor=pointer]:
                  - /url: /musica/
                  - generic [ref=e45]: 💿
                  - generic [ref=e46]: Sets
                  - text: Ir para Sets
              - listitem [ref=e47]:
                - link "Notas Ir para Notas" [ref=e48] [cursor=pointer]:
                  - /url: /sobre/
                  - generic [ref=e49]: 📝
                  - generic [ref=e50]: Notas
                  - text: Ir para Notas
              - listitem [ref=e51]:
                - link "Destaques Ir para Destaques" [ref=e52] [cursor=pointer]:
                  - /url: /#destaques
                  - generic [ref=e53]: ⭐
                  - generic [ref=e54]: Destaques
                  - text: Ir para Destaques
              - listitem [ref=e55]:
                - link "Booking Abrir Booking em nova aba" [ref=e56] [cursor=pointer]:
                  - /url: mailto:franciellipdias@gmail.com
                  - generic [ref=e57]: 📨
                  - generic [ref=e58]: Booking
                  - text: Abrir Booking em nova aba
              - listitem [ref=e59]:
                - link "SoundCloud Abrir SoundCloud em nova aba" [ref=e60] [cursor=pointer]:
                  - /url: https://soundcloud.com/cremosinha
                  - generic [ref=e61]: 🎧
                  - generic [ref=e62]: SoundCloud
                  - text: Abrir SoundCloud em nova aba
              - listitem [ref=e63]:
                - link "Instagram Abrir Instagram em nova aba" [ref=e64] [cursor=pointer]:
                  - /url: https://instagram.com/djcremosa
                  - generic [ref=e65]: 📷
                  - generic [ref=e66]: Instagram
                  - text: Abrir Instagram em nova aba
          - generic [ref=e67]:
            - generic [ref=e68]: © 2026 Cremosa · Porto Alegre, RS
            - generic [ref=e69]: Seletora · Curadoria · Discotecagem
            - generic [ref=e70]: v1.0 · 2026
      - navigation "Mapa do site" [ref=e71]:
        - generic [ref=e72]:
          - link "Agenda" [ref=e73] [cursor=pointer]:
            - /url: /agenda/
          - text: "|"
        - generic [ref=e74]:
          - link "Música" [ref=e75] [cursor=pointer]:
            - /url: /musica/
          - text: "|"
        - generic [ref=e76]:
          - link "Galeria" [ref=e77] [cursor=pointer]:
            - /url: /galeria/
          - text: "|"
        - generic [ref=e78]:
          - link "Vídeos" [ref=e79] [cursor=pointer]:
            - /url: /videos/
          - text: "|"
        - generic [ref=e80]:
          - link "Sobre" [ref=e81] [cursor=pointer]:
            - /url: /sobre/
          - text: "|"
        - generic [ref=e82]:
          - link "Contato" [ref=e83] [cursor=pointer]:
            - /url: /contato/
          - text: "|"
        - link "Booking" [ref=e85] [cursor=pointer]:
          - /url: /contato/
    - generic [ref=e87]:
      - generic [ref=e90]:
        - generic [ref=e91]: cremosa.txt — readme
        - generic [ref=e92]:
          - generic [ref=e93]: ─
          - generic [ref=e94]: □
          - generic [ref=e95]: ×
        - generic [ref=e97]:
          - paragraph [ref=e98]: // Porto Alegre, RS — Brasil · desde 2016
          - generic [ref=e99]:
            - paragraph [ref=e100]:
              - text: DJ Cremosa é uma artista da cena de Porto Alegre que atua desde 2016, conhecida por sets intensos que conectam diferentes vertentes da
              - strong [ref=e101]: música preta global
              - text: .
            - paragraph [ref=e102]:
              - text: Sua pesquisa parte do
              - strong [ref=e103]: funk brasileiro
              - text: e se expande por rap, amapiano, house, pop e R&B — pistas marcadas por groove, energia e mistura de estilos.
          - generic [ref=e104]:
            - button "Copiar" [ref=e105] [cursor=pointer]
            - button "Fechar ×" [ref=e106] [cursor=pointer]
      - complementary [ref=e107]:
        - generic [ref=e109]:
          - generic [ref=e110]: cremosa — propriedades
          - generic [ref=e111]:
            - generic [ref=e112]: ─
            - generic [ref=e113]: □
            - generic [ref=e114]: ×
          - generic [ref=e116]:
            - generic [ref=e117]:
              - term [ref=e118]: "Nome:"
              - definition [ref=e119]: Cremosa
              - term [ref=e120]: "Cidade:"
              - definition [ref=e121]: Porto Alegre, RS
              - term [ref=e122]: "Desde:"
              - definition [ref=e123]: "2016"
              - term [ref=e124]: "Coletivo:"
              - definition [ref=e125]: AfroJams (2025→)
              - term [ref=e126]: "Residência:"
              - definition [ref=e127]: BatukBaile (2026→)
            - button "OK" [ref=e129] [cursor=pointer]
    - generic [ref=e130]:
      - generic [ref=e131]:
        - paragraph [ref=e134]: // próximas datas
        - link "agenda completa →" [ref=e135] [cursor=pointer]:
          - /url: /agenda/
          - button "agenda completa →" [ref=e136]
      - generic [ref=e139]:
        - generic [ref=e140]: agenda — sistema
        - generic [ref=e141]:
          - generic [ref=e142]: ─
          - generic [ref=e143]: □
          - generic [ref=e144]: ×
        - generic [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]: i
            - generic [ref=e149]:
              - paragraph [ref=e150]: Nada agendado pra esse momento
              - paragraph [ref=e151]:
                - text: Segue a Cremosa nas redes pra não perder o próximo anúncio.
                - link "@djcremosa" [ref=e152] [cursor=pointer]:
                  - /url: https://instagram.com/djcremosa
          - link "OK" [ref=e154] [cursor=pointer]:
            - /url: https://instagram.com/djcremosa
            - button "OK" [ref=e155]
    - generic [ref=e156]:
      - paragraph [ref=e157]: // em destaque
      - heading "Dez anos na pista, da cena de Porto Alegre pro mundo." [level=2] [ref=e158]
      - generic [ref=e160]:
        - generic [ref=e161]: cremosa.txt — destaques
        - generic [ref=e162]:
          - generic [ref=e163]: ─
          - generic [ref=e164]: □
          - generic [ref=e165]: ×
        - generic [ref=e167]:
          - paragraph [ref=e168]: "Última atualização: 2026"
          - list [ref=e169]:
            - listitem [ref=e170]:
              - generic [ref=e171]: ★
              - generic [ref=e172]: Rap in Cena 2023 (com D'Lock) e 2024 (solo)
            - listitem [ref=e173]:
              - generic [ref=e174]: ★
              - generic [ref=e175]: Abertura para Rafa Moreira, Baco Exu do Blues e KL Jay
            - listitem [ref=e176]:
              - generic [ref=e177]: ★
              - generic [ref=e178]: Co-fundadora do coletivo AfroJams (2025)
            - listitem [ref=e179]:
              - generic [ref=e180]: ★
              - generic [ref=e181]: Line-up Planeta Atlântida 2026 via AfroJams
            - listitem [ref=e182]:
              - generic [ref=e183]: ★
              - generic [ref=e184]: Residência BatukBaile (2026)
          - paragraph [ref=e185]: // fim do arquivo
    - generic [ref=e186]:
      - paragraph [ref=e187]: // pasta do sistema
      - generic [ref=e189]:
        - generic [ref=e190]: cremosa — pasta do sistema
        - generic [ref=e191]:
          - generic [ref=e192]: ─
          - generic [ref=e193]: □
          - generic [ref=e194]: ×
        - generic [ref=e196]:
          - generic [ref=e197]:
            - img "Cremosa — logotipo oficial" [ref=e198]
            - paragraph [ref=e199]: .
            - paragraph [ref=e200]: Porto Alegre, RS — Brasil
          - generic [ref=e201]:
            - generic [ref=e202]:
              - paragraph [ref=e203]: Contato
              - list [ref=e204]:
                - listitem [ref=e205]:
                  - link "franciellipdias@gmail.com" [ref=e206] [cursor=pointer]:
                    - /url: mailto:franciellipdias@gmail.com
                - listitem [ref=e207]:
                  - link "+55 51 99372-3158" [ref=e208] [cursor=pointer]:
                    - /url: tel:+5551993723158
            - generic [ref=e209]:
              - paragraph [ref=e210]: Onde me achar
              - list [ref=e211]:
                - listitem [ref=e212]:
                  - link "Instagram · @djcremosa" [ref=e213] [cursor=pointer]:
                    - /url: https://instagram.com/djcremosa
                - listitem [ref=e214]:
                  - link "Próximos shows" [ref=e215] [cursor=pointer]:
                    - /url: /agenda/
    - dialog "Press start to enter the Cremosa site" [ref=e216] [cursor=pointer]:
      - generic [ref=e217]:
        - img "Cremosa" [ref=e219]
        - generic [ref=e220]:
          - paragraph [ref=e221]: Iniciando Cremosa.exe…
          - progressbar [ref=e224]
          - paragraph [ref=e226]: 24%
        - paragraph [ref=e227]: Press Start
        - generic [ref=e228]:
          - paragraph [ref=e229]: // Seletora · Curadoria · Discotecagem
          - paragraph [ref=e230]: pressione qualquer tecla · ou toque na tela
  - contentinfo [ref=e231]:
    - status "Barra de status" [ref=e232]:
      - generic [ref=e233]: ● Pronto · Porto Alegre, RS — Brasil
      - generic [ref=e234]: Cremosa · desde 2016
      - link "Booking →" [ref=e236] [cursor=pointer]:
        - /url: /contato/
      - generic [ref=e237]: 21:11
  - button "Open Next.js Dev Tools" [ref=e243] [cursor=pointer]:
    - img [ref=e244]
  - alert [ref=e247]
```

# Test source

```ts
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
  97  |         await expect(h1).toBeVisible();
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
> 139 |     expect(dataAttr).toBe("true");
      |                      ^ Error: expect(received).toBe(expected) // Object.is equality
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