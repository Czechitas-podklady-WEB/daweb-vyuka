---
title: Kalkulačka
demand: 2
context: nadoma
lead: Napište funkci, která spočítá výsledek výpočtu.
solutionAccess: protected
---

Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko :kbd[2], poté :kbd[+], pak :kbd[3] a pak :kbd[=]. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme :kbd[+], ale až ve chvíli, kdy mačkáme :kbd[=]. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme :kbd[=].

Napište funkci `calculate` se třemi parametry `number1`, `operation` a `number2`, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být `'+'`, `'-'`, `'*'` nebo `'/'`. Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

```js
document.body.innerHTML += `2 + 3 = ${calculate(2, '+', 3)}<br>`; // vypíše výsledek 5
document.body.innerHTML += `3 * 7 = ${calculate(3, '*', 7)}<br>`; // vypíše výsledek 21
document.body.innerHTML += `10 / 4 = ${calculate(10, '/', 4)}<br>`; // vypíše výsledek 2.5
```

:::solution

```js
const calculate = (number1, operation, number2) => {
  if (operation === '+') {
    return number1 + number2;
  }
  if (operation === '-') {
    return number1 - number2;
  }
  if (operation === '*') {
    return number1 * number2;
  }
  if (operation === '/') {
    return number1 / number2;
  }
};
```

Můžete si do javascriptového souboru přidat následující kód, kterým si můžete otestovat, zda funkce `calculate` funguje:

```js
const testCalculate = (expected, actual) => {
  const icon = expected === actual ? '✔' : '❌';
  document.body.innerHTML += `${icon} Očekávaná hodnota: ${expected}, vypočtená hodnota: ${actual}<br>`;
};

testCalculate(5, calculate(2, '+', 3));
testCalculate(21, calculate(3, '*', 7));
testCalculate(2.5, calculate(10, '/', 4));
testCalculate(6, calculate(10, '-', 4));
testCalculate(-8, calculate(-12, '+', 4));
```

:::
