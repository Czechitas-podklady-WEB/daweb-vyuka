---
title: Registrace
demand: 1
---

Připravte si základ stránky pro registraci uživatele. Vložte na stránku textové políčko a tlačítko s nápisem _registrovat_.

1. Nechte uživatele zadat do políčka své uživatelské jméno. Budeme simulovat situaci, kdy uživatelské jméno již existuje. Po stisknutí tlačítka tedy zobrazte na stránce zprávu ve smyslu
   ```
   Uživatel Petr již existuje.
   ```
   Na zobrazení zprávy si vytvořte na stránced vhodný prvek, například `p` nebo `div`.
1. Při stisknutí tlačítka změňte jeho nápis na _zkusit znova_. Nevybírejte však tlačítko z dokumentu, použijte vlastnost `event.target`.
