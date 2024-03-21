---
title: Zprovoznění API
lead: Zprovozněte API backend a zobrazte nápoje na stránce.
demand: 3
context: lekce
---

V tomto cvičení konečně zobrazíme celou nabídku nápojů, které si stáhneme z API.

1. Nejdříve si naklonujte rezpotiář [cafelora-api](https://github.com/Czechitas-podklady-WEB/cafelora-api), kde najdete připravená data pro jsonhost. Otevřete si repozitář v novém okně VS Code a spusťte `npx jsonhost@latest` (pozor na přidanou část `@latest` – to zajistí, aby se použila nejnovější verze `jsonhost`, která je pro API Café Lóra potřeba).
1. Prohlédněte si data, která vrací endpoint `/api/drinks`.
1. Upravte hlavní stránku tak, aby stahovala seznam nápojů z API, zatím stačí do proměnné, kterou vypíšete do konzole.
1. Komponentě `Menu` přidejte _prop_ s názvem `drinks`, skrz kterou komponentě předáme stažený seznam nápojů. Zobrazte tento seznam uvnitř prvku `drinks-list`.
1. Vyzkoušejte, že vaše stránka zobrazuje všechny nápoje. Commitněte se srozumitelnou zprávou a pushněte do vzdáleného repozitáře.
