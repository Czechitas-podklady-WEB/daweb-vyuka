---
title: Program kina
demand: 3
---

Pokračujte v řešení z předchozího cvičení. Pro jedno kino použije objekt, který vypadá následovně.

```js
const cinema1 = {
  name: 'Světozor',
  address: 'Vodičkova 41',
  movies: [
    {
      title: 'Casablanca',
      time: '18:30',
      hall: 7,
    },
    {
      title: 'Pán prstenů: Dvě věže',
      time: '17:45',
      hall: 4,
    },
  ],
};
```

Vytvořte Handlebars šablonu, která bude pro každý film vytvářet HTML vypadající takto:

```
<span class="movie__title">Casablanca</span>
<span class="movie__time">18:30</span>
<span class="movie__hall">sál č. 7</span>
```

Vezměte první film a pomocí vaší šablony a funkce `document.createElement` pro něj vytvořte DOM element, který bude vypadat takto.

```html
<div class="movie">
  <span class="movie__title">Casablanca</span>
  <span class="movie__time">18:30</span>
  <span class="movie__hall">sál č. 7</span>
</div>
```

Ze stránky vyberte element se třídou `cinema__movies` a pomocí metody `appendChild` do něj zapojte váš nový DOM element.

Upravte váš předchozí kód tak, že vytvoříte funkci `renderMovie`, která jako svůj vstup bere jeden objekt filmu. Tato funkce bude vytvářet váš DOM element pro jeden film, který vrátí pomocí `return`.

Přidejte do objektu s programem kina nějaké další filmy. Pomocí cyklu projděte seznam filmů, pro každý film pomocí `renderMovie` vytvořte příšlušný DOM element a vložte jej na stránku.
