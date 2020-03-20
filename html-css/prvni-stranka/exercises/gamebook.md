---
title: Gamebook
demand: 2
---

Před mnoha a mnoha lety, když byli vaši lektoři a koučové <del>mladí</del> mladší a lidé si kupovali a četli knihy, bylo oblíbenou zábavou čtení tzv. *gamebooků*. Tyto knihy obsahovaly semi-interaktivní příběh, při jehož čtení se mohl čtenář rozhodovat, jak bude děj pokračovat. Na stránce 27 se kupříkladu ukázalo, že hrdina knihy stojí před rozcestím. Dle instrukcí bylo možno pokračovat rovně (nalistovat na stranu 42), zahnout doleva (strana 69) nebo si ustlat na zemi, přespat a odložit rozhodnutí na další den (strana 498).

Gamebooky se dnes netěší výrazné popularitě, zato však jejich chování umíme velmi snadno vyrobit sami pomocí HTML značky odkazu, tj. `<a>`. Pokud v atributu `href` zadáme pouze znak mřížky (`#`) následovaný nějakým textem, prohlížeč po kliknutí na takový odkaz zůstane na aktuální stránce a jen nascrolluje na správnou část. Kterou? Přece tu, jejíž HTML prvek má shodnou hodnotu atributu `id`. Tato technika je zhusta využívána například pro poznámky pod čarou na Wikipedii.

Sestrojte vlastní Gamebook ve formě HTML stránky, ve které bude alespoň pět odstavců, odpovídajících fiktivnímu příběhu. Na konci každého z nich budou dva až tři odkazy, vedoucí na ostatní odstavce. Zmenšením okna prohlížeče zajistíme, aby čtenář neviděl zbytečně mnoho textu naráz.
