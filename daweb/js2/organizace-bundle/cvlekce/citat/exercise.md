---
title: Citát
demand: 2
lead: Vyzkoušejte si založení vlastního Vite projektu s jednoduchou stránkou.
solutionAccess: lock
---

Vyzkoušejte si založení vlastního Vite projektu s jednoduchou stránkou.

1. Založte nový `vanilla` projekt s názvem _quotes_:
   ```sh
   npm init kodim-app@latest quotes vanilla
   ```
1. Uvnitř projektu nastartujte vývojový server příkazem `npx vite`.
1. Upravte soubor `index.html`. Uvnitř elementu `#app` vytvořte HTML pro stránku zobrazující nějaký známý citát. Upravte styly v souboru `style.css` a dejte stránce nějaký vzhled. Můžete se inspirovat třeba [zde](assets/quote.png). Vtipné citáty generované umělou inteligencí vám rád naservíruje [Inspirobot](https://inspirobot.me). Zajímavé nápadu bude mít jistě mít i [ChatGPT](https://chat.openai.com).
1. Vytvořte soubor `quotes.js` a vložte do něj pole s citáty. Vytvořte v něm funkci, která bude náhodně vybere jeden citát z pole a vrátí jej jako řetězec.
1. Importujte tuto funkci do vašeho `index.js` a použijte ji pro zobrazení citátu na stránce.

:::solution

Příklad možného řešení: https://github.com/Czechitas-podklady-WEB/reseni-quotes

:::
