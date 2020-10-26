## Funkcionální zpracování dat

Když při programování aplikací používáme cykly, brzy narazíme na často se opakující situace a konstrukce. Pro tyto situace máme na polích pomocné metody z funkcionálního světa.

- `Array.forEach`
- `Array.map`
- `Array.filter`
- `Array.every`
- `Array.some`

@exercises ## Cvičení - Funkcionální zpracování dat [

- jednohubky
- ukolnicek
  ]@

## Destrukturování

Téměř v každé webové aplikaci pracujeme s nějakými strukturovanými daty. K jednotlivým položkám těchto dat se chceme v JavaScriptu umět dostat co nejrychleji. Uvažte například tuto jednoduchou strukturu pro reprezentaci jízdenky.

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

Tomtu zápisu se říká <term cs="destrukturování" en="destructuring">. Český překlad tohoto pojmu prosím berte s rezervou. Používáme jej zde čistě proto, že se v češtině toto slovo lépe skloňuje. Pomocí destrukturování se vytvoří dvě konstantní proměnné, které obsahují odpovídající hodnoty z objektu `ticket`.

Pomocí destrukturování se můžeme do našeho objektu zanořit i hloubějí. Takto například získáme výší ceny za jízdenku a uložíme ji do proměnné `amount`.

```jscon
const { price: { amount } }, destination } = ticket;
```

### Destrukturování polí

Podobně jako dokážeme destukturovat objekty umíme také destrukutorovat pole. Mějme například následující pole měst.

```js
const cities = ['Praha', 'Brno', 'Ostrava', 'Liberec', 'Pardubice', 'Znojmo'];
```

Kdybychom chtěli do proměnných uložit první dva prvky tohoto pole, napsali bychom

```js
const from = cities[0];
const to = cities[1];
```

Pomocí destrukturingu to můžeme udělat opět rychleji.

```js
const [from, to] = cities;
```

Co kdybychom ale chtělí první a třetí prvek? V takovém případě prostě druhý prvek vynecháme.

```js
const [from, , to] = cities;
```

### Destrukturování a komponenty

Destrukturování můžeme s výhodou použít při psaní komponent. Uvažme naší známou komponentu `ShoppingList`.

```js
const ShoppingItem = (props) => {
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
    <span class="item__name">${props.name}</span>
    <span class="item__amount">${props.amount}</span>
    <button class="btn-done">koupeno</button>
  `;

  return element;
};
```

Abychom před každou hodnotu nemusi psát `props.`, můžeme si objekt `props` na začátku funkce destrukturovat.

```js
const ShoppingItem = (props) => {
  const { name, amount } = props;
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
    <span class="item__name">${name}</span>
    <span class="item__amount">${amount}</span>
    <button class="btn-done">koupeno</button>
  `;

  return element;
};
```

Tento zápis má výhodu v tom, že hned na prvním řádku komponenty vidíme, jaké `props` komponenta očekává, a nemusíme tak kvůli tomu číst celý její kód. Nešikovné však je, že se nám tímto kód komponenty prodlužuje. Pokud chcete být opravdoví profíci, uděláte destrukturování přimo v parametru funkce.

```js
const ShoppingItem = ({ name, amount }) => {
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
    <span class="item__name">${name}</span>
    <span class="item__amount">${amount}</span>
    <button class="btn-done">koupeno</button>
  `;

  return element;
};
```

Takto píšou komponenty ti největší borci.

@exercises ## Cvičení - Destrukturování [

- produkty
- cas
  ]@
