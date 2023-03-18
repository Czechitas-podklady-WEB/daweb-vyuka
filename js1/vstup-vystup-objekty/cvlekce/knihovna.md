---
title: Knihovna
demand: 2
---

1. V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
1. Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.

<!--
---solution

```js
const book = {
  title: 'Lord of the Rings',
  author: {
    name: 'John Ronald Reuel',
    surename: 'Tolkien',
    age: 81,
  },
  numberOfPages: 2057,
  movie: {
    year: 2000,
    director: {
      name: 'Peter',
      surname: 'Jackson',
    },
    actors: {
      actor1: {
        name: 'Orlando',
        surname: 'Bloom',
        characterName: 'Legolas',
      },
      actor2: {
        name: 'Elijah',
        surname: 'Wood',
        characterName: 'Frodo',
      },
      actor3: {
        name: 'Viggo',
        surname: 'Mortensen',
        characterName: 'Aragorn',
      },
    },
  },
};
```
-->