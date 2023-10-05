---
title: Datumy
demand: 2
lead: Zobrazte pomocí komponent několik datumů
solutionAccess: lock
---

1. Založte si nový projekt:
   ```shell
   npm init kodim-app@latest datumy vanilla
   ```
1. Projekt spusťte pomocí `npm run dev`, jak už to znáte z dřívejška.
1. Vytvořte komponentu `Today`, která bude očekávat tři props:

   - `day` - řetězec s číslem dne, například `'07'`,
   - `month` - řetězec s číslem měsíce, například `'12'`,
   - `year` - řetězec s číslem roku, například `'2020'`.

   Tato komponenta by měla zobrazit datum ve formátu 07.12.2020. Zabalte každou položku datumu do zvláštního `span` elementu a dejte každé vlastní CSS třídu, abychom mohli den, měsíc i rok nastylovat zvlášť.

1. Upravte komponentu `App` tak, aby na stránce zobrazila tři různé datumy pomocí `Today`.
1. Pro komponentu `Today` vytvořte soubor se styly a nastylujte číslo pro den tak, aby bylo zobrazeno tučně, a číslo pro rok tak, aby bylo zobrazeno o 20 % menším fontem.
