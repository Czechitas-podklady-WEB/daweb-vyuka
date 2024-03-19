---
title: Úkolníček
demand: 3
context: nadoma
---

Vaším úkolem bude vytvořit dle zadání jednoduchou aplikaci zobrazující seznam úkolů.

1. Vytvořte si repozitář ze šablony [cviceni-ukolnicek](https://github.com/Czechitas-podklady-WEB/cviceni-ukolnicek).
1. Seznamte se se strukturou projektu. Především si prohlédněte strukturu HTML.
1. Prohledněte si data, která vrací [API pro úkoly](https://apps.kodim.cz/daweb/trening-api/docs/ukoly-api).
1. V hlavním souboru `index.js` vytvořte komponentu `Task`, která bude představovat jeden úkol. Komponenta bude jako svoje `props` očekávat objekt s jedním úkolem.
1. Vytvořte funkci `renderTasks`, která obdrží seznam úkolů a zobrazí je na stránce pomocí komponenty `Task`.
1. Stáhněte si z API seznam úkolů a pomocí `renderTasks` je zobrazte na stránce.
1. Seznamte se s tím, jak API filtruje úkoly podle toho, zda jsou splněné či nikoliv.
1. Zařiďte, že při zaškrtnutí přepínače _Pouze nesplněné_ se zobrazí pouze nesplněné úkoly. Bude potřeba ve správnou chvíli znovu zavolat funkci `fetch` a poté `renderTasks` s novými daty.
1. Pokud uživatel odškrtne přepínač, měly by se zobrazit opět všechny úkoly.
