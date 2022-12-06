---
title: Routování
demand: 3
---

Zprovoznímě klientské routování, abychom dokázali zobrazit stránku se shrnutím objednánky.

1. Ve složce `src` vytvořte složku `pages`. V ní budeme skladovat komponenty stránek.
1. Ve vytvořené složce založte komponentu `HomePage`. Tato komponenta nechť vytvoří celý obsah domovské stránky. Většinu kódu můžete vzít z hlavního `index.js`. 
1. Ve složce `HomePage` vytvořte složku `components`, do které přesunťe všechny komopnenty, které jsou pouze na domovské stránce, tedy `Banner`, `Contact`, `Gallery` a `Menu`. Komponenty `Footer` a `Header` použíjeme i na ostatních stránkách, zůstanou tedy na svém místě v `src/components`. 
1. Upravte hlavní soubor `index.js` aby používal routování. Kromě importů tedy bude obsahovat:
   ```js
   const { pathname } = window.location;

   if (pathname === '/') {
     document.querySelector('#app').append(HomePage());
   }
   ```
1. Po těchto úpravách by vaše stránka měla fungovat zcela stejně jako před tím. Jsme však připraveni na to přidat další stránku.
1. Proveďte *commit* a *push* vaších změn.
