---
title: Nákupní seznam - posun položek
demand: 3
---

V našem projektu s nákupním seznamem přidáme možnost měnit pořadí položek. Každou položku budeme mít možnost posunout o jedna nahoru nebo dolů.

1. Vyjděte z kódu [poslední verze](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/delete-item) našeho projektu.
1. V termálu nainstalujte potřebné závislosti pomocí příkazu `npm install`.
1. Stáhněte si ikonky šipek [nahoru](assets/arrow-up.svg) a [dolů](assets/arrow-down.svg). Pomocí nich přidejte do komponenty `ShoppingItem` dvě nová tlačíka pro posouvání nahoru a dolů. Zatím můžete při stisku těchto tlačítek něco vypsat do konzole.
1. Podobně jako máme v komponentě `ShoppingList` callback `onDelete`, předejte další dva callbacky `onMoveUp` a `onMoveDown`. Stejně jako v případě `onDelete`, zavolejte tyto callbacky při stisku příslušných tlačítek a předejte jim vždy `id` položky, která se má posunout.
1. V komponentě `ShoppingList` vytvořte funkce `handleMoveUp` a `handleMoveDown` a předejte je skrze *props* do všech položek seznamu. Zatím do těchto funkcí můžeme pro ověření funkčnosti dát výpisy do konzole.
1. Ověřte, že při kliknutí na tlačítka v jednotlivých položkách se volají vaše funkce `handleMoveUp` a `handleMoveDown`.
1. V [dokumentaci](https://apps.kodim.cz/daweb/shoplist/docs/sending#move-item-up-or-down-in-a-list-post) si nastudujte, jakým způsobem se v API přesouvají položky.
1. Upravte funkce `handleMoveUp` a `handleMoveDown` aby poslaly správný požadavek na server a vrácená data použili k aktualizaci obsahu komponenty `ShoppingList`.
1. Vyzkoušejte, že aplikace funguje a můžete posouvat jednotlivé položky v seznamech nahoru a dolů.
