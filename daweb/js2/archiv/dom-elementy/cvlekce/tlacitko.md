---
title: Tlačítko
demand: 2
context: cvlekce
---

Pomocí vlastních DOM elementů přidáme na stránku několik tlačítek.

1. Založte si nový projekt příkazem

   ```shell
   npm init kodim-app@latest cviceni-tlacitko html-css-js
   ```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-tlacitko`.
1. Vytvořte si jednoduchou stránku obsahující nám tak dobře známý element `#app`.
   ```html
   <body>
     <div id="app"></div>
   </body>
   ```
1. Otevřete si konzoli prohlížeče a pomocí funkce `document.createElement` si do nějaké proměnné vytvořte tlačítko `button`.
1. Nastavte tomuto tlačítku `textContent` na „Mačkej“.
1. Přidejte na tlačítko CSS třídu `btn`.
1. Vyberte ze stránky element `#app` a vložte tlačítko na stránku pomocí metody `append`.
1. Stejným postupem přidejte na stránku ještě další dvě tlačítka s různými nápisy a sledujte, kam do stránky se vložila.

:::solution

Soubor `index.js`:

```js
// Vytvoření prvního tlačítka
const tlacitko1 = document.createElement('button');
tlacitko1.textContent = 'Mačkej';
tlacitko1.classList.add('btn');

// Vložení tlačítka do stránky
const app = document.querySelector('#app');
app.append(tlacitko1);

// Druhé tlačítko
const tlacitko2 = document.createElement('button');
tlacitko2.textContent = 'Druhé tlačítko';
app.append(tlacitko2);

// Třetí tlačítko
const tlacitko3 = document.createElement('button');
tlacitko3.textContent = 'Třetí tlačítko';
app.append(tlacitko3);
```

:::
