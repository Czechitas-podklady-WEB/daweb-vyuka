Čím jsou naše webové aplikace rozsáhlejší, tím je těžší se ve zdrojovém kódu orientovat, obzvláště pokud je celý obsažen v jednom souboru `index.js`. Naše aplikace se tedy snažíme rozdělovat na jednotlivé komponenty a jejich kód budeme vkládat do oddělených souborů. Díky tomu se dokážeme abychom ve struktuře aplikace lépe vyznat.

## Oddělování komponent

Pojďme si dělení kódu aplikace do vícero souborů vyzkoušet na našem nákupním seznamu. Stáhněte si [zdrojový kód](assets/nakupni-seznam.zip) již funkční a nastylované aplikace. Struktura souborů pro výslednou aplikaci bude vypadat takto.

```
├──img
│  └──background.svg
├──ShoppingItem
│  ├──index.js
│  └──style.css
├──ShoppingList
│  ├──index.js
│  └──style.css
├──index.html
├──index.js
└──style.css
```

@exercises ## Cvičení - Oddělování komponent [

- prestupky-2
  ]@

## Webpack

Webpack je nástroj, který slouží ke spojení zdrojových JavaScriptových souborů do jednoho výsledného souboru, který pak prohlížeč může stáhnout najednou. Tomuto procesu se říká <term cs="sestavení" en="build">. K tomu, aby se náš projekt správně sestavil, potřebujeme Webpack správně nakonfigurovat. Vytvořít takovou konfiguraci od základu je už relativně pokročilá dovednost. V našem případě tedy budeme pracovat s již předem připravenou konfigurací, která se hodí na většinu jednoduchých frontendových projektů.

### Postup založení nového projektu

Tento postup následujte vždy, když chcete založit nový frontendový projekt založený na Webpacku.

1. Z [tohoto odkazu](assets/webapp-starter.zip) si stáhněte ZIP soubor s připravenou konfigurací.
1. Rozbalte ZIP soubor do nějaké složky a přejmenujte si složku `webapp-starter` dle názvu svého projektu, například `muj-projekt`.
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

@exercises ## Cvičení - Základy Webpacku [

- citat
  ]@
