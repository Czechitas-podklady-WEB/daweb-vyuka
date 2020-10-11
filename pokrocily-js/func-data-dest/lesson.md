## Funkcionální zpracování dat

## Destrukturing

Téměř v každé webové aplikaci pracujeme s nějakými strukturovanými daty. K jednotlivým položkám těcho se chceme v JavaScriptu umět dostat co nejrychleji. Uvažte například tuto jednoduchou strukturu pro reprezentaci jízdenky.

```js
const ticket = {
  price: {
    amount: 12,
    currency: 'EUR',
  },
  from: 'Prague',
  destination: 'Vienna',
  stops: ['Kolín', 'Pardubice', 'Brno', 'Břeclav'],
};
```

Pokud chceme v našem programu dále pracovat například se startovní a cílovou destinací, můžeme si je chtít uložit do proměnných například takto.

```jscon
const from = ticket.from;
const destination = ticket.destination;
```

Protože takovýto kód píšeme velmi často a programátoři jsou líní, JavaScript nabízí zkratku, jak zapsat přesně totéž.

```jscon
const { from, destination } = ticket;
```

Tomtu zápisu se říká _destructuring_. Vytvoří se pomocí něj dvě konstantní proměnné, které obsahují odpovídající hodnoty z objektu `ticket`.

Pomocí destructuringu se můžeme do našeho objektu zanořit i hloubějí. Takto například získáme výší ceny za jízdenku a uložíme ji do proměnné `amount`.

```jscon
const { price: { amount } }, destination } = ticket;
```
