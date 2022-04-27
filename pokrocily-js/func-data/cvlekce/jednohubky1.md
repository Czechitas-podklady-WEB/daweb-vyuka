---
title: Funkcionální jednohubky 1
demand: 2
---

Založte si nový projekt pomocí `create-czechitas-app jednohubky vanilla`. Do `index.js` si zkopírujte následující pole dat. Budeme s nimi pracovat v následujících cvičeních.

```js
const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];
```

1. Pomocí funkce `forEach` vypište do konzole postupně věk každé osoby z pole `persons`.
2. Pomocí metody `forEach` napište cyklus, který vypíše do konzole první písmeno z každného jména v poli `names`.
3. Pomocí metody `every` zjistěje, jestli v poli `names` platí, že každé jméno má alespoň 4 znaky.
4. Pomocí metody `some` zjistěte, jestli jsou v poli `numbers` nějaká čísla dělitelná 11.
