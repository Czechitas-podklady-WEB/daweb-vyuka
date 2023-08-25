---
title: Parsování data
demand: 2
---

Bez použití knihovny `Day.js` napište funkci `parseDate`, která na vstupu obdrží řetězec obsahující datum ve formátu **DD.MM.YYYY** a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

```jscon
> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 }
```

:::solution

```js
const parseDate = (datum) => {
  return {
    day: Number(datum.slice(0, 2)),
    month: Number(datum.slice(3, 5)),
    year: Number(datum.slice(6)),
  };
};
```

:::
