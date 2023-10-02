---
title: Malé algoritmy
demand: 2
solutionAccess: allow
---

Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
```

1. Vypište na výstup všechna čísla.
1. Vypište na výstup druhé mocniny všech čísel.
1. Vypište na výstup pouze záporná čísla.
1. Vypište na výstup absolutní hodnotu všech čísel.
1. Vypište na výstup pouze sudá čísla.
1. Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
1. Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
1. Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
1. Spočítejte, kolik je v seznamu záporných čísel.
1. Spočítejte součet všech čísel v poli.
1. Spočítejte průměr všech čísel v poli.
1. Spočítejte součet všech kladných čísel v poli.

:::solution

1. Vypište na výstup všechna čísla.
   ```js
   numbers.forEach((number) => {
     console.log(number);
   });
   ```
1. Vypište na výstup druhé mocniny všech čísel.

   ```js
   numbers.forEach((number) => {
     console.log(number * number);
   });
   ```

1. Vypište na výstup pouze záporná čísla.

   ```js
   numbers.forEach((number) => {
     if (number < 0) {
       console.log(number);
     }
   });
   ```

1. Vypište na výstup absolutní hodnotu všech čísel.

   ```js
   numbers.forEach((number) => {
     if (number < 0) {
       console.log(-1 * number);
     } else {
       console.log(number);
     }
   });
   ```

   ```js
   numbers.forEach((number) => {
     console.log(Math.abs(number));
   });
   ```

1. Vypište na výstup pouze sudá čísla.

   ```js
   numbers.forEach((number) => {
     if (number % 2 === 0) {
       console.log(number);
     }
   });
   ```

1. Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

   ```js
   numbers.forEach((number) => {
     if (Math.abs(number) % 3 === 0) {
       console.log(number);
     }
   });
   ```

1. Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.

   ```js
   numbers.forEach((number) => {
     console.log(numbers.indexOf(5) - numbers.indexOf(number));
   });
   ```

1. Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.

   ```js
   numbers.forEach((number) => {
     const distance = numbers.indexOf(5) - numbers.indexOf(number);
     console.log(distance * distance);
   });
   ```

1. Spočítejte, kolik je v seznamu záporných čísel.

   ```js
   let negativeCount = 0;
   numbers.forEach((number) => {
     if (number < 0) {
       negativeCount++;
     }
   });
   console.log('Počet záporných:', negativeCount);
   ```

1. Spočítejte součet všech čísel v poli.

   ```js
   let evenSum = 0;
   numbers.forEach((number) => {
     if (number % 2 === 0) {
       evenSum += number;
     }
   });
   console.log('Součet sudých:', evenSum);
   ```

1. Spočítejte průměr všech čísel v poli.

   ```js
   let sum = 0;
   numbers.forEach((number) => {
     sum += number;
   });
   console.log('Průměr všech:', sum / numbers.length);
   ```

1. Spočítejte součet všech kladných čísel v poli.

   ```js
   let positiveSum = 0;
   numbers.forEach((number) => {
     if (number > 0) {
       positiveSum += number;
     }
   });
   console.log('Průměr všech:', positiveSum);
   ```

:::
