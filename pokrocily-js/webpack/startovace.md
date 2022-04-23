## Startovače projektů

Projekt, který jsme si zkoušeli nakonfiguravat v přechozí části, byl extrémně jednoduchý. Ve skutečné aplikaci budeme po Webpacku chtít mnohem více věcí než jen zminifikovat JavaScript. Budeme chtít

- spojit všechny JavaScriptové soubory do jednoho,
- spojit CSS styly,
- přeložit náš JavaScript do podoby kompatibilní s většinou prohlížečů,
- později zapojit knihovnu React.

Vytvořit konfiguraci pro takovýto projekt z hlavy je velmi obtížené. Zde ke slovu přicházají generátory, které umí základní strukturu projektu i s Webpack konfigurací vytvořit jedním příkazem.

Jedním z takových oblíbených generátorů pro Reactové projekty je `create-react-app`. Často jej na internetu potkáte v různých Reactových tutoriálech. My však ještě s Reactem nepracujeme a tento generátor se nám tudíž nehodí. Použijeme proto jiný, vytvořený přímo pro tuto akademii. Jmenuje se `create-czechitas-app`.

### Postup založení nového projektu

Pokud chceme pomocí `create-czechitas-app` založit nový projekt, postupujte dle následujících kroků:

1. V terminálu si otevřete složku, ve které skladujete své projekty.
1. Pro vytvoření projektu s názvem `muj-projekt` spusťte příkaz
   ```sh
   $ npx create-czechitas-app muj-projekt vanilla
   ```
   Poslední parametr [vanilla](https://en.wikipedia.org/wiki/Plain_vanilla) znamená, že chceme vytvořit projekt v základním JavaScriptu.
1. Otevřete složku `muj-projekt` ve VS Code. Spusťte terminál a uvnitř této složky spusťte příkaz
   ```
   npm run start
   ```
