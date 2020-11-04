---
title: React žárovka
demand: 2
---

Vzpomeňte si na naše cvičení s vanilla JavaScirptu, kdy jsme rozsvěcovali a zhasínali žárovku. Zkusíme naši žárovku zprovoznit v Reactu.

1. Založte si React projekt dle šablony z předchozí lekce.
1. Stáhněte si [zadani](assets/zarovka-zadani.zip) obsahující připravené styly pro rozsvícenou i zhasnutou žárovku.
1. Ve vašem React projektu vytvořte komponentu `Bulb` a nastylujte ji podle vzoru ze zadání.
1. Chceme zařídit, že pokud komponentu použijeme takto

   ```js
   <Bulb on={false} />
   ```

   zobrazí se zhasnutá žárovka. Pokud ji naopak použijeme takto

   ```js
   <Bulb on={true} />
   ```

   nebo prostě takto

   ```js
   <Bulb on />
   ```

   žárovka se zobrazí rozsvícená. Kýženého chování dosáhnete tak, že sestavíte obsah atributu `className` pomocí podmíněného operátoru z závislosti na hodnotě v prop `on`.

1. Vložte na vaši stránku dvě zhasnuté a dvě rozsvícené žárovky.
