---
title: Výplňořez
demand: 3
---

1. Napište funkci `fillcut`, která jako svůj první parametr `str` očekává řetězec a jako druhý parametr `len` kladné celé číslo. Úkolem funkci je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně `len`.
   - Pokud je vstupní řetězec delší než `len`, tak funkce odřízne jeho konec a vrátí výsledek.
   - Pokud je vstupní řetězec kratší než `len`, tak jej doplní od začátku znakem tečky a vrátí výsledek.
   - Pokud je vstupní řetězec dlouhý přesně `len`, funkce jej vrátí beze změny.

Příklad použití:

```jscon
> fillcut('petr', 8)
'....petr'
> fillcut('petr', 3)
'pet'
> fillcut('petr', 4)
'petr'
```
