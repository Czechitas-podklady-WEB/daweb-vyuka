# daweb

Studijní materiály pro DA Web na kodim.cz

## Sylabus HTML/CSS

### Blok 1

- Základní koncepty a účely HTML
- První skoro-prázdná HTML stránka
- Validita syntaktická a sémantická
- Značky `<p>, <h1>, <h2>, <a>, <img>, <ol>, <ul>, <li>`

### Blok 2

- Koncept jazyka CSS a jeho vazba na HTML
- Základy selektorového jazyka: názvy značek, atributový filtr, zkratky pro id/class, kombinátory čárka a mezera
- CSS vlastnosti pro práci s textem - color, background-color, font-size, font-weight, font-family, ...
- HTML značky pro tabulky: `<table>, <thead>, <tbody>, <tr>, <td>, <th>`

### Blok 3

- HTML značky pro layout stránky: `<header>, <footer>, <main>, <nav>, ...`
- Box model - margin, padding, border, width/height
- CSS vlastnost `display`
- Úvod do Flexboxu - co to je a jak to funguje
- Nastavení velikosti prvků uvnitř flexboxu pomocí flex-grow, flex-shrink, flex-basis
- Směr hlavní osy flexboxu - flex-direction
- Základní layouty pomocí flexboxu (prvky vedle sebe)

### Blok 4

- Flexbox - pokračování
- Zarovnání prvků ve flexboxu pomocí justify-content a align-items
- Zalomení prvků uvnitř flexboxu - flex-wrap
- Komplexnější layouty pomocí flexboxu - 1+3, holy grail, …
- Vnořování flexboxů do sebe
- Tiskový styl

### Blok 5

- Responzivní webdesign, testování responzivity v prohlížeči
- Media query - změna CSS v závislosti na šířce viewportu
- Mobile first přístup
- Co je breakpoint a existují pevně stanovené pro mobil/tablet/počítač?
- Další techniky pro responzivní design: device orientation, viewport-relative units

### Blok 6

- Skrývání/zobrazování prvků v breakpointech
- Změna velikosti nebo rozložení (vedle sebe/pod sebou) v breakpointech
- Aplikace responzivního webdesignu na dříve vyrobené flexbox layouty (3+1, holy grail)
- Responzivní webdesign - pokračování, viewport
- Pokročilé responzivní layouty a změna rozložení stránky

### Blok 7

- CSS Transitions / Animations
- Pokročilejší CSS selectory - first/last/nth child, adjacent sibling, apod.
- CSS specificita

### Blok 8

- formuláře v HTML - input, textarea, checkbox, radio, select, apod,
- validátory
- stylování formulářů v CSS - valid, invalid, apod.

### Nezařazeno

- Projekt - Recepty
- ~~Typy elementů - display (block, inline, inline-block)~~
- Float - obtékání obrázků textem, zastavení obtékání, clearfix
- Pozicování elementů - static, relative, absolute, fixed, sticky
- Projekt - Profil Jana Czechita

## Sylabus Git

### Blok 1: Základy Gitu

- Principy verzování
- Základní combo: init, clone, add, commit, push, pull
- GitHub, GitLab

### Blok 2: Větve

- Základní Práce s větvemi
- merge
- co je to konflikt a jak jej řešit

## Sylabus JavaScript

### Blok 1: Úvod do JavaScriptu

- Čísla a aritmetika
- Textové řetězce a práce s nimi (spojování)
- Proměnné
- Voláni funkcí (náhodná čísla, zaokrouhlování, apod)
- Deklarace proměnných pomocí var/let/const

### Blok 2: První programy a podmínky

- První programy
- Vstup výstup, document.write, console.log, prompt
- Konverze hodnot, Number, String
- Podmínky - if/else if/else
- Porovnávací operátory = vs. ===

### Blok 3: Document Object Model

- Vyhledávání prvků na stránce - querySelector
- Změna vlastností prvku
- CSS vlastnosti element.style.xxxx
- textový obsah prvku textContent, innerHTML
- ukázka nebezpečnosti innerHTML
- atributy prvku - src, href, apod.
- CSS třídy - přidat/odebrat/přepnout

### Blok 4: Vlastní funkce, funkce vyšího řádu

- Vlastní funkce
- Předávání parametrů do funkce a vracení hodnoty
- Funkce jako hodnoty
- Předávání funkcí funkcím
- setTimer, setInterval

### Blok 5: Události

- Události
- přidávání událostí pomocí addEventListener
- událost onClick, onKeyDown a event.key
- vlastnosti události předané v event objektu
- delegování událostí - událost přidaná na rodiče se vykoná i při kliku na potomky
- DOMContentLoaded

### Blok 5: Pole a cykly

- Vytvoření pole
- Přístup k hodnotám v poli
- Metody pole pro vkládání/odebírání hodnot - push, pop, shift, unshift, slice, splice
- Vyhledávání v poli - indexOf, includes,  …
- Procházení pole pomocí cyklu forEach
- Funkcionální iterace (map, filter, some, …)
- querySelectorAll

### Blok 6: Cykly a algoritmy

- Cyklus for - předem známý počet opakování
- Cyklus while - cyklus s předem neurčeným počtem opakování
- Práce s náhodnými čísly - házení kostkou, dokud nepadne 6, apod.

### Blok 7: Objekty a práce s daty

- Vytvoření objektu pomocí object literal
- Vlastnosti objektu
- Tečková konvence vs. přístup k vlastnostem jako k prvkům pole
- Objekty v poli = zdroj dat, “databáze”
- Procházení pole objektů a generování HTML
- Data atributy v HTML - do vygenerovaného HTML si přidáváme doplňková data

### Blok 8: Remote APIs

- Serverová API - REST
- Data ve formátu JSON
- Čtení dat pomocí fetch
- Metody pro práci s polem - forEach, filter, sort, map, reduce

### Blok 9: Tvorba komponent

- innerHTML atd.

### Blok 10: Modularizace a preprocessing

- Rozdělení kódu na menší funkční celky
- ES6 Moduly, výhody a nevýhody
- Otázka zpětné kompatibility (až do ES5?)
- Tři techniky pro podporu:
  - Transpilace
  - Polyfilly
  - Bundling
- 3rd party tools: Webpack, Rollup, Babel, Closure Compiler?

### Blok 11:

- Práce s API
- Odesílání dat na server pomocí fetch

### Blok 12:

## Sylabus Vue.js

Sobota 9.11. - Vue.js
Vue.js (8 h)
Začínáme s Vue.js - reaktivní JS framework
Nejjednodušší způsob, jak začít = připojený script. Magicky funguje.
Vue šablony (templates)
Vue instance
Data ve Vue instanci
Napojení dat na HTML atributy (binding)
Direktivy
Události
Obousměrný data binding

Úterý 12.11. - Vue.js
Vue.js (3 h)
Vue a interakce s DOMem
Computed properties
Dynamické CSS třídy

Sobota 16.11. - Vue.js
Vue.js (8 h)
Podmíněné zobrazení v šablonách - v-if, v-else, v-show
Generování seznamů - v-for
Procházení dat (objekty vs. čísla)

Čtvrtek 21.11. - Vue.js
Vue.js (3 h)
Životní cyklus Vue instance
Metody životního cyklu - mounted, created, apod.

Sobota 23.11. - Vue.js
Vue.js (8 h)
Přechod na reálné vývojové workflow - Webpack a Vue CLI
Vue CLI 3 - proč a k čemu
.vue soubory - vše v jednom (template, script, style)
Ukládání dat v komponentě pomocí metody data()
Lokální registrace komponent
Omezení dosahu CSS pouze na komponentu (scoping component styles)

Úterý 26.11. - Vue.js
Vue.js (3 h)
Úvod do Vue komponent
Používání props pro komunikaci rodič -> potomek
Používání props pro komunikaci potomek -> rodič

Čtvrtek 28.11. - Vue.js
Vue.js (3 h)
Komunikace mezi komponentami na stejné úrovni (siblings)

Sobota 30.11. - Vue.js
Vue.js (8 h)
Zpracování formulářů
Základní binding na element <input>
Modifikace uživatelských vstupů pomocí modifikátorů
Binding elementu <textarea> a zachování konců řádků
Používání checkboxů a ukládání dat v poli
Používání radio buttonů
Zpracování rozbalovacích nabídek - <select> a <option>
Odeslání formuláře

Úterý 3.12. - Vue.js
Vue.js (3 h)
Pokročilé použití komponent
Validace formulářů

Sobota 7.12. - Vue.js - VOLITELNÉ
Vue.js (8 h)
Čtení a zpracování dat ze serveru pomocí knihovny Axios
HTTP komunikace

.
