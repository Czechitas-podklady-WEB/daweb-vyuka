---
title: Rodná čísla
demand: 3
context: lekce
access: claim
---

Napište program, který zjistí, jestli je zadané rodné číslo platné.
(Skutečná rodná čísla mají 9 nebo 10 číslic, my budeme uvažovat pouze rodná čísla mladších lidí, která mají 10 číslic.)
Postupujte dle následujících kroků.

1. Založte si projekt příkazem
   ```shell
   npm init kodim-app@latest cviceni-rodna-cisla html-css-js
   ```
   Ve VS Code otevřete složku `cviceni-rodna-cisla`.
1. Pomocí funkce `prompt` se zeptejte uživatele na rodné číslo. Rodné číslo zkontrolujte podle bodů popsaných níže.
1. Každé rodné číslo musí mít přesně 10 znaků. Zkontrolujte tedy, že zadaný řetězec je délky 10 a neprojdou nám například vstupy typu

   > nepovím

   Slovo „nepovím“ má totiž jen 7 znaků.

   > 123456789123456789

   Řetězec „123456789123456789“ má totiž 18 znaků.

   Pokud uživatel zadal číslo špatné délky, **vypište do stránky text**:

   > ❌ Uživatel zadal rodné číslo neplatné délky.

   V opačném případě vypište:

   > ✔️ Zadané rodné číslo má správně deset znaků.

1. Každé rodné číslo musí být celé číslo. Zda je nějaká hodnota celé číslo, v JavaScriptu zkontrolujete pomocí funkce `Number.isInteger`. Musíte však vstup předtím převést na číslo pomocí funkce `Number`.

   ```js
   Number.isInteger(Number('25')); // vrací true
   Number.isInteger(Number('25.16')); // vrací false
   Number.isInteger(Number('ahoj')); // vrací false
   ```

   Opět **vypište do stránky**, zda podmínka platí.

   > ✔️ Rodné číslo je celé číslo.
   >
   > ❌ Rodné číslo obsahuje nepovolené znaky.

1. Každé rodné číslo musí být dělitelné 11. Zkontrolujte tedy, že zadané číslo je dělitelné jedenácti, a výsledek opět **vypište do stránky**.

> ✔️ Rodné číslo je dělitelné 11.
>
> ❌ Rodné číslo není dělitelné číslem 11.

1. Pokud jsou všechny podmínky splněny, rodné číslo budeme považovat za platné. Informaci o platnosti **vypište do stránky**.

> ✔️ Zadané rodné číslo je platné.
>
> ❌ Uživatel zadal neplatné rodné číslo.

Po zadání rodného čísla by se na stránce měly objevit čtyři výpisy.

:::solution

### `index.js`

```js
const rodneCislo = prompt('Jaké je tvé rodné číslo?');
let platne = true;

if (rodneCislo.length === 10) {
  document.body.innerHTML += '✔️ Zadané rodné číslo má správně deset znaků.<br>';
} else {
  document.body.innerHTML += '❌ Uživatel zadal rodné číslo neplatné délky.<br>';
  platne = false;
}

if (Number.isInteger(Number(rodneCislo))) {
  document.body.innerHTML += '✔️ Rodné číslo je celé číslo.<br>';
} else {
  document.body.innerHTML += '❌ Rodné číslo obsahuje nepovolené znaky.<br>';
  platne = false;
}

if (Number(rodneCislo) % 11 === 0) {
  document.body.innerHTML += '✔️ Rodné číslo je dělitelné 11.<br>';
} else {
  document.body.innerHTML += '❌ Rodné číslo není dělitelné číslem 11.<br>';
  platne = false;
}

if (platne) {
  document.body.innerHTML += '✔️ Zadané rodné číslo je platné.<br>';
} else {
  document.body.innerHTML += ('❌ Uživatel zadal neplatné rodné číslo.<br>';
}
```

:::
