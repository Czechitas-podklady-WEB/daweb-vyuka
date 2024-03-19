---
title: Hodnocení
lead: Oživte komponentu pro hodnocení pomocí hvězdiček.
demand: 4
context: cvdoma
solutionAccess: protected
---

V tomto cvičení vdechneme život komponentě, která umožňuje hodnocení pomocí hvězdiček. To znáte například z hodnocení filmů nebo třeba restaurací a hotelů.

1. Vytvořte si repozitář ze šablony [cviceni-hodnoceni](https://github.com/Czechitas-podklady-WEB/cviceni-hodnoceni) obsahující React stránku s hodnocením pomocí pěti hvězdiček.
1. Prohlédněte si, jak fungují komponenty `Rating` a `Star`. V následujicích bodech budeme chtít zařídit, aby se při rozsvícení libovolné hvězdičky zborazilo správné číslo udávající hodnocení.
1. V komponentě `Star` vyrobte handler pro událost `onClick`. Zařiďte, aby se hvězdička po kliknutí rozsvítila. Zatím nepotřebujeme, aby šlo hvězdičku zhasnout.
1. Každá hvězdička potřebuje vědět, jaké číslo se má po kliknutí na ni zobrazit. Do komponenty `Star` proto přidejte prop `value`, která bude obsahovat číslo, které se má po kliknutí zobrazit. První hvězdička tak bude mít `value={1}`, druhá `value={2}` apod. Zajimavé je, že hvězdička toto číslo nebude nijak zobrazovat, ale pouze ho později předá komponentě `Rating`, když se na hvězdičku klikne. To provedeme v následujících krocích.
1. Do komponenty `Star` přidejte prop `onSelect`. Toto bude funkce, která se zavolá pouze v případě, když se hvězdička rozsvěcuje. Komponenta tuto funkci zavolá při kliknutí na hvězdičku a pošle jí jako parametr hodnotu `value`, kterou jsme v předchozím kroku přidali.
1. V komponentě `Rating` předejte skrze prop `onSelect` všem instancím komponenty `Star` callback, který nastaví stav `rating` na hodnotu, kterou mu komponenta `Star` předala.

Nyní by mělo být možné kliknutím na hvězdičky nastavit správné hodnocení. Hvezdičky se sice nechovají úplně správně, protože bychom chtěli, aby se při kliknutí na hvězdičku rozsvítily všechny hvězdičky s nižším číslem. To si však necháme na další cvičení.
