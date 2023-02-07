---
title: Registrace na očkování
demand: 2
---

V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

1. Nejdříve nechte uživatele zadat všechny hodnoty, tedy **jméno**, **věk** i **heslo**. Uložte si je do dobře pojmenovaných proměnných.
1. Napište **první podmínku**, ve které zkontrolujte, že **věk uživatele je větší nebo roven 65**. Pokud ano, vypište do stránky „**věk v pořádku**“. Pokud uživatel **nemá alespoň 65 let**, vypište „**nízký věk**“.
1. Napište **druhou podmínku**, která zkontroluje, zda je zadané **heslo delší než osm znaků**. Pokud není, vypište „**slabé heslo**“.

---solution

```js
const age = Number(prompt('Zadej svůj věk:'));
if (age >= 65) {
  const heslo = prompt('V pořádku. Teď zadej heslo:');
  if (heslo.length <= 8) {
    document.body.innerHTML = 'Slabé heslo.';
  } else {
    document.body.innerHTML = 'Heslo je v pořádku.';
  }
} else {
  document.body.innerHTML = 'Nízký věk.';
}
```
