---
title: Formátování data
demand: 3
lead: Převeďte datum do lidské podoby.
solutionAccess: allow
---

Bez použití knihovny `Day.js` napište funkci `formatDate`, která na vstupu obdrží objekt představující datum v následujícím formátu:

```js
{ day: 12, month: 3, year: 2015 }
```

Funkce vrátí řetězec představující datum ve formátu **DD.MM.YYYY**. Příklad použití:

```js
document.body.innerHTML += formatDate({ day: 6, month: 4, year: 2021 }); // 06.04.2021
```

V tomto cvičení se vám jistě bude hodit metoda na textových řetězcích `padStart`.

:::solution

```js
const formatDate = (date) => {
  const dayText = String(date.day).padStart(2, '0');
  const monthText = String(date.month).padStart(2, '0');

  return `${dayText}.${monthText}.${date.year}`;
};
```

Můžete si do javascriptového souboru přidat následující kód, kterým si můžete otestovat, jak se funkce `formatDate` chová pro různá data:

```js
document.body.innerHTML += `<p>${formatDate({
  day: 12,
  month: 3,
  year: 2023,
})}</p>`;
document.body.innerHTML += `<p>${formatDate({
  day: 3,
  month: 11,
  year: 2023,
})}</p>`;
document.body.innerHTML += `<p>${formatDate({
  day: 1,
  month: 1,
  year: 2023,
})}</p>`;
document.body.innerHTML += `<p>${formatDate({
  day: 28,
  month: 10,
  year: 2023,
})}</p>`;
```

:::
