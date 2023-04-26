---
title: Zpracování dat
demand: 3
---

V tomto cvičení budeme opět pracovat s poli z našich jednohubek.

1. Pomocí metody `forEach` napište cyklus, který vypíše do konzole poslední
   písmeno z každého jména v poli `names`.
1. Pomocí metody `filter` získejte z pole `names` pouze ta jména, která jsou
   delší než 4 znaky.
1. Pomocí metody `filter` získejte z pole `persons` pouze dospělé muže.
1. Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že každá
   zletilá osoba je vždy buď muž nebo žena (tedy že vlastnost `gender` u
   dospělých osob má hodnotu `male` nebo hodnotu `female`).
1. Pomocí metody `forEach` napište cyklus, který spočítá průměr čísel v poli
   `numbers`.

---solution

1. Pomocí metody `forEach` napište cyklus, který vypíše do konzole poslední
   písmeno z každého jména v poli `names`.

   ```js
   names.forEach((item) => console.log(item.slice(-1)));
   ```

1. Pomocí metody `filter` získejte z pole `names` pouze ta jména, která jsou
   delší než 4 znaky.

   ```js
   const namesMoreThan4Chars = names.filter((name) => name.length > 4);
   ```

1. Pomocí metody `filter` získejte z pole `persons` pouze dospělé muže.

   ```js
   const adultMen = persons.filter(
     (person) => person.gender === 'male' && person.age >= 18
   );
   ```

1. Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že každá
   zletilá osoba je vždy buď muž nebo žena (tedy že vlastnost `gender` u
   dospělých osob má hodnotu `male` nebo hodnotu `female`).

   ```js
   const maleOrFemale = persons.every(
     (item) =>
       person.age < 18 || item.gender === 'male' || item.gender === 'female'
   );
   console.log(maleOrFemale);
   ```

1. Pomocí metody `forEach` napište cyklus, který spočítá průměr čísel v poli
   `numbers`.
   ```js
   let sum = 0;
   numbers.forEach((item) => (sum += item));
   const average = sum / numbers.length;
   console.log(average);
   ```
