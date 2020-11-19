---
title: Rodná čísla
demand: 2
---

Založte si projekt v čistém JavaScriptu bez Webpacku, stačí soubory `index.html` a `index.js`. Napište program, který zjistí, jestli je rodné číslo platné.

1. Každé rodné číslo musí mít přesně 9 znaků. Zkontrolujte tedy, že zadaný řetězec je délky 9 a neprojdou nám například vstupy typu
   ```
   Žádné číslo ti nedám
   ```
1. Každé rodné číslo musí být celé číslo. Zde je nějaká hodnota celé číslo v JavaScriptu zkontrolujete pomocí funkce `Number.isInteger`. Musíte však vstup předtím převést na číslo pomocí funkce `Number`.
   ```jscon
   > Number.isInteger(Number('25'))
   true
   > Number.isInteger(Number('25.16'))
   false
   > Number.isInteger(Number('ahoj'))
   false
   ```
1. Každné rodné číslo musí být dělitelné 11.
