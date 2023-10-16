---
title: Správce odkazů
demand: 2
lead: Vytvořte aplikaci, která bude spravovat internetové odkazy.
solutionAccess: lock
---

Jistě by se někomu mohla hodit aplikace, která bude spravovat různé internetové odkazy, abychom je nemuseli mít v tísíci záložkách v prohlížeči, které se pak bojíme zavřít. Postupujte dle následujících kroků. Naši aplikaci nazveme originálně _Správce odkazů_.

1. Nejdříve vytvořte lokální API server pro náš projekt. Založted si někde na disku složku `odkazy-api` a otevřete ji ve VS Code.
1. Vytvořte v ní soubor `links.json` a vložte do něj pole několika odkazů, abychom mělik do začátku nějaká data. Rozmyslete si, jak by měl objekt jednoho odkazu vypadat. Určitě budeme chtít evidovat
   
   - URL na kterou odkaz míří, např. `https://www.seznam.cz`,
   - název odkazu, např. `Seznam`,
   - popis odkazu, např. `Nejlepší český vyhledávač`.
   - typ odkazu, např. `web`, `youtube video` apod.

   Sami si rozmyslete, jak se budou jednotlivé vlastnosti jmenovat a jaké hodnoty budou mít. Vytvořte si alespoň dva objekty s různými hodnotami.
1. **Nezapomeňte**, že každá položka musí být číselné `id`.
1. Rozeběhněte si lokální server pomocí `npx jsonhost`. Otevřete si v prohlížeči stránku [http://localhost:4000/api/links](http://localhost:4000/api/links) a ověřte, že se vám zobrazují data z vašeho souboru.
1. Založte si nový Vite/JSX projekt pomocí `npm init kodim-app@latest spravce-odkazu jsx`. Otevřete si složku projektu v novém okně VS Code.
1. Na začátku souboru `index.jsx` proveďte `fetch`, který načte data z vašeho lokálního API serveru. Výsledek uložte do proměnné `links`. Pomocí `console.log` ověřte, že se vám data načetla.
1. Zobrazte odkazy na stránce pomocí `map`.
1. Vytvořte komponentu `StoredLink`, která bude zobrazovat jeden odkaz. Sami si rozmyslete, jaké bude mít komponenta `props` a lehce ji nastylujte, aby stránka trošku vypadala.
1. Zapojte komponentu `StoredLink` do stránky.

<!-- :::solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-hlasovani-jmeno-olxgk5?file=/index.js).

::: -->
