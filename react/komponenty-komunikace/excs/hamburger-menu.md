---
title: Hamburger menu
demand: 2
---

1. Naklonujte si [repozitář](https://github.com/podlomar/daweb-react-hamburger) obsahující React stránku s jednoduchým hamburger menu. Prohlédněte si připravený kód.
1. Vytvořte stav `menuOpened`, který bude obsahovat hodnotu `true` nebo `false` podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko `.menu__btn`.
1. Dle hodnoty ve stavu `menuOpened` správně sestavte třídu pro element `.menu`. K zavření menu slouží CSS třída `menu--closed`.
1. Nyní budeme chtít zařídit, aby se hamburger menu zavřelo po kliknutí na libovolný odkaz. Uvnitř komponenty `App` tedy vytvořte callback funkci `handleSelectItem`, která změní hodnotu stavu `menuOpened` na `false`.
1. Chceme, aby komponenta `MenuItem` přijímala prop s názvem `onSelect`. Ta bude očekávat callback, který se zavolá, když uživatel vybere danou položku. Předejte tedy callback `handleSelectItem` všem komponentám `MenuItem` jako prop s názvem `onSelect`.
1. Uvnitř komponenty `MenuItem` zajistěte, aby se předaný callback zavolal při kliknutí na položku odkazu.
