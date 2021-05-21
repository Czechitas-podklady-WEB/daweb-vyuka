---
title: Údaje o cestě demand: 2
---

V tomto cvičení vytvoříte hlavní komponentu pro výběr startu a cíle. Komponenta získá seznam měst a termíny cest z API, nechá uživateli vybrat výchozí a cílové
město a datum, a po kliknutí na tlačítko pošle vybrané údaje své rodičovské komponentě.

1. Ve svém projektu vyvořte komponentu s názvem `JourneyPicker`. Ta bude součástí naší komponenty `Home`. Zatím v ní vracejte pouze statické JSX. To si můžete
   zkopírovat z dodaného designu. Vytvořte pro komponentu také soubor `style.css` a do něj vložte styly týkající se pouze této komponenty.
1. Obrázek `map.svg` si vložte do složky `img` v komponentě `JourneyPicker`. Nejlepší způsob jak jej na stránce zobrazit je provést import
   ```js
   import mapImage from './img/map.svg';
   ```

   a vložit jej jako atribut obrázku

   ```html
   <img src={mapImage} />
   ```
1. Zkontrolujte, že komponenta vypadá stejně jako v dodaném designu a proveďte commit.
1. Připravte si funkci `handleSubmit(event)`, která se bude volat při odeslání formuláře. Ošetřete, aby prohlížeč sám neodesílal formulář a zatím si ve funkci
   jen vypište do konzole text `'Odesílám formulář s cestou'`.
1. Napojte funkci `handleSubmit` na událost submit ve formuláři. Ověřte v prohlížeči, že po kliknutí na *Vyhledat spoj* se v konzoli objeví výše uvedený text.
1. Pomocí `useState` si v komponentě připravte tři stavy: `fromCity`, `toCity` a `date`. Výchozí hodnotou bude ve všech třech případech prázdný řetězec `''`;
1. Napojte každý ze stavů na správý `<select>` tak, aby `select` zobrazoval vybraný stav a změna v `select`u se promítla do stavu.
1. Upravte funkci `handleSubmit` tak, aby do konzole vypsala všechny tři stavy. Vyzkoušejte, že výběrem stavu v `select`u se změní stav – po kliknutí na
   tlačítko se do konzole vypíše změněný stav. Tím, že si dočasně změnít výchozí hodnotu v `useState('')` na některou z hodnot (atribut `value`) v `<option>`
   můžete ověřit, že funguje správně nastavení výchozího stavu `select`u.
1. Commitněte změny.
