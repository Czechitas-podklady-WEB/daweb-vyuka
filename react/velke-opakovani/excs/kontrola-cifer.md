---
title: Kontrola cifer
demand: 2
---

Pokračuje v kód předchozího příkladu.

1. Vytvořte pole `digits` obsahující všechny cifry `'0'` až `'9'` jako řetězce.
1. Napište funkci `isDigit`, která na vstup dostane řetězec a vrátí `true` pokud tento řetězec obsahuje právě jednu cifru. Použijte k tomu pole `digits` a metodu `includes` ([viz dokumentace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)). V opačném případě funkce vrátí `false`.
1. Jakmile uživatel zadá rodné číslo jako řetězec a máte ověřeno, že má skutečně délku 9, projděte tento řetězec pomocí cyklu `for` znak po znaku a vypište do konzole všechny znaky, které nejsou cifry. Použijte k tomu funkci `isDigit`.
