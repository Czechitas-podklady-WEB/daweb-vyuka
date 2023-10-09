## Destrukturování objektů

Při stahování dat ze serveru ale i v mnoha jiných situacích se nám bude často stávat, že chceme z objektu rychle získat vícero hodnot a uložit je do různých proměnných, například takto:

```js
const product = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč',
};

const name = product.name;
const price = product.price;
const currency = product.currency;
```

Programátoři jsou líné bytosti a tento postup jim přijde zdlouhavý. Pokud se naše proměnné jmenují stejně jako klíče uvnitř objektu, můžeme si ušetřit psaní a použít takzvané :term{cs="destrukturování" en="destructuring"}.

```js
const product = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč',
};

const { name, price, currency } = product;
```

Tímto zápisem říkáme, že chceme vyrobit tři proměnné, do kterých se uloží hodnoty z objektu `product`.

Příklad reálného použití může být náš kód pro fetchování silného hesla.

```js
const response = await fetch(
  'https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16'
);
const data = await response.json();
const password = data.password;
const length = data.length;
```

Pomocí destrukturování si můžeme ušetřit jeden řádek kódu:

```js
const response = await fetch(
  'https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16'
);
const data = await response.json();
const { password, length } = data;
```

nebo dokonce dva:

```js
const response = await fetch(
  'https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16'
);
const { password, length } = await response.json();
```

## Destrukturování props

Destrukturování se velmi často použivá při práci s komponentami. Mejmě pro příklad komponentu zobrazující čas.

```jsx
const Time = (props) => {
  return (
    <div className="time">
      <span className="time__hours">{props.hours}</span>:
      <span className="time__mins">{props.minutes}</span>
    </div>
  );
};
```

Pomocí destrukturování můžeme získat hodnoty z objektu `props` a uložit je do proměnných, čímž si pak ušetříme psaní `props.`.

```jsx
const Time = (props) => {
  const { hours, minutes } = props;
  return (
    <div className="time">
      <span className="time__hours">{hours}</span>:
      <span className="time__mins">{minutes}</span>
    </div>
  );
};
```

Pohodlnost programátorů však nezná mezí, a proto přišli ještě s línejším způsobem, jak destrukturovat objekt a to přímo v parametru funkce.

```jsx
const Time = ({ hours, minutes }) => {
  return (
    <div className="time">
      <span className="time__hours">{hours}</span>:
      <span className="time__mins">{minutes}</span>
    </div>
  );
};
```

Takovýto zápis je pro nás novinka, ale v praxi se běžně používá, takže je dobré jej dostat pod kůži. Pokud vám přijde zápis až příliš líný, můžete jej prozatím bojkotovat. My jej však nadále v tomto kurzu budeme používat a brzy vás jistě zlákáme na naši stranu.
