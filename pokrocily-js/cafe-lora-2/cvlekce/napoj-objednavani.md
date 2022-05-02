---
title: Dynamická komponenta nápoje
demand: 3
---

1. Zprovozněte tlačítko pro objednávání tak, aby veškerý kód byl součástí komponenty `Drink`. Využijte zakomentovaný kód z hlavního `index.js`, který přesunete do komponenty `Drink` a upravíte.
1. V tomto případě se budeme muset zbavit globální proměnné `ordered`. Ke stejnému účelu však můžeme využít vlastnost `ordered`, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.
1. Vlastnost `ordered` budeme v komponentě měnit. Proměnná ordered tedy nemůže být deklarována pomocí `const` ale pomocí `let`. Pokud vlastnosti získáváte z `props` pomocí destructuringu a deklarujete je jako `const`, vyčleňte `ordered` zvlášť a použijte `let`.

   ```js
   const { id, name, image, layers } = props;
   let { ordered } = props;
   ```

1. Vyzkoušejte si na stránce, že objednávání funguje.
1. Jakmile váš kód správně funguje, commitněte jej se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
