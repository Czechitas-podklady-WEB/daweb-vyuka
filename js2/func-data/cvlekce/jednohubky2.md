---
title: Funkcionální jednohubky 2
demand: 2
---

Použijte opět pole `numbers`, `names` a `persons`.

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

1. Vytvořte proměnnou `evenNumbers`. Pomocí metody `filter` získejte z pole `numbers` pouze ta čísla, která jsou sudá a uložte je do proměnné `evenNumbers`. Vypište toto nové pole do konzole.
2. Vytvořte proměnnou `adults`. Pomocí metody `filter` získejte z pole `persons` pouze dospělé lidi a uložte je do proměnné `adults`. Vypište toto nové pole do konzole.
3. Vytvořte proměnnou `dividedByThree`. Pomocí metody `map` vydělte všecha čísla v poli `numbers` třemi a uložte je do proměnné `dividedByThree`. Vypište toto nové pole do konzole.
4. Vytvořte proměnnou `emails`. Z pole `persons` pomocí metody `map` vytvořte pro každou osobu email ve formátu `petr@gmail.com`, a výsledek uložte do proměnné `emails`. Vypište toto nové pole do konzole.

---solution

```js
// Vytvořte proměnnou evenNumbers. Pomocí metody filter získejte z pole numbers pouze ta čísla, která jsou sudá a uložte je do proměnné evenNumbers. Vypište toto nové pole do konzole.
const evenNumbers = numbers.filter((item) => item % 2 === 0);
console.log(evenNumbers);
​
// Vytvořte proměnnou adults. Pomocí metody filter získejte z pole persons pouze dospělé lidi a uložte je do proměnné adults. Vypište toto nové pole do konzole.
const adults = persons.filter((item) => item.age > 18 );
console.log(adults);
​
// Vytvořte proměnnou dividedByThree. Pomocí metody map vydělte všecha čísla v poli numbers třemi a uložte je do proměnné dividedByThree. Vypište toto nové pole do konzole.
const dividedByThree = numbers.map((item) => item / 3);
console.log(dividedByThree);
​
// Vytvořte proměnnou emails. Z pole persons pomocí metody map vytvořte pro každou osobu email ve formátu petr@gmail.com, a výsledek uložte do proměnné emails. Vypište toto nové pole do konzole.
const emails = persons.map((item) => `${item.name.toLowerCase()}@gmail.com`);
console.log(emails);
```
