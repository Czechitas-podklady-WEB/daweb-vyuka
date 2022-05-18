## Doporučené postupy

Framework React vznikl ve společnosti Facebook mezi roky 2011 až 2013. Má tedy za sebou již mnoho let používání a za tu dobu se ustálily určité doporučené postupy, jak psát React aplikace. Některé z nich zmíníme již takto na začátku, abychom co nejdříve působili jako profesionálové.

### Hlavní komponenta

V Reactu není příliš zvykem psát do funkce `render` příliš obsáhly kód. Většinou postupujeme tak, že celá naše aplikace je jedna velká komponenta, která pak skládá dohromady další námi napsané komponenty. Této komponentě většinou dáváme název `App`. Kód nákupního seznamu by pak vypadal takto.

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

const App = () => {
  return (
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
};

createRoot(document.querySelector('#app')).render(<App />);
```

### Rozdělení komponent do složek

Už při práci v čistém JavaScriptu jsme se učili rozdělovat komponenty do separátních složek. Tento postup budeme v Reactu přísně dodržovat a pro každou komponenty vždy vytvoříme složku obsahující její zdrojový JavaScript, styly i obrázky.

Naší komponentu `ShoppingItem` tak vložíme do složky `ShoppingItem` se souborem `index.jsx`. Ten bude obsahovat kód naší komponenty.

```js
import React from 'react';

const ShoppingItem = (props) => {
  return (
    <div className="item">
      <span className="item__name">{props.name}</span>
      <span className="item__amount">{props.amount}</span>
    </div>
  );
};

export default ShoppingItem;
```

Všimněte si, že zde neimportujeme funkci `render`. Tu použijeme pouze v hlavním `index.jsx` na zobrazení celé aplikace. V jednotlivých komponentách ji nepotřebujeme. Také dejte pozor na to, že komponentu exportujeme pomocí `export default`. To je speciální forma exportování pro případ, kdy z našeho souboru chceme exportovat pouze jednu funkci.

Pokud bychom komponentu exportovali tak, jako dříve

```js
export const ShoppingItem = (props) => {
```

importovali bychom ji pak takto

```js
import { ShoppingItem } from './ShoppingItem';
```

Pokud ji exportujeme pomocí `export default`, při importu vynecháme složené závorky.

```js
import ShoppingItem from './ShoppingItem';
```

Výsledný hlavní `index.jsx` celé aplikace pak bude vypadat takto.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import ShoppingItem from './ShoppingItem';

const App = () => {
  return (
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
};

createRoot(document.querySelector('#app')).render(<App />);
```
