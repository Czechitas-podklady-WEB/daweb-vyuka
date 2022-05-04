## React komponenty a props

Velká výhoda, kterou nám JSX přináší, spočívá v tom, že můžeme naše komponenty psát podobně, jako na začátku, kdy jsme z komponent vraceli řetězec obsahující HTML. Připomeňme si, jak kdysi dávno vypadala jedndoduchá verze naší komponenty `ShoppingItem`.

```js
const ShoppingItem = (props) => {
  const { name, amount } = props;

  return `
    <div class="item">
      <span class="item__name">${name}</span>
      <span class="item__amount">${amount}</span>
    </div>
  `;
};
```

V Reactu tutéž komponenty napíšeme tak, že místo řetězce bude vracet JSX element.

```js
const ShoppingItem = (props) => {
  const { name, amount } = props;

  return (
    <div className="item">
      <span className="item__name">{name}</span>
      <span className="item__amount">{amount}</span>
    </div>
  );
};
```

Všimněte si důležitých rozdílů:

1. Nepoužíváme už zpětné apostrofy. Místo toho celé JSX uzavřeme do závorek, aby se nám kód hezky četl.
1. Pokud chceme dovnitř JSX zakomponenovat obsah nějaké proměnné, místo `${promenna}` píšeme prostě `{promenna}`. Proti předchozímu zápisu nám tak zmizí znak dolaru.

Ta nejhezčí věc na Reactu je však způsob, jakým naši komponentu zapojíme do zbytku stránky. Místo toho, abychom složitě používali `innerHTML` nebo `appendChild`, můžeme se tvářít, že naše komponenta je obyčejná HTML značka a `props` jí předat pomocí atributů. Použití komponenty `ShoppingItem` by pak mohlo vypadat takto.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';

const ShoppingItem = (props) => {
  const { name, amount } = props;

  return (
    <div className="item">
      <span className="item__name">{name}</span>
      <span className="item__amount">{amount}</span>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <>
    <header>
      <h1>Shopping List</h1>
    </header>
    <main className="shopping-list">
      <ShoppingItem name="Jablka" amount="1 kg" />
      <ShoppingItem name="Skořice" amount="1 balení" />
      <ShoppingItem name="Máslo" amount="250 g" />
      <ShoppingItem name="Mouka" amount="500 g" />
    </main>
    <footer>Martin Podloucký</footer>
  </>
);
```

React se za nás postará a veškerou špinavou práci, kdy hodnoty atributů zabalí do jednoho objektu, pošle jej funkci `ShoppingItem` a výsledek zapojí do naší stránky.
