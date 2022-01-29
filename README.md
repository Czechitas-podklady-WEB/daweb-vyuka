# daweb

Studijní materiály pro DA Web na kodim.cz

## Sylabus HTML/CSS

### Blok 1

Část první

- Základní koncepty a účely HTML
- První skoro-prázdná HTML stránka
- Co je to syntaxe a sémantika
- Značky `<p>, <h1>, <h2>, <a>, <img>, <ol>, <ul>, <li>`
- Atributy `src`, `href`

Část druhá

- Koncept jazyka CSS a jeho vazba na HTML
- Základy selektorového jazyka: názvy značek, zkratky pro třídy
- CSS vlastnosti pro práci s textem - `color`, `background-color`, `font-size`, `font-weight`, `font-family`, ...

### Blok 2

Část první

- HTML značky pro layout stránky: `<div>, <header>, <footer>, <main>, <nav>, ...`
- Box model - `box-sizing`, `margin`, `padding`, `border`, `width/height`
- CSS jednotky - `px`, `procenta`, `rem`, `em`

Část druhá

- CSS vlastnost `display`
- Pozicování elementů - `static`, `relative`, `absolute`

### Blok 3

Část první

- Úvod do Flexboxu - co to je a jak to funguje
- Nastavení velikosti prvků uvnitř flexboxu pomocí flex-grow, flex-shrink, flex-basis
- Směr hlavní osy flexboxu - flex-direction

Část druhá

- Základní layouty pomocí flexboxu (prvky vedle sebe)

### Blok 4

- Flexbox - pokračování
- Zarovnání prvků ve flexboxu pomocí justify-content a align-items
- Zalomení prvků uvnitř flexboxu - flex-wrap

- Komplexnější layouty pomocí flexboxu - 1+3, holy grail, …
- Vnořování flexboxů do sebe

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

- Float - obtékání obrázků textem, zastavení obtékání, clearfi
- HTML značky pro tabulky: `<table>, <thead>, <tbody>, <tr>, <td>, <th>`

## Sylabus Git

### Blok 1: Základy Gitu

- Principy verzování
- Základní combo: init, clone, add, commit, push, pull
- GitHub, GitLab

### Blok 2: Větve

- Základní Práce s větvemi
- merge
- co je to konflikt a jak jej řešit

## Sylabus Základy JavaScriptu

### Blok 1: Úvod do JavaScriptu

Část první

- Úvod do programování - problém spolubydlení
- Čísla a aritmetika
- Textové řetězce a práce s nimi (spojování)
- Proměnné

Část druhá

- Voláni funkcí (náhodná čísla, zaokrouhlování, apod)

Čtení na doma

- Deklarace proměnných pomocí var/let/const

### Blok 2: První programy a podmínky

Část první

- První programy
- Vstup výstup, prompt
- Konverze hodnot, Number, String

Část druhá

- Booleovské hodnoty
- Podmínky - if/else if/else
- Porovnávací operátory = vs. ===

Čtení na doma

- Logické operátory

### Blok 3: DOM a vlastní funkce

Část první

- Vyhledávání prvků na stránce - querySelector
- Změna vlastností prvku
- CSS vlastnosti element.style.xxxx
- textový obsah prvku textContent
- atributy prvku - src, href, apod.

Část druhá

- Vlastní funkce
- Předávání parametrů do funkce a vracení hodnoty

Čtení na doma

- CSS třídy - přidat/odebrat/přepnout

### Blok 4: Funkce vyššího řádu, události

Část první

- Funkce jako hodnoty
- Předávání funkcí funkcím
- setTimer, setInterval

Část druhá

- Události
- přidávání událostí pomocí addEventListener
- událost onClick, onKeyDown a event.key

Čtení na doma

- vlastnosti události předané v event objektu

### Blok 5: Prohlubování znalostí

Část první

- Scope, globální proměnné
- Closures

Část druhá

- Programátorské best practices - DRY, členění kódu do funkcí
- Drobnosti - template strings, destrukturing...
- delegování událostí - událost přidaná na rodiče se vykoná i při kliku na potomky

Čtení na doma

Zásady psaní hezkého kódu

### Blok 6: Pole a cykly

Část první

- Vytvoření pole
- Přístup k hodnotám v poli
- Metody pole pro vkládání/odebírání hodnot - push, pop, shift, unshift, slice, splice

Část druhá

- Vyhledávání v poli - indexOf, includes, …
- Procházení pole pomocí cyklu forEach
- querySelectorAll

### Blok 7: Cykly a algoritmy

- Cyklus for - předem známý počet opakování
- Funkcionální iterace (map, filter, some, …)
- Cyklus while - cyklus s předem neurčeným počtem opakování
- Práce s náhodnými čísly - házení kostkou, dokud nepadne 6, apod.

## Sylabus Pokročilý JavaScriptu

### Blok 1: Objekty a práce s daty

Část první

- Vytvoření objektu pomocí object literal
- Vlastnosti objektu
- Tečková konvence vs. přístup k vlastnostem jako k prvkům pole
- Objekty v poli = zdroj dat, “databáze”

Část druhá

- tvorba vlastních DOM elementů
- innerHTML
- Procházení pole objektů a generování HTML

### Blok 2: Remote APIs

Část první

- Serverová API - REST
- Data ve formátu JSON
- Čtení dat pomocí fetch

Část druhá

- Práce s Google Sheets API

### Blok 3: Základy OOP

Část první

- Funkce jako prvky objektů
- `function` a `this`
- prototypy, vlastnost `__proto__`
- vlastnost `constructor` a `Object.create`

Část druhá

- Základy objektového myšlení
- Objekty jako samostatné jednotky

### Blok 4: Tvorba komponent

Část první

- Komponenty pomoci objektů
- `render`, `mount` a `update`

Část druhá

- Zpracování událostí v komponentách

### Blok 5: Webpack

- Rozdělení kódu na menší funkční celky
- ES6 Moduly, výhody a nevýhody
- Otázka zpětné kompatibility (až do ES5?)
- Tři techniky pro podporu:
  - Transpilace
  - Polyfilly
  - Bundling

### Blok 6: Opakování

- Příklady na práci s komponentami

## Sylabus React

### Blok 1: Úvod do Reactu

### Blok 2: Podmíněné zobrazení, dynamické třídy

### Blok 3: Události, stav

### Blok 4: Práce se stavem, zobrazování seznamů

### Blok 5: Životní cyklus komponenty, useEffect

### Blok 6: Komunikace mezi komponentami

### Blok 7: Komunikace mezi komponentami

### Blok 8: React router
