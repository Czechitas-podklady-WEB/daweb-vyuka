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

## Komunikace mezi sourozenci

Komunikaci mezi sourozenci si opět ilustrujeme na našem příkladu s volbou nového prezidenta. V minulé lekci jsme skončili v situaci, kdy komponenta `Candidate` dokáže svému rodiči `App` poslat jméno kandidáta pomocí `callbacku`. Naše aplikace však byla napsaná velmi jednoduše. V praxi bychom nejspíše narazili na složitější situaci. Podívejme se na začátek komponenty `App`.

```js
return (
  <div className="container">
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>Nový prezident</h1>
        <p className="castle__president">
          {
            president === null ? 'Vyberte svého kandidáta' : president
          }
        </p>
      </div>
    </div>
```

Tento úsek představující náš hrad by si jistě zasloužil samostatnou komponentu. Pojmenujme ji `Castle` a vytvoříme pro ni separátní složku i styly. Kód komponenty pak bude vypadat takto.

```js
import React from 'react';
import './style.css';

const Castle = ({ president }) => {
  return (
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>Nový prezident</h1>
        <p className="castle__president">
          {
            president === null ? 'Vyberte svého kandidáta' : president
          }
        </p>
      </div>
    </div>
  );
};

export default Castle;
```

Naše komponenta `App` pak může komponentu `Castle` použíjt jako svoje dítě. 

```jsx
return (
  <div className="container">
    <Castle president={president} />
    
    <h2>Kandidátí</h2>
);
```

Všimněte si, že komponenta `Candidate` a komponenta `Castle` jsou sourozenci. Jejich společným rodičem je komponenta `App`. Komponenta `Candidate` už neposílá jméno kandidáta svému rodiči jako dříve. Nyní jej posílá svému svému sourozenci `Castle`. Všimněte si však, že tato komunikace probíhá skrze rodiče `App`. Jakmile komponenta `Candidate` zavolá callback `handleVote`, tento uloží jméno prezidenta do stavu komponenty `App`. Tímto se vyvolá překreslení komponenty `App`, čimž se hodnota stavu `president` předá do props komponenty `Castle`. 

Tento princip možná na první pohled vypadá složitě. Výhodou však je, že zůstává vždy stejný. Vždy, když chceme předávat informace mezi sourozenci, předáváme je skrze stav rodiče. 

<!-- [[[ excs Cvičení: Destrukturování
- produkty
]]] -->
