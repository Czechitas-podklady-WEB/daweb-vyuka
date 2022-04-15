## Jednoduché destrukturování

V praxi se nám bude často stávat, že chceme z objektu rychle získat vícero hodnot a uložit je do různých proměnných, například takto:

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

Jednoduchým destrukturováním si od nynějška budeme zjednodušovat život, kde to půjde. V praxi se můžete setkat i se složitejším destrukturováním, to si ale necháme do pozdějších lekcí.
