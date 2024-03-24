---
title: Východ a západ slunce
demand: 2
context: lekce
lead: Zobrazte na stránce čas východu a západu slunce.
solutionAccess: protected
---

Vytvořme webovou stránku, která bude zobrazovat čas, kdy dnes vyšlo a kdy zapadá slunce. V tomto cvičení ještě nebudeme používat JSX a komponenty, abychom se mohli soustředit na práci s API.

1. Založte si nový klasický HTML/CSS/JS projekt, tedy bez JSX, Vite apod.

   ```shell
   npm init kodim-app@latest cviceni-vychod-zapad html-css-js
   ```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-vychod-zapad`.
1. V souboru `index.js` pomocí funkce `fetch` a klíčovécho slova `await` získejte data z API na adrese
   ```
   https://api.sunrise-sunset.org/json?lat=50&lng=14.5
   ```
   Výsledný JSON zatím pouze vypište do konzole a prohlédněte si jeho strukturu.
1. Místo do konzole vypište někam do stránky čas východu a západu slunce. Obsah stránky sestavte postaru, tedy jako řetězec s použitím vlastnosti `innerHTML`.

:::solution

Soubor `index.js`:

```js
const response = await fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
const data = await response.json();
const sunrise = data.results.sunrise;
const sunset = data.results.sunset;

document.body.innerHTML += `
  <p>Východ slunce: ${sunrise}</p>
  <p>Západ slunce: ${sunset}</p>
;
```

:::
