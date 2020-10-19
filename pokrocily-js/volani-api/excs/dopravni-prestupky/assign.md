---
title: Dopravní přestupky
demand: 2
---

Představte si, že je vaším úkolem sledovat křižovatku, na které řidiči často porušují dopravní značení, a zaznamenat čas každého porušení. Stáhněte si [základ aplikace](assets/prestupky-zadani.zip). Prohlédněte si kód aplikace. Najdete zde pole `offences`, které obsahuje časy přestupků. Komponenta `Offence`, která zobrauje čas přestupku.

1. Vytvořte komponentu `OffenceList`, která naplní element `#offence-list` obsahem podle pole `offences`.
1. Na tlačítko `#add-btn` pověste funkci, která přidá do senzmau čas nového přestupku.
   1. Funkce nejdříve získá objekt obsahující aktuální čas voláním funkce `localTime`,
   1. pomocí metody `push` vloží do tento objekt do pole `offences`,
   1. aktualizuje obsah elementu `#offence-list` voláním funkce `OffenceList`.
