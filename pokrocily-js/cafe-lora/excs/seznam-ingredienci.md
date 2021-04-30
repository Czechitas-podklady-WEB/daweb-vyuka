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

1. V současné chvíli používáme komponentu `Layer` tak, že třikrát opakujeme skoro stejný kód. Zobrazte nyní jednotlivé ingredience pomocí komponenty `Layer` tak, že použijte cyklus `for` nebo `forEach` a jako props použijete položky pole `layers`.
1. Jakmile je váš kód funkční, udělejte commit s profesionálně napsanou zprávou a pushněte váš kód do vzdáleného repozitáře.
