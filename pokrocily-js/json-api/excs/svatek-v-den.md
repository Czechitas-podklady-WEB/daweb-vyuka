---
title: Svátek v den
demand: 3
---

Dalším užitečným endpointem API pro svátky je `/namedays`. Ten nám umožňuje zjistit, kdo má svátek v přesně určený den. Tento endpoint má tři povinné parametry: `country`, `month` a `day`. Takto například zjistíme, kdo má v Česku svátek 13. února.

```
https://api.abalin.net/namedays?country=cz&month=2&day=13
```

Vytvořte aplikaci, které bude obsahovat dvě textová políčka a tlačítko. Uživatel do políček zadá číslo dne a číslo měsíce a po stisknutí tlačítka se mu na stránce zobrazí, kdo má tento den svátek.
