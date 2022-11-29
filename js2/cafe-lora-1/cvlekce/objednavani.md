---
title: Objednávání
demand: 3
---

Zařídíme, aby fungovalo objednání nápoje. Bude potřeba posílat PATCH požadavky na API, aby si server pamatoval naši objednávku.

1. V komponěntě `Drink` Na tlačíko se třídou `order-btn` pověste posluchač, který při kliknutí odešle PATCH požadavek na API endpoint provádějící objednání (viz [dokumentace])
1. Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a změny na prvku `.drink__cup` i na tlačítku `.order-btn` se vrátily (odebrala se třída `drink__cup--selected` a vrátil se text tlačítka na :i[Objednat]). Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou :var[ordered], která bude obsahovat `true` nebo `false` podle toho, zde je nápoj objednaný či nikoliv.
1. Ve chvíli, kdy máte objednávání funkční, commitněte váš kód se smysluplnou zprávou a pushněte jej.
