---
title: Kostky 1
demand: 2
---

Stáhněte si [webpack projekt](assets/kostky-zadani.zip) obsahující několik hracích kostek.

1. Podle vzoru uvedeného v souboru `index.html` vytvořte komponentu `Dice`. Zatím pro ni nemusíte vytvářet speciální složku. Pro tuto chvíli její kód vytvořte v hlavním `index.js`. Tato komponenta bude ve svých `props` očekávat vlastnost `side`, která udává číslo zobrazené na kostce. Napište komponentu tak, aby používala DOM elementy.
1. Vložte na stránku několik kostek s různými hodnotami.
1. Zařiďte, že když uživatel klikne na tlačítko <i>hodit</i> některé kostky, tato kostka zobrazí náhodné číslo mezi 1 a 6. K vygenerování náhodného čísla využijte již připravenou funkci `roll`.
