## Startovače projektů

Projekt, který jsme si zkoušeli nakonfigurovat v předchozí části, byl extrémně jednoduchý. Ve skutečné aplikaci budeme po Vite chtít mnohem více věcí než jen zminifikovat JavaScript. Budeme chtít

- spojit všechny JavaScriptové soubory do jednoho,
- spojit CSS styly,
- přeložit náš JavaScript do podoby kompatibilní s většinou prohlížečů,
- později zapojit knihovnu React.

Vytvořit konfiguraci pro takovýto projekt z hlavy může být velmi zdlouhavé. Zde ke slovu přicházejí generátory, které umí základní strukturu projektu i s Vite konfigurací vytvořit jedním příkazem.

Jedním z takových oblíbených generátorů pro reactové projekty je `create-react-app`. Často jej na internetu potkáte v různých reactových tutoriálech a kurzech. My však ještě s Reactem nepracujeme a tento generátor se nám tudíž nehodí. Použijeme nám již známý `create-kodim-app`, který kromě projektů typu `html-css-js` umí generovat i projekty založené na Vite.

### Postup založení nového projektu

Naši aplikaci _Nákupy_ jsme v zanechali v repozitáři [ukazka-nakupy-import-export](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy-import-export). Nyní si vytvoříme nový Vite projekt, do kterého náš kód zkopírujeme.

1. V terminálu si otevřeme složku, ve které skladujeme své projekty.
1. Pro vytvoření projektu s názvem `nakupy-vite` spustíme příkaz
   ```sh
   $ npm init kodim-app@latest nakupy-vite jsx
   ```
   Poslední parametr jsx znamená, že chceme vytvořit projekt v základním JavaScriptu zatím bez Reactu.
1. Otevřeme složku `nakupy-vite` ve VS Code. Spustíme terminál a uvnitř této složky spustíme příkaz
   ```
   npm run dev
   ```
1. V prohlížeči by se měla otevřít jednoduchá stránka zobrazující úvodní HTML. Ve VS Code smažeme obsah složky `src/pages` a nahradíme ji kódem z poslední verze aplikace _Nákupy_.

## Import stylů

Podobně jako jsme se učili dělit JavaScriptový kód do více souborů, budeme totéž dělat i se soubory CSS. Vite umí kromě JavaScriptu zabalit také CSS. To nás zachrání od ručního importu mnoha stylů přímo do soubou `index.html`. Vite dokonce výsledné sestavené CSS vloží do stránky sám, naše stránka tak nemusí vůbec do HTML linkovat žádné CSS soubory. Všechny linky na CSS soubory tak můžeme z našeho `index.html` smazat.

Aby Vite poznal, které CSS má do výsledného projektu zabalit, je potřeba mu to říct pomocí importů. V hlavním souboru `index.js` je tedy potřeba na začátku importovat styly

```js
import './index.css';
```

V další lekci se naučíme vyrábět takzvané komponenty. CSS styly pak budeme importovat mnohem častěji, než jsme nyní zvyklí.
