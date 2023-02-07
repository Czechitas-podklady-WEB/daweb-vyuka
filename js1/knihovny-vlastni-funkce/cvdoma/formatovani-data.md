---
title: Formátování data
demand: 3
---

Bez použití knihovny `dayjs` napište funkci `formatDate`, která na vstupu obdrží objekt představující datum v následujícím formátu.

```js
{ day: 12, month: 3, year: 2015 }
```

Funkce vrátí řetězec představující datum ve formátu **DD.MM.YYYY**. Příklad použití.

```jscon
> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
```

V tomto cvičení se vám jistě bude hodit metoda `padStart`. Zkuste také uvnitř těla funkce použít destrukturování.
