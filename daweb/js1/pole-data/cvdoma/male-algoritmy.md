---
title: Malé algoritmy
demand: 2
context: cvdoma
lead: Jednoduchá cvičení na použití metody `forEach`.
solutionAccess: protected
---

Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
```

1. Vypište do stránky všechna čísla.
1. Vypište do stránky druhé mocniny všech čísel.
1. Vypište do stránky pouze záporná čísla.
1. Vypište do stránky absolutní hodnotu všech čísel.
1. Vypište do stránky pouze sudá čísla.
1. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
1. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
1. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
1. Spočítejte, kolik je v seznamu záporných čísel.
1. Spočítejte součet všech čísel v poli.
1. Spočítejte průměr všech čísel v poli.
1. Spočítejte součet všech kladných čísel v poli.

:::solution

1. Vypište na výstup všechna čísla.
   ```js
   numbers.forEach((number) => {
     document.body.innerHTML += `<p>${number}</p>`;
   });
   ```
1. Vypište na výstup druhé mocniny všech čísel.

   ```js
   numbers.forEach((number) => {
     document.body.innerHTML += `<p>${number * number}</p>`;
   });
   ```

1. Vypište na výstup pouze záporná čísla.

   ```js
   numbers.forEach((number) => {
     if (number < 0) {
       document.body.innerHTML += `<p>${number}</p>`;
     }
   });
   ```

1. Vypište na výstup absolutní hodnotu všech čísel.

   ```js
   numbers.forEach((number) => {
     if (number < 0) {
       document.body.innerHTML += `<p>${-1 * number}</p>`;
     } else {
       document.body.innerHTML += `<p>${number}</p>`;
     }
   });
   ```

   ```js
   numbers.forEach((number) => {
     document.body.innerHTML += `<p>${Math.abs(number)}</p>`;
   });
   ```

1. Vypište na výstup pouze sudá čísla.

   ```js
   numbers.forEach((number) => {
     if (number % 2 === 0) {
       document.body.innerHTML += `<p>${number}</p>`;
     }
   });
   ```

1. Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

   ```js
   numbers.forEach((number) => {
     if (Math.abs(number) % 3 === 0) {
       document.body.innerHTML += `<p>${number}</p>`;
     }
   });
   ```

1. Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.

   ```js
   numbers.forEach((number) => {
     document.body.innerHTML += `<p>${Math.abs(5 - number)}</p>`;
   });
   ```

1. Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.

   ```js
   numbers.forEach((number) => {
     const distance = Math.abs(5 - number);
     document.body.innerHTML += `<p>${distance * distance}</p>`;
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
   document.body.innerHTML += `<p>Počet záporných: ${negativeCount}</p>`;
   ```

1. Spočítejte součet všech čísel v poli.

   ```js
   let evenSum = 0;
   numbers.forEach((number) => {
     if (number % 2 === 0) {
       evenSum += number;
     }
   });
   document.body.innerHTML += `<p>Součet sudých: ${evenSum}</p>`;
   ```

1. Spočítejte průměr všech čísel v poli.

   ```js
   let sum = 0;
   numbers.forEach((number) => {
     sum += number;
   });
   document.body.innerHTML += `<p>Průměr všech: ${sum / numbers.length}</p>`;
   ```

1. Spočítejte součet všech kladných čísel v poli.

   ```js
   let positiveSum = 0;
   numbers.forEach((number) => {
     if (number > 0) {
       positiveSum += number;
     }
   });
   document.body.innerHTML += `<p>Průměr všech:${positiveSum}</p>`;
   ```

:::
