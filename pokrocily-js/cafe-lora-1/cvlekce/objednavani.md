---
title: Objednávání
demand: 2
---

Zařiďte, aby fungovalo objednání nápoje. Momentálně máme na stránce jeden nápoj, capuccino, později jich však bude mnohem více.

1. Na tlačíko se třídou `order-btn` pověste posluchač, při kliknutí změní nápis na tlačítku na :i[Zrušit]. Zároveň přidá na prvek se třídou `drink__cup` třídu `drink__cup--selected`.
1. Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a změny na prvku `.drink__cup` i na tlačítku `.order-btn` se vrátily (odebrala se třída `drink__cup--selected` a vrátil se text tlačítka na :i[Objednat]). Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou :var[ordered], která bude obsahovat `true` nebo `false` podle toho, zde je nápoj objednaný či nikoliv.
1. Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.
