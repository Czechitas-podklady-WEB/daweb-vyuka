---
title: Vyhledávání a dotazy
demand: 2
offerSolution: false
---

Založte si nový projekt příkazem

```shell
npm init kodim-app@latest cviceni-func-data html-css-js
```

Otevřete si ve VS Code vytvořenou složku `cviceni-func-data`.

Do `script.js` si zkopírujte následující pole dat. Budeme s nimi pracovat v dalších cvičeních.

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
1. Pomocí metody `some` zjistěte, jestli jsou v poli `persons` nějaké osoby nebinárního pohlaví, tedy nejsou ani `male`, ani `female`.
1. Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že je každá osoba starší 18 let.

---solution

1. Pomocí funkce `forEach` vypište do konzole postupně věk každé osoby z pole `persons`.

   ```js
   console.log('Věk všech osob:');
   persons.forEach((person) => {
     console.log(person.age);
   });
   ```

1. Pomocí metody `forEach` napište cyklus, který vypíše do konzole první písmeno z každého
   jména v poli `names`.

   ```js
   console.log('První písmeno každého jména:');
   names.forEach((person) => {
     console.log(person.slice(0, 1));
   });
   ```

1. Pomocí metody `find` najděte v poli `persons` osobu se jménem "Adam" a vypište ji do konzole.

   ```js
   const personAdam = persons.find((person) => person.name === 'Adam');
   console.log('Adam:', personAdam);
   ```

1. Vypište do konzole gender osoby se jménem "Onyx".

   ```js
   console.log(
     'Gender Onyxe:',
     persons.find((person) => person.name === 'Onyx').gender
   );
   ```

1. Pomocí metody `findIndex` najděte v poli `persons` index osoby s věkem 22 a mužským pohlavím.

   ```js
   console.log(
     'Index osoby s věkem 22 a mužským pohlavím:',
     persons.findIndex(
       (person) => person.age === 22 && person.gender === 'male'
     )
   );
   ```

1. Pomocí metody `some` zjistěte, jestli jsou v poli `numbers` nějaká čísla dělitelná 11.

   ```js
   const chosenNumbers = numbers.some((item) => item % 11 === 0);
   console.log('Obsahuje číslo dělitelné 11:', chosenNumbers);
   ```

1. Pomocí metody `some` zjistěte, jestli jsou v poli `persons` nějaké osoby nebinárního pohlaví, tedy nejsou ani `male`, ani `female`.

   ```js
   const nonBinary = numbers.some(
     (person) => !(person.gender === 'female' || person.gender === 'male')
   );
   console.log('Obsahuje osoby nebinárního pohlaví:', nonBinary);

   // jiná varianata téhož
   const nonBinary2 = numbers.some(
     (person) => !['female', 'male'].includes(person.gender)
   );
   console.log('Obsahuje osoby nebinárního pohlaví:', nonBinary2);
   ```

1. Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že každá osoba je starší 18 let.

   ```js
   const majorPersons = names.every((person) => person.age >= 18);
   console.log('Jen osoby starší 18 let:', majorPersons);
   ```
