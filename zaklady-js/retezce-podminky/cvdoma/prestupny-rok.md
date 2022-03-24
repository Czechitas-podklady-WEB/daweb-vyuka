---
title: Přestupný rok
demand: 3
offerSolution: true
---

:::assign
Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný čtyřmi. Roky, které jsou dělitelné 100 jsou ovšem přestupné pouze tehdy, jsou-li zároveň dělitelné 400.
:::

:::solution
```js
const rok = Number(prompt("Zadej kalendářní rok:"));
if (rok % 4 === 0) {
  if (rok % 100 === 0) {
    if (rok % 400 === 0) {
      document.body.innerHTML = `<p>${rok} je přestupný</p>`;
    } else {
      document.body.innerHTML = `<p>${rok} není přestupný</p>`;
    }
  } else {
    document.body.innerHTML = `<p>${rok} je přestupný</p>`;
  }
} else {
  document.body.innerHTML = `<p>${rok} není přestupný</p>`;
}
```
:::