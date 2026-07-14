# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07-videos.spec.ts >> 07 — Vídeos >> archive section shows all 8 video cards
- Location: tests/e2e/07-videos.spec.ts:128:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 7
Received: 0
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
      - paragraph [ref=e43]: // lives · sets filmados
      - generic [ref=e45]:
        - img "@cremos4 channel banner" [ref=e47]
        - generic [ref=e48]:
          - img "@cremos4 avatar" [ref=e50]
          - generic [ref=e51]:
            - paragraph [ref=e52]: CREMOSA
            - paragraph [ref=e53]: "@cremos4"
            - paragraph [ref=e54]: 8 vídeos · canal ativo
          - link "★ Subscribe" [ref=e55] [cursor=pointer]:
            - /url: https://www.youtube.com/@cremos4?sub_confirmation=1
            - button "★ Subscribe" [ref=e56]:
              - generic [ref=e57]: ★ Subscribe
    - generic [ref=e58]:
      - generic [ref=e59]:
        - generic [ref=e60]:
          - paragraph [ref=e61]: // em destaque
          - heading "Mais recentes" [level=2] [ref=e62]
        - link "ver canal completo ↗" [ref=e63] [cursor=pointer]:
          - /url: https://www.youtube.com/@cremos4
          - button "ver canal completo ↗" [ref=e64]
      - generic [ref=e65]:
        - generic [ref=e68]:
          - generic [ref=e69]: youtube.exe — principal
          - generic [ref=e70]:
            - generic [ref=e71]: ─
            - generic [ref=e72]: □
            - generic [ref=e73]: ×
          - generic [ref=e75]:
            - button "Reproduzir baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]" [ref=e77] [cursor=pointer]:
              - img "baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]" [ref=e78]
            - generic [ref=e83]:
              - paragraph [ref=e84]: baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]
              - link "↗ YouTube" [ref=e85] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=2o0d2s5WBuA
                - button "↗ YouTube" [ref=e86]
        - generic [ref=e89]:
          - generic [ref=e90]: youtube.exe — set 2
          - generic [ref=e91]:
            - generic [ref=e92]: ─
            - generic [ref=e93]: □
            - generic [ref=e94]: ×
          - generic [ref=e96]:
            - 'button "Reproduzir baguncinha em casa 3 #djset" [ref=e98] [cursor=pointer]':
              - 'img "baguncinha em casa 3 #djset" [ref=e99]'
            - generic [ref=e104]:
              - paragraph [ref=e105]: "baguncinha em casa 3 #djset"
              - link "↗ YouTube" [ref=e106] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=EEaDRLWC3Ds
                - button "↗ YouTube" [ref=e107]
        - generic [ref=e110]:
          - generic [ref=e111]: youtube.exe — set 3
          - generic [ref=e112]:
            - generic [ref=e113]: ─
            - generic [ref=e114]: □
            - generic [ref=e115]: ×
          - generic [ref=e117]:
            - button "Reproduzir domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes" [ref=e119] [cursor=pointer]:
              - img "domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes" [ref=e120]
            - generic [ref=e125]:
              - paragraph [ref=e126]: domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes
              - link "↗ YouTube" [ref=e127] [cursor=pointer]:
                - /url: https://www.youtube.com/watch?v=LxOZZ7YF6e8
                - button "↗ YouTube" [ref=e128]
    - generic [ref=e129]:
      - generic [ref=e130]:
        - paragraph [ref=e131]: // arquivo
        - heading "Todos os vídeos" [level=2] [ref=e132]
      - list [ref=e133]:
        - listitem [ref=e134]:
          - link [ref=e135] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=2o0d2s5WBuA
            - article [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e138]: "@cremos4 · 2o0d2s5WBuA"
                - generic [ref=e139]:
                  - generic [ref=e140]: ─
                  - generic [ref=e141]: □
                  - generic [ref=e142]: ×
                - generic [ref=e143]:
                  - img "baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]" [ref=e144]
                  - paragraph [ref=e145]: baguncinha em casa [djset tranquilo sza x frank ocean x tems x bryson tiller]
                  - generic [ref=e146]:
                    - generic [ref=e147]: youtube.com
                    - generic [ref=e148]: ▶ assistir
        - listitem [ref=e149]:
          - link [ref=e150] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=EEaDRLWC3Ds
            - article [ref=e151]:
              - generic [ref=e152]:
                - generic [ref=e153]: "@cremos4 · EEaDRLWC3Ds"
                - generic [ref=e154]:
                  - generic [ref=e155]: ─
                  - generic [ref=e156]: □
                  - generic [ref=e157]: ×
                - generic [ref=e158]:
                  - 'img "baguncinha em casa 3 #djset" [ref=e159]'
                  - paragraph [ref=e160]: "baguncinha em casa 3 #djset"
                  - generic [ref=e161]:
                    - generic [ref=e162]: youtube.com
                    - generic [ref=e163]: ▶ assistir
        - listitem [ref=e164]:
          - link [ref=e165] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=LxOZZ7YF6e8
            - article [ref=e166]:
              - generic [ref=e167]:
                - generic [ref=e168]: "@cremos4 · LxOZZ7YF6e8"
                - generic [ref=e169]:
                  - generic [ref=e170]: ─
                  - generic [ref=e171]: □
                  - generic [ref=e172]: ×
                - generic [ref=e173]:
                  - img "domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes" [ref=e174]
                  - paragraph [ref=e175]: domingueira cremosa | chill vibes | rap | rnb | bounce | 00's vibes | remixes
                  - generic [ref=e176]:
                    - generic [ref=e177]: youtube.com
                    - generic [ref=e178]: ▶ assistir
        - listitem [ref=e179]:
          - link [ref=e180] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=Q2ueq_Hetao
            - article [ref=e181]:
              - generic [ref=e182]:
                - generic [ref=e183]: "@cremos4 · Q2ueq_Hetao"
                - generic [ref=e184]:
                  - generic [ref=e185]: ─
                  - generic [ref=e186]: □
                  - generic [ref=e187]: ×
                - generic [ref=e188]:
                  - 'img "baguncinha pop em casa #djset" [ref=e189]'
                  - paragraph [ref=e190]: "baguncinha pop em casa #djset"
                  - generic [ref=e191]:
                    - generic [ref=e192]: youtube.com
                    - generic [ref=e193]: ▶ assistir
        - listitem [ref=e194]:
          - link [ref=e195] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=QjCSHgYK5Eo
            - article [ref=e196]:
              - generic [ref=e197]:
                - generic [ref=e198]: "@cremos4 · QjCSHgYK5Eo"
                - generic [ref=e199]:
                  - generic [ref=e200]: ─
                  - generic [ref=e201]: □
                  - generic [ref=e202]: ×
                - generic [ref=e203]:
                  - 'img "baguncinha d''levs em casa #djset" [ref=e204]'
                  - paragraph [ref=e205]: "baguncinha d'levs em casa #djset"
                  - generic [ref=e206]:
                    - generic [ref=e207]: youtube.com
                    - generic [ref=e208]: ▶ assistir
        - listitem [ref=e209]:
          - link [ref=e210] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=cF-gz5nd1kU
            - article [ref=e211]:
              - generic [ref=e212]:
                - generic [ref=e213]: "@cremos4 · cF-gz5nd1kU"
                - generic [ref=e214]:
                  - generic [ref=e215]: ─
                  - generic [ref=e216]: □
                  - generic [ref=e217]: ×
                - generic [ref=e218]:
                  - 'img "baguncinha animada em casa #djset" [ref=e219]'
                  - paragraph [ref=e220]: "baguncinha animada em casa #djset"
                  - generic [ref=e221]:
                    - generic [ref=e222]: youtube.com
                    - generic [ref=e223]: ▶ assistir
        - listitem [ref=e224]:
          - link [ref=e225] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=hjYRSZnOyCw
            - article [ref=e226]:
              - generic [ref=e227]:
                - generic [ref=e228]: "@cremos4 · hjYRSZnOyCw"
                - generic [ref=e229]:
                  - generic [ref=e230]: ─
                  - generic [ref=e231]: □
                  - generic [ref=e232]: ×
                - generic [ref=e233]:
                  - img "Cremosidades na Agoji Vibes" [ref=e234]
                  - paragraph [ref=e235]: Cremosidades na Agoji Vibes
                  - generic [ref=e236]:
                    - generic [ref=e237]: youtube.com
                    - generic [ref=e238]: ▶ assistir
        - listitem [ref=e239]:
          - link [ref=e240] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=uhrGVExy8as
            - article [ref=e241]:
              - generic [ref=e242]:
                - generic [ref=e243]: "@cremos4 · uhrGVExy8as"
                - generic [ref=e244]:
                  - generic [ref=e245]: ─
                  - generic [ref=e246]: □
                  - generic [ref=e247]: ×
                - generic [ref=e248]:
                  - 'img "nucleo vivo #2 djset cremosa [jungle x dnb x dub x house x funk]" [ref=e249]'
                  - paragraph [ref=e250]: "nucleo vivo #2 djset cremosa [jungle x dnb x dub x house x funk]"
                  - generic [ref=e251]:
                    - generic [ref=e252]: youtube.com
                    - generic [ref=e253]: ▶ assistir
    - generic [ref=e256]:
      - generic [ref=e257]: cremosa — youtube channel
      - generic [ref=e258]:
        - generic [ref=e259]: ─
        - generic [ref=e260]: □
        - generic [ref=e261]: ×
      - generic [ref=e263]:
        - paragraph [ref=e264]: // sobre o canal
        - paragraph [ref=e265]:
          - text: Os vídeos vivem no YouTube porque é onde a audiência já está — cada set fica gravado em HD, com data e link永久 compartilhável. Quando algum vídeo novo sair, ele aparece aqui automaticamente (via o canal
          - link "@cremos4" [ref=e266] [cursor=pointer]:
            - /url: https://www.youtube.com/@cremos4
          - text: ).
        - generic [ref=e267]:
          - link "★ Subscribe" [ref=e268] [cursor=pointer]:
            - /url: https://www.youtube.com/@cremos4?sub_confirmation=1
            - button "★ Subscribe" [ref=e269]
          - link "↗ abrir canal" [ref=e270] [cursor=pointer]:
            - /url: https://www.youtube.com/@cremos4
            - button "↗ abrir canal" [ref=e271]
  - contentinfo [ref=e272]:
    - status "Barra de status" [ref=e273]:
      - generic [ref=e274]: ● Pronto · Porto Alegre, RS — Brasil
      - generic [ref=e275]: Cremosa · desde 2016
      - link "Booking →" [ref=e277] [cursor=pointer]:
        - /url: /contato/
      - generic [ref=e278]: 21:11
  - button "Open Next.js Dev Tools" [ref=e284] [cursor=pointer]:
    - img [ref=e285]
  - alert [ref=e288]
```

# Test source

```ts
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
  125 |     expect(href).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/);
  126 |   });
  127 | 
  128 |   test("archive section shows all 8 video cards", async ({ page }) => {
  129 |     // Scroll to the archive
  130 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  131 |     // Archive cards have "assistir" label
  132 |     const archiveLinks = page
  133 |       .getByRole("link", { name: /assistir/i });
  134 |     const count = await archiveLinks.count();
> 135 |     expect(count).toBe(7);
      |                   ^ Error: expect(received).toBe(expected) // Object.is equality
  136 |   });
  137 | 
  138 |   test("archive video card opens watch page on YouTube", async ({
  139 |     page,
  140 |   }) => {
  141 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  142 |     const firstArchive = page.getByRole("link", { name: /assistir/i }).first();
  143 |     await expect(firstArchive).toBeVisible();
  144 |     await expect(firstArchive).toHaveAttribute("target", "_blank");
  145 |     const href = await firstArchive.getAttribute("href");
  146 |     expect(href).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/);
  147 |   });
  148 | });
  149 | 
```