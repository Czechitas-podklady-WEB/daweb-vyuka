---
title: Východ a západ slunce
demand: 2
---

Vytvořme webovou stránku, která bude zobrazovat čas, kdy dnes vyšlo a kdy zapadá slunce.

::fig[ukázka výsledku]{src=assets/ukazka.gif}

1. Založte si nový projekt příkazem

   ```shell
   npm init kodim-app cviceni-vychod-zapad html-css-js
   ```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-vychod-zapad`.
1. V souboru `index.js` pomocí funkce `fetch` získejte data z API na adrese
   ```
   https://api.sunrise-sunset.org/json?lat=50&lng=14.5
   ```
   Výsledný JSON zatím pouze vypište do konzole a prohlédněte si jeho strukturu.
1. Místo do konzole vypište někam do stránky čas západu a východu slunce.
1. Přidejte na stránku tlačítko. Když uživatel toto tlačíko stiskne, teprve pak zavolejte API a zobrazte západ slunce.

---solution

Soubor `index.html`:

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src="index.js"></script>

    <title>Východ a západ slunce</title>
  </head>

  <body>
    <div class="container">
      <button id="show">Ukázat</button>
      <div id="sunrise-sunset"></div>
    </div>
  </body>
</html>
```

Soubor `index.js`:

```js
const showBtn = document.querySelector('#show');
showBtn.addEventListener('click', () => {
  fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { sunrise, sunset } = data.results;
      document.querySelector('#sunrise-sunset').innerHTML = `
        <p>Východ slunce: ${sunrise}</p>
        <p>Západ slunce: ${sunset}</p>
      `;
    });
});
```
