---
title: Kostky 1
demand: 3
---

V tomto příkladu si opět budeme hrát s hracím kostkami.

1. Pomocí `create-czechitas-app` založte projekt s názvem `dice`. Uvnitř projekut smažte složku `src`. V dalším kroku ji nahradíme jinou složkou.
1. Stáhněte si [ZIP soubor](https://github.com/Czechitas-podklady-WEB/kostky-zadani/archive/refs/heads/master.zip) projektu pro hrací kostky. Stažený soubor si rozbalte někde na disku. Najdete v něm složku `src`. Tuto složku zkopírujte do svého nově založeného projektu místo původní složky, kterou jste smazali.
1. Spusťte aplikaci pomocí `npm run start` a prohlédněte si, jak vypadá.
1. Podle vzoru uvedeného v souboru `index.html` vytvořte v oddělené složce komponentu `Dice`. Komponenta bude ve svých `props` očekávat vlastnost `side`, která udává číslo zobrazené na kostce. Napište komponentu tak, aby vrecela DOM element tak, jako jsme se učili v lekci. Do složky komponenty přesuňte patřičné styly a obrázky související s komponentnou a také komponentu správně exportujte.
1. Vložte na stránku několik kostek s různými hodnotami.
1. Zařiďte, že když uživatel klikne na tlačítko :i[hodit] některé kostky, tato kostka zobrazí náhodné číslo mezi 1 a 6. K vygenerování náhodného čísla využijte již připravenou funkci `roll`.
