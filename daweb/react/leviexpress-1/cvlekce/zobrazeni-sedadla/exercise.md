---
title: Zobrazení sedadla
lead: Zobrazíme uživateli sedadlo, které mu bylo automaticky přiděleno.
demand: 2
solutionAccess: protected
---

V první fázi projektu bude sedadlo pro cestujícího přidělovat automaticky backend. Jistě jste si všimli, že API endpoint `/journey` vrací JSON s vlastností `autoSeat`. Tato vlastnost obsahuje automaticky vybrané volné sedadlo. V tomto cvičení jej zobrazíme uživateli na stránce.

::fig[náhled]{src=assets/nahled.png}

1. Na vzorové stránce vidíte sekci s nadpisem „Vaše sedadlo“. Vytvořte pro tuto sekci React komponentu s názvem `SelectedSeat`. Její obsah vyplňte dle vzorové stránky. Všimněte si, že obrázek sedadla je vytvořen pomocí SVG.
1. Najděte, kde se ve struktuře SVG nastavuje číslo sedadlo. Zařiďte, aby šlo komponentě `SelectedSeat` nastavit číslo sedadla skrze prop `number`.
1. Zkontrolujte v prohlížeči, že se správně zobrazuje sekce se sedadlem a že je možné pomocí prop `number` měnit číslo sedadla.
1. V komponentě `HomePage` máme ve stavu `journey` uložen výsledek vyhledané cesty. Stačí tedy vlastnost `autoSeat` předat komponentě `SelectedSeat`. Dejte však pozor na to, že při načtení stránky je ve stavu `journey` hodnota `null`. V takovém případě komponentu `SelectedSeat` vůbec nezobrazujte.
