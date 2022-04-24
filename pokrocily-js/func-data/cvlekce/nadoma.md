---
title: Jednohubky na doma
demand: 3
---

V tomto cvičení budeme opět pracovat s poli z našich jednohubek.

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

1. Napište cyklus, který spočítá průměr čísel v poli `numbers`. Napište tento cyklus ve staré formě `for` a v nové formě `forEach`.
1. Pomocí metody `forEach` napište cyklus, který vypíše do konzole poslední písmeno z každného jména v poli `names`.
1. Pomocí metody `every` zjistěje, jestli v poli `persons` platí, že každá osoba je vždy buď muž nebo žena.
1. Pomocí metody `filter` získejte z pole `names` pouze ta jména, která jsou delší než 4 znaky.
1. Pomocí metody `filter` získejte z pole `persons` pouze dospělé muže.
1. Pomocí metody `map` vytvořte pole, ve kterém budou všechna jména z pole `names` zabalená do `li` tagu. Jméno `Petr` tak dopadne jako `<li>Petr</li>`.
