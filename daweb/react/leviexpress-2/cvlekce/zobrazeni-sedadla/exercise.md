---
title: Zobrazení vybraného sedadla
lead: Zobrazte vybrané sedadlo na plánku autobusu.
demand: 3
context: lekce
solutionAccess: protected
---

Když už dokážeme zobrazit plánek autobusu, je na čase zobrazit uživatelem vybrané sedadlo. Zde bude potřeba hodně komunikace směrem od rodiče k dítěti (tím myslíme komponenty, nikoli „nemůžeš sedět u okénka, tam už sedí pán“).

::fig[náhled]{src=assets/nahled.png}

1. Nejprve musíme upravit komponentu `Seat` tak, aby správně zobrazovala sedadlo, pokud je vybrané. Přidáme jí tedy novou _prop_ `isSelected`. Pokud je sedadlo vybrané (prop `isSelected` je nastavena na `true`), bude mít sedadlo nastavenu vedle `seat` také třídu `seat--selected`.
1. V komponentě `SeatRow` budeme nyní potřebovat _prop_ `rowSelectedSeat`, do které vložíme číslo vybraného sedadla. Pro otestování si můžete nejprve v komponentě vytvořit konstantu `rowSelectedSeat` s testovacím číslem sedadla, a teprve až se bude vybrané sedadlo správně zobrazovat, předělejte konstantu na _prop_. Zobrazení vybraného sedadla zařídíme tak, že na komponentách `Seat` uvnitř `SeatRow` nastavíme atribut `isSelected`. Jeho hodnotu (`true`/`false`) nastavujte v závislosti na tom, zda číslo sedadla je shodné s číslem v `rowSelectedSeat`.
1. Komponenta `SeatRow` dostane číslo vybraného sedadla skrze _prop_ `rowSelectedSeat` od rodiče `SeatPicker`. Do komponenty `SeatPicker` tedy přidejte _prop_ s názvem `selectedSeat`. Hodnotu v této `prop` pak předejte komponentám `SeatRow` jako `rowSelectedSeat`.
1. Nyní si v prohlížeči vyzkoušejte, že pomocí ruční změny atributu `selectedSeat` komponenty `SeatPicker` můžete nastavit libovolné sedadlo jako vybrané.
1. Nyní můžete jako vybrané nastavit to sedadlo, které přišlo v hodnotě `autoSeat` z backendu. Uživatel vidí automaticky vybrané sedadlo přímo na plánku autobusu.
1. Pročistěte kód od všech pomocných výpisů a nepotřebných komentářů.
1. Commitněte změny.
