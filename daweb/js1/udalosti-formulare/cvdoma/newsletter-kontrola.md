---
title: Newsletter, kontrola
lead: 'Kontrola vstupu ve formuláři.'
demand: 2
solutionAccess: lock
---

Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.

1. V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
1. Přidejte na textové políčko posluchač události `input`.
1. Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.
1. Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu `indexOf` nebo [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes).

:::solution

### index.html

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Newsletter</title>
    <link rel="stylesheet" href="styly.css" />
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <form>
      <p>Jednou za týden posíláme newsletter ze světa frontendu a UX.</p>
      <p>Zadejte svůj e-mail a zůstaňte v obraze.</p>
      <input type="text" /> <button type="submit">Odebírat</button>
    </form>
  </body>
</html>
```

### index.js

```js
const formular = document.querySelector('form');
const textovepolicko = document.querySelector('input');

const odebirat = (event) => {
  event.preventDefault();
  const input = document.querySelector('input');
  const email = input.value;
  formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`;
};

const kontrolaPolicka = (event) => {
  if (textovepolicko.value === '' || !textovepolicko.value.includes('@')) {
    textovepolicko.classList.add('alertInput');
  } else {
    textovepolicko.classList.remove('alertInput');
  }
};

formular.addEventListener('submit', odebirat);
textovepolicko.addEventListener('input', kontrolaPolicka);
```

### styly.css

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #d6d6d6;
  font-family: sans-serif;
  margin: 2em 1em;
  line-height: 1.3;
}

form {
  max-width: 22em;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 2em;
  border-radius: 1em;
}

p:first-child {
  margin-top: 0;
}

input,
button {
  font-size: 1em;
  font-family: inherit;
  height: 2em;
  padding: 0 1em;
  border-radius: 0.25em;
  border: 0.0625em solid #888888;
}

button {
  background-color: #dd5400;
  color: #ffffff;
  border-color: transparent;
}

input {
  width: 11em;
}

/* ----------- třída pro výrazný červený rámeček níže ----------- */

.alertInput {
  border: 4px solid red;
}
```

:::
