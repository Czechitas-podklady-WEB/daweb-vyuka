---
title: Hodnocení
demand: 3
---

Zařiďte, aby klikání na hvězdičky v hodnocení filmu zvýraznilo všechny hvězdičky až po kliknutou.

1.  Přichystejte si pomocnou funkci pro zvýraznění určitého počtu hvězdiček.

    1.  Ve funkci počítejte s jedním vstupním parametrem, číslem od jedné do pěti.

    1.  Ve funkci projděte cyklem všechny prvky se třídou `fa-star`.

    1.  Zvýrazněným hvězdičkám odeberte třídu `far` a přidejte `fas`. Ostatním obráceně. Zvýrazněné nechť jsou ty, které jsou v pořadí menší nebo rovny číslu ze vstupu funkce. Pokud tedy funkci zavoláte například s číslem tři, první tři hvězdičky budou mít třídu `fas` a zbylé dvě budou mít `far`.

    1.  Funkci vyzkoušejte zavolat s různými hodnotami. Zkušební volání ale v kódu nenechávejte.

1.  Smyčkou přidejte všem hvězdičkám, prvkům se třídou `fa-star` posluchač události na kliknutí.

1.  Po kliknutí zjistěte, na kterou hvězdičku uživatel kliknul. Každá hvězdička má ve svém textovém obsahu číslo pořadí.

1.  Číslo využijte jako parametr funkce předchystané podle instrukcí výše.

#### Bonus

Při přejíždění myší přes hvězdičky zvýrazněte všechny až po tu, na které je uživatel myší.

1. Kromě posluchače události na kliknutí přidejte i posluchač na `mouseenter` a opět podle textového obsahu hvězdičky zavolejte vaši funkci s příslušným parametrem.

1. Pokud uživatel s myší odjede pryč, zvýrazněte hvězdičky zpět tak, jak byly po posledním kliknutí.

   1. Kdykoliv uživatel na nějakou hvězdičku klikne, poznamenejte si bokem, kolikátá to byla.

   1. S událostí `mouseleave` zavolete vaši funkci s poznamenanou hodnotou.

::fig[řešení]{src=assets/reseni.gif}

---solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni).
