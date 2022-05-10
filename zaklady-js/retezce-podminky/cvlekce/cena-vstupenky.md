---
title: Cena vstupenky
demand: 2
---

Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla. Založte si webovou stránku s JavaScriptem. Nechte uživatele zadat svůj věk. Vytvořte si proměnnou :var[plnaCena], do které uložte hodnotu 12. Vytvořte podmínku, která do proměnné :var[cena] uloží cenu spočítanou podle věku uživatele dle následujících pravidel

- 0 euro pro návštěvníky mladší 6 let,
- 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
- 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
- 50 % ze základní ceny pro ostatní (senior).

Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých centech.

Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.

---solution

```js
const plnaCena = 12;
let cena = '';
const age = Number(prompt('Zadejte svůj věk: '));
if (age < 6) {
  cena = 0;
} else if (age >= 6 && age <= 26) {
  cena = plnaCena * 0.65;
} else if (age >= 27 && age <= 64) {
  cena = plnaCena;
} else {
  cena = plnaCena * 0.5;
}
cena = Math.ceil(cena);
document.body.innerHTML = 'Cena lístku je ' + cena + ' Eur.';
```
