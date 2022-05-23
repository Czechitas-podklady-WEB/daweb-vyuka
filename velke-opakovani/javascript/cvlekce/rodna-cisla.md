---
title: Rodná čísla
demand: 2
---

Založte si projekt v čistém JavaScriptu bez Webpacku, stačí soubory `index.html` a `index.js`. Napište program, který zjistí, jestli je zadané rodné číslo platné.

1. Pomocí funkce `prompt` se zeptejte uživatele na rodné číslo. Rodné číslo zkontrolujte podle bodů popsaných níže.
1. Každé rodné číslo musí mít přesně 10 znaků. Zkontrolujte tedy, že zadaný řetězec je délky 10 a neprojdou nám například vstupy typu
   ```text
   Žádné číslo ti nedám
   ```
   Výsledek kontroly vypište do konzole prohlížeče.
1. Každé rodné číslo musí být celé číslo. Zde je nějaká hodnota celé číslo v JavaScriptu zkontrolujete pomocí funkce `Number.isInteger`. Musíte však vstup předtím převést na číslo pomocí funkce `Number`.
   ```text
   > Number.isInteger(Number('25'))
   true
   > Number.isInteger(Number('25.16'))
   false
   > Number.isInteger(Number('ahoj'))
   false
   ```
1. Každé rodné číslo musí být dělitelné 11. Zkontrolujte tedy, že zadané číslo je dělitelné jedenácti. Pokud jsou všechny podmínky splněny. rodné číslo budeme považovat za platné.
