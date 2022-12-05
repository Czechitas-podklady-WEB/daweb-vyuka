---
title: Nápoj jako komponenta
demand: 3
---

V komponentě `Menu` máme příklad tří napojů zatím jako natvrdo vytvořené HTML. Budeme chtít mít každý nápoj v menu jako komponentu. Připravujeme se na to, abychom později mohli seznam nápojů zobrazovat stažením dat z API. 

Vytvoříme komponentu `Drink`, která zatím nebude mít funkční objednávací tlačítko a nebude ještě správně zobrazovat ingredience. Obojí doplníme později.

1. Ve složce pro komoonentu `Menu` vytvořte složku `components` a v ní složku `Drink` s `index.js` a `style.css`. Do `style.css` přesuňte styly související s komponentou.
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
1. Komponenta `Drink` zatím nebude využívat ani vlastnost `layers`. Ingredience zatím nechte tak, jak jsou zobrazené ve stránce se zadáním. Komponentu pro ingredience vytvoříme v následujícím cvičení. Zatím na stránce klidně zobrazte pouze jeden nápoj, ať se moc nenadřete. 
1. Adresa obrázku, který se má zobrazit, je uložena ve vlastnosti `image`. Tato cesta se použije pro atribut `src` obrázku.
1. Tlačítko zatím pouze zobrazte, funkčnost mu přidáme v dalším kroku.
1. V této fázi si commitněte kód s užitečně napsanou commit zprávou a pushněte do vzdáleného repozitáře.