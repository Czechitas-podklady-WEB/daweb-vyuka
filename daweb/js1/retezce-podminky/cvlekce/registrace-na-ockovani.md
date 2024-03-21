---
title: Registrace na očkování
demand: 2
context: lekce
lead: Zkontrolujte, zda je uživatel starší 65 let a zda má silné heslo.
solutionAccess: protected
---

V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

1. Nejdříve nechte uživatele zadat všechny hodnoty, tedy **jméno**, **věk** i **heslo**. Uložte si je do dobře pojmenovaných proměnných.
1. Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
1. Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

:::solution

```js
const name = prompt('Zadejte své jméno:');
const age = Number(prompt('Zadejte svůj věk:'));
const heslo = prompt('Zadejte nové heslo:');

if (age >= 65) {
  document.body.innerHTML += '<p>Věk je v pořádku</p>.';
  if (heslo.length <= 8) {
    document.body.innerHTML += '<p>Slabé heslo</p>.';
  } else {
    document.body.innerHTML += '<p>Heslo je v pořádku</p>.';
  }
} else {
  document.body.innerHTML += '<p>Nízký věk</p>.';
}
```

:::
