---
title: Kostky 1
demand: 3
---

V tomto cvičení vyrobíme stránku s několika hracími kostkami. Budeme chtít, abychom mohli hodit každou kostkou zvlášť.

1. Vytvořte si repozitář ze šablony [cviceni-kostky](https://github.com/Czechitas-podklady-WEB/cviceni-kostky) s hracími kostkami.
1. Spusťte aplikaci pomocí `npx serve` a prohlédněte si, jak vypadá.
1. Podle vzoru uvedeného v souboru `index.html` vytvořte v oddělené složce komponentu `Dice`. Komponenta bude ve svých _props_ očekávat vlastnost `side`, která udává číslo zobrazené na kostce. Napište komponentu tak, aby vracela DOM element tak, jako jsme se učili v lekci. Do složky komponenty přesuňte patřičné styly a obrázky související s komponentnou a také komponentu správně exportujte.
1. Vložte na stránku několik kostek s různými hodnotami.
1. Zařiďte, že když uživatel klikne na tlačítko :i[hodit] některé kostky, tato kostka zobrazí náhodné číslo mezi 1 a 6. K vygenerování náhodného čísla využijte již připravenou funkci `roll`.
