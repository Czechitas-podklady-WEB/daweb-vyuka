---
title: Počasí
demand: 2
lead: Vytvořte aplikaci zobrazující aktuální počasí.
solutionAccess: lock
---

Podobných postupem jako jsme na lekci tvořili aplikaci _Zprávičky_ zkuste vytvořit vlastní aplikaci, která bude zobrazovat počasí na aktální týden.

1. Pomocí _Use this template_ si vytvořte kopii [tohoto repozitáře](https://github.com/Czechitas-podklady-WEB/cviceni-pocasi). Najdete v něm soubor s daty pro počasí na jeden týden.
1. V naší aplikaci budeme chtít vytvořit dvě stránky podle popisu dále. Zatím je nemusíme nijak horlivě stylovat, stačí nám zatím základní zobrazení dat.
1. Hlavní stránka bude `index.html` s přehledem počasí na sedm dní v týdnou, pondělí až pátek. Každý den bude zobrazen jako karta s názvem dne, teplotou a stavem typu zataženo, déšť, sníh, atd. Pro tuto stránku si vytvořte samostatný soubor `index.js` a naplňte HTML obsahem podle dodaných dat.
1. Po rozkliknutí karty na hlavní stránce se uživatel dostane na stránku `detail.html` s detailním přehledem počasí na daný den. Odkaz bude vypadat například `detail.html?den=pondeli`. Na stránce se zobrazí název dne, teploty ráno, odpoledne a večer, stav jako zataženo, déšť apod., vlhkost, tlak a slovní popis počasí.
