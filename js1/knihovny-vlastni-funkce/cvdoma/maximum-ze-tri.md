---
title: Maximum ze tří čísel
demand: 3
lead: Najděte největší číslo ze tří.
solutionAccess: lock
---

Napište funkci `max3`, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce `Math.max`.

:::solution

```js
const max3 = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
};
```

:::
