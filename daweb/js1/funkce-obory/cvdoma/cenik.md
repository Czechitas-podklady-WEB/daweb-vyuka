---
title: Ceník
demand: 3
context: nadoma
lead: Vytvořte funkci pro výběr předplatného.
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-cenik](https://github.com/Czechitas-podklady-WEB/cviceni-cenik) se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

1. Přidejte to stránky soubor s JavaScriptem.
1. Napište funkci `selectPlan` s jedním parametrem `planNumber`. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu `plan--selected`.
1. Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
1. Opakovaným voláním funkce `selectPlan` lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci `selectPlan` tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu `plan--selected`.
1. Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán.
