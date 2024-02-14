---
title: Citát
demand: 2
lead: Vyzkoušejte si založení vlastního Vite projektu s jednoduchou stránkou.
solutionAccess: protected
---

Vyzkoušejte si založení vlastního Vite projektu s jednoduchou stránkou.

1. Založte nový Vite projekt s názvem _quotes_:
   ```sh
   npm init kodim-app@latest quotes jsx
   ```
1. Uvnitř projektu nastartujte vývojový server příkazem `npm run dev`.
1. Upravte soubor `index.html`. Uvnitř elementu `#root` vytvořte HTML pro stránku zobrazující nějaký známý citát. Upravte styly v souboru `index.css` a dejte stránce nějaký vzhled. Můžete se inspirovat třeba [zde](assets/quote.png). Vtipné citáty generované umělou inteligencí vám rád naservíruje [Inspirobot](https://inspirobot.me). Zajímavé nápadu bude mít jistě mít i [ChatGPT](https://chat.openai.com).
1. Ve složce `src/pages` vytvořte soubor `quotes.js` a vložte do něj pole s citáty. Vytvořte v něm funkci, která náhodně vybere jeden citát z pole a vrátí jej jako řetězec.
1. Samžte obsah souboru `index.jsx`, importujte v něm funkci pro výběr citátu a použijte ji pro zobrazení citátu na stránce.

<!-- :::solution

Příklad možného řešení: https://github.com/Czechitas-podklady-WEB/reseni-quotes

::: -->
