---
title: Pozemky
demand: 2
---

Představte si, že programujeme aplikaci, která spravuje inzeráty k pronájmu pozemků. Každý pozemek budeme reprezentovat jak obdélník s určitou šírkou a výškou v metrech. Pro každý pozemek také budeme chtít určit jeho výměru v metrech čtverečních a obvod pozemku v metrech.

Založte JavaScriptový program a vytvořte objekt s názvem `Estate` podle následujícího vzoru

```js
const Estate = {
  area: function () {
    // váš kód
  },
  border: function () {
    // váš kód
  },
};
```

Tento objekt bude představovat prototyp pro všechny naše pozemky.

1. Doplňte kód metody `area`, která na základě hodnot `this.width` a `this.height` vrátí výměru pozemku v metrech čtverečních.
1. Doplňte kód metody `border`, která spočítá délku hranice pozemku v metrech.
1. Vytvořte objekt `estate1` jako níže.
   ```js
   const estate1 = {
     width: 120,
     height: 50,
   };
   ```
1. Pomocí vlastnosti `__proto__` nastavte tomuto pozemku prototyp `Estate`. V konzoli vyzkoušejte následujicí příkazy.
   ```jscon
   > estate1.area()
   > estate1.border()
   ```
1. Vytvořte pozemek `estate2` s nějakými rozměry a správným prototypem a v konzli vyzoušejte, že i tento správně funguje.
