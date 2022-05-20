---
title: Routování
demand: 2
---

Hned na začátku rozběháme routování, abychom ho pak nemuseli složitě roubovat do již rozpracovaného projektu.

Naše aplikace bude mít dvě hlavní stránky: :i[Home] a :i[Reservation]. Obě obsahují stejnou hlavičku i patičku. Stránka :i[Home] bude pod routou `/`, stránka s detaily rezervace bude mít adresu `/reservation`.

1. Uvnitř komponenty `App` již máte připravenou strukturu s hlavičkou a patičkou stránky. Dále máte již hotovou kostru komponenty `Home`. Setavte router tak, aby komponenty `Header` a `Footer` byly na stránce zobrazeny vždy. Mezi ně vložte prvek `Routes`, který bude mít dvě routy: `/` a `/reservation`. V první routě zobrazte komponentu `Home`, ve druhé zatím necháme jen nadpis `h2` s textem "Detail jízdenky". Vyzkoušejte, že vaše stránka správně zobrazuje obě stránky. Odkazy (`Link`) na stránku nedávejte – uživatel přijde vždy na hlavní stránku `/`. Na stránku `/reservation` se dostane až po kliknutí na tlačítko pro objednání, které zprovozníte až později.
1. Vytvořte komponentu `Reservation`. Tuto komponentu zobrazte na adrese `/reservation`. Zatím může vracet pouze nadpis `h2` abychom viděli, že se na stránce něco děje. Obsah komponenty vytvoříme později.
1. Vyzkoušejte, že vaše stránka správně funguje (adresu `/reservation` vyzkoušejte tak, že ji napíšete do adresního řádku prohlížeče).
1. Proveďte commit změn se smysluplnou commit zprávou.
