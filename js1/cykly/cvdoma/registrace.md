---
title: Registrace
demand: 3
---

Stáhněte se [připravenou stránku](https://github.com/Czechitas-podklady-WEB/Cviceni-Registrace/archive/refs/heads/main.zip) s registračním formulářem pro nového uživatele. Doplňte do stránky JavaScriptový kód tak, aby byly splněny následující požadavky.

1. Pokud uživatel zadá uživatelské jméno, které je již obsaženo v poli `users`, vypište do prvku s třídou `reg-form__error` chybovou hlášku ve smyslu, že zadané uživatelské jméno je již zabráno.
1. Zkontrolujte, že heslo zadané do prvního políčka je dostatečně bezpečené. Heslo považujeme za bezpečné, pokud má alespoň 10 znaků nebo obsahuje alespoň jeden ze znaků pomlčka `-`, podtržítko `_` nebo dvojtečka `:`.

---solution

[index.js](https://github.com/Czechitas-podklady-WEB/Cviceni-Registrace/blob/reseni/index.js)
