---
title: Výplata jako stránka
demand: 2
---

1. Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
1. Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.

---solution

```js
const hodinovaSazba = Number(prompt("Jaka je vasa hodinova sazba?"));
const pocetHodin = Number(prompt("Kolko hodin denne pracujete?"));
const pocetDni = Number(prompt("Kolko dni mesacne pracujete?"));
​
document.body.innerHTML += "<p>" + (hodinovaSazba*pocetHodin*pocetDni) + "</p>";
```
