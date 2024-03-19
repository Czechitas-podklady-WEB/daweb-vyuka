---
title: Dotazník s fajfkou
lead: Zařiďte, aby se po kliknutí na odpověď zobrazil symbol fajfky.
demand: 3
context: cvlekce
solutionAccess: protected
---

V našem dotazníku budeme chtít zařídit, že po kliknutí na jednu z 5 možných odpovědí se u otázky zobrazí ikonka fajfky. To provedeme tak, že dvě děti `Option` a `QuestionBody` spolu budou komunikovat skrze stav rodiče.

1. Nejprve chceme u otázky reagovat na kliknutí na jednu z jejich možností. V komponentě `Option` přidejte na `div` s třidou `option` posluchač události `onClick`. Zatím jej naprogramujte tak, aby do konzole vypsal text vybrané odpovědi, tedy například "spíše souhlasím".
1. V komponentě `Question` si vytvořte stav `answered`. Tento stavu bude říkat, zda je otázka zodpovězena, či nikoliv. Výchozí hodnota tohoto stavu bude `false`.
1. Zařiďte následující: pokud je ve stavu `answered` hodnota `false`, chceme, aby componenta `QuestionBody` měla ikonku `symbolQuestion`. Pokud je stav `true`, chceme, aby typ ikonky byl `symbolTick`.
1. Nyní chceme komponentě `Option` přidat callback, pomocí kterého může informovat svého rodiče, že otázka byla zodpovězena. Přidejte tedy komponentě `Option` prop s názvem `onSelected`. V této prop očekáváme funkci. Zařiďte, aby komponenta `Option` zavolala funkci `onSelected` ve chvíli, kdy na tuto komponentu klikneme.
1. V komponentě `Question` si vytvořte funkci `handleSelect`. Všem komponentám `Option` pak skrze prop `onSelected` tuto funkci předejte. Funkce `handleSelect` nechť nastaví stav `answered` na hodnotu `true`. Takto zajístíme, že kdykoliv uživatel klikne na nějakou možnost, stav se nám nastaví na `true` a tím se změní ikonka v těle otázky na fajfku.
