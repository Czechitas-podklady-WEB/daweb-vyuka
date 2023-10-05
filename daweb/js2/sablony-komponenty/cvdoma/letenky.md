---
title: Letenky
demand: 2
lead: Vytvořte komponentu pro zobrazení jednoho letu.
solutionAccess: lock
---

Vytvořte si repozitář ze šablony [letenky-zadani](https://github.com/Czechitas-podklady-WEB/letenky-zadani) se stránkou, která se tváří, že zobrazuje výsledky vyhledávání letů. Vaším úkolem bude vytvořit dle tohoto vzoru komponentu `Flight`, která bude zobrazovat jeden let.

1. Spusťte si připravenou stránku a prohlédněte si strukturu HTML. Do tohoto repozitáře nebudeme nic vkládat, je to pouze ukázka.
1. Založte si úplně nový vanilla projekt pomocí již známoho postupu.
1. Vytvořte v projektu komponentu `Flight`. Ta bude na vstupu očekávat takovéto `props`:
   ```js
   {
     cityFrom: 'Praha',
     cityTo: 'Londýn',
     timeFrom: '3. srpna 2022, 13:30',
     timeTo: '3. srpna 2022, 14:00',
   }
   ```
   Komponenta nechť vytvoří HTML pro jeden podle dle vzoru, který najdete ve vzorovém projektu v `index.html`.
1. Ze vzorového projektu vykraďte CSS styly. Ty, které patří ke komponentě `Flight`, vložte do souboru `style.css` ve složce komponenty a správně je importujte. Styly pro celou stránku nechte v hlavním souboru `style.css`.
1. Už známým postupem vložte pomocí komponenty `Flight` do stránky jeden vyhledaný let. Stránka by měla vypadat úplně stejně jako v původním projektu.
