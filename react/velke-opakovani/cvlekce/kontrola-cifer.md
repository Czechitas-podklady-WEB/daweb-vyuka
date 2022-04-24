---
title: Kontrola cifer
demand: 2
---

V případě, že uživatel zadal do rodného čísla špatné znaky, budeme chtít tyto znaky vypsat a ukázat, kde se stala chyba. Pokračuje v kódu z předchozího příkladu.

1. Vytvořte pole `digits` obsahující všechny cifry `'0'` až `'9'` jako řetězce.
1. Napište funkci `isDigit`, která na vstup dostane řetězec a vrátí `true` pokud tento řetězec obsahuje právě jednu cifru. Použijte k tomu pole `digits` a metodu `includes` ([viz dokumentace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)). V opačném případě funkce vrátí `false`.
1. Když funkce `checkBirthID` vrátí `'notANumber'`, projděte uživatelem zadaný vstup pomocí cyklu `for` znak po znaku a vypište do konzole všechny znaky, které nejsou cifry. Použijte k tomu funkci `isDigit`.
