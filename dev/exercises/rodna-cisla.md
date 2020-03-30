---
title: Rodná čísla
demand: 3
---

Vytvořte webovou stránku, která ověří platnost rodného čísla a vypíše informace v čísle obsažené, tedy datum narození a zda ja osoba s tímto číslem žena nebo muž.

Rodné číslo každého člověka má následující formát RRMMDDXXXX, například 756114246.
První dvě cifry jsou poslední dvojčíslí roku narození, druhé dvě cifry jsou měsíc narození, třetí dvě cifry jsou den narození. Pokud je osoba žena, přičte se k číslu měsíce 50. Poslední čtveřice je číslo zvolené tak, aby rodné číslo bylo uníkátní. Celé rodné číslo navíc musí být dělitelné jedenácti aby se předešlo překlepům. 

Z příkladu výše vidíme, že naše osoba je žena narozená 14.11.1975. 

Pokud zadané číslo nesplňuje požadavky, vypište že na výstup, že číslo není platné. Pro jednoduchost předpokládejme, že uživatel na vstupu zadá skutečně pouze čísla, nikoliv třeba písmenka. 

1. Ověřte, že uživatel na vstup zadal skutečně řetězec délky 10. Pokud ne, vypište, že číslo není v platném formátu.
1. Převeďte řetězec na číslo a ověřte, že je dělitelné 11. Pokud ne, vypište, že číslo není v platném formátu.
1. Ověřte, že číslo měsíce je mezi 1 a 12. Nezapomeňte na přičítání 50 pro ženy.
1. Ověřte

Stage 4:
Check that the day number is between 1 and 31.

Stage 5:
The previous stage is actually incorrect. There is no 31th of June for example. Make sure, that the max number of days is

31 for January, March, May, July, August, October and December,
30 for April, June, September and November,
28 for February
Stage 6:
We are still not there yet. We forgot about leap years in which February can have 29 days. If we only consider last two digits of a year, we can simply check whether the the number is divisible by four. (The rules are more complicated for year in 4-digit format, but that is fortunatelly not our case.)

Update your function so that on leap years February is allowed to have 29 days.