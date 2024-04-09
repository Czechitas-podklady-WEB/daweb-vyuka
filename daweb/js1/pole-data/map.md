## Metoda `map`

Metoda `map` bude jedna z nejpoužívanějších funkcí pro práci s daty. Slouží k transformaci prvků pole na jiné hodnoty, což nám poslouží v růcných situacích.

Metoda `map` funguje v něčem podobně jako metoda `forEach`. Prochází prvky pole jeden po druhé a podobně jako `forEach` na každém prvku spustí nějakou naši funkci. Narozdil od `forEach` ale metoda `map` vždy vytvoří nové pole, které obsahuje výsledky volání naší funkce. Toto nové pole pak můžeme použít dál v našem programu.

Mějme například pole uživatelských jmen, ze kterých chceme udělat emaily. Metodu `map` můžeme použít následovně:

```js
const jmena = ['jana', 'petra', 'karel', 'josef'];
const maily = jmena.map((jmeno) => {
  return `${jmeno}@seznam.cz`;
});
```

Další příklad může být pole teplot ve stupních Fahrenheita. Chceme vytvořit nové pole, které bude obsahovat stejné teploty ve stupních Celsia. To můžeme udělat právě pomocí metody `map`:

```js
const teplotyFahrenheit = [0, 32, 100, 212];
const teplotyCelsia = teplotyFahrenheit.map((teplota) => {
  return ((teplota - 32) * 5) / 9;
});
```

Často také chceme například vytáhnout z nějaké pole objektů pouze jednu vlastnost. Například z pole uživatelů chceme vytáhnout pouze pole jejich jmen. To můžeme udělat takto:

```js
const uzivatele = [
  { jmeno: 'jana', vek: 23 },
  { jmeno: 'petra', vek: 28 },
  { jmeno: 'karel', vek: 19 },
  { jmeno: 'josef', vek: 21 },
];

const jmena = uzivatele.map((uzivatel) => {
  return uzivatel.jmeno;
});
```

Pokud si pole objektů představujeme jako tabulku, použití metody `map` zde funguje jako výběr jednoho sloupce z tabulky.
