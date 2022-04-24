## Filtrování a mapování

Filtrování a mapování patří mezi nejpoužívanější funkce pro zpracování dat. Proč jsou tyto metody tak oblíbené? Vrací nám nové pole.

### Metoda filter()

U metody `filter` vidíme v parametru také podmínku, tak jako u metody `some` nebo `every`. Tato metoda nám však nevrací `bool`, nýbrž nové pole. Toto nové obsahuje pouze ty položky, které podmínku splnily.
Pokud bychom chtěli z pole `myArray` získat pouze čísla dělitelná třemi, použijeme metodu `filter`. Získáme tak nové pole, které obsahuje jen čísla dělitelná třemi. To si můžeme uložit do proměnné. Původní pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const filteredArray = myArray.filter((item) => item % 3 === 0);

console.log(filteredArray);

> [6, -3, 9]
```

### Metoda map()

Metodu `map` použijeme především pokud potřebujeme položky pole pozměnit, nebo z nich něco vytvořit. Metoda bere jako parametr opět funkci. Tuto funkci zavolá na každé položce pole a výsledek volání uloží do nově vytvořeného pole. Toto nové pole nám potom vrátí. Původní pole zůstane nezměněné.
Pokud bychom chtěli každé číslo v našem poli `myArray` vynásobit dvěma, můžeme použít metodu `map`. Dostaneme tak nové pole se zdvojnásobenými čísly. To si můžeme uložit do proměnné. Pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const doubledArray = myArray.map((item) => item * 2);

console.log(doubledArray);

> [8,2,12,16,32,-6,18]
```

## Pole objektů

Vezměme si opět proměnnou `weatherForcast` s předpověď počasí na následujících 5 dní.

```js
const weatherForcast = [
  {
    date: '28.4.2022',
    high: 14,
    low: 5,
    rain: 2.1,
  },
  {
    date: '29.4.2022',
    high: 19,
    low: 3,
    rain: 0,
  },
  {
    date: '30.4.2022',
    high: 19,
    low: 8,
    rain: 0.2,
  },
  {
    date: '1.5.2022',
    high: 16,
    low: 10,
    rain: 2.5,
  },
  {
    date: '2.5.2022',
    high: 12,
    low: 8,
    rain: 2.1,
  },
];
```

Pomocí metody `filter` můžeme vyfiltrovat pouze dny, které mají uvedenou teplotu (high) alespoň 15 stupňů nebo více. Do proměnné `warmDays` si uložíme pole, které nám vrátí metoda `filter` zavolaná na poli `weatherForecast`. Této metodě předáme jako parametr funkci, která pro každou položku zkontroluje, zda její vlastnost `high` je větší nebo rovna 15.

```js
const warmDays = weatherForcast.filter((dayForecast) => dayForecast.high >= 15);

console.log(warmDays);

> [
    {
      date: '29.4.2022',
      high: 19,
      low: 3,
      rain: 0,
    },
    {
      date: '30.4.2022',
      high: 19,
      low: 8,
      rain: 0.2,
    },
    {
      date: '1.5.2022',
      high: 16,
      low: 10,
      rain: 2.5,
    },
  ]
```

Nebo pomocí metody `map` můžeme vytvořit pole, které bude obsahovat pole řetězců s datumem a předpověďí deště.

```js
const rainForecast = weatherForcast.map(
  (dayForecast) => `${dayForecast.date}, expected rain: ${dayForecast.rain} mm`,
);

console.log(rainForecast);
```

Tento zápis je stejný, jako pokud bychom celou funkci vypsali:

```js
const rainForecast = weatherForcast.map((dayForecast) => {
  return `${dayForecast.date}, expected rain: ${dayForecast.rain} mm`;
});

console.log(rainForecast);

> [
  "28.4.2022, expected rain: 2.1 mm",
  "29.4.2022, expected rain: 0 mm",
  "30.4.2022, expected rain: 0.2 mm",
  "1.5.2022, expected rain: 2.5 mm",
  "2.5.2022, expected rain: 2.1 mm"
  ]
```
