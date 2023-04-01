---
title: Pole v divadle
demand: 1
---

Celé toto cvičení provádějte v JavaScript konzoli.

1. Vytvořte nějaké pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použije metodu `push` a přidejte do pole počet diváků na novém představení.
1. Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních.
1. Vytvořte nějaké pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné `plays`. Uložte do nějaké proměnné druhou položku tohoto pole. Pomocí metody `shift` odstraňte z pole první představení, které už divadlo nehraje.
1. Do proměnné `reviews` uložte pole hodnocení, které obdržela divadelní hra :i[Plyšáci na útěku] v různých recenzních časopisech. Hodnocení je vždy dvouprvkové pole obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody `unshift` přidejte na začátek nové hodnocení z časopisu :i[Divadelní oběžník].

---solution

```js
// Vytvořte nějaké pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použije metodu push a přidejte do pole počet diváků na novém představení.
const spectators = [77, 43, 15, 99, 30];
spectators.push(12);
// Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních.
const theatre = [13.5, 12.7, 11.2, 12.3, 15.1];
// Vytvořte nějaké pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné plays. Uložte do nějaké proměnné druhou položku tohoto pole. Pomocí metody shift odstraňte z pole první představení, které už divadlo nehraje.
const plays = [
  'Pýcha a předsudek ',
  'Maryša',
  'Kauza pražské kavárny',
  'Kdo je tady ředitel?',
];
let second = plays[1];
plays.shift();
// Do proměnné reviews uložte pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy dvouprvkové pole obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody unshift přidejte na začátek nové hodnocení z časopisu Divadelní oběžník.
const reviews = [
  ['Slovenka', 10],
  ['Zivot', 8],
  ['Tvojazena', 2],
  ['Makarony', 1],
];
reviews.unshift(['Divadelní oběžník', 5]);
```
