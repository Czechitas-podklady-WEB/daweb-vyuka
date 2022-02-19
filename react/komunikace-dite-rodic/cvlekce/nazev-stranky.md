---
title: Název stránky
demand: 2
---

Pokračujte v předchozím příkladu. Budeme chtít, aby se při kliknutí na položku menu zobrazil správný název stránky.

1. Přidejte do komponenty `App` stav s názvem `pageTitle`, který bude představovat název aktuální stránky. Jeho výchozí hodnotu nastavte na `Domů` a použijte tento stav uvnitř elementu `h1`.
1. Zařiďte, aby komponenta `MenuItem` při volání funkce `onSelect` zavolala tuto funkce se vstupem, který udává název stránky, který se má zobrazit. Takto vlastně předá název stránky rodičovské komponentě.
1. Do funkce `handleSelectItem` přidejte parametr `page` a nastavte stav `pageTitle` na hodnotu z tohoto parametru.
