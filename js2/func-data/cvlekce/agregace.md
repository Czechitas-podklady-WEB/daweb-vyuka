---
title: Agregace
demand: 3
---

Použijte opět pole `numbers`, `names` a `persons` z předchozího cvičení.

1. Pomocí metod `map` a `join` vytvořte z pole `persons` HTML seznam v následujícím formátu
   ```html
   <ul>
     <li>Petr (16)</li>
     <li>Jana (8)</li>
     <!-- a tak dále... -->
   </ul>
   ```
   Pomocí `innerHTML` vložte tento seznam do stránky.
1. Proveďte totéž jako v předchozím bodě, zobrazte však v seznamu pouze zletilé osoby.
1. Proveďte totéž jako v předchozím bodě, přidejte však do položky seznamu CSS třídu dle pohlaví dané osoby.
   ```html
   <li class="male">Petr (16)</li>
   ```
   U nebinárních osob použijte CSS třídu `nonbinary`.
