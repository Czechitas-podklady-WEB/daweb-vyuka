---
title: Pole v divadle
demand: 1
context: lekce
lead: Vyzkoušejte si vytvořit jednoduchá pole.
solutionAccess: protected
---

Cvičení provádějte ve vašem JavaScript souboru.

1. Vytvořte pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použijte metodu `push` a přidejte do pole počet diváků na novém představení.
1. Vytvořte pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních. Poté pomocí metody `pop` odstraňte poslední hodnotu v poli.
1. Vytvořte pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné `plays`. Uložte do jiné proměnné druhou položku tohoto pole.
1. Uložte do proměnné `reviews` pole hodnocení, které obdržela divadelní hra _Plyšáci na útěku_ v různých recenzních časopisech. Hodnocení je vždy objekt obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10.

:::solution

```js
const spectators = [77, 43, 15, 99, 30];
spectators.push(12);

const theatre = [13.5, 12.7, 11.2, 12.3, 15.1];
theatre.pop();

const plays = [
  'Pýcha a předsudek ',
  'Maryša',
  'Kauza pražské kavárny',
  'Kdo je tady ředitel?',
];
let second = plays[1];

const reviews = [
  { magazine: 'Slovenka', rating: 10 },
  { magazine: 'Zivot', rating: 8 },
  { magazine: 'Divadelní Luk', rating: 9 },
  { magazine: 'Makarony', rating: 1 },
];
```

:::
