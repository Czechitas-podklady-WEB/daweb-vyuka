---
title: Hod mincí
demand: 2
context: lekce
lead: Oživte virtuální minci.
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-hod-minci](https://github.com/Czechitas-podklady-WEB/cviceni-hod-minci). Repozitář obsahuje stránku s nedokončenou simulací hodu mince. Vaším úkolem bude mincí „hodit“.

1. V souboru `index.js` si do proměnné `padlOrel` uložte hodnotu `true` nebo `false` na základě náhodné hodnoty z funkce `Math.random()`. Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou `0.5`.

   ```js
   const padlOrel = Math.random() < 0.5;
   ```

1. Pomocí `document.querySelector` vyberte ze stránky prvek `.vysledek` a nahraďte jeho obsah textem `Padl orel` nebo `Padla panna` na základě náhodné hodnoty z předchozího kroku.

   ```js
   if (padlOrel) {
     // Nahraďte text pro orla
   } else {
     // Nahraďte text pro pannu
   }
   ```

1. Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění.
1. Kromě změny textu ještě přidejte prvku `.mince` druhou třídu `mince--orel` nebo `mince--panna` opět podle hodnoty v proměnné `padlOrel`.
1. Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním.

::fig[ukázka výsledku]{src=assets/hod.gif}

:::solution

Náhled výsledku: [czechitas-podklady.cz/cviceni-hod-minci/](https://czechitas-podklady.cz/cviceni-hod-minci/)

```js
const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  vysledek.textContent = 'Padl orel';
  mince.classList.add('mince--orel');
} else {
  vysledek.textContent = 'Padla panna';
  mince.classList.add('mince--panna');
}
```

:::
