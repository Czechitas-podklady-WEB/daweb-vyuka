---
title: Letenky
demand: 2
---

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/letenky-zadani) se stránkou, která se tváří, že zobrazuje výsledky vyhledávání letů. Vaším úkolem bude vytvořit komponentu zobrazující jeden let.

1. Spusťte si připravenou stránku a prohlédněte si strukturu HTML.
1. Přidejte do stránky hlavní soubor `index.js` a vytvořte v něm komponentu `Flight`. Ta bude na vstupu očekávat takovéto `props`:
   ```js
   {
     cityFrom: 'Praha',
     cityTo: 'Londýn',
     timeFrom: '3. srpna 2022, 13:30',
     timeTo: '3. srpna 2022, 14:00',
   }
   ```
   Komponenta nechť vytvoří HTML pro jeden podle dle vzoru, který najdete v `index.html`.
1. HTML kód pro výsledek letu ze stránky vyjměte a nechte v ní pouze element `app`.
1. Už známým postupem vložte pomocí komponenty `Flight` do stránky jeden vyhledaný let. Stránka by měla vypadat úplně stejně jako v původním projektu. 
