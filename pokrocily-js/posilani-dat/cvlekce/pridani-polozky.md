---
title: Přidání položky do seznamu
demand: 2
---

Pokračujte se stránkou z předchozího cvičení.

1. Přidejte na stránku tlačítko s názvem „Nová položka“ a dvě textová políčka. Ta budou nyní sloužit k přidání nové položky do seznamu. Do jednoho políčka uživatel zadá název produktu a do druhého množství.
1. Při stisknutí tlačítka zatím vytvořte jednoduchý objekt s vlastnostmi `product` a `amount` získanými od uživatele. Objekt si uložte do proměnné s názvem `newItem`.
1. Pomocí funkce `JSON.stringify` vypište do konzole JSON verzi vaší nové položky. Toto je pro vaši kontrolu, abyste viděli, co přesně se později odešle na server.
1. Prohlédněte si [dokumentaci](https://apps.kodim.cz/daweb/shoplist/) a podívejte se, jak se přidává položka do seznamu.
1. Nechte uživatele zadat do políček na stránce název seznamu, produkt a množství. Po kliknutí na tlačítko „Nová položka“ přidejte do zadaného seznamu novou položku voláním funkce `fetch`. Nebuďte zatím zlí a přidávejte položky pouze do seznamů, které jste sami vytvořili.
1. Podívejte se, jak vypadá adresa pro získání položek v seznamu. Zadejte ji do adresní řádky prohlížeče a vyzkoušejte, že se váš seznam skutečně aktualizoval.
