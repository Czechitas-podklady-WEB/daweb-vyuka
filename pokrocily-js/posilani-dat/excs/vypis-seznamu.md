---
title: Výpis seznamů
demand: 2
---

V tomto cvičení budeme chtít na stránce zobrazit všechny dostupné nákupní seznamy.

1. Vytvořte obyčejnou HTML stránku s jednoduchým selectem.
   ```html
   <body>
     <div id="app">
       <select id="lists-select">
         <option value="martin">martin</option>
         <option value="petr">petr</option>
         <option value="pavel">pavel</option>
       </select>
     </div>
   ```
1. Prohlédněte si [dokumentaci](https://apps.kodim.cz/daweb/shoplist/) a podívejte se, jak se dělá výpis všech nákupních seznamů.
1. Pomocí funkce `fetch` získejte z API seznam jmen jednotlivých seznamů. Projděte je pomocí cyklu a vytvořte z nich obsah selectu `#lists-select`. 