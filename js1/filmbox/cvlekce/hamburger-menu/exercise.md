---
title: Hamburger menu
demand: 2
---

Na všech stránkách webu je horní navigace se třemi odkazy. Pro úsporu místa na malých zařízeních se mění na tlačítko s ikonkou hamburgeru. Zařiďte, aby klikání na tlačítko rozbalovalo a opět skrývalo položky menu.

1. Na posledním řádku souboru `script.js` najděte pomocí `document.querySelector` prvek s id `menu-tlacitko`.

1. Přidejte mu posluchač události kliknutí.

1. Přidejte prvku s id `menu-polozky` třídu `show` ve chvíli, kdy událost nastane.

1. Rozšiřte kód tak, aby se třída `show` naopak odebrala, pokud ji prvek již měl.

#### Bonus

Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.

- HTML ikonky křížku: `<i class="fas fa-xmark"></i>`
- HTML ikonky hamburgeru: `<i class="fas fa-bars"></i>`

::fig[řešení]{src=assets/reseni.gif}

---solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni).
