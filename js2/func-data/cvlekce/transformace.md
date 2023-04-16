---
title: Transformace
demand: 2
hasSolution: false
---

Použijte opět pole `numbers`, `names` a `persons` z předchozího cvičení.

1. Pomocí metody `filter` získejte z pole `numbers` pouze ta čísla, která jsou sudá, a uložte je do proměnné `evenNumbers`. Vypište toto nové pole do konzole.
1. Pomocí metody `filter` získejte z pole `persons` pouze dospělé lidi a uložte je do proměnné `adults`. Vypište toto nové pole do konzole.
1. Pomocí metody `map` vydělte všecha čísla v poli `numbers` třemi a uložte je do proměnné `dividedByThree`. Vypište toto nové pole do konzole.
1. Pomocí metody `map` převeďte všechna čísla z pole `numbers` na řetězce. Výsledek vypište do konzole.
1. Z pole `persons` pomocí metody `map` vytvořte pro každou osobu e-mail ve formátu `petr@gmail.com` a výsledek uložte do proměnné `emails`. Vypište toto nové pole do konzole.
1. Z pole `persons` pomocí metody `map` vytvořte pro každou osobu položku HTML seznamu ve formátu `<li>Petr (16)</li>` a výsledek uložte do proměnné `list`. Vypište toto nové pole do konzole.

---solution

1. Pomocí metody `filter` získejte z pole `numbers` pouze ta čísla, která jsou sudá, a uložte je do proměnné `evenNumbers`. Vypište toto nové pole do konzole.

   ```js
   const evenNumbers = numbers.filter((item) => item % 2 === 0);
   console.log(evenNumbers);
   ```

1. Pomocí metody `filter` získejte z pole `persons` pouze dospělé lidi a uložte je do proměnné `adults`. Vypište toto nové pole do konzole.

   ```js
   const adults = persons.filter((item) => item.age > 18);
   console.log(adults);
   ```

1. Pomocí metody `map` vydělte všecha čísla v poli `numbers` třemi a uložte je do proměnné `dividedByThree`. Vypište toto nové pole do konzole.

   ```js
   const dividedByThree = numbers.map((item) => item / 3);
   console.log(dividedByThree);
   ```

1. Pomocí metody `map` převeďte všechna čísla z pole `numbers` na řetězec. Výsledek vypište do konzole.

   ```js
   const numbersAsStrings = numbers.map((item) => String(item));
   console.log(numbersAsStrings);
   ```

1. Z pole `persons` pomocí metody `map` vytvořte pro každou osobu e-mail ve formátu `petr@gmail.com` a výsledek uložte do proměnné `emails`. Vypište toto nové pole do konzole.

   ```js
   const emails = persons.map((item) => `${item.name.toLowerCase()}@gmail.com`);
   console.log(emails);
   ```

1. Z pole `persons` pomocí metody `map` vytvořte pro každou osobu položku HTML seznamu ve formátu `<li>Petr (16)</li>` a výsledek uložte do proměnné `list`. Vypište toto nové pole do konzole.

   ```js
   const list = persons.map((item) => `<li>${item.name} (${item.age})`);
   console.log(list);
   ```
