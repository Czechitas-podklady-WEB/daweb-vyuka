---
title: Schránka - založení projektu
demand: 2
---

Vyzkoušejte si založení vlastního Webpack projektu. Zkusíme vyrobit stránku pro příchozí poštu v emailové schránce.

1. Vytvořte si složku s názvem `inbox`.
1. Stáhněte si připravený soubor s balíčky [package.json](../assets/package.json) a konfigurační soubor Webpacku [webpack.config.js](../assets/webpack.config.js) a vložte je do vaší složky.
1. Otevřete vaši složku ve VS Code a v terminálu nainstalujte všechny balíčky pomocí `npm install`.
1. Unvitř vaší složky vytvořte složku `src` a v ní vytvořte soubory `index.html`, `style.css` a `index.js`.
1. Do HTML souboru zatím vložte váš pouze `h1` nadpis <i>Inbox</i>. V CSS jej malinko nastylujte, abychom mohli později ověřit, že nám fungujís tyly. Nezapomeňte na konec `body` vložit odkaz na skript `bundle.js`. Ten sice ještě nemáme, ale Webpack nám jej vytvoří.
1. V souboru `index.js` správně importujte soubory `index.html` a `style.css`.
1. Sestavte váš projekt pomocí příkazu `npm run build`. Webpack by měl vytvořit složku `dist`. Otevřete ji a pomocí Live Serveru otevřete soubor `index.html`. Oveřte, že váš nadpis je správně nastylovaný.
