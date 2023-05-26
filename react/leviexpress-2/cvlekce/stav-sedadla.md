---
title: Stav pro výběr sedadla
demand: 4
---

V předchozí verzi projektu jsme sedadlo pro rezervaci získali z hodnoty `autoSeat` stavu `journey` v komponentě `Home`. Nyní však sedadlo bude vybírat uživatel. Potřebujeme tedy nový stav v komponentě `Home`. Zde si užijeme hodně komunikace od potomka k předkovi.

1. V komponentě `Home` vytvořte nový stav s názvem `userSeat`. Jeho hodnota bude na začátku `null`.
1. Hodnotu ze stavu `userSeat` pošlete do prop `selectedSeat` komponenty `SeatPicker`.
1. Do komponenty `Seat` přidejte prop `onSelect`. V této prop bude funkce, kterou `Seat` zavolá, když uživatel vybere sedadlo. Jako parametr této funkci předejte číslo sedadla.
1. Nyní chceme být schopní změnit stav `userSeat` při kliknutí na komponentu `Seat`, která je ovšem zanořena v hlubinách komponenty `SeatPicker`. Mezi komponentami `Seat` a `Home` je vztah potomek - pra-prarodič. Komunikace mezi nimi tedy musí probíhat skrze komponenty `SeatRow` a `SeatPicker`.
1. Obě komponenty `SeatPicker` i `SeatRow` musí mít proto prop `onSeatSelected`. Komponenta `SeatRow` tuto funkci předá všem svým `Seat` jako prop `onSelect`. Komponenta `SeatPicker` funkci `onSeatSelected` předá dolů komponentě `SeatRow` skrze stejnojmennou prop. Takto můžeme z prarodiče `SeatPicker` propašovat funkci do vnuka `Seat`.
1. Nyní stačí komponentě `SeatPicker` skrze prop `onSeatSelected` předat funkci `setUserSeat`, která nastaví stav v komponentě `Home`. Pokud se povedlo vše správně propojit, při kliknutí na sedadlo se změní stav `userSeat` v komponentě `Home` a plánek zobrazí vybrané sedadlo. Vyzkoušejte v prohlížeči, že vše správně funguje.
1. Pokud jste došli až sem, váš projekt je téměř hotový. Stačí už je v obsluze tlačítka pro rezervaci místo `autoSeat` použít stavu `userSeat`.
1. Pokud se vše povedlo, váš projekt LeviExpress je hotový. Umožní uživateli vybrat, odkud kam chce jet, datum cesty i sedadlo, a rezervovat si jízdenku. Commitněte změny a kochejte se fungující aplikací.
