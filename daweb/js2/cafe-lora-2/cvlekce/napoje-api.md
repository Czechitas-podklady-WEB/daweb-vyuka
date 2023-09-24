---
title: Stažení nápojů z API
demand: 3
---

Konečně zobrazíme celou nabídku nápojů, které si stáhneme z API.

1. Nejdříve si prohlédněte [dokumentaci k API](https://cafelora.kodim.app/apidoc) a seznamte se s jednotlivými endpointy a s nutností autentizace.
1. Upravte komponentu `Menu` tak, aby stahovala nápoje z API. K tomu je potřeba přidat _prop_ s názvem `drinks`, které na začátku předáme hodnotu `'loading'` udávající, že je potřeba stáhnout data z API. Pokud _prop_ `drinks` není `'loading'`, znamená to, že nám přišla data. Zobrazte nápoje uvnitř prvku `drinks-list`.
1. Tlačítko pro zobrazení detailu objednávky, které je na konci menu, vkládejte do elementu menu (`section` s třídou `menu`) pomocí `append()`. Nepoužívejte `innerHTML +=` – v následujícím cvičení by se vám nepodařilo zprovoznit tlačítko pro objednávání.
1. Vyzkoušejte, že vaše stránka zobrazuje všechny nápoje. Commitněte se srozumitelnou zprávou a pushněte do vzdáleného repozitáře.
