---
title: Západ slunce
demand: 2
---

Vytvořme webovou stránku, která bude zobrazovat čas, kdy dnes zapadá slunce. Zatím budeme pracovat bez komponent a vrátíme se k nim v druhé části lekce.

1. Založte si novou HTML stránku s JavaScriptem. 
1. Ve souboru `index.js` pomocí funkce `fetch` získejte data z API na adrese 
   ```
   https://api.sunrise-sunset.org/json?lat=50&lng=14.5
   ```
   Výsledný JSON zatím pouze vypište do konzole a prohlédněte si jeho strukturu.
1. Místo do konzole vypište čas západu slunce přímo do stránky.
1. Přidejte na stránku tlačítko. Když uživatel toto tlačíko stiskne, teprve pak zavolejte API a zobrazte západ slunce.
