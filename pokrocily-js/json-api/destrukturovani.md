## Jednoduché destrukturování

Při tvorbě komponent se nám bude velmi hodit takzvané destrukturování. 

Vezměme pro příklad následující objekt. 

```js
const product = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč',
}
```

Často se nám stane, že chceme z objektu získat vícero hodnot a uložit je do proměnných, například takto.

```js
const name = product.name;
const price = product.price;
const currency = product.currency;
```

Programátoři jsou však líné bytosti a tento postup jim přijde zdlouhavý. Pokud se naše proměnné jmenují stejně jako klíče uvnitř objektu, můžeme si ušetřit psaní a použít takzvané destrukturování. 

```js
const { name, price, currency } = product;
```

Tímto zápisem říkáme, že chceme vyrobit tři proměnné, do kterých se uloží hodnoty z objektu `product`.

Tento postup se nám zvlášť hodí v komponentách, když chceme získat vlastnosti objektu `props`. Vzpomeňme si na komponentu `ShoppingItem` z předchozí lekce.

```js
const ShoppingItem = (props) => {
  let yesNo = 'NE';
  if (props.bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${props.product}</div>
      <div class="item__amount">${props.amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

Kód můžeme malinko pročistit tím, že si parametr `props` destrukturujeme. 

```js
const ShoppingItem = (props) => {
  const { product, amount, bought } = props;

  let yesNo = 'NE';
  if (bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

JavaScript však umožňuje zajít ještě dále a použít destrukturování přímo v parametru funkce. 

```js
const ShoppingItem = ({ product, amount, bought }) => {
  let yesNo = 'NE';
  if (bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

Takto píší komponenty praví profesionálové a bychom se jim příblížili, budeme je takto psát také. 
