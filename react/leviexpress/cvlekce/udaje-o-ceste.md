---
title: Údaje o cestě
demand: 2
---

V tomto cvičení vytvoříme hlavní komponentu pro výběr startu a cíle. Komponenta získá seznam měst a termíny cest z API, nechá uživateli vybrat výchozí a cílové město a datum. Po kliknutí na tlačítko pošle vybrané údaje své rodičovské komponentě.

Ve svém projektu již máte vytvořen základy komponenty s názvem `JourneyPicker`. Ta je součástí komponenty `Home` a zatím vrací pouze statické JSX

1. V komponentě `JourenyPicker` si připravte funkci `handleSubmit(event)`, která se bude volat při odeslání formuláře. Ošetřete, aby prohlížeč sám neodesílal formulář a zatím si ve funkci jen vypište do konzole text `'Odesílám formulář s cestou'`.
1. Napojte funkci `handleSubmit` na událost submit ve formuláři. Ověřte v prohlížeči, že po kliknutí na _Vyhledat spoj_ se v konzoli objeví výše uvedený text.
1. Pomocí `useState` si v komponentě připravte tři stavy: `fromCity`, `toCity` a `date`. Výchozí hodnotou bude ve všech třech případech prázdný řetězec `''`;
1. Napojte každý ze stavů na správý `<select>` tak, aby `select` zobrazoval vybraný stav a změna v `select`u se promítla do stavu. Vytvoříte tedy dvoucestný databinding, kdy se např. stav `fromCity` bude promítat do `value` příslušného `select`u, a při události `onChange` na `select`u se nová hodnota zapíše do stavu `fromCity`. Obdobně i pro další dva `select`y a stavy `toCity` a `date`.
1. Upravte funkci `handleSubmit` tak, aby do konzole vypsala všechny tři stavy. Vyzkoušejte, že výběrem stavu v `select`u se změní stav – po kliknutí na tlačítko se do konzole vypíše změněný stav. Tím, že si dočasně změnít výchozí hodnotu v `useState('')` na některou z hodnot (atribut `value`) v `<option>` můžete ověřit, že funguje správně nastavení výchozího stavu `select`u.
1. Commitněte změny.
