---
title: Šablony
demand: 1
---

Stáhněte si [připravenou stránku](../assets/program-kin.zip) se vloženými Handlebars šablonami. Prohlédněte si kód v souboru `index.js` a otevřete stránku v prohlížeči.

1. V konzoli zavolejte funkci `movieTemplate` s objektem `movie1` a prohlédněte si výsledek.
1. V souboru `index.js` vytvořte podle předchozího vzoru objekty `movie2` a `movie3` představující dva další filmy. V konzoli vyzkoušejte tyto objekty s vaší šablonou.
1. Pomocí knihovny Handlebars vytvořte šablonu `cinemaTemplate`, která bude produkovat řetězce typu
   ```
   Kino Světozor, adresa: Vodičkova 41
   ```
   kde název kina a adresu specifikujete pomocí objektu s vlastnostmi `name` a `address`. Vytvořte tři objekty kin a pomocí šablony `cinemaTemplate` vypište do konzole následující řetězce.
   ```
   Kino Světozor, adresa: Vodičkova 41
   Kino Bio Oko, adresa: Františka Křížka 460/15
   Kino Aero, adresa: Biskupcova 31
   ```
