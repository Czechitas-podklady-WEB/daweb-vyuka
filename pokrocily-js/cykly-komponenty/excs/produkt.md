---
title: Produkt
demand: 2
---

Představte si, že tvoříte e-shop, ve kterém mají produkty následující strukturu. 

```js
const product1 = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'kč',
};
```

Postupujte dle kroků níže a vytvořte kód pro zobrazení produktu na stránce.

1. Vytvořte HTML stránku s následující strukturu
   ```html
   <body>
     <section id="products-section"></section>
     <script src="index.js"></script>
   </body>
   ```
1. Na začátku souboru `index.js` si vytvořte objekt `product1` a vymyslete si nějaký produkt s vlastnostmi `name`, `price` a `currency`.
1. Ve vašem programu do proměnné `productHtml` sestavte HTML pro váš produkt s použitím vašeho objektu `product1`. Struktura může vypadat například takto.
   ```html
   <div class="product">
     <h2 class="product__name">Mlýnek na kávu</h2>
     <p class="product__price">Cena: 520 kč</p>
   </div>
   ```
1. Vyberte ze stránky element `.products-section` a vložte do něj vámi vytvořené HTML.