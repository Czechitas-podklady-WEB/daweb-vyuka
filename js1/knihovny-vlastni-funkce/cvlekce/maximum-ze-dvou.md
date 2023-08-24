---
title: Maximum ze dvou čísel
demand: 2
---

Napište funkci `max2`, která **vrátí větší ze dvou zadaných čísel**. V JavaScriptu už na toto funkce existuje, jmenuje se `Math.max`. Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.

:::solution

```js
const max2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
```

:::
