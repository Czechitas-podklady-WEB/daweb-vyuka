---
title: Filtrování seznanu
lead: Přidejte do vzoru zobrazení seznamu možnost filtrování.
demand: 3
solutionAccess: lock
---

Vezměte vzor _Zobrazení seznamu_ ze vzorového repozitáře a rozšířte jej o možnost filtrování podle předem daných kritérií.

1.  Vyjděte z repozitáře [ukazka-vzory](https://github.com/Czechitas-podklady-WEB/ukazka-vzory), který už máte naklonovaný z roběhaný.
1.  Všimněte si, že API umožňuje provádět filtrování nad kolekcemi. Můžete si v prohlížeči vyzkoušet tato volání:

    - `/api/items?filter=nutrients.fiber.value:gt:2` - všechny položky s množstvím vlákniny větším než 2 g na 100 g,
    - `/api/items?filter=nutrients.proteins.value:gt:1.5` - všechny položky s množstvím bílkovin větším než 1.5 g na 100 g,
    - `/api/items?filter=nutrients.fats.value:lt:1.3` - všechny položky s množstvím tuků menším než 1.3 g na 100 g.

1.  Rozmyslete si, jak do zobrazení seznamu přidat roletku `<select>` se všemi třemi výše popsanými možnostmi. Po výběru jedné z možností by se seznam položek měl zobrazit filtrovaný. Dříve, než začnete programovat, rozmyslete si všechno následující:

    1. Budete potřebovat nějaké nové stavy? Pokud ano, jaké a v jakých komponentách? Zaneste je do diagramu komponent.
    1. Použijete nějakou techniku, kterou jsme se učili? Například jednoduchá komunikace dítě rodič, pokročilá komunikace dítě rodič, obousměrný data binding…?
    1. Bude nějak potřeba upravit `useEffect` stahující data? Pokud ano, jak?
