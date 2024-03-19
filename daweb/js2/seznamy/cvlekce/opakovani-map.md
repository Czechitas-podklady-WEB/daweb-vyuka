---
title: Opakování map
demand: 2
context: cvlekce
lead: Zopakujte si metodu `map` a zkracování funkcí.
solutionAccess: protected
---

Založte si obyčejnou stránku s JavaScriptem, bez Vite i bez JSX. Do souboru `index.js` si zkopírujte následující pole.

```js
const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];
const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];
```

Všechny body níže vyřešte pomocí metody `map`. Tam, kde je to možné, použijte zkrácený zápis funkcí. Výsledky vypisujte do konzole pomocí `console.log`.

1. Z pole `weekdays` vyrobte pole obsahující všechny názvy dnů napsané VELKÝMI PÍSMENY.
1. Z pole `weekdays` vyrobte pole obsahující pouze první dvě písmena každého dne, tedy
   ```js
   ['po', 'út', 'st' /* atd. */];
   ```
1. Z pole `months` vyrobte pole obsahující pouze počty dní v každém měsíci.
1. Z pole `months` vyrobte pole obsahující pro každý měsíc datum jeho prvního dne v roce 2020, tedy
   ```js
   ['1. leden 2020', '1. únor 2020' /* atd. */];
   ```

:::solution

```js
const weekdaysUpper = weekdays.map((weekday) => weekday.toUpperCase());
console.log(weekdaysUpper);

const weekdaysShort = weekdays.map((weekday) => weekday.slice(0, 2));
console.log(weekdaysShort);

const monthsDays = months.map((month) => month.days);
console.log(monthsDays);

const firstMonthsDays = months.map((month) => `1. ${month.name} 2020`);
console.log(firstMonthsDays);
```

:::
