---
title: Kontrola cifer pomocí mapy
demand: 2
---

V tomto cvičení budeme chtít kromě seznamu špatně zadaných znaků také u každného znaku informaci, zde ja správně, či nikoliv.

1. Podobně jako v předchozím cvičení vyrobte z uživatelem zadaného řetězce pole znaků. Na tomto poli použijte metodu `map` a vytvořte pole objektů, obsahující informace o každém znaku. Například pro vstup

   ```
   462748/312
   ```

   chceme jako výsledek obdržet takovéto pole.

   ```
   [
     { char: '4', digit: true },
     { char: '6', digit: true },
     { char: '2', digit: true },
     { char: '7', digit: true },
     { char: '4', digit: true },
     { char: '8', digit: true },
     { char: '/', digit: false },
     { char: '3', digit: true },
     { char: '1', digit: true },
     { char: '2', digit: true },
   ]
   ```

   Výsledné pole vypište to konzole.

1. Vyzkoušejte váš kód na různých vstupech a zkontrolujte, že generuje správné výsledky. Vaše aplikace by měla do konzole vypsat jednak seznam špatně zadaných znaků tak, jak jsme to dělali v předchozím cvičení, jednak pole objektů jako výše.
