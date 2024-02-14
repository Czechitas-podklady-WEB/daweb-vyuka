---
title: Základní validace
demand: 2
lead: Ověřte, že e-mailová adresa je ve správném tvaru.
solutionAccess: protected
---

1. Vytvořte prázdnou stránku, do které vložte knihovnu `validator.js` a svůj JavaScript `index.js`.
1. Ověřte pomocí metody `validator.isEmail` platnost vaší e-mailovou adresu.
1. Pokud máte po ruce **platební kartu**, ověřte, že má platné číslo pomocí metody `isCreditCard`. Případně můžete otestovat kartu **4125010001000208**.
1. Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.
   ```html
   <p id="msg" class="msg"></p>
   ```
1. Napojte do stránky váš vlastní javascriptový soubor `index.js`.
1. Pomocí funkce `prompt` **požádejte uživatele o jeho e-mail**. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu „**E-mail v pořádku**“. V opačném případě zobrazte „**Neplatný e-mail**“.
1. Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu `msg--valid`. V opačném případě použijte třídu `msg--invalid`. Přidejte do stránky soubor `style.css` a třídy nastylujte například tak, že `msg--valid` bude mít zelené pozadí a `msg--invalid` naopak červené.

   ```html
   <!-- index.html -->
   <link rel="stylesheet" href="style.css" />
   ```

   ```css
   /* style.css */
   .msg {
     color: white;
     padding: 10px;
   }
   .msg--valid {
     background-color: green;
   }
   .msg--invalid {
     background-color: red;
   }
   ```

1. Stránku postupně otestujte zadáním platné i neplatné adresy.

:::solution

```js
const email = prompt('Zadejte váš e-mail');

const isEmail = validator.isEmail(email);
const messageElement = document.querySelector('#message');

if (isEmail) {
  messageElement.textContent = 'E-mail v pořádku';
  messageElement.classList.add('msg--valid');
} else {
  messageElement.textContent = 'Neplatný e-mail';
  messageElement.classList.add('msg--invalid');
}
```

:::
