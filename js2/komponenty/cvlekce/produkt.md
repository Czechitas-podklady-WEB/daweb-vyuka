---
title: Produkt
demand: 2
---

Představte si, že tvoříte e-shop a na hlavní stránce chcete zobrazit vaše produkty. K dispozici je pole produktů, které zatím vložíme natvrdo do programu.

```js
const products = [
  {
    name: 'Mlýnek na kávu',
    price: 520,
    currency: 'Kč',
  },
  {
    name: 'Varná konvice',
    price: 670,
    currency: 'Kč',
  },
  {
    name: 'Sada hrničků',
    price: 1020,
    currency: 'Kč',
  },
  {
    name: 'Kávovar',
    price: 5800,
    currency: 'Kč',
  },
];
```

1. Založte si nový projekt příkazem

   ```shell
   npm init kodim-app@latest cviceni-produkt html-css-js
   ```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-produkt`.
1. Vytvořte HTML stránku s následující strukturou `body`:

   ```html
   <body>
     <section id="products-section"></section>
   </body>
   ```

1. Vložte do stránky soubor `index.js` a na jeho začátek vložte pole s produkty.
1. Vytvořte funkci `Product` s jedním parametrem `props`. Tato funkce bude představovat komponentu pro jeden produkt.
1. Do funkce `Product` vložte kód vytvářející HTML pro jeden produkt. Dejte pozor, že uvnitř komponenty se produkt předává v parametru `props`. Nechť vaše funkce jako svůj výsledek vrátí vyrobené HTML v tomto tvaru:

   ```html
   <div class="product">
     <h2 class="product__name">Mlýnek na kávu</h2>
     <p class="product__price">Cena: 520 Kč</p>
   </div>
   ```

1. Vytvořte funkci `renderProducts`, která vybere ze stránky element s _id_ `products-section` a naplní jej obsahem s pomocí komponenty `Product`.
1. Zavolejte vaši funkci a vykoušejte, že se produkty zobrazují správně. V reálné aplikaci bychom samozřejmě tuto funkci volali jako reakci na nějaký `fetch` dat.

:::solution

## `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="index.js" type="module"></script>
  </head>
  <body>
    <section id="products-section"></section>
  </body>
</html>
```

## `index.js`

```js
const products = [
  {
    name: 'Mlýnek na kávu',
    price: 520,
    currency: 'Kč',
  },
  {
    name: 'Varná konvice',
    price: 670,
    currency: 'Kč',
  },
  {
    name: 'Sada hrničků',
    price: 1020,
    currency: 'Kč',
  },
  {
    name: 'Kávovar',
    price: 5800,
    currency: 'Kč',
  },
];

const Product = (props) => {
  const { name, price, currency } = props;

  return `
    <div class="product">
      <h2 class="product__name">${name}</h2>
      <p class="product__price">${price} ${currency}</p>
    </div>
  `;
};

const renderProducts = () => {
  document.querySelector('#products-section').innerHTML = products
    .map((p) => Product(p))
    .join('');
};

renderProducts();
```

:::
