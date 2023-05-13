---
title: Nákupní seznam z databáze
demand: 3
---

Budeme pokračovat v práci na projektu z předchozího cvičení.

1. Vytvořte si repozitář ze šablony [projekt-nakupy-supabase](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-supabase).
1. Otevřete repozitář ve VS Code a nainstalujte závislosti, projekt zatím nespouštějte
1. Zaregistrujete se na supabase
1. Dle popisu v první části lekce si založte nový projekt
1. V souboru `functions/supabase.js` nastavte hodnoty SUPABASE_URL pro váš projekt, klíč si prozatím někam uložte
1. Naistalujte si do projektu balíček pro práci se supabase `npm install @supabase/supabase-js`
1. Spusťte projekt pomocí `npm run start`
1. Do localStorage vašeho prohlížeče si uložte váš supabase klíč pod klíčem `key`. Pokud jej již nemůžete nikde najít, najde jej v administraci supabase. `Project settings -> API -> Project API keys (druhá sekce) -> anon, public`
1. Dle popisu v lekci si na supabase založte databázovou tabulku s názvem `shopping_item`
1. Nyní můžete zkusit obnovit stránku s vaším projektem a zkusit přidat položku. Pokud se vše povedlo, tak se položka přidala na stránku a na stránce zůstane i po obnovení.
1. Pokud vám vše funguje, můžete zkusit implementovat zaškrtnutí/odškrtnutí položky v seznamu
1. V komponentě `ListItem` je připravena prázdná funkce `handleTick`, kde budeme chtít změnu zařídit.
1. Do komponenty si naimportujte funkci `updateShoppingItem` ze souboru `functions/db.js`. Tato funkce očekává id položky jejíž stav chceme změnit a pravdivostní hodnotu, zda má být položka zaškrtnutá nebo ne. Pozor, tata funkce je asynchronní, stejně jako například `fetch`. Proto budete chtít další kód provádět uvnitř metody `then`.
1. Jelikož nám supabase nevrátí nový stav položky, jako to bylo u API použivaného v předchozích lekcí, tak bude potřeba si ještě naimportovat funkci `getShoppingItemById`.
1. Této funkci předáme jako parametr id položky a ono nám asynchronně vrátí data, ty můžeme následně použít na překreslení položky.
