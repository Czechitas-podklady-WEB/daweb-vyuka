---
title: Přidání položky do seznamu
demand: 3
---

Pokračujte se stránkou z předchozího cvičení. Přidáme na stránku možnost přidat položku do seznamu.

1. Přidejte na svoji stránku druhá formulář s tlačítkem :i[Nová položka]. Do formuláře vložte tři textová políčka:
   - políčko pro název již existujícího seznamu,
   - políčko pro název produktu,
   - políčko pro množství.
     Tento formulář bude sloužit k přidání nové položky do seznamu. Do prvního políčka uživatel zadá název už existujícího seznamu, do dalšího zadá název produktu a do třetího množství.
1. Při stisknutí tlačítka zatím vytvořte jednoduchý objekt s vlastnostmi `product` a `amount` získanými od uživatele. Objekt si uložte do proměnné s názvem `newItem`.
1. Pomocí funkce `JSON.stringify` vypište do konzole JSON verzi vaší nové položky. Toto je pro vaši kontrolu, abyste viděli, co přesně se později odešle na server.
1. Prohlédněte si [dokumentaci](https://apps.kodim.cz/daweb/shoplist/docs/sending#add-item-to-a-list-post) a podívejte se, jak se přidává položka do seznamu. Do objektu `newItem` přidejte property `action`.
1. Nechte uživatele zadat do políček na stránce název seznamu, produkt a množství. Po kliknutí na tlačítko :i[Nová položka] přidejte do zadaného seznamu novou položku voláním funkce `fetch`. Nebuďte zatím zlí a přidávejte položky pouze do seznamů, které jste před tím sami vytvořili.
1. V dokumentaci najděte, jak vypadá adresa pro získání položek v seznamu. Zadejte ji do adresní řádky prohlížeče a vyzkoušejte, že se váš seznam skutečně aktualizoval.
