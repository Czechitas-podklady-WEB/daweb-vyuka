---
title: Údaje o cestě
lead: Propojte výběr měst a data se příslušnými stavy.
demand: 2
solutionAccess: lock
---

Ve svém projektu již máte vytvořen základy komponenty s názvem `JourneyPicker`. Ta je součástí komponenty `HomePage` a zatím vrací pouze statické JSX. V tomto cvičení propojíme výběr měst a data se stavem komponenty.

::fig[náhled]{src=assets/nahled.png}

1. V komponentě `JourneyPicker` si připravte funkci `handleSubmit(event)`, která se bude volat při odeslání formuláře. Ošetřete, aby prohlížeč sám neodesílal formulář a zatím si ve funkci jen vypište do konzole text `'Odesílám formulář s cestou'`.
1. Napojte funkci `handleSubmit` na událost submit ve formuláři. Ověřte v prohlížeči, že po kliknutí na _Vyhledat spoj_ se v konzoli objeví výše uvedený text.
1. Pomocí `useState` si v komponentě připravte tři stavy: `fromCity`, `toCity` a `date`. Výchozí hodnotou bude ve všech třech případech prázdný řetězec `''`;
1. Napojte každý ze stavů na správý `<select>` tak, aby `select` zobrazoval vybraný stav a změna v `select`u se promítla do stavu. Vytvoříte tedy dvoucestný databinding, kdy se např. stav `fromCity` bude promítat do `value` příslušného `select`u, a při události `onChange` na `select`u se nová hodnota zapíše do stavu `fromCity`. Obdobně i pro další dva `select`y a stavy `toCity` a `date`.
1. Upravte funkci `handleSubmit` tak, aby do konzole vypsala všechny tři stavy. Vyzkoušejte, že výběrem stavu v `select`u se změní stav – po kliknutí na tlačítko se do konzole vypíše změněný stav. Tím, že si dočasně změnít výchozí hodnotu v `useState('')` na některou z hodnot (atribut `value`) v `<option>` můžete ověřit, že funguje správně nastavení výchozího stavu `select`u.
1. Commitněte změny.
