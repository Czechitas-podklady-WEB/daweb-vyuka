Každý program musí být schopen nějakým způsobem komunikovat s uživatelem - přijímat od něj informace a také informace zobrazovat. V této lekci se naučíme jednoduchý způsob, jak od uživatele získat nějaký vstup do našeho programu. Ukážeme si také, jak získané informace lépe strukturovat pomocí objektů. 

## Vstup a výstup

Zatím jsme viděli, jak může náš program provést jednoduchý výstup pomocí funkce `document.write` nebo `console.log`. Později uvidíme mnohem zajímavější způsoby jak uživateli něco na stránce zobrazit. Nyní ale potřebujeme od uživatele taky nějaký vstup získat. K tomu budeme pro tuto chvíli používat funkci `prompt`. Zkusme napsat program, který bude řešit naši ultramaratonskou úlohu z minulé lekce.

```js
'use strict';

const start = 15;
const delka = prompt('Zadej délku závodu:');
const konec = (start + delka) % 24;
document.write(konec);
```

Tento program vypadá velmi přímočaře. Zadáme-li mu však v dobré víře na vstup délku 10 dočkáme se odpovědi nesprávné odpovědi 22. Abychom odhalili, kde je zakopaný pes, musíme si povědět něco o konverzi hodnot.
