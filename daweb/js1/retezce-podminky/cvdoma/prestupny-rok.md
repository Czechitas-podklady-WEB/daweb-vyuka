---
title: Přestupný rok
demand: 3
lead: Napište program, který pozná, který rok je přestupný.
solutionAccess: protected
---

Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný čtyřmi. Pozor však, že roky, které jsou dělitelné 100 jsou přestupné pouze tehdy, jsou-li zároveň dělitelné 400.

:::solution

**Řešení 1:**

Následujeme přesně zadání. Vzniknou tím však hodně zanořené podmínky a opakování stejného kódu.

```js
const year = Number(prompt('Zadej kalendářní rok:'));
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      document.body.innerHTML = `<p>${year} je přestupný</p>`;
    } else {
      document.body.innerHTML = `<p>${year} není přestupný</p>`;
    }
  } else {
    document.body.innerHTML = `<p>${year} je přestupný</p>`;
  }
} else {
  document.body.innerHTML = `<p>${year} není přestupný</p>`;
}
```

**Řešení 2:**

Zbavíme se jedné úrovně zanoření a opakování kódu.

```js
const year = Number(prompt('Zadej kalendářní rok:'));
let leap = 'není';

if (year % 100 === 0) {
  if (year % 400 === 0) {
    leap = 'je';
  }
} else if (year % 4 === 0) {
  leap = 'je';
}

document.body.innerHTML += `<p>${year} ${leap} přestupný</p>`;
```

:::
