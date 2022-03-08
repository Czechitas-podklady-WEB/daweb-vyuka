---
title: Realitka
demand: 2
---

Mějme následující objekt představují inzerát na stránkách nějaké realitní kanceláře. 

```js
const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};
```

Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

1. Pomocí tečkové notace vypište do stránky dispozici bytu.
1. Vypište do stránky čistý nájem bez poplatků.
1. Vypište do stránky celý objekt představující výměru bytu. 
1. Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.
1. Změnte stav inzerátu z `'free'` na `'taken'`.