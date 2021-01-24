---
title: Letenka
demand: 2
---

Vytvořte webovou stránku s JavaScriptem a do kódu vašeho programu vložte následující objekt představující reálná data o letu z Prahy do Barcelony.

```js
const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia'
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain'
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    '1': 34.95,
    '2': 69.91
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20
  },
  availability: {
    seats: 2
  },
  conversion: {
    EUR: 36
  },
  quality: 66.66659,
}
```

Proveďte následující:

1. Vypište do konzole název cílové země.
1. Pomocí destrukturování si do separátní proměnné uložte objekt udávající maximální rozměry zavazadel. 
1. Z objektu s rozměry zavazadel opět pomocí destrukturování vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry jeden po druhém do konzole. 
1. Vypište do konzole, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.
