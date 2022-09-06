---
title: Algoritmy pro fajnšmekry
demand: 4
---

Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
```

1. Vypište na výstup délku nejdelší rostoucí sekvence čísel, které v poli následují přímo po sobě.
1. Vypište na výstup délku nejdelší rostoucí nebo klesající sekvence čísel, které v seznamu následují přímo po sobě.
1. Najděte druhý největší prvek v seznamu.
1. Najděte nejnižší vrchol a nejvyšší údolí. Údolí je číslo, které je menší než jeho předchůdce i následovník.

---solution

**a. Vypište na výstup délku nejdelší rostoucí sekvence čísel, které v poli následují přímo po sobě.**

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5,
];

let longestGrowingSequenceLength = 1;
let currentGrowingSequenceLength = 1;

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  const nextNumber = numbers[i + 1];
  if (nextNumber > currentNumber) {
    currentGrowingSequenceLength++;
  } else {
    if (currentGrowingSequenceLength > longestGrowingSequenceLength) {
      longestGrowingSequenceLength = currentGrowingSequenceLength;
    }
    currentGrowingSequenceLength = 1;
  }
}

console.log(
  `Délka nejdelší rostoucí sekvence čísel, které v poli následují přímo po sobě je ${longestGrowingSequenceLength}`
);
```

**b. Vypište na výstup délku nejdelší rostoucí nebo klesající sekvence čísel, které v seznamu následují přímo po sobě.**

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5,
];

let longestSequenceLength = 1;
let currentSequenceLength = 0;

const isSequenceDeclining = (prevNumber, currentNumber, nextNumber) => {
  return prevNumber > currentNumber && currentNumber > nextNumber;
};

const isSequenceGrowing = (prevNumber, currentNumber, nextNumber) => {
  return prevNumber < currentNumber && currentNumber < nextNumber;
};

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  const nextNumber = numbers[i + 1];
  const prevNumber = numbers[i - 1];
  if (prevNumber === undefined && currentNumber !== nextNumber) {
    // pro prvni cislo je jedno, zda nasledujici je mensi ci vetsi, jen nesmi byt rovno
    currentSequenceLength++;
  } else if (
    nextNumber !== undefined &&
    (isSequenceGrowing(prevNumber, currentNumber, nextNumber) ||
      isSequenceDeclining(prevNumber, currentNumber, nextNumber))
  ) {
    // pokud 3 po sobe jdouci cisla maji stejne znamenko pro porovnani, je to sekvence
    currentSequenceLength++;
  } else {
    // pokud 3 po sobe jdouci cisla maji ruzna znamenka pro porovnani, vime, ze uz to neni sekvence
    currentSequenceLength++;
    if (currentSequenceLength > longestSequenceLength) {
      longestSequenceLength = currentSequenceLength;
    }
    currentSequenceLength = 1;
  }
}

console.log(
  `Délka nejdelší sekvence čísel, které v poli následují přímo po sobě je ${longestSequenceLength}`
);
```

**c. Najděte druhý největší prvek v seznamu.**

<!-- prettier-ignore -->
```js
const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5,
];

let maximumNumber = null;
let secondMaximumNumber = null;

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  if (currentNumber > maximumNumber || maximumNumber === null) {
    secondMaximumNumber = maximumNumber;
    maximumNumber = currentNumber;
  } else if (
    currentNumber > secondMaximumNumber ||
    secondMaximumNumber === null
  ) {
    secondMaximumNumber = currentNumber;
  }
}

console.log(`Druhý největší prvek v seznamu je ${secondMaximumNumber}`);
```
