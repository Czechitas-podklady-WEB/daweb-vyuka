---
title: Vstup pomocí formuláře
demand: 2
access: claim
---

Upravte vaši aplikaci na kontrolu rodných čísel tak, aby obsahovala formulář.

1. Do HTML vaší stránky vložte formulář s textovým políčkem pro rodné číslo. Formulář se bude odesílat tlačítkem :i[Zkontrolovat].
1. Na událost `submit` formuláře pověste posluchač, který provede kontrolu zadaného rodného čísla tak, jak jsme ji dělali v předchozích cvičení.
1. Do HTML vložte pod formulář `div` s nějakým vhodně zvoleným `id`. Tento `div` bude představovat zprávu pro uživatele.
1. Z přechozích cvičení máme hotovou funkci `checkBirthID`, Pokud pro uživatelův vstup vrátí `'ok'`, vypište do vašeho `divu`

   ```text
   ✔️ V pořádku.
   ```

1. Pokud vrátí cokoliv jiného, vypište zprávu ve smyslu

   ```text
   ❌ V rodném čísle jsou chyby.
   ```

1. Vyzkoušejte do formuláře vyplnit aspoň jedno platné rodné číslo a jedno neplatné.

::fig[správně]{src=assets/spravne.png}

::fig[chybně]{src=assets/chybne.png}

---solution

### `index.html`

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Opakování JavaScriptu</title>
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <form id="formular">
      <label>Rodné číslo: <input /></label>
      <button>Zkontrolovat</button>
    </form>
    <div id="vystup"></div>
  </body>
</html>
```

### `index.js`

```js
// …
const formular = document.querySelector('#formular');
formular.addEventListener('submit', (event) => {
  event.preventDefault();
  const vstup = formular.querySelector('input').value;
  const vystup =
    checkBirthID(vstup) === 'ok'
      ? '✔️ V pořádku.'
      : '❌ V rodném čísle jsou chyby.';
  document.querySelector('#vystup').textContent = vystup;
});
```
