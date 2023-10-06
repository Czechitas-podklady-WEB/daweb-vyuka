---
title: Těžší algoritmy
demand: 3
solutionAccess: allow
---

Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
```

1. Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
1. Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
1. Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné :var[mean]. Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
1. Spočítejte směrodatnou odchylku čísel v poli. To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr druhých mocnin vzdáleností všech čísel od průměru. Rozptyl pak odmocníte pomocí funkce <code>Math.sqrt</code>.
1. Najděte v seznamu největší prvek.
1. Najděte v seznamu největší prvek, který je menší než číslo 16.

:::solution

1. Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
   ```js
   for (let i = 1; i < numbers.length; i++) {
     if (numbers[i] > numbers[i - 1]) {
       console.log(numbers[i]);
     }
   }
   ```
1. Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.

   ```js
   for (let i = 1; i < numbers.length - 1; i++) {
     if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
       console.log(numbers[i]);
     }
   }
   ```

1. Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné :var[mean]. Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.

   ```js
   let sum = 0;
   numbers.forEach((number) => {
     sum += number;
   });
   const mean = sum / numbers.length;
   let meanDistanceSquared = 0;
   numbers.forEach((number) => {
     meanDistanceSquared += Math.pow(Math.abs(number - mean), 2);
   });
   console.log('Součet druhých mocnin vzdáleností: ', meanDistanceSquared);
   ```

1. Spočítejte směrodatnou odchylku čísel v poli. To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr druhých mocnin vzdáleností všech čísel od průměru. Rozptyl pak odmocníte pomocí funkce <code>Math.sqrt</code>.

   ```js
   const smerodatnaOdchylka = Math.sqrt(meanDistanceSquared / numbers.length);
   console.log('Směrodatná odchylka:', smerodatnaOdchylka);
   ```

1. Najděte v seznamu největší prvek.

   ```js
   let max = numbers[0];
   numbers.forEach((number) => {
     if (number > max) {
       max = number;
     }
   });
   console.log('Největší číslo je:', max);
   ```

1. Najděte v seznamu největší prvek, který je menší než číslo 16.

   ```js
   let max = null;
   numbers.forEach((number) => {
     if ((max === null || number > max) && number < 16) {
       max = number;
     }
   });
   console.log('Největší číslo je:', max);
   ```

:::
