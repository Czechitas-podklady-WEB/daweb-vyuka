---
title: Doručování
demand: 2
lead: Vytvořte jednoduchý objednávkový systém.
solutionAccess: allow
---

Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje **ulici**, **číslo domu**, **město** a **PSČ**.

1. Uložte všechny údaje do vhodně pojmenovaných proměnných.
1. Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
   ```html
   <address>
     <p>Pod Stájemi 67</p>
     <p>12754 Klysnov</p>
   </address>
   ```
1. Pomocí `document.body.innerHTML` vložte sestavené HTML do stránky.

:::solution

```js
const street = prompt('Zadejte ulici:');
const houseNumber = prompt('Zadejte číslo domu:');
const city = prompt('Zadejte město:');
const zipCode = prompt('Zadejte PSČ:');

document.body.innerHTML = `
   <address>
      <p>${street} ${houseNumber}</p>
      <p>${zipCode} ${city}</p>
   </address>
`;
```

:::
