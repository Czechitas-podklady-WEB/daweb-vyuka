---
title: Menu
demand: 2
---

Stáhněte si [připravenou stránku](../assets/menu.zip) se jídelním lístkem restaurace.

1. Prohlédněte si strukturu projektu. Najdete zde komponentu `MenuItem` s vlastním JavaScriptem a vlastním CSS. Prohlédněte si šablonu komponenty v `index.html`.
1. Do souboru `index.js` uvnitř složky `MenuItem` doplňte kód funkce pro vytvoření Handlebars šablony. Bude potřeba vybrat element s identifikátorem `menu-item-template` a použít jeho `innerHTML`.
1. V hlavním souboru `index.js` si vytvořte objekt pro jednu položku menu tak, aby se dal použít v naší šabloně. Například:
   ```js
   const item1 = {
     title: 'Telecí hanger steak',
     info:
       'Tymiánový porto demiglace, květákové pyré, ragú ze žluté řepy s bylinkami',
     price: 299,
   };
   ```
   V konzoli prohlížeče si vyzkoušejte, že když použijete šablonu s vaším objektem, vytvoří se správné HTML.
1. Doplňte kód do funkce `renderMenuItem` tak, aby vytvořila a vrátila nový element pro položku menu.
1. V hlavním souboru `index.js` zavolejte vaši funkci `renderMenuItem` s vaším objektem představujícím položku menu. Tento element pak zapojte do stránky dovnitř elementu s třídou `menu`.
1. Vytvořte pole objektů s různými jídly a přidejte je v cyklu všechny do menu na stránce.
