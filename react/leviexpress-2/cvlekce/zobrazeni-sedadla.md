---
title: Zobrazení vybraného sedadlo
demand: 3
---

Když už dokážeme zobrazit plánek autobusu, je na čase zobrazit vybrané sedadlo. Zde bude potřeba hodně komunikace směrem od rodiče k dítěti.

1. Nejprve musíme upravit komponenta `Seat` tak, aby správně zobrazovala vybrané sedadlo. Přidáme jí tedy novou prop: `isSelected`. Pokud je sedadlo vybrané (prop `isSelected` je nastavena na `true`), bude mít sedadlo nastavenu vedle `seat` také třídu `seat--selected`.
1. V komponentě `SeatRow` budeme nyní potřebovat prop `rowSelectedSeat`, do které vložíme číslo vybraného sedadla. Na komponentách `Seat` uvnitř `SeatRow` pak změníme atribut `isSelected`. Místo statické hodnoty `true` nebo `false` nastavujte jeho hodnotu v závislosti na tom, zda číslo sedadla je shodné s číslem v prop `rowSelectedSeat`.
1. Odkud však má komponenta `SeatRow` vzít číslo vybraného sedadla? Získá jej od rodiče `SeatPicker`. Do komponenty `SeatPicker` tedy přidejte prop s názvem `selectedSeat`. Hodnotu v této `prop` pak předejte komponentám `SeatRow` jako `rowSelectedSeat`.
1. Nyní si v prohlížeči vyzkoušejte, že pomocí prop `selectedSeat` komponenty `SeatPicker` můžete nastavit libovolné sedadlo jako vybrané.
1. Zkuste nyní jako vybrané nastavit sedadlo, které přišlo v hodnotě `autoSeat` z backendu.
1. Commitněte změny.

Nyní jsme ve stavu, kdy uživatel vidí automaticky vybrané sedadlo přímo na plánku autobusu.
