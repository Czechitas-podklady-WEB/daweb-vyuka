---
title: Formátování data
demand: 3
---

Bez použití knihovny `Day.js` napište funkci `formatDate`, která na vstupu obdrží objekt představující datum v následujícím formátu:

```js
{ day: 12, month: 3, year: 2015 }
```

Funkce vrátí řetězec představující datum ve formátu **DD.MM.YYYY**. Příklad použití:

```jscon
> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
```

V tomto cvičení se vám jistě bude hodit metoda na textových řetězcích `padStart`. Zkuste také uvnitř těla funkce použít _destrukturování_.

---solution

```js
const formatDate = ({ day, month, year }) => {
  const dayText = String(day).padStart(2, '0');
  const monthText = String(month).padStart(2, '0');

  return `${dayText}.${monthText}.${year}`;
};
```

Můžete si do javascriptového souboru přidat následující kód, kterým si můžete otestovat, jak se funkce `formatDate` chová pro různá data:

```js
console.log(formatDate({ day: 12, month: 3, year: 2023 }));
console.log(formatDate({ day: 3, month: 11, year: 2023 }));
console.log(formatDate({ day: 1, month: 1, year: 2023 }));
console.log(formatDate({ day: 28, month: 10, year: 2023 }));
```
