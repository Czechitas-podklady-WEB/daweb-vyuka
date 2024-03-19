---
title: Lokální čas
demand: 3
context: cvdoma
---

Stáhněte si [základ aplikace](assets/svetovy-cas-zadani.zip) zobrazující datum a čas v růnzých časových zónách.

1. Vytvořte komponentu `Time`, která očekává `props` v tomto formátu:
   ```js
   {
     zone: 'Europe/London',
     datetime: '2020-10-22T07:17:07.139635+01:00'
   }
   ```
1. Při stisknutí tlačítka `#btn-show` použijte komponentu `Time` a zobrazte uvnitř elementu `main` data uvedená v předchozím kroku. Rozbalovací nabídku na stránce zatím ještě ignorujte.
1. Upravte událost tlačítka tak, aby se na stránce zobrazil název časové zóny, kterou uživatel vybere z rozbalovací nabídky. Zobrazený čas zatím nechte stejný, vyřešíme jej v dalším kroku.
1. K získání skutečného času použijeme veřejné API na adrese https://worldtimeapi.org. Čas pro časovou zónu `Europe/London` získáte na adrese
   ```
   https://worldtimeapi.org/api/timezone/Europe/London
   ```
   Nejdříve si tuto adresu otevřete v prohlížeči a seznamte se s formátem dat, který tento endpoint vrací.
1. Při kliknutí na tlačítko nejdříve získejte časovou zónu, kterou uživatel vybral z nabídky. Sestavte podle této hodnoty správnou URL. S výslednou URL zavolejte funkci `fetch` a získejte data o časové zǒně. Ve funkci, která zpracovává získaná data, zavolejte komponentu `Time` a zobrazte získaný čas na stránce.
