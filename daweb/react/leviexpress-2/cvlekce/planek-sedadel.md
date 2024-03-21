---
title: Zobrazení sedadla
lead: Vytvoříme komponentu zobrazující plánek autobusu se sedadly.
demand: 2
context: lekce
solutionAccess: protected
---

V tomto cvičení vytvoříme komponentu zobrazující plánek autobusu se sedadly. Obsazená sedadla budou zobrazena šedě a nepůjde na ně kliknout. API vrací seznam sedadel po řadách – nemusíte tedy řešit rozmístění sedadel. Zobrazíte jednoduše každou řadu zvlášť a v ní sedadla zleva doprava.

1. Smažte z projektu komponentu `SelectedSeat`. V této verzi projektu už ji nebudeme potřebovat. Sedadlo vybereme z plánku.
1. Vytvořte komponentu `SeatPicker` a přidejte styly pro třídy `seat-picker` a `seats` ze zadání projektu. Do komponenty `SeatPicker` zkopírujte ze zadání celý `div` s třídami `seat-picker` a `container`. Obsah `div`u `seats` nechte však prázdný.
1. Přidejte komponentu `SeatPicker` do komponenty `HomePage` tam, kde před tím byla komponenta `SelectedSeat`. Bude tak umístěna pod `JourneyDetail`. Komponentu budeme chtít zobrazit jen v případě, kdy stav `journey` neobsahuje `null`. Pro vývoj komponenty ale nyní bude rychlejší, když se prozatím bude zobrazovat stále.
1. Dále v projektu vytvořte komponentu `Seat` představující jedno sedadlo v autobusu. Sedadlo je vytvořeno pomocí SVG, které najdete v zadání projektu. Do komponenty `Seat` přidejte všechny styly týkající se jednoho sedadla.
1. Komponenta `Seat` bude mít zatím jednu prop s názvem `number`, ve které bude číslo sedadla.
1. Zkusmo vložte do komponenty `SeatPicker` pár sedadel s různými čísly, například 1, 17 a 33. Zatím jen tak pod sebe, abychom si vyzkoušeli, že je vůbec dokážeme správně zobrazit.
1. Zkontrolujte v prohlížeči, že se zobrazuje nadpis „Vyberte sedadlo“ a pod ním tři modrá sedadla 1, 17 a 33.
