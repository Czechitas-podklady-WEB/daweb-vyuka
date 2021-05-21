---
title: Routování
demand: 2
---

Hned na začátku rozběháme routování, abychom ho pak nemuseli složitě roubovat do již rozpracovaného projektu. 

Naše aplikace bude mít dvě hlavní stránky: <i>Home</i> a <i>Reservation</i>. Obě obsahují stejnou hlavičku i patičku. Stránka <i>Home</i> bude pod routou `/`, stránka s detaily rezervace bude mít adresu `/reservation`.

1. Uvnitř komponenty `App` sestavte router tak, aby komponenty `Header` a `Footer` byly na stránce zobrazeny vždy. Mezi ně vložte `Switch`, který bude mít dvě routy: `/` a `/reservation`. V obou routách zatím zobrazte například nadpis `h2` a vyzkoušejte, že vaše stránka správně zobrazuje obě stránky.
1. Vytvořte komponenty `Home` a `Reservation`, každou ve vlastní složce. Tyto komponenty zobrazte na adresách `/` a `/reservation`. Obě komponenty zatím můžou vracet pouze nadpis `h2` abychom viděli, že se na stránce něco děje. Obsah komponent vytvoříme později. 
1. Vyzkoušejte, že vaše stránka správně funguje a proveďte commit.  
