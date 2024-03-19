---
title: Jednoduché pole a forEach
demand: 2
context: cvdoma
lead: Vypište do stránky obsah pole.
solutionAccess: protected
---

Založte JavaScriptový program s následujícím polem řetězců představujícím nákupní seznam

```js
const shoppingList = [
  'mouka',
  'máslo',
  'cukr',
  'jablka',
  'skořice',
  'mléko',
  'cibule',
];
```

1. Pomocí cyklu `forEach` vypište velkými písmeny do konzole položky, které mají sudý počet znaků.

   ```
   'CUKR'
   'JABLKA'
   'CIBULE'
   ```

1. Vytvořte proměnnou `shoppingListString`. Pomocí dalšího cyklu `forEach` spojte všechny položky do jednoho textového řetězce jako níže. Výsledek vypište do konzole.

   ```
   'moukamáslocukrjablkaskořicemlékocibule'
   ```

:::solution

1. ```js
   const shoppingList = [
     'mouka',
     'máslo',
     'cukr',
     'jablka',
     'skořice',
     'mléko',
     'cibule',
   ];

   shoppingList.forEach((item) => {
     if (item.length % 2 === 0) {
       console.log(item.toUpperCase());
     }
   });

   let shoppingListString = '';

   shoppingList.forEach((item) => {
     shoppingListString += item;
   });

   console.log(shoppingListString);
   ```

:::
