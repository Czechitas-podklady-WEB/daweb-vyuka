---
title: Šachovnice
demand: 2
time: 20
---

Založte JavaScriptový program a vytvořte v něm pole, které bude reprezentavat rozehranou šachovou partii jako na obrázku.

::fig[Šachovnice]{src=assets/sachovnice.png size=60}

1. Šachovnici reprezentujte jako pole polí, kde každý řádek je reprezentován jako jedno pole. Políčka reprerezentujte jako čísla dle následujícího klíče.
   <table>
     <thead>
       <th>figura</th>
       <th>bilá</th>
       <th>černá</th>
     </thead>
     <tbody>
      <tr><td>prázdné pole</td><td colspan="2">0</td></tr>
      <tr><td>pěšec</td><td>1</td><td>-1</td></tr>
      <tr><td>věž</td><td>2</td><td>-2</td></tr>
      <tr><td>kůň</td><td>3</td><td>-3</td></tr>
      <tr><td>střelec</td><td>4</td><td>-4</td></tr>
      <tr><td>dáma</td><td>5</td><td>-5</td></tr>
      <tr><td>král</td><td>6</td><td>-6</td></tr>
     </tbody>
   </table>
1. Otevřete tento program v konzoli a napište příkaz, který přesune bílého koně z pozice f3 na pozici e5.

<!--
Šachové pozice: https://chessfox.com/how-to-play-in-chess-positions-that-feature-material-imbalances/
-->
