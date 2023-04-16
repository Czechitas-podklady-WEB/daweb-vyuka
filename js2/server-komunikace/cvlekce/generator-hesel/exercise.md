---
title: Generátor hesel
demand: 3
---

Vyrobíme stránku, která pomůže uživateli vygenerovat upravdu silné a neprůstřelné heslo. Použijeme k tomu [tréningové API](https://apps.kodim.cz/daweb/trening-api/docs/heslo) na generování hesel.

::fig[ukázka výsledku]{src=assets/ukazka.gif}

1. Založte si nový projekt příkazem

   ```shell
   npm init kodim-app cviceni-generator-hesel html-css-js
   ```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-generator-hesel`.
1. Prohlédněte si dokumentaci API pro generování hesla a vyzkoušejte si jej „na sucho“ v prohlížeči. Zkuste vygenerovat hesla různých délek a prohlédněte si, jak vypadá struktura dat, která API vrací.
1. Vytvořte stránku s jedním tlačítkem. Když na něj uživatel klikne, zobrazí se mu vygenerované heslo délky **16**. S každým dalším kliknutím by se mělo heslo změnit, přegenerovat.

#### Bonus

1. Přepracujte stránku tak, aby obsahovala formulář s textovým políčkem, do kterého uživatel může zadat délku hesla. Po odeslání formuláře se mu zobrazí heslo zadané délky.

---solution

Soubor `index.html`:

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generátor hesel</title>
    <script src="index.js" type="module"></script>
  </head>
  <body>
    <div class="container">
      <button id="password-generator">Generuj heslo</button>
      <p class="show-password"></p>
    </div>
  </body>
</html>
```

Soubor `index.js`:

```js
const buttonElm = document.querySelector('#password-generator');
buttonElm.addEventListener('click', () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector('.show-password').textContent = data.password;
    });
});
```

#### Bonus

Soubor `index.html`:

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generátor hesel</title>
    <script src="index.js" type="module"></script>
  </head>
  <body>
    <div class="container">
      <form id="password-form">
        <label
          >Délka hesla
          <input id="password-length" type="number" required />
        </label>
        <button type="submit">Generuj heslo</button>
      </form>
      <p class="show-password"></p>
    </div>
  </body>
</html>
```

Soubor `index.js`:

```js
const formElm = document.querySelector('#password-form');
formElm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputElm = document.querySelector('#password-length');
  fetch(
    `https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${inputElm.value}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector('.show-password').textContent = data.password;
    });
});
```
