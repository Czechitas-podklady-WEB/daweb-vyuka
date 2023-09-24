---
title: Nákupní seznam
demand: 3
---

V tomto cvičení na stránce zobrazíme položky nákupního seznamu uložného v poli objektů.

1. Založte si nový JavaScriptový projekt se soubory `index.html` a `index.js`.
1. Na začátek souboru `index.js` vložte následující strukturu představující položky nákupního seznamu.
   ```js
   const items = [
     {
       id: 'MFJSFr',
       product: 'Rohlíky',
       amount: '10',
       done: false,
     },
     {
       id: 'wvsbDD',
       product: 'Máslo',
       amount: '500 g',
       done: true,
     },
     {
       id: 'm0CccN',
       product: 'Šunka',
       amount: '200 g',
       done: true,
     },
   ];
   ```
1. V souboru `index.html` vytvořte prázdný seznam:
   ```html
   <ul class="shopping-list"></ul>
   ```
1. V souboru `index.js` vyberte ze stránky seznam `.shopping-list` a pomocí metod `map`, `join` a vlastnosti `innerHTML` vytvořte obsah stránky zobrazující položky z pole `items`. Každá položka v HTML bude mít následující strukturu:
   ```html
   <li class="item">
     <div class="item__name">Rohlíky</div>
     <div class="item__amount">10</div>
   </li>
   ```
