---
title: Vyhledávání a dotazy
demand: 2
offerSolution: false
---

Založte si nový JavaScriptový projekt se soubory `index.html` a `index.js` Do `index.js` si zkopírujte následující pole dat. Budeme s nimi pracovat v dalších cvičeních.

```js
const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = [
  'Petr',
  'Jana',
  'Pavel',
  'Zuzana',
  'Eva',
  'Adam',
  'Onyx',
  'Alex',
];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];
```

1. Pomocí funkce `forEach` vypište do konzole postupně věk každé osoby z pole `persons`.
1. Pomocí metody `forEach` napište cyklus, který vypíše do konzole první písmeno z každého
   jména v poli `names`.
1. Pomocí metody `find` najděte v poli `persons` osobu se jménem "Adam" a vypište ji do konzole.
1. Vypište do konzole gender osoby se jménem "Onyx".
1. Pomocí metody `findIndex` najděte v poli `persons` index osoby s věkem 22 a mužským pohlavím.
1. Pomocí metody `some` zjistěte, jestli jsou v poli `numbers` nějaká čísla dělitelná 11.
1. Pomocí metody `some` zjistěte, jestli jsou v poli `persons` nějaké osoby nebinárního pohlaví, tedy nejsou ani `male` ani `female`.
1. Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že je každá osoba starší 18 let.

---solution

```js
//Pomocí funkce forEach vypište do konzole postupně věk každé osoby z pole persons.
persons.forEach((person) => {
  console.log(person.age);
});
​
//Pomocí metody forEach napište cyklus, který vypíše do konzole první písmeno z každého jména v poli names.
names.forEach((person) => {
  console.log(person.slice(0,1));
})
​
//Pomocí metody every zjistěje, jestli v poli names platí, že každé jméno má alespoň 4 znaky.
const longNames = names.every((item) => item.length >= 4);
console.log(longNames);
​
//Pomocí metody some zjistěte, jestli jsou v poli numbers nějaká čísla dělitelná 11.
const chosenNumbers = numbers.some((item) => item % 11 === 0);
console.log(chosenNumbers);
```
