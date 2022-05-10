---
title: Šachovnice
demand: 2
---

Založte JavaScriptový program a vytvořte v něm pole, které bude reprezentavat rozehranou šachovou partii jako na obrázku.

::fig[Šachovnice]{src=assets/sachovnice.png}

1. Šachovnici reprezentujte jako pole polí, kde každý řádek šachovnice je reprezentován jako jedno pole. Políčka reprerezentujte jako čísla dle následujícího klíče. Pro prázdné políčko použijte číselnou hodnotu `0`.
   ::fig[Figury]{src=assets/figury.png}
1. Otevřete tento program v konzoli a napište příkaz, který přesune bílého koně z pozice f3 na pozici e5, kde sebere černého pěšce. Výsledkem by mělo být upravené pole obsahující nové pozice figurek.

---solution

```js
// sachovnice
const sachovnice = [
  [0, 0, 0, 0, 0, -4, -6, 0],
  [0, 0, 0, 0, 0, -1, -1, -1],
  [0, 0, -1, 0, 0, 0, 0, 0],
  [0, -1, 1, 0, -1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 1],
  [0, 0, 0, 0, 2, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 6, 0],
];
//Otevřete tento program v konzoli a napište příkaz, který přesune bílého koně z pozice f3 na pozici e5, kde sebere černého pěšce. Výsledkem by mělo být upravené pole obsahující nové pozice figurek.
sachovnice[3][4] = 3;
sachovnice[5][5] = 0;
```
