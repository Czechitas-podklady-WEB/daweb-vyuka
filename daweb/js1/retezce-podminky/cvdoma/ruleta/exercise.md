---
title: Ruleta
demand: 2
lead: Napište program, který zjistí vlastnosti zadaného čísla na ruletě.
solutionAccess: lock
---

Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0–36. Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená. Nula není ani lichá ani sudá, ani černá ani červená.

::fig[Ruleta]{src=assets/roulette.png size=70}

Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.

:::solution

```js
const cislo = Number(prompt('Zadej číslo rulety od 0 do 36.'));
const cisloJeLiche = cislo % 2 === 1;

document.body.innerHTML += `<p>Zadáno: ${cislo}.</p>`;
if (cislo < 0 || cislo > 36) {
  document.body.innerHTML += `<p>Zadané číslo se nenachází na ruletě.</p>`;
} else if (cislo === 0) {
  document.body.innerHTML += `<p>Zadané číslo je nula.</p>`;
} else if ((cislo >= 1 && cislo <= 10) || (cislo >= 19 && cislo <= 28)) {
  if (cisloJeLiche) {
    document.body.innerHTML += `<p>Zadané číslo je liché a červené.</p>`;
  } else {
    document.body.innerHTML += `<p>Zadané číslo je sudé a černé.</p>`;
  }
} else {
  if (cisloJeLiche) {
    document.body.innerHTML += `<p>Zadané číslo je liché a černé.</p>`;
  } else {
    document.body.innerHTML += `<p>Zadané číslo je sudé a červené.</p>`;
  }
}
```

:::
