---
title: Kontrola DIČ
demand: 3
lead: Napište funkci na kontrolu DIČ.
solutionAccess: lock
---

Všimněte si, že knihovna `validator.js` v době vzniku tohoto zadání neumí ověřit platnost českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

- CZ123456789
- CZ1234567890

Postupujte dle následujících kroků:

1. Vytvořte prázdnou stránku s JavaScriptem a knihovnou `validator.js`.
1. Vytvořte funkci `isDIC` s jedním parametrem `inputStr`, což bude řetězec, který chceme zkontrolovat.
1. Jako první ve funkci zkontrolujte, jestli je vstupní řetězce kratší než 11 znaků. V takovém případě nemá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte tady z funkce `false`. Tím naše funkce končí. Všimněte si, že takto používáme vzor _časný návrat_.
1. Dále ve funkci zkontrolujte, jestli je vstupní řetězce delší než 12 znaků. V takovém případě opět vraťte `false`.
1. Dále si ve funkce do proměnné `prefix` uložte první dva znaky vstupního řetězce.
1. Pomocí podmínky zkontrolujte, že proměnná `prefix` obsahuje přesně znaky `CZ`. Pokud ne, ihned vraťte `false`.
1. Do promměné `digits` si uložte část vstupního řetězce od třetího znaku dále.
1. Použijte metodu `validator.isInt`, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí `false`, ihned také vraťte `false`.
1. Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit `true`.
1. Vyzoušejte svoji funkci v konzoli na různých vstupech a ověřte, že funguje. Nezapomeňte ověřit platná i neplatná DIČ.

:::solution

```js
const isDIC = (inputStr) => {
  // kontrola délky
  if (inputStr.length < 11) {
    return false;
  }
  if (inputStr.length > 12) {
    return false;
  }

  // kontrola prefixu CZ
  const prefix = inputStr.slice(0, 2);
  if (prefix !== 'CZ') {
    return false;
  }

  // kontrola, že za prefixem jsou jen číslice
  const digits = inputStr.slice(2);
  if (!validator.isInt(digits)) {
    return false;
  }

  return true;
};
```

Můžete si do javascriptového souboru přidat následující kód, kterým si můžete otestovat různá platná a neplatná DIČ:

```js
console.log('Platná DIČ');
console.log('CZ123456789', isDIC('CZ123456789'));
console.log('CZ1234567890', isDIC('CZ1234567890'));

console.log('Neplatná DIČ');
console.log('123', isDIC('123'));
console.log('ABC', isDIC('ABC'));
console.log('1234567890', isDIC('1234567890'));
console.log('001234567890', isDIC('001234567890'));
console.log('1234567890CZ', isDIC('1234567890CZ'));
console.log('CZ12345678901', isDIC('CZ12345678901'));
console.log('CZ12345678', isDIC('CZ12345678'));
console.log('CZA23456789', isDIC('CZA12345678'));
```

:::
