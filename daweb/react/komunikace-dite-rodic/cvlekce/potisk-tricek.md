---
title: Potisk triček
lead: Vdechněte život aplikaci na potisk triček.
demand: 3
context: lekce
solutionAccess: protected
---

Pomocí Reactu, stavu a komunikace mezi komponentami rozchodíme aplikaci, kde si uživatel může objednat typ trička, jeho barvu a potisk.

1. Vytvořte si repozitář ze šablony [cviceni-tricka](https://github.com/Czechitas-podklady-WEB/cviceni-tricka), repozitář si poté naklonujte.
1. Pomocí `npm install` nainstalujte závislosti a spusťte vývojový server příkazem `npm run dev`.
1. Dobře si aplikaci prohlédněte. Vykoušejte si, jaké _props_ můžete zadat do komponenty `TShirt`, kromě barvy a textu potisku můžete také zvolit typ trička:
   - `normalShortSleeve`
   - `normalLongSleeve`
   - `tallLongSleeve`
   - `normalNoSleeve`
   - `tallNoSleeve`
     Zkuste si zadat různé _props_ a vyzkoušejte, co komponenta zobrazí.
1. Vaším úkolem bude zprovozni komunikaci od komponenty `TShirtSetup` ke komponentě `HomePage`, tedy komunikace od dítěte k rodiči. V `HomePage` budou potřeba tři stavy: jeden pro typ trička, jeden pro barvu a jeden pro potisk. Vytvořte tyto stavy a napojte je na komponentu `TShirt`, aby zobrazovala to, co je ve stavech.
1. V komponentě `TShirtSetup` vytvořte prop `onTypeChange`. Pomocí této funkce budeme měnit stav v rodiči. Použijte tuto prop k tomu, abyste do stavu pro typ trička poslali to, co uživatel vybere ve formuláři uvnitř `TShirtSetup`. Vyzkoušejte, že se stav opravdu mění a políčko pro výběr funguje.
1. Podobně propojte i další dva stavy. V komponentě `TShirtSetup` vytvořte prop `onColorChange` a `onPrintChange`. Použijte tyto props k tomu, abyste do stavu pro barvu a potisk poslali to, co uživatel vybere ve formuláři uvnitř `TShirtSetup`. Vyzkoušejte, že se stavy opravdu mění a políčka pro výběr fungují.

:::solution
Řešení je v repository cvičení v branchi [reseni](https://github.com/Czechitas-podklady-WEB/cviceni-tricka/tree/reseni).
:::