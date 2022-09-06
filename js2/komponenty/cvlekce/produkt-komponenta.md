---
title: Produkt jako komponenta
demand: 2
---

Pokračujte v předchozím cvičení.

1. Vytvořte funkci `Product`, s jedním parametrem `props`. Tato funkce bude představovat komponentu pro jeden produkt.
1. Do funkce `Product` vložte kód vytvářející HTML pro jeden produkt. Dejte pozor, že uvnitř komponenty se produkt předává v parametru `props`. Nechť vaše funkce jako svůj výsledek vrátí vyrobené HTML.
1. Použijte vaši komponentu k zobrazení jednoho produktu na stránce.
1. Vytvořte si pole `products` s alespoň třemi různými produkty. Pomocí cyklu toto pole projděte a pomocí vaší komponenty zobrazte na stránce každý jednotlivý produkt.

---solution

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
    name: 'Zeleny caj',
    price: 55,
    currency: 'Kč',
  },
  {
    name: 'Modry caj',
    price: 12,
    currency: 'Kč',
  },
  {
    name: 'Cerveny caj',
    price: 100,
    currency: 'Kč',
  },
];

const Product = (props) => {
  const { name, price, currency } = props;

  return `
    <div class="product">
      <h2 class="product__name">${name}</h2>
      <p class="product__price">${price}${currency}</p>
    </div>
  `;
};

const productSelectionElm = document.querySelector('#products-section');
for (let i = 0; i < products.length; i += 1) {
  productSelectionElm.innerHTML += Product(products[i]);
}
```
