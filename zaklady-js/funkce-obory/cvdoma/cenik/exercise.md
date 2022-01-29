---
title: Ceník
demand: 3
---

Stáhněte si [základ stránky](assets/cennik-zadani.zip), která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

1. Napište funkci `selectPlan` s jedním parametrem `planNumber`. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přídá k němu CSS třídu `plan--selected`. Vyzkoušejte vaši funkci v konzoli s různými čísly.
1. Opakovaným voláním funkce `selectPlan` lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci `selectPlan` tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z pčíslušného prvku odebrat třídu `plan--selected`.
