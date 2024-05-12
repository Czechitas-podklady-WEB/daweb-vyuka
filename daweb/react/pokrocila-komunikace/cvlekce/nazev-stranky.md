---
title: Název stránky
lead: Vyzkoušejte si callback s parametrem.
demand: 3
context: lekce
solutionAccess: protected
---

Pokračujte v předchozím příkladu. Nyní si vyzkoušíme callback s parametrem a budeme chtít, aby se při kliknutí na položku menu zobrazil správný název stránky.

1. Přidejte do komponenty `HomaPage` stav s názvem `pageTitle`, který bude představovat název aktuální stránky. Jeho výchozí hodnotu nastavte na `Domů` a použijte tento stav uvnitř elementu `h1`.
1. Zařiďte, aby komponenta `MenuItem` při volání funkce `onSelect` zavolala tuto funkci se vstupem, který udává název stránky, který se má zobrazit. Takto předá název stránky rodičovské komponentě.
1. Do funkce `handleSelectItem` přidejte parametr `page` a nastavte stav `pageTitle` na hodnotu z tohoto parametru.

:::solution
Řešení je v repository cvičení v branchi [reseni](https://github.com/Czechitas-podklady-WEB/cviceni-hamburger/tree/reseni).
:::
