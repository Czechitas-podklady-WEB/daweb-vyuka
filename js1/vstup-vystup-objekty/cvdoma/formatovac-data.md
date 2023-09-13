---
title: Formátovač data
demand: 2
lead: Vypište do stránky hezky zformátované datum.
solutionAccess: lock
---

Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok a vypíše do stránky datum v hezkém formátu.

1. Založe nový JavaScriptový program a v něm si pomocí funkce `prompt` zeptejte uživatele na den, měsíc a rok.
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
1. Zkuste tyto prvky lehce nastylovat pomocí CSS, aby vypadaly hezky.

:::solution

```js
const den = prompt('Zadej den:');
const mesic = prompt('Zadej měsíc:');
const rok = prompt('Zadej rok:');

document.body.innerHTML +=
  '<p class="date"><span class="day">' +
  den +
  '</span>. <span class="month">' +
  mesic +
  '</span>. <span class="year">' +
  rok +
  '</span></p>';
```

:::
