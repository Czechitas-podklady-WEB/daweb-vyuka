---
title: Výběř sedadla
demand: 3
---

Když už dokážeme zobrazit plánek autobusu, je na čase umožnit uživateli vybrat sedadlo.

1. Nejprve musíme upravit komponenta `Seat` tak, aby správně zobrazovala vybrané sedadlo. Přidáme jí tedy dvě nové prop: `isSelected` a `onSelect`. Pokud je sedadlo vybrané (prop `isSelected` je nastavena na `true`), bude mít sedadlo nastavenu vedle `seat` také třídu `seat--selected`.
1. Nastal čas pro zprovoznění komunikace mezi komponentou `SeatPicker` a `Seat`. Všimněte si, že je mezi nimi vztah vnuk - prarodič. Komponenta `Seat` očekává prop `onSelect`. V této prop bude funkce, kterou `Seat` zavolá, když uživatel vybere sedadlo. Jako parametr této funkci předejte číslo sedadla.
1. Vzhledem k tomu, že `Seat` není přímým dítětem komponenty `SeatPicker`, musí komunikace mezi nimi probíhat skrze koponentu `SeatRow`. Té proto přidáme prop `onSeatSelected`. Tuto funkci každá `SeatRow` předá všem svým `Seat` jako prop `onSelect`. Takto můžeme z prarodiče `SeatPicker` propašovat funkci do vnuka `Seat`.
1. Vraťte se do komponenty `SeatPicker` a vytvořte zde funkci `handleSeatSelect`. Tuto funkci předáme všem `SeatRow`, skrze které propadne až k jednolitvým sedadlům. Tato funkce dostane na vstupu číslo sedadla, které bylo vybrané. Zatím toto číslo vypište do konzole. Vyzkoušejte v prohlížeči, že při klikání na sedadlo se v konzoli zobrazí jeho číslo. Styl sedadla se zatím měnit nebude. Pokud jste došli až sem, nejtěžší máte za sebou.
1. V komponentě `SeatPicker` vytvořte pomocí `useState` stav `selectedSeatNumber`. V tomto stavu si budeme pamatovat číslo vybraného sedadla. Výchozí hodnota bude `null`. Ve funkci `handleSeatSelect` nastavujte tento stav na číslo sedadla, které uživatel vybral.
1. Nyní musíme hodnotu ze stavu `selectedSeatNumber` opět propašovat skrze `SeatRow` k jednotlivým sedadlům, abychom mohli vybrané sedadlo vysvítit. V `SeatRow` tedy budeme potřebovat prop `selectedSeatNumber`, do které vložíme hodnotu stavu. Na komponentách `Seat` pak změníme atribut `isSelected`. Místo statické hodnoty `true` nebo `false` nastavujte jeho hodnotu v závislosti na tom, zda číslo sedadla je shodné s číslem v prop `selectedSeatNumber`. Nyní si v prohlížeči vyzkoušejte, že při klikání na jednotlivá neobsazená sedadla se vypisuje číslo sedadla do konzole ale také se mění barva a velikost vybraného sedadla. Výpis do konzole pak můžete smazat.
1. Smažte různé pomocné výpisy do konzole, případně testovací sedadla, pokud v kódu zůstala, a změny commitněte.
