---
title: Zprovoznění API
lead: Zprovozněte API backend a zobrazte nápoje na stránce.
demand: 3
context: lekce
---

V tomto cvičení konečně zobrazíme celou nabídku nápojů, které si stáhneme z API.

1. Nejdříve si naklonujte repozitář [cafelora-api](https://github.com/Czechitas-podklady-WEB/cafelora-api), kde najdete připravená data pro `apidroid`. Otevřete si repozitář v novém okně VS Code a spusťte `npx apidroid@latest` (pozor na přidanou část `@latest` – to zajistí, aby se použila nejnovější verze `apidroid`, která je pro API Café Lóra potřeba).
1. Prohlédněte si data, která vrací endpoint `/api/drinks`.
1. Upravte hlavní stránku tak, aby stahovala seznam nápojů z API, zatím stačí do proměnné, kterou vypíšete do konzole.
1. Komponentu `Menu` upravte tak, aby přijímala _prop_ s názvem `drinks`. Skrz ni komponentě předejte stažený seznam nápojů a zobrazte uvnitř prvku `drinks-list` za využití komponenty `Drink`.
1. Díky datům z API můžeme komponentě `Drink` předat reálná data a zprovoznit tak obrázky a ingredience. Adresu obrázku z API předáte přes prop `image`. Nezapomeňte, že z API vám přijde pouze relativní cesta souboru, např. `/assets/cups/romano.png`, které musí předcházet url adresa, kde běží váš backend server, např. `http://localhost:4000`. Pomocí interpolace řetězců složte správně url adresu obrázku a použijte uvnitř `src`.
1. Ingredience zobrazíte za využití prop `layers` a komponenty `Layer`, která už také získá opravdová data.
1. Stránka by nyní měla zobrazovat všechny nápoje s obrázky i ingrediencemi. Commitněte se srozumitelnou zprávou a pushněte do vzdáleného repozitáře.
