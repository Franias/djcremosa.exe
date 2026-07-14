# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05-contato.spec.ts >> 05 — Contato >> Telefone card uses tel: link with E.164 format
- Location: tests/e2e/05-contato.spec.ts:61:7

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /^\+55519/
Received string:  "tel:+5551993723158"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: Cremosa · Seletora · Curadoria · Discotecagem
      - generic [ref=e6]:
        - generic [ref=e7]: ─
        - generic [ref=e8]: □
        - generic [ref=e9]: ×
      - navigation "Principal" [ref=e11]:
        - list [ref=e12]:
          - listitem [ref=e13]:
            - link "Início" [ref=e14] [cursor=pointer]:
              - /url: /
              - button [ref=e15]:
                - img [ref=e16]
          - listitem [ref=e19]:
            - link "Agenda" [ref=e20] [cursor=pointer]:
              - /url: /agenda/
              - button "Agenda" [ref=e21]
          - listitem [ref=e22]:
            - link "Música" [ref=e23] [cursor=pointer]:
              - /url: /musica/
              - button "Música" [ref=e24]
          - listitem [ref=e25]:
            - link "Galeria" [ref=e26] [cursor=pointer]:
              - /url: /galeria/
              - button "Galeria" [ref=e27]
          - listitem [ref=e28]:
            - link "Vídeos" [ref=e29] [cursor=pointer]:
              - /url: /videos/
              - button "Vídeos" [ref=e30]
          - listitem [ref=e31]:
            - link "Sobre" [ref=e32] [cursor=pointer]:
              - /url: /sobre/
              - button "Sobre" [ref=e33]
          - listitem [ref=e34]:
            - link "Contato" [ref=e35] [cursor=pointer]:
              - /url: /contato/
              - button "Contato" [ref=e36]
          - listitem [ref=e37]:
            - link "Booking →" [ref=e38] [cursor=pointer]:
              - /url: mailto:franciellipdias@gmail.com?subject=Booking%20%2F%20proposta%20de%20show
              - button "Booking →" [ref=e39]
  - generic:
    - generic:
      - generic: SELETORA · CURADORIA · DISCOTECAGEM
      - generic: PRESS KIT
      - generic: "2026"
  - main [ref=e40]:
    - generic [ref=e42]:
      - heading "Contato — Cremosa" [level=1] [ref=e43]
      - paragraph [ref=e44]: //Início › Contato
      - paragraph [ref=e45]: Pra proposta de show, festival ou residência, manda direto pelo email. Resposta em até 72h úteis.
    - generic [ref=e46]:
      - link "Proposta de show // booking franciellipdias@gmail.com Abrir app de email →" [ref=e47] [cursor=pointer]:
        - /url: mailto:franciellipdias@gmail.com?subject=Proposta%20de%20show%20%2F%20booking
        - generic [ref=e49]:
          - generic [ref=e50]: Proposta de show
          - generic [ref=e51]:
            - generic [ref=e52]: ─
            - generic [ref=e53]: □
            - generic [ref=e54]: ×
          - generic [ref=e56]:
            - paragraph [ref=e57]: // booking
            - paragraph [ref=e58]: franciellipdias@gmail.com
            - button "Abrir app de email →" [ref=e60]
      - link "Solicitar press kit // imprensa franciellipdias@gmail.com Pedir material →" [ref=e61] [cursor=pointer]:
        - /url: mailto:franciellipdias@gmail.com?subject=Imprensa%20%2F%20press
        - generic [ref=e63]:
          - generic [ref=e64]: Solicitar press kit
          - generic [ref=e65]:
            - generic [ref=e66]: ─
            - generic [ref=e67]: □
            - generic [ref=e68]: ×
          - generic [ref=e70]:
            - paragraph [ref=e71]: // imprensa
            - paragraph [ref=e72]: franciellipdias@gmail.com
            - button "Pedir material →" [ref=e74]
      - link "Ligar agora // telefone +55 51 99372-3158 Discar →" [ref=e75] [cursor=pointer]:
        - /url: tel:+5551993723158
        - generic [ref=e77]:
          - generic [ref=e78]: Ligar agora
          - generic [ref=e79]:
            - generic [ref=e80]: ─
            - generic [ref=e81]: □
            - generic [ref=e82]: ×
          - generic [ref=e84]:
            - paragraph [ref=e85]: // telefone
            - paragraph [ref=e86]: +55 51 99372-3158
            - button "Discar →" [ref=e88]
      - link "Instagram // @djcremosa @djcremosa Abrir perfil →" [ref=e89] [cursor=pointer]:
        - /url: https://instagram.com/djcremosa
        - generic [ref=e91]:
          - generic [ref=e92]: Instagram
          - generic [ref=e93]:
            - generic [ref=e94]: ─
            - generic [ref=e95]: □
            - generic [ref=e96]: ×
          - generic [ref=e98]:
            - paragraph [ref=e99]: // @djcremosa
            - paragraph [ref=e100]: "@djcremosa"
            - button "Abrir perfil →" [ref=e102]
    - generic [ref=e103]:
      - generic [ref=e105]:
        - generic [ref=e106]: Solicitar press kit.exe
        - generic [ref=e107]:
          - generic [ref=e108]: ─
          - generic [ref=e109]: □
          - generic [ref=e110]: ×
        - generic [ref=e112]:
          - generic [ref=e113]:
            - paragraph [ref=e114]: // mídia kit 2026
            - paragraph [ref=e115]: Fotos em alta resolução, bio completa pt-BR/EN e material de divulgação. Manda email e a gente responde em até 72h úteis.
          - link "Solicitar →" [ref=e116] [cursor=pointer]:
            - /url: mailto:franciellipdias@gmail.com?subject=Solicitar%20press%20kit
            - button "Solicitar →" [ref=e117]
      - paragraph [ref=e118]: Formulário completo + captcha entram na fase 2 (Resend + React Email ou Formspree). Por enquanto o mailto resolve.
  - contentinfo [ref=e119]:
    - status "Barra de status" [ref=e120]:
      - generic [ref=e121]: ● Pronto · Porto Alegre, RS — Brasil
      - generic [ref=e122]: Cremosa · desde 2016
      - link "Booking →" [ref=e124] [cursor=pointer]:
        - /url: /contato/
      - generic [ref=e125]: 21:10
  - button "Open Next.js Dev Tools" [ref=e131] [cursor=pointer]:
    - img [ref=e132]
  - alert [ref=e135]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | /**
  4  |  * 05 — Contato (/contato/)
  5  |  *
  6  |  * The contato page renders 4 contact cards (Booking, Imprensa, Telefone,
  7  |  * Instagram) + a "Solicitar press kit" dialog at the bottom. All CTAs
  8  |  * should be mailto: / tel: / external links — no on-page form.
  9  |  *
  10 |  * The "Imprimir" / "OK" buttons on the agenda instruções dialog are
  11 |  * tested in 03-agenda-instructions.spec.ts.
  12 |  */
  13 | 
  14 | test.describe("05 — Contato", () => {
  15 |   test.beforeEach(async ({ page }) => {
  16 |     await page.goto("/?skipGate=1");
  17 |     await page.goto("/contato/");
  18 |   });
  19 | 
  20 |   test("sr-only h1 marks the page as 'Contato — Cremosa'", async ({ page }) => {
  21 |     const h1 = page.locator("h1").first();
  22 |     await expect(h1).toContainText("Contato");
  23 |   });
  24 | 
  25 |   test("shows lede mentioning 72h response time", async ({ page }) => {
  26 |     await expect(
  27 |       page.getByText(/responde em até\s*72h úteis/i).first(),
  28 |     ).toBeAttached();
  29 |   });
  30 | 
  31 |   test("renders all 4 contact cards", async ({ page }) => {
  32 |     // Each card has an eyebrow with the channel name
  33 |     await expect(page.getByText(/\/\/ booking/i).first()).toBeVisible();
  34 |     await expect(page.getByText(/\/\/ imprensa/i).first()).toBeVisible();
  35 |     await expect(page.getByText(/\/\/ telefone/i).first()).toBeVisible();
  36 |     await expect(page.getByText(/\/\/ @djcremosa/i).first()).toBeVisible();
  37 |   });
  38 | 
  39 |   test("Booking card opens mailto: with prefilled subject", async ({ page }) => {
  40 |     const bookingLink = page
  41 |       .locator("a[href^='mailto:franciellipdias@gmail.com']")
  42 |       .first();
  43 |     await expect(bookingLink).toBeAttached();
  44 |     const href = await bookingLink.getAttribute("href");
  45 |     expect(href).toMatch(/^mailto:franciellipdias@gmail\.com/);
  46 |     expect(href).toContain("subject=");
  47 |   });
  48 | 
  49 |   test("Imprensa card opens mailto: with 'Imprensa' subject", async ({
  50 |     page,
  51 |   }) => {
  52 |     const link = page
  53 |       .locator("a[href^='mailto:franciellipdias@gmail.com']")
  54 |       .nth(1);
  55 |     await expect(link).toBeAttached();
  56 |     const href = await link.getAttribute("href");
  57 |     expect(href).toMatch(/subject=/);
  58 |     expect(href).toMatch(/Imprensa/i);
  59 |   });
  60 | 
  61 |   test("Telefone card uses tel: link with E.164 format", async ({ page }) => {
  62 |     const telLink = page.locator("a[href^='tel:+']").first();
  63 |     await expect(telLink).toBeAttached();
  64 |     const href = await telLink.getAttribute("href");
  65 |     // +55 = BR, 51 = POA area, then the number
> 66 |     expect(href).toMatch(/^\+55519/);
     |                  ^ Error: expect(received).toMatch(expected)
  67 |   });
  68 | 
  69 |   test("Instagram card opens instagram.com/djcremosa in new tab", async ({
  70 |     page,
  71 |   }) => {
  72 |     const igLink = page.locator("a[href*='instagram.com/djcremosa']").first();
  73 |     await expect(igLink).toBeVisible();
  74 |     await expect(igLink).toHaveAttribute("target", "_blank");
  75 |     await expect(igLink).toHaveAttribute(
  76 |       "href",
  77 |       "https://instagram.com/djcremosa",
  78 |     );
  79 |   });
  80 | 
  81 |   test("footer 'Solicitar press kit' dialog has mailto", async ({ page }) => {
  82 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  83 |     const dialog = page
  84 |       .locator("text=Solicitar press kit")
  85 |       .first();
  86 |     await expect(dialog).toBeAttached();
  87 |     const mailto = page
  88 |       .locator('a[href^="mailto:franciellipdias@gmail.com?subject=Solicitar"]')
  89 |       .first();
  90 |     await expect(mailto).toBeAttached();
  91 |   });
  92 | });
  93 | 
```