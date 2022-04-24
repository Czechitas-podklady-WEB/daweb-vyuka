---
title: React žárovka
demand: 2
---

Vzpomeňte si na naše cvičení z vanilla JavaScriptu, kdy jsme rozsvěcovali a zhasínali žárovku. Zkusíme naši žárovku zprovoznit v Reactu.

1. Založte si nový React projekt.
1. Ve vašem React projektu vytvořte v samostatné složce komponentu `Bulb`. Zařiďte, aby vytvořila jeden `div` s třídou `bulb`.
1. Stáhněte si připravené [styly a obrázky](assets/zarovka-zadani.zip) pro rozsvícenou i zhasnutou žárovku.
1. Styly a obrázky týkající se žárovky vložte do složky `Bulb`. Styly týkající se stránky samotné vložte to hlavního souboru `style.css`.
1. Použijte komponentu `Bulb` a zobrazte na stránce žárovku.
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
