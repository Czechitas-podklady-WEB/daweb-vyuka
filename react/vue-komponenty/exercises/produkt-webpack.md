---
title: Produkt pomocí Webpacku
demand: 2
---

Vezměte své řešení předchozího příkladu a upravte váš projekt tak, aby používal Webpack. Následujte tyto kroky.

1. Vytvořte si složku pro váš nový projekt s názvem `product-webpack`.
1. Vložte do něj konfigurační soubory `package.json` a `webpack.config.js` z této lekce.
1. Uvnitř této složky vytvořte složku `src`, která bude obsahovat zdrojové kódy vašeho projektu - `index.html`, `index.js` a `style.css`.
1. Obrázek produktu vložte do složky `src/assets/img`. Upravte cestu k tomu obrázku uvnitř souboru `index.html` na `assets/img/product.png`.
1. V souboru `index.js` správně importujte Vue, a soubory `index.html` a `style.css`, aby Webpack věděl, že je má zahrnout do výsledného sestavení.
1. V souboru `index.html` smažte značku `script` pro framework Vue a na konci značky `body` nahraďte skript `index.js` skriptem `bundle.js`.
1. Otevřete složku projektu v terminálu a nainstalujte veškeré závislosti pomocí `npm install`.
1. Sestavte projekt pomocí `npm run build`.
1. Spusťe Live Server a vyzkoušejte, zda váš projekt správně funguje.
