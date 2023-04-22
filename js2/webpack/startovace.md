## Startovače projektů

Projekt, který jsme si zkoušeli nakonfiguravat v přechozí části, byl extrémně jednoduchý. Ve skutečné aplikaci budeme po Webpacku chtít mnohem více věcí než jen zminifikovat JavaScript. Budeme chtít

- spojit všechny JavaScriptové soubory do jednoho,
- spojit CSS styly,
- přeložit náš JavaScript do podoby kompatibilní s většinou prohlížečů,
- později zapojit knihovnu React.

Vytvořit konfiguraci pro takovýto projekt z hlavy je velmi obtížné. Zde ke slovu přicházají generátory, které umí základní strukturu projektu i s Webpack konfigurací vytvořit jedním příkazem.

Jedním z takových oblíbených generátorů pro Reactové projekty je `create-react-app`. Často jej na internetu potkáte v různých Reactových tutoriálech a kurzech. My však ještě s Reactem nepracujeme a tento generátor se nám tudíž nehodí. Použijeme nám již známý `create-kodim-app`, který kromě projektů typu `html-css-js` umí generovat i projekty založené na Webpacku.

### Postup založení nového projektu

Naši aplikaci _Nákupy_ jsme v minulé lekci zanechali v repozitáři [projekt-nakupy-post](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-post). Nyní si vytvoříme nový Webpackový projekt, do kterého náš kód zkopírujeme.

1. V terminálu si otevřeme složku, ve které skladujeme své projekty.
1. Pro vytvoření projektu s názvem `nakupy-webpack` spustíme příkaz
   ```sh
   $ npm init kodim-app nakupy-webpack vanilla
   ```
   Poslední parametr [vanilla](https://en.wikipedia.org/wiki/Plain_vanilla) znamená, že chceme vytvořit projekt v základním JavaScriptu zatím bez Reactu.
1. Otevřeme složku `nakupy-webpack` ve VS Code. Spustíme terminál a uvnitř této složky spustíme příkaz
   ```
   npm run start
   ```
1. V prohlížeči by se měla otevřít jednoduchá stránka zobrazující úvodní HTML. Ve VS Code smažeme obsah složky `src` a nahradíme ji kódem z poslední verze aplikace _Nákupy_.
1. V souboru `index.html` je potřeba smazat řádek vkládající JavaScript, protože ten nám tam Webpack vloží automaticky.
1. Přejmenujeme soubor `script.js` na `index.js`, neboť v tomto souboru Webpack očekává náš JavaScriptový kód.

## Import stylů

Webpack umí kromě JavaScriptu zabalit také CSS. To nás zachrání od ručního importu stylů pro každou jednotlivou komponentu, jak jsme byli doposud zvyklí. Webpack dokonce výsledné sestavené CSS vloží do stránky pomocí JavaScriptu sám, naše stránka tak nemusí vůbec do HTML linkovat žádné CSS soubory. Všechny linky na CSS soubory tak můžeme z našeho `index.html` smazat.

Aby Webpack poznal, které CSS má do výsledného projektu zabalit, je potřeba mu to říct pomocí importů. V hlavním souboru `index.js` je tedy potřeba na začátku importovat styly

```js
import `./style.css`;
```

Totéž je potřeba provést na začátku všech komponent, které obsahují vlastní styly. Tím máme náš projekt hotový a funkční.
