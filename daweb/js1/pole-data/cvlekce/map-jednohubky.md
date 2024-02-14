---
title: Jednohubky pro `map`
demand: 1
lead: Jednoduché cvičení na použití metody `map`.
solutionAccess: protected
---

Založte si JavaScriptový program a do něj vložte následující data:

```js
const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];
```

Pomocí metody `map` vždy vytvořte pole dle zadání a vypište jej pro kontrolu do konzole (použijte `console.log`).

1. Vytvořte nové pole, které bude obsahovat všechna čísla z pole `cisla` vynásobená dvěma.
1. Vytvořte nové pole, které bude obsahovat délky všech řetězců z pole `zvirata`.
1. Vytvořte nové pole, které bude obsahovat pouze názvy všech nápojů z pole `napoje`.
1. Vytvořte nové pole, které bude obsahovat pouze název nápoje z pole `napoje`, pokud je nápoj skladem, v opačném případě bude obsahovat řetězec `Není skladem`.

:::solution

```js
const kratDva = cisla.map((cislo) => cislo * 2);
console.log(kratDva);

const delky = zvirata.map((zvire) => zvire.length);
console.log(delky);

const nazvy = napoje.map((napoj) => napoj.nazev);
console.log(nazvy);

const skladem = napoje.map((napoj) => {
  if (napoj.skladem) {
    return napoj.nazev;
  } else {
    return 'Není skladem';
  }
});
```

:::
