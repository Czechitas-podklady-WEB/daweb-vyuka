---
title: Zobrazení sedadla
lead: Vytvoříme komponentu zobrazující plánek sedadel v autobusu.
demand: 2
context: lekce
solutionAccess: protected
---

V tomto cvičení vytvoříme komponentu zobrazující plánek sedadel v autobusu. Obsazená sedadla budou zobrazena šedě a nepůjde na ně kliknout. API vrací seznam sedadel po řadách – nemusíte tedy řešit rozmístění sedadel. Zobrazíte jednoduše každou řadu zvlášť a v ní sedadla zleva doprava v pořadí, jak přijdou.

1. Vytvořte komponentu `SeatPicker` a přidejte styly pro třídy `seat-picker` a `seats` ze zadání projektu. Do komponenty `SeatPicker` zkopírujte ze zadání celý `div` s třídami `seat-picker` a `container`. Obsah `div`u `seats` však nechte prázdný.
1. Přidejte komponentu `SeatPicker` do komponenty `HomePage`, místo komponenty `SelectedSeat`. Bude tak umístěna pod `JourneyDetail`. Komponentu budeme chtít do budoucna zobrazit jen v případě, kdy stav `journey` neobsahuje `null`. Pro vývoj komponenty ale bude rychlejší, když se prozatím bude zobrazovat stále.
1. Dále v projektu vytvořte komponentu `Seat` představující jedno sedadlo v autobusu. Sedadlo je vytvořeno pomocí SVG, které najdete v zadání projektu. Do komponenty `Seat` přidejte všechny styly týkající se jednoho sedadla.
1. Komponenta `Seat` bude mít zatím jednu _prop_ s názvem `number`, ve které bude číslo sedadla.
1. Zkusmo vložte do komponenty `SeatPicker` pár sedadel s různými čísly, například 1, 17 a 33. Zatím jen tak pod sebe, abychom si vyzkoušeli, že vůbec dokážeme sedadla správně zobrazit.
1. Zkontrolujte v prohlížeči, že se zobrazuje nadpis „Vyberte sedadlo“ a pod ním v minulém kroku zadaná modrá sedadla.
1. Zobrazení skutečného plánku dokončíme v dalších částech projektu. Nejdřív se však budeme muset rozloučit s komponentou `SelectedSeat`. V této verzi projektu už ji nebudeme potřebovat – sedadlo budeme vybírat z plánku a komponenta `SelectedSeat` se už nikde nepoužívá.
1. Smažte z projektu komponentu `SelectedSeat` (celý adresář, s JSX i se styly). Tato komponenta navždy zůstane v našich – projektech v historii Gitu.
1. (Mezi námi, komponenta `SeatPicker` stejně bude daleko lepší.)
1. Zamáčkněte slzu a commitněte změny.
