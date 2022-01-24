---
title: Hesla
demand: 2
---

Stáhněte si [JavaScriptový program](assets/hesla-zadani.zip), který obsahuje tři různé funkce na generování hesel. Každá funkce vygeneruje heslo zadané délky s určitou bezpečnostní silou. Kód funkcí zkoumat nemusíte, obsahuje věci, které jsme zatím neprobírali. Vyzkoušejte si však funkce zavolat z konzole a prohlédněte si, jaká hesla generují.

Napište funkci `createAccount`, která se bude tvářit, že zakládá nový uživatelský účet. Funkce bude mít dva parametry `user` a `pwdGen`. První bude uživatelské jméno a druhý bude funkce, pomocí které se má vygenerovat heslo pro tento účet. Funkce `createAccount` vrátí řetězec, který bude obsahovat jméno uživatele a heslo vygenerovaní voláním funkce `pwdGen` obdržené jaké druhý parametr. Funkci `pwdGen` předejte číslo 9 jako délku hesla. 

```
Založen nový uživatel honza s heslem 123456789
```

Vyzkoušejte v konzoli založit více různých účtů s různými typy hesel.
