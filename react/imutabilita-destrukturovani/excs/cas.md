---
title: Čas
demand: 3
---

1. Napište funkci `timeFromMinutes`, která v parametru `minutes` obdrží počet minut od půlnoci a vrátí pole dvou čísel, která budou představovat denní čas v hodinách a minutách. Příklad použití:
   ```jscon
   > timeFromMinutes(91)
   [ 1, 31 ]
   > timeFromMinutes(195)
   [ 3, 15
   > timeFromMinutes(536)
   [ 8, 56 ]
   ```
1. Použijte ve vašem kódu funkci tak, že si její celý výsledek uložíte do proměnné `time`. Z této proměnné pak pomocí indexování získejte hodnoty pro hodiny a minuty a uložte je do proměnných `hrs` a `mins`. Vypište tyto proměnné do konzole.
1. Upravte váš kód tak, aby hodnoty do proměnných `hrs` a `mins` vytáhnul z pole `times` pomocí destrukturingu.
1. Upravte dále váš kód tak, aby vůbec nepoužíval proměnnou `time` a rovou při volání funkce použil destrukturing.
1. Upravte dále váš kód tak, aby funkce nevracela pole, nýbrž objekt v tomto formátu.
   ```js
   {
     hours: 8,
     minutes: 56,
   }
   ```
   Použije destrukturing k získání hodin a minut z takto vráceného objektu.
