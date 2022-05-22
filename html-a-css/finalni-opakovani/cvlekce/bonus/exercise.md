---
title: Implementace dark módu a uložení preference uživatele
demand: 3
---

V bonusovém úkolu si zprovozníme překlikávání light a dark módu na stránce.

- V souboru  `style.css` v sekci CSS variables si vytvořte proměnné pro dark mode, a to v elementu `:root[data-theme='dark']`. Tyto proměnné budou:
  - `--background-primary: #132221;`
  - `--background-secondary: #476462;`
  - `--text: #e1e1e1;`
- V `index.html` si odkomentujte prvek `theme-switch-wrapper` a jeho obsah.  
- Do souboru `index.html` si napojte soubor `toggle-switch.css`. Soubor si projděte a všimněte si použití pseudoelementu `:before`
- Do souboru `index.html` si napojte soubor `index.js`. Nezapomeňte na typ `module`.
- V souboru `index.js` je odkaz na [webovou stránku](https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8), která popisuje, jak funguje přepínání mezi light a dark modem. Stránku si pročtěte.
- Pročtěte si `index.js` a okomentujte, co se děje v kódu.
- Vyzkoušejte si, že přepínání funguje.
- Naimplementujte ukládání preferencí light/dark módu do local storage podle článku (`Store the user preference for future visits`).
