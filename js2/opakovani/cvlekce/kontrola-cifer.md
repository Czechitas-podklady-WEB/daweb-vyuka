---
title: Kontrola cifer
demand: 2
access: claim
---

V případě, že uživatel zadal do rodného čísla špatné znaky, budeme chtít tyto znaky vypsat a ukázat, kde se stala chyba. Pokračuje v kódu z předchozího příkladu.

1. Vytvořte pole `digits` obsahující všechny cifry `'0'` až `'9'` jako řetězce.
1. Napište funkci `isDigit`, která na vstup dostane řetězec a vrátí `true` pokud tento řetězec obsahuje právě jednu cifru. Použijte k tomu pole `digits` a metodu `includes` ([viz dokumentace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)). V opačném případě funkce vrátí `false`.
1. Napište funci `logInvalidCharacters`. Funkce na vstupu dostane řetězec, ten převede na pole znaků (zkuste vygooglit, jak na to). Následně všechny znaky projde pomocí `forEach`. Do konzole vypíše ty znaky, které nesplňují podmínky z funkce `isDigit`. `logInvalidCharacters` vyzkoušejte například na textu `'123č56q8y7'` a `'7060201236'`. V prvním případě by se v konzoli mělo objevit na třech řádcích `č`, `q` a `y`. Pro druhý text by se nemělo vypsat nic.

---solution

### `index.js`

```js
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isDigit = (znak) => znak.length === 1 && digits.includes(znak);

const logInvalidCharacters = (vstup) => {
  Array.from(vstup).forEach((znak) => {
    if (!isDigit(znak)) {
      console.log(`Vstup obsahuje neplatný znak „${znak}“.`);
    }
  });
};

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
  '7060201235',
  '123456789123456789',
  '9062185440',
  '123č56q8y7',
];

rodnaCislaKOtestovani.forEach((rc) => {
  console.log(`Testuji rodné číslo „${rc}“.`);
  const vysledek = checkBirthID(rc);
  if (vysledek === 'ok') {
    console.log('✔️ je platné.');
  } else {
    console.log(`❌ je neplatné. Důvod: ${vysledek}.`);

    if (vysledek === 'notANumber') {
      logInvalidCharacters(rc);
    }
  }
});
```
