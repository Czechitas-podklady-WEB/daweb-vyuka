---
title: Úkolníček
demand: 3
---

Stáhněte si [základ stránky](assets/ukolnicek-zadani.zip) zobrazující jednoduchý úkolníček.

1. Podívejte se, jak stránka vypadá. Smažte obsah elementu `todo__tasks` uvnitř souboru `index.html`, ale zapamatujte si, jak se v HTML vytvoří jeden úkol.
1. V JavaScriptu vytvořte pole objektů `tasks`, které bude reprezentovat seznam úkolů. Každý úkol bude mí zatím pouze název.
1. Vytvořte komponentu `Task`, která na vstupu očekává jeden úkol a vytvoří pro něj patřičné HTML.
1. Zavolejte funkci `Task` v cyklu přes pole úkolů a zapojte výsledek do vaší stránky.
1. Vytvořte další komponentu `TasksList`, která na vstupu `props` očekává objekt obsahující pole úkolů v tomto tvaru.
   ```js
     {
       tasks: [
         // array of tasks
       ]
     }
   ```
1. Z HTML odstraňte celý prvek `todo__tasks` a nechte komponentu `TasksList` vytvořit celý tento prvek i s jeho obsahem. Komponenta `TasksList` tedy bude postupně v cyklu volat komponentu `Task` a vrátí HTML celého divu s třdiou `todo__taska`. 
1. Zavolejte funkci `TasksList`, předejte jí všechny úkoly v očekávaném formátu `tasks` a zapojte výsledek funkce do vaší stránky na konec elementu s třidou `todo`.
