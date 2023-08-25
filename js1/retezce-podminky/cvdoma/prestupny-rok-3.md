---
title: Přestupný rok 3
demand: 5
---

Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv.

1. Rozhodnutí v programu proveďte pouze pomocí jedné pomínky se dvěma větvemi. Nesmíte použít vnořené ani žádné další pomocné podmínky.
1. V celém programu smíte použít pouze dvě logické operace.

:::solution

**Řešení 1:**

```js
const rok = Number(prompt('Zadej kalendářní rok:'));

if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
  document.body.innerHTML = `<p>${rok} je přestupný rok</p>`;
} else {
  document.body.innerHTML = `<p>${rok} není přestupný rok</p>`;
}
```

**Řešení 2:**

```js
const rok = Number(prompt('Zadej kalendářní rok:'));

if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) {
  document.body.innerHTML = `<p>${rok} je přestupný rok</p>`;
} else {
  document.body.innerHTML = `<p>${rok} není přestupný rok</p>`;
}
```

:::
