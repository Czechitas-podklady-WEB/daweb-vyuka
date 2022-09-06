---
title: Seznam nápojů
demand: 2
---

V tomto cvičení budeme chtít na stránce zobrazit vícero nápojů.

1. Uvnitř hlavního `index.js` si vytvořte následujicí globální proměnnou.

   ```js
   const drinks = [
     {
       id: 'cappuccino',
       name: 'Cappuccino',
       ordered: false,
       layers: [
         {
           color: '#feeeca',
           label: 'mléčná pěna',
         },
         {
           color: '#fed7b0',
           label: 'teplé mléko',
         },
         {
           color: '#613916',
           label: 'espresso',
         },
       ],
       image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
     },
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
       image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
     },
   ];
   ```

1. Použijte cyklus `for` nebo `forEach`, projděte seznam nápojů a pomocí komponenty `Drink` zobrazte každý nápoj na stránce. Vyzkoušejte, že si každý nápoj můžete objednat nebo u něj zrušit objednávku.
1. Jakmile stránka funguje, proveďte commit se vstřícně napsanou zprávou a pushněte váš kód do vzdáleného repozitáře.
