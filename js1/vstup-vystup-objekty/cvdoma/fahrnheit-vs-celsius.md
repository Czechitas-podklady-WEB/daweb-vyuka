---
title: Fahrnheit vs. Celsius
demand: 3
lead: Vytvořte převodník stupňů Fahrenheita na stupně Celsia.
---

Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

Nastudujte si na [České Wikipedii](https://cs.wikipedia.org/wiki/Stupe%C5%88_Fahrenheita) jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí `document.body.innerHTML` vypíše její ekvivalent ve stupních Celsia.

:::solution

```js
const fahrnheit = prompt('Zadej teplotu ve stupních Fahrenheita:');

document.body.innerHTML =
  '<h1>' +
  fahrnheit +
  ' stupňů Fahrenheita = ' +
  Math.round((5 * (fahrnheit - 32)) / 9) +
  ' stupňů Celsia';
```
:::
