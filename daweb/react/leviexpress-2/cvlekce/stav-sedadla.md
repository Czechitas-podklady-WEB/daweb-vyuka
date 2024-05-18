---
title: Stav pro výběr sedadla
lead: Vytvořte stav pro výběr sedadla.
demand: 4
context: lekce
solutionAccess: protected
---

V předchozí verzi projektu jsme sedadlo pro rezervaci získali z hodnoty `autoSeat` stavu `journey` v komponentě `HomePage`. Nyní však sedadlo bude vybírat uživatel. Potřebujeme tedy nový stav v komponentě `HomePage`. Zde si užijeme hodně komunikace od potomka k rodiči (a nebude to „už tam budem?“) a malý _prop drilling_.

1. V komponentě `HomePage` vytvořte nový stav s názvem `userSeat`. Jeho hodnota bude na začátku `null`.
1. Na začátku budeme chtít, aby se uživateli nabídlo sedadlo, které server vybral automaticky. Ve funkci `handleJourneyChange` tak nastavte stav `userSeat` na hodnotu `autoSeat`, která přišla ze serveru při výběru cesty.
1. Hodnotu ze stavu `userSeat` pošlete do prop `selectedSeat` komponenty `SeatPicker`.
1. Nyní by se mělo při každém vyhledání spojení zobrazovat na plánku backendem navržené sedadlo. (To se dělo už v předchozím cvičení, ale je dobré zkontrolovat si, že jsme předchozími úpravami nic nerozbili.)
1. Do komponenty `Seat` přidejte _prop_ `onSelect`. V této _prop_ bude `Seat` očekávat callback, který se zavolá, když uživatel vybere sedadlo (klikne na něj). Jako parametr callbacku `onSelect` při volání předejte číslo sedadla.
1. Nyní chceme být schopní změnit stav `userSeat` při kliknutí na komponentu `Seat`, která je ovšem zanořena v hlubinách komponenty `SeatPicker`. Mezi komponentami `Seat` a `HomePage` je vztah potomek - pra-prarodič. Komunikace mezi nimi tedy musí probíhat skrze komponenty `SeatRow` a `SeatPicker`.
1. Obě komponenty `SeatPicker` i `SeatRow` musí mít proto _prop_ `onSeatSelected`. Komponenta `SeatRow` tuto funkci/callback předá všem svým `Seat` jako _prop_ `onSelect`. Komponenta `SeatPicker` funkci `onSeatSelected` předá dolů komponentě `SeatRow` skrze stejnojmennou _prop_. Takto můžeme z prarodiče `SeatPicker` propašovat funkci do vnuka `Seat`.
1. Nyní stačí komponentě `SeatPicker` skrze _prop_ `onSeatSelected` předat funkci `setUserSeat`, která nastaví stav v komponentě `HomePage`. Pokud se povedlo vše správně propojit, při kliknutí na sedadlo se změní stav `userSeat` v komponentě `HomePage` a plánek zobrazí vybrané sedadlo. Vyzkoušejte v prohlížeči, že vše správně funguje.
1. Pokud zkusíte kliknout na sedadlo, které už je obsazené, zjistíte, že i takové sedadlo jde vybrat. V komponentě `Seat`tedy ještě upravte zpracování události `click` tak, aby se callback `onSelect` zavolal jen v případě, že sedadlo ještě není obsazené.
1. Pokud jste došli až sem, váš projekt je téměř hotový. Stačí už je v obsluze tlačítka pro rezervaci místo `autoSeat` (funkce `handleBuy` v komponentě `HomePage`) použít stav `userSeat`.
1. Pročistěte kód od všech nepotřebných výpisů, zakomentovaných částí kódu a jiných pozůstatků vývoje.
1. Pokud se vše povedlo, váš projekt LeviExpress je hotový. Umožní uživateli vybrat, odkud kam chce jet, datum cesty i sedadlo, a rezervovat si jízdenku.
1. Commitněte změny, pushněte je na GitHub, kochejte se fungující aplikací a podívejte se, jestli náhodou RegioJet neshání junior frontend vývojářky.
