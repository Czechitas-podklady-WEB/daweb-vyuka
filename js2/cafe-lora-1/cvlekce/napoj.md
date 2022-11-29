---
title: Nápoj jako komponenta
demand: 3
---

Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta. Komponentu `Drink` nejprve vytvoříme bez funkčního tlačítka a tlačítko oživíme až v dalším cvičení.

1. Ve složce `Menu/components` vytvořte komponentu `Drink` s `index.js` a `style.css`. Do `style.css` přesuňte styly související s komponentou.
1. V `index.js` vytvořte komponentu `Drink`, která očekává `props` v následujícím tvaru. Vlastnost `id` se v komponentě v tuto chvíli nebude používat, bude se nám hodit při volání API pro objednávání.

   ```js
   {
     id: 'romano',
     name: 'Romano',
     ordered: false,
     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
     layers: [
       {
         color: '#fbdf5b',
         label: 'citrón',
       },
       {
         color: '#613916',
         label: 'espresso',
       },
     ]
   };
   ```
1. Uvnitř komponenty bude potřeba použít komponentu `Layer`. Dejte si pozor, abyse ji správně importovali.
1. Adresa obrázku, který se má zobrazit, je uložena ve vlastnosti `image`. Tato cesta se použije pro atribut `src` obrázku.
1. Tlačítko zatím pouze zobrazte, funkčnost mu přidáme v dalším kroku.
1. V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
