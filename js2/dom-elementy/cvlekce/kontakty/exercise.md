---
title: Kontakty
demand: 2
---

Vytvoříme aplikaci, která zobrazuje seznam kontaktů. U každého kontaktu budeme evidovat jméno, email a telefonní číslo.

1. Založte si nový projekt příkazem

```shell
npm init kodim-app cviceni-kontakty-dom html-css-js
```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-kontakty-dom`.
1. Vytvořte jednoduchou stránku s prázdným elementem `#app`.
1. Uvnitř souboru`index.js` pomocí `document.createElement` vytvořte element `div` a uložte jej do proměnné `contact1`.
1. Na váš element přidejte CSS třídu `contact`.
1. Nastavte `innerHTML` vašho elementu na následujicí obsah
   ```html
   <span class="name">Jaromír Bystřina</span>
   <span class="phone">+420 777 666 323</span>
   <span class="email">lesni.bystrina@gmail.com</span>
   ```
1. Vyberte ze stránky element `#app` a vložte do něj element s kontaktem.
1. Stejným postupem přidejte na stránku ještě další dva kontakty `contact2` a `contact3`.
1. Nepovinně si můžete pohrát se stylováním. U každého kontaktu se vám například může hodit takováto hezká [ikonka](assets/contact.png).

---solution

Soubor `index.js`:

```js
// Vytvoření prvního kontaktu
const contact1 = document.createElement('div');
contact1.classList.add('contact');
contact1.innerHTML = `
  <span class="name">Jaromír Bystřina</span>
  <span class="phone">+420 777 666 323</span>
  <span class="email">lesni.bystrina@gmail.com</span>
`;

// Vložení kontaktu do stránky
const app = document.querySelector('#app');
app.append(contact1);

// Druhý kontakt
const contact2 = document.createElement('div');
contact2.classList.add('contact');
contact2.innerHTML = `
  <span class="name">Martin Podloucký</span>
  <span class="phone">+420 765 432 100</span>
  <span class="email">podloucky@fit.cvut.cz</span>
`;
app.append(contact2);

// Třetí kontakt
const contact3 = document.createElement('div');
contact3.classList.add('contact');
contact3.innerHTML = `
  <span class="name">Jsem Někdo</span>
  <span class="phone">+420 123 456 789</span>
  <span class="email">nekdo@example.com</span>
`;
app.append(contact3);
```
