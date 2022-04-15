Jakmile máme v naší React aplikaci více než jednu komponentu, vždycku musíme řešit jejich vzájemnou komunikaci. V minulé lekci jsme si ukázali, jak posílat informace mezi rodičem a dítětem. Často nám však praxe přichystá ještě složitější situaci, kdy potřebujeme zařídit komunikaci mezi sourozenci nebo dokonce mezi vzdálenými potomky. Tyto situaci si rozebereme v dnesní lekci.

## Destrukturování props

V profesionálně napsných React komponentách se často setkámi s takzvaným destrukturováním props. Než se k němu dostaneme, pojďme si v krátkosti připomenout destrukturování jako takové.

Mějme například takovýto objekt představující nějakou vlakovou nebo autobusovou jízdenku.

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

Pokud chceme z tohoto objektu získat startovní a cílovou destinací, můžeme si je uložit do proměnných například takto.

```js
const from = ticket.from;
const destination = ticket.destination;
```

Ke zkrácení tohoto zápisu však můžeme s výhodou použít destrukturování.

```js
const { from, destination } = ticket;
```

Kdybychom v naší webové aplikaci chtěli jízdenku nějak zobrazit, mohli bychom mít komponentu `Ticket` napsanou například takto:

```js
const Ticket = (props) => {
  return (
    <div className="ticket">
      <div className="ticket__from">{props.from}</div>
      <div className="ticket__to">{props.destination}</div>
    </div>
  );
};
```

Vzhledem k tomu, že v parametre `props` je vždy objekt, můžeme jej na začátku komponenty destrukturovat a ušetřit si pak trochu psaní v JSX.

```js
const Ticket = (props) => {
  const { from, destination } = props;
  return (
    <div className="ticket">
      <div className="ticket__from">{from}</div>
      <div className="ticket__to">{destination}</div>
    </div>
  );
};
```

Tento zápis má výhodu v tom, že hned na prvním řádku komponenty vidíme, jaké `props` komponenta očekává, a nemusíme tak kvůli tomu číst celý její kód. Nešikovné však je, že se nám tímto kód komponenty prodlužuje. Pokud chcete být opravdoví profíci, uděláte destrukturování přimo v parametru funkce.

```js
const Ticket = ({ from, destination }) => {
  return (
    <div className="ticket">
      <div className="ticket__from">{from}</div>
      <div className="ticket__to">{destination}</div>
    </div>
  );
};
```

Diky tomuto triku jsme zároveň zařídili, že komponenta dělá pouze `return`. Můžeme tedy nakonec použít zkracování.

```js
const Ticket = ({ from, destination }) => (
  <div className="ticket">
    <div className="ticket__from">{from}</div>
    <div className="ticket__to">{destination}</div>
  </div>
);
```

Protože samozřejmě všichni chceme být opravdoví profící, budeme od této chvíle naše komponenty psát vždy tímto způsobem.
