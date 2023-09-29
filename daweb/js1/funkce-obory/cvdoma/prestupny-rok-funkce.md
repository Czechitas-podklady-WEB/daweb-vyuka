---
title: Přestupný rok jako funkce
demand: 2
lead: Napište funkci, která zjistí, zda je zadaný rok přestupný.
solutionAccess: allow
---

Napište funkci `isLeapYear`, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí `true`, pokud je zadaný rok přestupný. V opačném případě vrátí `false`.

:::solution

```js
const isLeapYear = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
};
```

:::
