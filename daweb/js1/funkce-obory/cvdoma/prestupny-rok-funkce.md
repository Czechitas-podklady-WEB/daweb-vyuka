---
title: Přestupný rok jako funkce
demand: 2
context: nadoma
lead: Napište funkci, která zjistí, zda je zadaný rok přestupný.
solutionAccess: protected
---

Napište funkci `isLeapYear`, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí `true`, pokud je zadaný rok přestupný. V opačném případě vrátí `false`.

:::solution

```js
/**
 * Funkce zjišťující, zda je zadaný rok přestupný.
 *
 * Funkce zjistí, zda je rok dělitelný 100, a pokud je dělitelný i 400, vrací true.
 * Pokud není dělitelná 100, ověří, zda je dělitelná 4 – pokud ano, vrací true.
 * V ostatních případech vrací false.
 */
const isLeapYear1 = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
};

/**
 * Funkce zjišťující, zda je zadaný rok přestupný.
 *
 * Funkce zjistí, zda je rok dělitelný 4. Pokud ano, zjistí, zda je dělitelný také 100.
 * Pokud ano, zjistí, zda je dělitelný 100. V každém bloku podmínky vrátí odpovídající výsledek.
 */
const isLeapYear2 = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

/**
 * Funkce zjišťující, zda je zadaný rok přestupný.
 *
 * Funkce pro matfyzačky a matfyzáky. Funkce vrací, zda je rok dělitelný 4, a zároveň buď není dělitelný 100 nebo je dělitelný 400.
 */
const isLeapYear3 = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

/**
 *  Funkce pro ověření, že funkce isLeapYear() funguje správně.
 */
const validateIsLeapYear = (year, shouldBeLeap) => {
  const computedLeapYear = isLeapYear(year);
  let symbol;
  if (computedLeapYear === shouldBeLeap) {
    symbol = '✓';
  } else {
    symbol = '×';
  }
  console.log(
    `${symbol} Rok ${year} má být přestupný: ${shouldBeLeap}. Výsledek volání isLeapYear(${year}) ⇒ ${computedLeapYear}.`
  );
};

// Ověření funkce isLeapYear() pro několik vybraných roků.
validateIsLeapYear(2011, false);
validateIsLeapYear(2012, true);
validateIsLeapYear(2024, true);
validateIsLeapYear(2022, false);
validateIsLeapYear(1900, false);
validateIsLeapYear(2000, true);
```

:::
