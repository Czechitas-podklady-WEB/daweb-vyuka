---
title: Stažení nápojů z API
demand: 3
---

Konečně zobrazíme celou nabídku nápojů, které si stáhneme z API.

1. Nejdříve si prohlédněte [dokumentaci k API](https://cafelora.kodim.app/apidoc/) a seznamte se s jednotlivými endpointy a s nutností autentizace.
1. Upravte komponentu `Menu` tak, aby stahovala nápoje z API. K tomu je potřeba přidat _prop_ s názvem `drinks`, která na začátku bude `undefined`. V takovém případě stáhneme data z API, zavoláme komponentu znova a načtená data pošleme do _prop_ `drinks`. Pokud _prop_ `drinks` není `undefined`, znamená to, že nám přišla data. Zobrazte nápoje uvnitř prvku `drinks-list`.
1. Vyzkoušejte, že vaše stránka zobrazuje všechny nápoje. Commitněte se srozumitelnou zprávou a pushněte do vzdáleného repozitáře.
