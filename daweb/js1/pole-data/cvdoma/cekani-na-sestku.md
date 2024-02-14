---
title: Čekání na šestku
demand: 2
solutionAccess: protected
---

Založte JavaScriptový program a splňte následující úkoly.

1. Napište funkci `roll`, která simuluje hod kostkou. Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost.
1. Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. Vypište na výstup na kolikátý pokus šestka padla.
1. Spusťte váš program desetkrát za sebou a zaznamenejte výsledky. Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.

:::solution

```js
const roll = () => {
  return Math.ceil(Math.random() * 6);
};

let counter = 1;
let rolledNumber = roll();
while (rolledNumber !== 6) {
  console.log(`Hodilo se cislo ${rolledNumber}`);
  rolledNumber = roll();
  counter += 1;
}

console.log(`Šestka se hodila na ${counter}. pokus`);
```

:::
