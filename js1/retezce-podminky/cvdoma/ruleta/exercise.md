---
title: Ruleta
demand: 2
---

Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0–36. Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená. Nula není ani lichá ani sudá, ani černá ani červená.

::fig[Ruleta]{src=assets/roulette.png size=70}

Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.

---solution

```js
const cislo = prompt('Zadej číslo rulety od 0 do 36.');

if (Number(cislo) === 0) {
  document.body.innerHTML = `<p>Zadáno: ${cislo}. <br /> Zadané číslo je nula.</p>`;
} else if (Number(cislo) > 36) {
  document.body.innerHTML = `<p>Zadáno: ${cislo}. <br /> Zadané číslo se nenachází na ruletě.</p>`;
} else if (
  (Number(cislo) >= 1 && Number(cislo) <= 10) ||
  (Number(cislo) >= 19 && Number(cislo) <= 28)
) {
  if (Number(cislo) % 2 === 1) {
    document.body.innerHTML = `<p>Zadáno: ${cislo}. <br /> Zadané číslo je liché a červené.</p>`;
  } else {
    document.body.innerHTML = `<p>Zadáno: ${cislo}. <br /> Zadané číslo je sudé a černé.</p>`;
  }
} else {
  if (Number(cislo) % 2 === 1) {
    document.body.innerHTML = `<p>Zadáno: ${cislo}. <br /> Zadané číslo je liché a černé.</p>`;
  } else {
    document.body.innerHTML = `<p>Zadáno: ${cislo}. <br /> Zadané číslo je sudé a červené.</p>`;
  }
}
```
