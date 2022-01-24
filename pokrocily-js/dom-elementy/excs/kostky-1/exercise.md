---
title: Kostky 1
demand: 2
---

Stáhněte si [zdrojové soubory](assets/kostky-zadani.zip) projektu pro hrací kostky.

1. Pomocí `create-czechitas-app` založte projekt s názvem `dice`. Uvnitř smažte složku `src` a nahraďte ji sloužkou `src` ze staženého ZIPu.
1. Podle vzoru uvedeného v souboru `index.html` vytvořte komponentu `Dice`. Zatím pro ni nemusíte vytvářet speciální složku. Pro tuto chvíli její kód vytvořte v hlavním `index.js`. Tato komponenta bude ve svých `props` očekávat vlastnost `side`, která udává číslo zobrazené na kostce. Napište komponentu tak, aby vrecela DOM element tak, jako jsme se učili v lekci. 
1. Vložte na stránku několik kostek s různými hodnotami.
1. Zařiďte, že když uživatel klikne na tlačítko :i[hodit] některé kostky, tato kostka zobrazí náhodné číslo mezi 1 a 6. K vygenerování náhodného čísla využijte již připravenou funkci `roll`.
1. Vytvořte pro komponentu `Dice` separátní složku. Přesuňte do ní styly a obrázky související s komponentnou. Komponentu správně exportujte. 
