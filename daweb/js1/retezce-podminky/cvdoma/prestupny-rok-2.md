---
title: Přestupný rok 2
demand: 4
lead: Těžší zadání přestupného roku.
solutionAccess: allow
---

Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Rozhodnutí v programu proveďte pouze pomocí jedné podmínky se dvěma větvemi. Nesmíte použít vnořené ani žádné další pomocné podmínky.

:::solution

```js
const rok = Number(prompt('Zadej kalendářní rok:'));

if (
  (rok % 4 === 0 && rok % 100 !== 0) ||
  (rok % 4 === 0 && rok % 100 === 0 && rok % 400 === 0)
) {
  document.body.innerHTML += `<p>${rok} je přestupný rok</p>`;
} else {
  document.body.innerHTML += `<p>${rok} není přestupný rok</p>`;
}
```

:::
