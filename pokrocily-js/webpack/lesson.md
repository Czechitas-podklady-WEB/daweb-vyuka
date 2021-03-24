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

Ve chvili, kdy máme založený projekt, budeme potřebovat nástroj, vezme náš kód spolu s použitými knihovnami a zabalí je všechny do jednoho jediného velkého JavaScriptového souboru- Ten si pak prohlížeč může stáhnout celý najednou a nemusí tak čekat na spoustu malých souborů. Nástroj, který k tomuto účelu budeme používat se jmenuje Webpack. 

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
    "webpack": "^5.26.3",
    "webpack-cli": "^4.5.0"
  }
}
```

Přibyla nám nová položka `devDependencies`. V té je seznam balíčků, které se nestanou součástí naší výsledné stránky. Tyto balíčky používáme pouze při vývoji. 



Webpack je nástroj, který slouží ke spojení zdrojových JavaScriptových souborů do jednoho výsledného souboru, který pak prohlížeč může stáhnout najednou. Tomuto procesu se říká <term cs="sestavení" en="build">. K tomu, aby se náš projekt správně sestavil, potřebujeme Webpack správně nakonfigurovat. Vytvořít takovou konfiguraci od základu je už relativně pokročilá dovednost. V našem případě tedy budeme pracovat s již předem připravenou konfigurací, která se hodí na většinu jednoduchých frontendových projektů.

### Postup založení nového projektu

Tento postup následujte vždy, když chcete založit nový frontendový projekt založený na Webpacku.

1. Z [tohoto odkazu](https://github.com/Czechitas-podklady-WEB/project-starters/archive/main.zip) si stáhněte ZIP soubor s připravenou konfigurací.
1. Rozbalte ZIP soubor do nějaké složky a přejmenujte si složku `project-starter` dle názvu svého projektu, například `muj-projekt`.
1. Otevřete složku `muj-projekt` vs VS Code. Spusťte terminál a uvnitř této složky spusťte příkaz
   ```
   npm install
   ```
1. Spusťte příkaz
   ```
   npm run start
   ```

```
├──node_modules
├──src
│  ├──img
│  │  └──background.svg
│  ├──ShoppingItem
│  │  ├──index.js
│  │  └──style.css
│  ├──ShoppingList
│  │  ├──index.js
│  │  └──style.css
│  ├──index.html
│  ├──index.js
│  └──style.css
├──package-lock.json
└──package.json
```

## Import a export

[[[ excs Cvičení: Základy Webpacku
- citat
]]]

[[[ excs Doporučené úložky na doma
- svetovy-cas-webpack
]]]
