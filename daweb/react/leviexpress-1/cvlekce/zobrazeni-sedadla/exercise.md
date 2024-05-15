---
title: Zobrazení sedadla
lead: Zobrazíme uživateli sedadlo, které mu bylo automaticky přiděleno.
demand: 2
context: lekce
solutionAccess: protected
---

V první fázi projektu bude sedadlo pro cestujícího přidělovat automaticky backend. Jistě jste si všimli, že API endpoint `/journey` vrací JSON s vlastností `autoSeat`. Tato vlastnost obsahuje automaticky vybrané volné sedadlo. V tomto cvičení jej zobrazíme uživateli na stránce.

::fig[náhled]{src=assets/nahled.png}

1. Na vzorové stránce vidíte sekci s nadpisem „Vaše sedadlo“. Vytvořte pro tuto sekci React komponentu s názvem `SelectedSeat`. Její obsah vyplňte dle vzorové stránky.
1. Vložte (použijte) komponentu `SelectedSeat` na správné místo homponenty `HomePage`. Zatím ji ponechte zobrazenou vždy, bude se vám tak komponenta lépe ladit.
1. Všimněte si, že obrázek sedadla je vytvořen pomocí SVG. SVG je formát pro vektorové obrázky, jde ovšem o textový zápis podobný HTML. Díky tomu jej můžeme používat i přímo v JSX – a můžeme také pomocí Reactu měnit  obsah SVG, nebo-li to, co se v obrázku zobrazuje.
1. Najděte, kde se ve struktuře SVG nastavuje číslo sedadlo. Zařiďte, aby šlo komponentě `SelectedSeat` nastavit číslo sedadla skrze prop `number`.
1. Tak, kde je komponenta `SelectedSeat` použitá, nastavte komponentě atribut `number` a ověřte, že se v prohlížeči zobrazí správné číslo sedadla.
1. V komponentě `HomePage` máme ve stavu `journey` uložen výsledek vyhledané cesty. Stačí tedy vlastnost `autoSeat` předat komponentě `SelectedSeat` v atributu `number`. Dejte však pozor na to, že při načtení stránky je ve stavu `journey` hodnota `null`. V takovém případě komponentu `SelectedSeat` vůbec nezobrazujte.
