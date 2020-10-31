---
title: Seznam ingrediencí
demand: 2
---

V tomto cvičení budeme chtít zařídit, abychom seznam ingrediencí dokázali zobrazit podle dat uložených v poli.

1. Uvnitř hlavního `index.js` si vytvořte následujicí globální proměnnou.

   ```js
   const layers = [
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
   ];
   ```

1. Použijte cyklus `for` nebo `forEach`, projděte seznam ingrediencí položku po položce a pomocí komponenty `Layer` je zobrazte každou ingredienci na stránce.
1. Jakmile je váš kód funkční, udělejte commit s profesionálně napsanou zprávou a pushněte váš kód do vzdáleného repozitáře.
