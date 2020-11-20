---
title: Kontrola cifer pomocí filtru
demand: 2
---

V předchozím cvičení jsme vypisovali všechny špatně zadané znaky do konzole pomocí cyklu. Nyní tento kód přepíšeme pomocí metody `filter`.

1. Jakmile uživatel zadá rodné číslo jako řetězec a máte ověřeno, že má skutečně délku 9, převeďte tento řetězec na pole pomocí funkce `Array.from`. Příklad použití.

   ```js
   > Array.from('ahoj')
   ["a", "h", "o", "j"]
   ```

1. Na vyrobeném poli znaků zavolejte metodu `filter` a získejte pole znaků, které nejsou cifry. Opět použijte funkci `isDigit` z předchozího cvičení. Výsledné pole vypište to konzole.
