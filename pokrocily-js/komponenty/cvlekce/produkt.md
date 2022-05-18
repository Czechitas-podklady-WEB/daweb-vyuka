---
title: Produkt
demand: 2
---

Představte si, že tvoříte e-shop, ve kterém mají produkty následující strukturu.

```js
const product1 = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč',
};
```

Postupujte dle kroků níže a vytvořte kód pro zobrazení produktu na stránce.

1. Vytvořte HTML stránku s následující strukturu `body`:
   ```html
   <body>
     <section id="products-section"></section>
   </body>
   ```
1. Vložte do stránky soubor `index.js` a na jeho začátku si vytvořte objekt `product1`. Vymyslete si nějaký produkt s vlastnostmi `name`, `price` a `currency`.
1. Ve vašem programu do proměnné `productHtml` sestavte HTML pro váš produkt s použitím vašeho objektu `product1`. Struktura může vypadat například takto.
   ```html
   <div class="product">
     <h2 class="product__name">Mlýnek na kávu</h2>
     <p class="product__price">Cena: 520 Kč</p>
   </div>
   ```
1. Vyberte ze stránky element s id `products-section` a vložte do něj vámi vytvořené HTML.

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
const product1 = {
  name: 'Zeleny caj',
  price: 55,
  currency: 'Kč',
};

const productHtml = `
  <div class="product">
    <h2 class="product__name">${product1.name}</h2>
    <p class="product__price">${product1.price}${product1.currency}</p>
  </div>
`;

const productSelectionElm = document.querySelector('#products-section');
productSelectionElm.innerHTML += productHtml;
```
