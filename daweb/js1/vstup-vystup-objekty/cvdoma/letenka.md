---
title: Letenka
demand: 2
lead: Vypište informace o letu.
solutionAccess: lock
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
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
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
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};
```

Proveďte následující:

1. Vypište do stránky název **startovní** a **cílové země**.
1. Uložte do separátní proměnné objekt udávající **maximální rozměry zavazadel**.
1. Z objektu s rozměry zavazadel vytáhněte maximální povolené **rozměry příručního zavazadla** a vypište tyto rozměry opět jeden po druhém vypište do stránky.
1. Vypište do stránky, kolik cestující zaplatí za **druhé zavazadlo** v českých korunách **zaokrouhleno nahoru** na celé koruny.
1. Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal.

:::solution

```js
const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
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
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

document.body.innerHTML =
  '<p><strong>Startovní země:</strong> ' + flight.countryFrom.name + '</p>';
document.body.innerHTML +=
  '<p><strong>Startovní země:</strong> ' + flight.countryTo.name + '</p>';
const baglimit = flight.baglimit;
document.body.innerHTML +=
  '<p><strong>Maximální šířka příručního zavazadla:</strong> ' +
  baglimit.hand_width +
  ' cm</p>';
document.body.innerHTML +=
  '<p><strong>Maximální výška příručního zavazadla:</strong> ' +
  baglimit.hand_height +
  ' cm</p>';
document.body.innerHTML +=
  '<p><strong>Maximální délka příručního zavazadla:</strong> ' +
  baglimit.hand_length +
  ' cm</p>';
document.body.innerHTML +=
  '<p><strong>Cena druhého zavazadla:</strong> ' +
  Math.ceil(flight.bags_price[2] * flight.conversion.EUR) +
  ' Kč</p>';
```

:::
