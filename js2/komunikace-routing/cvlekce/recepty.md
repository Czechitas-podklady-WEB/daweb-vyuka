---
title: Stránka s recepty
demand: 3
---

V tomto cvičení oživíme stránku s recepty a zobrazíme jejich seznam. Pokračujte v projektu z předchozího cvičení.

1. Do komponenty `RecipesPage` přidejte _prop_ `recipes`, ve které komponenta obdrží seznam všech receptů.
1. V hlavním souboru `index.js` pro celou aplikaci této komponentě předejte v _prop_ `recipes` hodnotu `loading` jako jsme to dělali s komponentou `ShopList`. Podle této hodnoty komponenta pozná, že si má načíst data.
1. Podobně jako v komponentě `ShopList` načítáme položky seznamu, načtěte v komponentě `RecipesPage` seznam všech receptů. Tento získáte dotazem GET z API endpointu
   ```
   https://nakupy.kodim.app/api/me/recipes
   ```
   Nezapomeňte, že musíte být správně autentizovaní vaším tokenem. Získaná data zatím vypište pouze do konzole, abyste zjistili, jakou mají strukturu.
1. Prohlédněte si strukturu jednoho receptu, jaké má vlastnsti a hodnosty. Podle této struktury navrhněte komponentu `Recipe`, která bude zobrazovat jeden recept. Rozmyslete si, jaké bude mít _props_, jakou strukturu elementů atd. Komponentu vytvořte ve složce `RecipesPage/Recipes`.
1. Vytvořte pro komponentu nějaké jednoduché styly.
1. Zapojte vaši komponentu `Recipe` do stránky s recepty.
1. Vykoušejte, že vaše aplikace správně funguje a že na stránce s recepty zobrazuje seznam lahodných receptů.
