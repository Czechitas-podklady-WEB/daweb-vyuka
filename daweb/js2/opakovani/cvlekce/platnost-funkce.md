---
title: Platnost jako funkce
demand: 2
context: cvlekce
access: claim
---

Přepiště kód z předchozího příkladu do funkce s názvem `checkBirthID`, která zkontroluje platnost rodného čísla. Funkce bude mít jeden parametr, ve kterém bude očekávat rodné číslo jako řetězec. Funkce bude vracet řetězec s výsledkem kontroly podle následujících pravidel:

- `'invalidLength'` v případě, že vstup nemá 10 znaků,
- `'notANumber'` v případě, že vstup není číslo,
- `'failedChecksum'` v případě, že číslo není dělitalné 11,
- `'ok'` v případě, že číslo prošlo kontrolou.

Funkci otestujte třeba na hodnotách:

```js
const rodnaCislaKOtestovani = [
  '123',
  'nepovím',
  '7060201236',
  '7060201235',
  '123456789123456789',
  '9062185440',
  '123č56q8y7',
];
```

:::solution

```js
const checkBirthID = (rodneCislo) => {
  if (rodneCislo.length !== 10) {
    return 'invalidLength';
  }

  if (!Number.isInteger(Number(rodneCislo))) {
    return 'notANumber';
  }

  if (Number(rodneCislo) % 11 !== 0) {
    return 'failedChecksum';
  }

  return 'ok';
};

const rodnaCislaKOtestovani = [
  '123',
  'nepovím',
  '7060201236',
  '123456789123456789',
  '9062185440',
  '123č56q8y7',
];

rodnaCislaKOtestovani.forEach((rc) => {
  document.body.innerHTML += `Rodné číslo <code>${rc}</code> `;
  const vysledek = checkBirthID(rc);
  if (vysledek === 'ok') {
    document.body.innerHTML += 'je platné. ✔️<br>';
  } else {
    document.body.innerHTML += `není neplatné. Důvod: ${vysledek}. ❌<br>`;
  }
});
```

:::
