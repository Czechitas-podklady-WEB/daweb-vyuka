---
title: JSX žárovka
demand: 2
context: cvlekce
lead: Vytvořte komponentu pro zobrazování žárovky.
solutionAccess: protected
---

Vzpomeňte si na naše cvičení z vanilla JavaScriptu, kdy jsme rozsvěcovali a zhasínali žárovku. Zkusíme naši žárovku zprovoznit pomocí JSX. Styly a obrázky pro žárovku můžete v průběhu cvičení vykrádat z původního zadání v repozitáři [cviceni-zarovka](https://github.com/Czechitas-podklady-WEB/cviceni-zarovka).

1. Založte si nový React projekt pomocí
   ```shell
   npm init kodim-app@latest jsx-zarovka jsx
   ```
1. Ve vašem projektu vytvořte v samostatné složce komponentu `Bulb`. Zařiďte, aby vytvořila jeden `div` s třídou `bulb`.
1. Styly a obrázky týkající se žárovky vložte do složky `Bulb`. Styly týkající se stránky samotné vložte do hlavního souboru `global.css`.
1. Použijte komponentu `Bulb` a zobrazte žárovku na stránce.
1. Chceme zařídit, že pokud komponentu použijeme takto

   ```js
   <Bulb on={false} />
   ```

   zobrazí se zhasnutá žárovka. Pokud ji naopak použijeme takto

   ```js
   <Bulb on={true} />
   ```

   žárovka se zobrazí rozsvícená. Kýženého chování dosáhnete tak, že sestavíte obsah atributu `className` pomocí podmíněného operátoru v závislosti na hodnotě v prop `on`. Nezapomeňte, že třída `bulb` musí být na elementu žárovky přítomna vždy, rozsvícená žárovka bude mít navíc k třídě `bulb` ještě třídu `bulb--on` (názvy tříd vycházejí z metodiky BEM).

1. Vložte na vaši stránku dvě zhasnuté a dvě rozsvícené žárovky.
