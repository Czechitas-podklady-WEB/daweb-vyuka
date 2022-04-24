---
title: Česká města 2
demand: 2
---

Pokračujte v projektu z předchozího příkladu.

1.  Do pole `cities` si uložte obsáhlejší data o českých městech.
    ```js
    const cities = [
      {
        name: 'Praha',
        population: 1324277,
        area: 496.21,
      },
      {
        name: 'Brno',
        population: 381346,
        area: 230.18,
      },
      {
        name: 'Ostrava',
        population: 287968,
        area: 214.23,
      },
      {
        name: 'Plzeň',
        population: 174842,
        area: 137.67,
      },
      {
        name: 'Liberec',
        population: 104802,
        area: 106.09,
      },
      {
        name: 'Olomouc',
        population: 100663,
        area: 103.33,
      },
      {
        name: 'České Budějovice',
        population: 94463,
        area: 55.6,
      },
      {
        name: 'Hradec Králové',
        population: 92939,
        area: 105.69,
      },
      {
        name: 'Ústí nad Labem',
        population: 92716,
        area: 93.97,
      },
      {
        name: 'Pardubice',
        population: 91727,
        area: 82.66,
      },
    ];
    ```
1.  Upravte kód vaší aplikace tak, aby u každého města zobrazoval kromě názvu také počet obyvatel a rozlohu v kilometrech.
1.  Jako `key` prop opět použijte název města.
1.  Vytvořte komponentu `City`, jejímž úkolem bude zobrazovat jedno město. Tato kompnenta bude mít props `name`, `population` a `area`. Použijte komponentu k zobrazení každého města ze seznamu.
1.  Pro komponentu `City` vytvořte vlastní složku a komponentu malinko nastylujte, aby vypadala hezky.
