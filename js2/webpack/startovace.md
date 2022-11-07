## Startovače projektů

Projekt, který jsme si zkoušeli nakonfiguravat v přechozí části, byl extrémně jednoduchý. Ve skutečné aplikaci budeme po Webpacku chtít mnohem více věcí než jen zminifikovat JavaScript. Budeme chtít

- spojit všechny JavaScriptové soubory do jednoho,
- spojit CSS styly,
- přeložit náš JavaScript do podoby kompatibilní s většinou prohlížečů,
- později zapojit knihovnu React.

Vytvořit konfiguraci pro takovýto projekt z hlavy je velmi obtížené. Zde ke slovu přicházají generátory, které umí základní strukturu projektu i s Webpack konfigurací vytvořit jedním příkazem.

Jedním z takových oblíbených generátorů pro Reactové projekty je `create-react-app`. Často jej na internetu potkáte v různých Reactových tutoriálech a kurzech. My však ještě s Reactem nepracujeme a tento generátor se nám tudíž nehodí. Použijeme proto jiný, vytvořený přímo pro tuto akademii. Jmenuje se `create-czechitas-app`.

### Postup založení nového projektu

Založíme si startovací Webpack projekt, do kterého poté zkopírujeme kód naší aplikace na správu nákupních seznamů.

Pokud chceme pomocí `create-czechitas-app` založit nový projekt, postupujte dle následujících kroků:

1. V terminálu si otevřeme složku, ve které skladujeme své projekty.
1. Pro vytvoření projektu s názvem `nakupni-seznam` spustíme příkaz
   ```sh
   $ npx create-czechitas-app nakupni-seznam vanilla
   ```
   Poslední parametr [vanilla](https://en.wikipedia.org/wiki/Plain_vanilla) znamená, že chceme vytvořit projekt v základním JavaScriptu.
1. Otevřeme složku `nakupni-seznam` ve VS Code. Spustíme terminál a uvnitř této složky spustíme příkaz
   ```
   npm run start
   ```
1. V prohlížeči by se měla otevřít jednoduchá stránka zobrazující úvodní HTML. Ve VS Code smažeme obsah složky `src` a nahrdíme ji kódem z [poslední verze](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/posilani-dat) našeho nákupního seznamu. 
1. Startovací projekt obsahuje ve složce `public` vlastní `index.html` správně nastavn7 tak, aby používal JavaScriptový soubor vygenerovaný Webpackem. Vložíme do něj obsah `body` z `index.html` našeho projektu. Náš původní `index.htm` smažeme.

## Import stylů

Webpack umí kromě JavaScriptu zabalit také CSS. To nás zachrání od ručního importu stylů pro každou jednotlivou komponentu, jak jsme byli doposud vzyklí. Webpack dokonce výsledné sestavené CSS vloží do stránky pomocí JavaScriptu, naše stránka tak nemusí stahovat vůbec žádné CSS. 

Aby Webpack poznal, které CSS má do výsledního projektu zabalit, je potřeba mu to říct pomocí importů. V hlavním souboru `index.js` je tedy potřeba na začátku importvat styly

```js
import `./style.css`;
```

Totéž je potřeba provést na začátku všech komponenty, které obsahují vlastní styly. Tím máme náš projekt hotový. Výsledný kód si můžete prohlédnout ve větvi [webpack](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/webpack) našeho hlavního repozitáře.

