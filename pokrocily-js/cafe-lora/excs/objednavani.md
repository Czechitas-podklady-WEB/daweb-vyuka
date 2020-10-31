---
title: Objednávání
demand: 2
---

Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.

1. Na tlačíko `.order-btn` pověste posluchač, který při kliknutí přidá na prvek `.drink__cup` třídu `.drink__cup--selected`. Zároveň změní nápis na tlačítku na <i>Zrušit</i>.
1. Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na <i>Objednat</i>. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou <var>ordered</var>, která bude obsahovat `true` nebo `false` podle toho, zde je nápoj objednaný či nikoliv.
1. Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.