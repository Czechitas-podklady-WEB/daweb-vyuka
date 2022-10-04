---
title: Zpracování dat
demand: 3
---

V tomto cvičení budeme opět pracovat s poli z našich jednohubek.

1. Napište cyklus, který spočítá průměr čísel v poli `numbers`. Napište tento cyklus ve staré formě `forEach`.
1. Pomocí metody `forEach` napište cyklus, který vypíše do konzole poslední písmeno z každného jména v poli `names`.
1. Pomocí metody `every` zjistěje, jestli v poli `persons` platí, že každá zletilá osoba je vždy buď muž nebo žena (tedy že vlastnost `gender` má hodnotu `male` nebo hodnotu `female`).
1. Pomocí metody `filter` získejte z pole `names` pouze ta jména, která jsou delší než 4 znaky.
1. Pomocí metody `filter` získejte z pole `persons` pouze dospělé muže.

---solution

```js
// 1a Napište cyklus, který spočítá průměr čísel v poli numbers. Napište tento cyklus ve staré formě for a v nové formě forEach.
let sum = 0;
numbers.forEach((item) => {sum+=item});
const average = sum / numbers.length;
console.log(average);
​
// 1b Pomocí metody forEach napište cyklus, který vypíše do konzole poslední písmeno z každného jména v poli names.
​
names.forEach((item) => {
  console.log(item.slice(-1));
});
​
// 1c Pomocí metody every zjistěje, jestli v poli persons platí, že každá osoba je vždy buď muž nebo žena (tedy že vlastnost gender má hodnotu male nebo hodnotu female).
​
const maleOrFemale = persons.every((item) => item.gender === "male" || item.gender === "female");
console.log(maleOrFemale);
​
// 1d Pomocí metody filter získejte z pole names pouze ta jména, která jsou delší než 4 znaky.
const namesMoreThan4Chars = names.filter(name => name.length > 4);
​
// 1e Pomocí metody filter získejte z pole persons pouze dospělé muže.
const adultMen = persons.filter(person => person.gender === 'male' && person.age >= 18);
​
// 1f Pomocí metody map vytvořte pole, ve kterém budou všechna jména z pole names zabalená do li tagu. Jméno Petr tak dopadne jako <li>Petr</li>.
const liNames = names.map(name => `<li>${name}</li>`);
```
