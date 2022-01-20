---
title: Webpack a větší aplikace
lead: Ukážeme si jak stavět větší aplikace z menších částí pomocí Webpacku.
---

Čím budou naše webové aplikace pokročilejší a schopnější tím více budou obsahovat nejen kódu ale také různých knihoven. Brzy již přestane být únosné mít všechen kód v jednom obřím `index.js`, protože by se v něm za chvíli už nikdo nikdy nevyznal. Bude tedy potřeba jej rozdělit do více samostatných souborů. 

## Oddělování komponent

Nejpřímočařejší způsob jak rozsekat kód na části je vytvořit specilání soubor pro každou komponentu. Pro náš nákupní seznam se dvěma komponentami bychom tak měli tři JavaScriptové soubory.

- `shopping-item.js` obsahující komponentu `ShoppingItem`
- `shopping-list.js` obsahující komponentu `ShoppingList`
- `index.js`, který spojí vše dohromady.

Kdyby náš nákupní seznam ještě navíc pracoval s dalšími knihovnami jako třeba `validator.js` nebo `dayjs`, museli bychom do hlavičky stránky vložit pět různých skriptů.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/validator/13.5.2/validator.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.4/dayjs.min.js" ></script>
<script src="shopping-item.js" defer></script>
<script src="shopping-list.js" defer></script>
<script src="index.js" defer></script>
```

Zde se však pomalu dostáváme do potíží. Prohlížeč dokáže mnohem rychleji stáhnout jeden velký soubor než pět malých souborů. A to je naše aplikace pořád malinkatá. Reálné projekty nezřídka obsahují stovky i tísíce komponent plus desítky různých knihoven. Stáhování tisíce JavaScriptových souborů by naší stránku strašlivě zpomalilo a uživatel by z hrůzou utekl jinam. Potřebujeme tedy jiné řešení. To nám nabízí balíčkovací systém NPM a program Webpack. 

## Systém NPM

NPM je nástroj, který umožňuje spravovat knihovny a kód pro větší JavaScriptové projekty. V systému NPM se knihovnám říká <term cs="balíčky" en="packages">, můžeme tedy říct, že NPM je správce balíčků.

Vytvořit projekt založený na NPM není nic těžkého. Jediné, co k tomu potřebujeme je založit prázdnou složku a do ní vložit speciální soubor `package.json`. Ten obsahuje základní informace o našem projektu, jako je jméno, verze a seznam balíčků (dříve knihoven), které náš projekt používá. 

Založíme si tedy složku `muj-projekt` a otevřeme ji ve VS Code. Do ní vložíme soubor `package.json` s tímto obsahem

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {}
}
```

Vlastnost `dependencies` říká, jaké všechny balíčky náš projekt používá. Odborně se takovým balíčkům říká závislosti. V našem případě zatím žádné závislosti nemáme. 

Mohli bychom však v našem projektu chtít použít například nám už známé knihovny `validator.js` a `dayjs`. Abychom je zapojili jako závislosti do našeho projektu, musíme je nainstalovat. V terminálu proto spustíme tento příkaz:

```sh
$ npm install validator dayjs
```

Po spuštění tohoto příkazyu nám v našem projektu přibyla složka `node_modules`. Ta obsahuje stažený kód nainstalovaných balíčků. Dále nám ve složce přibyl soubor `package-lock.json`. Jeho význam je malinko komplikovanější, takže jej pro tuto chvíli necháme být. 

Zároveň se nám změnil také soubor `package.json`. 

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  }
}
```

Vidíte, že pod klíčem `dependencies` je seznam balíčků a jejich verzí, které jsou teď součástí naseho projektu. Vaše verze mohou mít trochu jiná čísla v závislosti na tom, jak daleko v budoucnosti si čtete tento text. 

## Webpack

Ve chvili, kdy máme založený projekt, budeme potřebovat nástroj, který vezme náš kód spolu s použitými knihovnami a zabalí je všechny do jednoho velkého JavaScriptového souboru. Ten si pak prohlížeč může stáhnout celý najednou a nemusí tak čekat na spoustu malých souborů za sebou. Nástroj, který k tomuto účelu budeme používat, se jmenuje Webpack. 

Nejdříve musíme do našeho projektu Webpack nainstalovat. To provedeme příkazem

```sh
$ npm install -D webpack webpack-cli
```

Po tomto zásahu bude náš `package.json` vypadat následovně. 

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  },
  "devDependencies": {
    "webpack": "^5.34.0",
    "webpack-cli": "^4.6.0"
  }
}
```

Přibyla nám nová položka `devDependencies`. V té je vypsán seznam balíčků, které představují takzvané vývojové závislosti. Tyto balíčky se nestanou součástí naší výsledné stránky, používáme je pouze během vývoje.

### Struktura projektu

Od této chvíle bude každý náš projekty mít dvě hlavní části: 

- **zdrojové kódy** - všechny soubory s JavaScriptem, CSS, HTML atd., ze kterých se mát vytvořit výsledná aplikace. Budeme je dávat do složky `src`. 
- **sestavená aplikace** - výsledná aplikace vytvořená nástrojem Webpack. Tento výsledek pak můžeme nahrát třeba někam na server. Sestavená aplikace se nám objeví ve složce `dist`. 

Nejprve si založíme složku pro zdrojové kódy. V projektu `muj-projekt` vytvoříme složku `src` a v ní soubor `index.js`. Náš projekt bude pak vypadat takto. 

```
├──node_modules
├──src
│  └──index.js
├──package-lock.json
└──package.json
```

Do souboru `index.js` zatím vložíme jednoduchý uvítací kód. 

```js
const greet = (name) => {
  return `Hello ${name}`;
};

const h1Elm = document.querySelector('h1');
h1Elm.textContent = greet('Martin');
console.log(greet('Martin'));
```

Nyní použijeme Webpack k sestavení výsledné aplikace. Aby se náš projekt sestavil, potřebujeme Webpack správně nakonfigurovat. V projektu `muj-projekt` vytvoříme soubor `webpack.config.js` s tímto obsahem. 

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

Vytvořit takovou konfiguraci od základu je už relativně pokročilá dovednost. Proto jsme zde rádi, že nám byla dána takto shůry a po jejím původu se nepídíme. Tato konfigurace v podstatě říká, že Webpack má vzít soubor `src/index.js` a sestavit z něj výsledek, který se bude nacházet ve složce `dist/bundle.js`. 

Abychom mohli webpack spustit, v souboru `package.json` si vytvoříme příkaz `build`. 

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  },
  "devDependencies": {
    "webpack": "^5.34.0",
    "webpack-cli": "^4.6.0"
  }
}
```

Nyní stačí otevřít v našem projektu termínál a napsat příkaz

```sh
$ npm run build
```

Pokud se vše povedlo, uvnitř projektu se vytvoří soubor `dist/bundle.js`, který obsahuje takzvaně <term cs="minifikovanou" en="minified"> verzi našeho kódu. Ta může vypadat například takto děsivě. 

```js
(()=>{const t=t=>`Hello ${t}`;document.querySelector("h1").textContent=t("Martin"),console.log(t("Martin"))})();
```

Webpack dělá minifikaci proto, aby náš výsledný kód byl co nejmenší. Vzhledem k tomu, že kód bude číst prohlížeč, můžeme zcela objetovat jakoukouliv srozumitelnost pro člověka. Webpack tedy

- odstranil všechny bílé znaky,
- přejmenoval naši funkci `greet` prostě na `t`,
- všude, kde se dalo vynechal závorky a zbytečné znaky. 

## Startovače projektů

Projekt, který jsme si zkoušeli nakonfiguravat v přechozí části byl extrémně jednoduchý. Ve skutečné aplikace budeme po Webpacku chtít mnohem více věcí než jen zminifikovat JavaScript. Budeme chtít

- spojit všechny JavaSriptové soubory do jednoho,
- spojit CSS styly,
- přeložit náš JavaScript do podoby kompotibilní s většinou prohlížečů, 
- později zapojit knihovnu React. 

Vytvořit konfiguraci pro takovýto projekt z hlavy je velmi obtížené. Zde ke slovu přicházají generátory, které umí základní strukturu projektu i s Webpack konfigurací vytvořit jedním příkazem. 

Jedním z takových oblíbených generátorů pro Reactové projekty je `create-react-app`. Často jej na internetu potkáte v různých Reactových tutoriálech. My však ještě s Reactem nepracujeme a nento generátor se nám tudíž nehodí. Použijeme proto jiný, vytvořený přímo pro tuto akademii. Jmenuje se `create-czechitas-app`.

### Postup založení nového projektu

Pokud chceme pomocí `create-czechitas-app` založit nový projekt, postupujte dle následujících kroků.

1. V terminálu si otevřete složku, ve které skladujete své projekty. 
1. Pro vytvoření projektu s názvem `muj-projekt` spusťte příkaz
   ```sh
   $ npx create-czechitas-app muj-projekt vanilla
   ```
1. Otevřete složku `muj-projekt` vs VS Code. Spusťte terminál a uvnitř této složky spusťte příkaz
   ```
   npm run start
   ```

[[[ excs Cvičení: Základy Webpacku
- citat
- citat-komponenta
]]]

## Import a export

- importování JavaScriptových souborů,
- importování CSS
- rozdělení komponent do složek s `index.js`, `style.css`
- práce s obrázky v CSS
- práce se složkou `assets`

[[[ excs Cvičení: import/export
- citat-import-export
]]]

[[[ excs Doporučené úložky na doma
- svetovy-cas-webpack
]]]
