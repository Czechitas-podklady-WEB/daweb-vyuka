---
title: Nákupní seznam z databáze
demand: 3
---

Budeme pokračovat v práci na projektu z předchozího cvičení.

1. Dle popisu v lekci si na supabase založte databázovou tabulku s názvem `shopping_item`, nezapomeňte na propojení sloupce user_id s tabulkou registrovaných uživatelů
1. Vytvoř soubor `functions/db.js` dle popisu v lekci
1. V komponentě `HomePage` do elementu `.lists` připoj komponentu `ShoppingList`, které v props předáš session (aplikace nyní přestane fungovat, jelikož komponentě ShoppingList chybí položky)
1. Upravte komponentu `ShoppingList` tak, že pokud má proměnná `items` hodnotu `undefined`, tak si komponenta zajistí získání položek ze supabase databáze pomocí funkce `getShopingItems` v souboru `functions/db.js`, tato funkce potřebuje parametr userId, jeho hodnotu můžete získat z `session.user.id`. Po získání položek komponenta překreslí sebe samu.
1. Nyní zprovozněte formulář pro přidání položky, k tomu využijte funkci `addShoppingItem`. Po přidání položky je potřeba opět načíst položky pomocí funkce `getShopingItems` a následně překresilt komponentu.
