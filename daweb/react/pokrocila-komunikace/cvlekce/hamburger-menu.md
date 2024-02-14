---
title: Hamburger menu
lead: Vytvořte hamburger menu, které se otevírá a zavírá.
demand: 3
solutionAccess: protected
---

Pomocí pokročilejší komunikace mezi komponentami zprovozníme hamburger menu, které se otevírá a zavírá při kliknutí na položku.

1. Vytvořte si repozitář ze šablony [cviceni-hamburger](https://github.com/Czechitas-podklady-WEB/cviceni-hamburger) obsahující React stránku s jednoduchým hamburger menu. Prohlédněte si připravený kód.
1. V komponentě `HomePage` vytvořte stav `menuOpened`, který bude obsahovat hodnotu `true` nebo `false` podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko `.menu__btn`.
1. Dle hodnoty ve stavu `menuOpened` správně sestavte třídu pro element `.menu`. K zavření menu slouží CSS třída `menu--closed`.
1. Chceme, aby komponenta `MenuItem` přijímala prop s názvem `onSelect`. Ta bude očekávat callback, který se zavolá, když uživatel vybere danou položku, aby se tak menu zavřelo. Přidejte tedy na prvek `<a>` posluchač události `onClick`, který zavolá předaný callback.
1. V komponentě `HomePage` předejte všem instancím komponenty `MenuItem` skrze _prop_ `onSelect` funkci `handleSelectItem`, která nastaví stav `menuOpened` na `false`.
