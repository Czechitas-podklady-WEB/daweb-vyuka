---
title: Těžší algoritmy
demand: 3
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
1. Najděte s seznamu největší prvek.
1. Najděte s seznamu největší prvek, který je menší než číslo 16.
