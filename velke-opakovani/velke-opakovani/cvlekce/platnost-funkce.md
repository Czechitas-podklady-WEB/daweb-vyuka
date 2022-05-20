---
title: Platnost jako funkce
demand: 2
---

Využijte kód z předchozího příkladu a vytvořte funkci s názvem `checkBirthID`, která zkontroluje platnost rodného čísla. Funkce bude mít jeden parametr, ve kterém bude očekávat rodné číslo jako řetězec. Funkce bude vracet řetězec s výsledkem kontroly podle následujících pravidel:

- `'invalidLength'` v případě, že vstup nemá 10 znaků,
- `'notANumber'` v případě, že vstup není číslo,
- `'failedChecksum'` v případě, že číslo není dělitalné 11,
- `'ok'` v případě, že číslo prošlo kontrolou.
