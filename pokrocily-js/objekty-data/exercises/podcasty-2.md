---
title: Podcasty 2
demand: 3
---

Stáhněte si [vzorové řešení](../assets/podcasty-reseni.zip) aplikace podcasty z předchozí lekce. Otevřete si aplikaci v prohlížeši a přesuňte se do JavaScriptové konzole. Zkuste ručně vyrobit DOM element jedné epizody.

1. Pomocí funkce `document.createElement` vytvořte prázdný `div` a uložte si jej do proměnné `episodeElm`. Vyzkoušejte v konzoli, že se element povedlo vytvořit.
1. Nastavte elementu třídu `episode` a opět zkontrolujte, že se změna podařila.
1. Nastavte elementu `innerHTML`. Obsah je docela dlouhý řetězec, který se v konzoli píše nepohodlně. Vložte tedy do `innerHTML` zatím jen `div` s číslem episody. Opět otestujte, že se operace povedla.
1. Vyberte v konzoli element `episodes-list` a vložte do něj váš nový DOM element pomocí metody `appendChild`.

Nyní přesuneme náš kód z konzole do funkce.

1. Ve vašem programu vytvořte funkci `renderEpisode`, která bude mít tři parametry: `num`, `title` a `guest`. Funkce vrátí nový DOM element sestavený stejným způsobem jako jsme prve použili v konzoli. Atribut `innerHTML` už nastavte na plný obsah elementu a zakompounujte do něj údaje z parametrů funkce.
1. V programu najdete cyklus, který vytváři strukturu podcastu. Upravte tento cyklus tak, aby používal funkci `renderEpisode` a metodu `appendChild`.
