---
title: Nápoj jako komponenta
demand: 2
---

Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta.

1. Vytvořte komponentu `Drink`, která očekává `props` v následujícím tvaru.
   ```js
   {
     id: 'romano',
     name: 'Romano',
     ordered: false,
     layers: [
       {
         color: '#fbdf5b',
         label: 'citrón',
       },
       {
         color: '#613916',
         label: 'espresso',
       },
     ],
   };
   ```
   Komponentu napište tak, aby vracela DOM element. Jak už jsme zvyklí, vytvořte pro komponentu vlastní složku s vlastním `index.js` a `style.css`.
1. Uvnitř vaší komponenty bude potřeba použít komponentu `Layers`. Dejte si pozor, abyse ji spráně importovali.
1. Název obrázku, který se má zobrazit, můžete vzít z vlastnosti `id`. Je tak pouze potřeba sestavit správnou cestu pro atribut `src`.
1. Zprovozněte tlačítko pro objedávání tak, aby veškerý kód byl součástí komponenty. V tomto případě se budeme muset zbavit globální proměnné `ordered`. K stejnému účelu však můžeme využít vlastnost `ordered`, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.
1. Zobrazte na stránce nápoj dle dat uvedených výše. Použijte funkci `appendChild`, neboť naše komponenta vrací DOM element. Vyzkoušejte, že funguje objednávání.
1. Jakmile váš kód správně funguje, commitněte jej se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
