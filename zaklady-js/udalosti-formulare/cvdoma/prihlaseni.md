---
title: Přihlášení
demand: 2
offerSolution: true
---

:::assign

Vytvořte klasický přihlašovací formulář, do kterého uživatel zadá svůj e-mail a heslo a stránka ověří, zda má uživatel přístup do systému. Postupujte podle instrukcí níže. 

1. Vytvořte stránku s formulářem, který bude mít jedno textové pole pro e-mail (typ `email`), jedno pole pro heslo (typ `password`) a tlačíto „Přihlásit“
1. Na začátek souboru `index.js` vložte následující objekt představující jednoho uživatele. Budeme se tvářit, že jsme jej získali například z databáze. 
   ```js
   const user = {
     email: 'bartolomej.rozumbrada@gmail.com',
     password: 'Vím, že nic nevím',
     name: 'Bartoloměj',
   };
   ```
1. Při kliknutí na tlačítko „Přihlásit“ ověřte, že uživatel zadal správné jméno a heslo. Pokud údaje souhlasí, nahraďte formulář na stránce nějakou zprávou, například „Přihlášený uživatel: Bartoloměj“.
1. Pokud uživatel zadal špatný e-mail nebo heslo, zobrazte ve formuláři výraznou zprávu „Neplatné přihlašovací údaje“. Zadaný e-mail nechte v políčku vyplněný. Vyplněné heslo naopak vymažte.

Všimněte si, že se snažíme dodržovat standardní praxi. Uživatel by neměl vědět, jestli zadal špatně heslo nebo e-mail. Nikdo by totiž neměl bý schopný zjistit, jestli v systému daný uživatel už existuje. Zároveň je dobré špastné heslo z políčka vymazat, aby jej mohl uživatel rovnou zkusit napsat znovu.

:::

:::solution

Obsah `body` v souboru `index.html`:

```html
<div class="container">
  <form id="login-form">
    <label>E-mail: <input id="email-input" type="email" /></label>
    <label>Password: <input id="password-input" type="password" /></label>
    <button type="submit">Přihlásit</button>
  </form>
</div>
```

Obsah souboru `index.js`:

```js
const user = {
  email: 'bartolomej.rozumbrada@gmail.com',
  password: 'Vím, že nic nevím',
  name: 'Bartoloměj',
};

document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('#email-input');
  const passwordInput = document.querySelector('#password-input');
  const container = document.querySelector('.container');

  if (emailInput.value === user.email && passwordInput.value === user.password) {
    container.innerHTML = `<h1>Přihlášený uživatel: ${name}</h1>`;
  } else {
    container.innerHTML = '<h1>Neplatné přihlašovací údaje</h1>';
  }
});
```