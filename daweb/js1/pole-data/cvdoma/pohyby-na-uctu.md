---
title: Pohyby na účtu
demand: 3
context: cvdoma
solutionAccess: protected
---

Založte JavaScriptový program s následujícím s záznamem vkladů a výběrů na nějakém bankovním účtu.

```js
const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];
```

1. Napište cyklus FOR, který spočítá výsledný zůstatek na účtu za předpokladu, že na účtu byla na začátku nula.
1. Zůstatek vypiště do konzole a ověřte, že vám správně vyšel **2320**.
1. Napište cyklus WHILE, který zjistí číslo pohybu, ve kterém se účet dostal poprvé do mínusu. Vypište jak číslo pohybu, tak výši záporného zůstatku.
1. Výpis se spočtenými hodnotami by měl obsahovat zmínku, že se účet dostal na hodnotu **-1250** po **páté** transakci.

:::solution

1. ```js
   const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];
   let zustatek = 0;

   for (let i = 0; i < amounts.length; i++) {
     zustatek += amounts[i];
   }
   console.log(`Na účtě je ${zustatek}.`);
   ```

2. ```js
   const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];
   let zustatek = 0;
   let i = 0;

   while (zustatek >= 0) {
     zustatek += amounts[i];
     i += 1;
   }
   console.log(
     `Zůstatek se poprvé dostal do záporné hodnoty ${zustatek} po transakci číslo ${i}.`
   );
   ```

:::
