---
title: Registrace
demand: 3
context: nadoma
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-registrace](https://github.com/Czechitas-podklady-WEB/cviceni-registrace) s registračním formulářem pro nového uživatele. Doplňte do stránky JavaScriptový kód tak, aby byly splněny následující požadavky.

1. Pokud uživatel zadá uživatelské jméno, které je již obsaženo v poli `users`, vypište do prvku s třídou `reg-form__error` chybovou hlášku ve smyslu, že zadané uživatelské jméno je již zabráno.
1. Zkontrolujte, že heslo zadané do prvního políčka je dostatečně bezpečené. Heslo považujeme za bezpečné, pokud má alespoň 10 znaků nebo obsahuje alespoň jeden ze znaků pomlčka `-`, podtržítko `_` nebo dvojtečka `:`.

:::solution

[index.js](https://github.com/Czechitas-podklady-WEB/cviceni-registrace/blob/reseni/index.js)

:::
