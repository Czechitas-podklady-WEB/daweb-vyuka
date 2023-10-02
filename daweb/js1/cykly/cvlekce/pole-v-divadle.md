---
title: Pole v divadle
demand: 1
solutionAccess: allow
---

Cvičení provádějte ve vašem JavaScript souboru.

1. Vytvořte nějaké pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použijte metodu `push` a přidejte do pole počet diváků na novém představení.
1. Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních. Poté pomocí metody `pop` odstraňte poslední hodnotu v poli.
1. Vytvořte nějaké pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné `plays`. Uložte do nějaké proměnné druhou položku tohoto pole.
1. Uložte do proměnné `reviews` pole hodnocení, které obdržela divadelní hra :i[Plyšáci na útěku] v různých recenzních časopisech. Hodnocení je vždy dvouprvkové pole obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody `includes` zjistěte, jestli je v poli hodnocení od časopisu :i[Divadelní Luk].

:::solution

```js
// Vytvořte nějaké pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použijte metodu push a přidejte do pole počet diváků na novém představení.
const spectators = [77, 43, 15, 99, 30];
spectators.push(12);
// Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních. Poté pomocí metody pop odstraňte poslední hodnotu v poli.
const theatre = [13.5, 12.7, 11.2, 12.3, 15.1];
theatre.pop();
// Vytvořte nějaké pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné plays. Uložte do nějaké proměnné druhou položku tohoto pole.
const plays = [
  'Pýcha a předsudek ',
  'Maryša',
  'Kauza pražské kavárny',
  'Kdo je tady ředitel?',
];
let second = plays[1];
// Uložte do proměnné reviews pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy dvouprvkové pole obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody includes zjistěte, jestli je v recenzích něco od časopisu Divadelní Luk.
const reviews = [
  ['Slovenka', 10],
  ['Zivot', 8],
  ['Divadelní Luk', 9],
  ['Makarony', 1],
];
reviews.includes(['Divadelní Luk', 9]);
```

:::
