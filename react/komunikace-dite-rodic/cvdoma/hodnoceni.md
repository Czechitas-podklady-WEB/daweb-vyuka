---
title: Hodnocení
demand: 3
---

V tomto cvičení vdechneme život komponentě, která umožňuje hodnocení pomocí hvězdiček. To znáte například z hodnocení filmů nebo třeba restaurací a hotelů.

1. Vytvořte si repozitář ze šablony [cviceni-hodnoceni](https://github.com/Czechitas-podklady-WEB/cviceni-hodnoceni) obsahující React stránku s hodnocením pomocí pěti hvězdiček.
1. Prohlédněte si, jak fungují komponenty `Rating` a `Star`. V následujicích bodech budeme chtít zařídit, aby se při rozsvícení libovolné hvězdičky zvýšilo číslo udávající hodnocení o jedna. V tomto případě nám nebude vadit, když budeme hvězdičky rozsvěcet mimo pořadí
1. V komponentě `Star` vyrobte handler pro událost `onClick`. Zařiďte, aby se hvězdička po kliknutí rozsvítila a po opětovném kliknutí opět zhasla.
1. Do komponenty `Star` přidejte prop `onGlow`. Toto bude funkce, která se zavolá, když se hvězdička rozsvítí.
1. V komponentě `Rating` vytvořte funkci `handleGlow`. Tuto funkci obdrží všechny hvězdičky jako prop. Zatím do ní dejte pouze nějaký `console.log`.
1. V komponentě `Star` zavolejte funkci `onGlow` jen v případě, že se hvězdička rozsvěcí. Vyzkoušejte, že v konzoli vidíte výpisy z funkce `handleGlow`.
1. Nyní upravte funkci `handleGlow` tak, aby ke stavu `value` přičetla jedničku. Pokochejte se, jak to všechno krásně funguje.
1. Nyní budeme chtít od hodnocení odečíst jedničku, když se hvězdička zhasne. Komponenta `Star` tedy bude mít druhou prop s názvem `onDim`, která se zavolá při zhasnutí hvězdičky. K tomu budeme na straně komponenty `Rating` potřebovat funkci `handleDim`. Postup je analogický jako v případě rozsvěcení, jistě jej zvládnete bez dalších instrukcí.

Zatím si můžeme hvězdičky zhasínat a rozsvěcet jak se nám zachce i mimo pořadí. To napravíme v dalším cvičení.
