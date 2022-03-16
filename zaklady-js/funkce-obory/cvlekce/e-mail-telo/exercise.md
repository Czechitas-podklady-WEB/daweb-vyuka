---
title: E-mail, tělo
demand: 2
---

Pokračujte na stránce s přechozího příkladu. 

1. Do souboru `index.js` přidejte funkci `fillSubject` s jedním parametrem `subject`. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru. Zavolejte funkci z konzole a vykoušejte si nastavit předmět e-mailu na různé řetězce.
1. Napište funkci `fillBody` s jedním parametrem `body`, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru. Funkci vyzkoušejte v konzoli.
1. Z předchozího cvičeni nám zůstala funkce `goodbye`. Do funkce `fillBody` přidejte další parametr s názvem `name`. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo emailu a na konec přidá pozdrav, který vyrobí pomocí volání funkce `goodbye`.
