---
title: Formátovač data
demand: 2
---

Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok.

1. Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu.
   ```text
   28. 4. 2021
   ```
1. Vypisujte datum do webové stránky jako následující HTML kód.
   ```html
   <p class="date">
     <span class="day">28</span>. <span class="month">4</span>.
     <span class="year">2021</span>
   </p>
   ```

:::solution

```js
const den = prompt('Zadej den:');
const mesic = prompt('Zadej měsíc:');
const rok = prompt('Zadej rok:');

document.body.innerHTML =
  '<p class="date"><span class="day">' +
  den +
  '</span>. <span class="month">' +
  mesic +
  '</span>. <span class="year">' +
  rok +
  '</span></p>';
```

:::
