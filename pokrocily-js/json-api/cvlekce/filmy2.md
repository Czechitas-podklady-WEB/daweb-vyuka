---
title: Filmy pokračování
demand: 4
---

Pokračujte v předchozím cvičení. Cílem cvičení je vytvořit v projektu novou komponentu, která bude služit pro zabrazování seznamu filmů.

1. V projektu vytvořte složku `MovieList` a v ní vytvořte soubory `index.js` a `style.css`
1. Napište kód pro komponentu `MovieList`, která ve svých props pod vlastností `movies` očekává pole filmů. Přijaté filmy vykreslí uvnitř elementu `<ul class="movie-list"></ul>` pomocí komponenty `Movie`, kterou již známe z předchozího cvičení. 
1. Upravte hlavní `index.js` tak, aby používal nově vytvořenou komponentu `MovieList` a stažený json s daty jí předával tak, jak jej komponenta očekává.
Kódem, který komponenta vygeneruje, nahraďte innerHTML elementu `#app`  
1. Bonus: Přesuňte styly patřící komponentě `MovieList` k jejím stylům. Nezapomeňte styly komponenty připojit v souboru `index.html`
1. Bonus 2: Prohlédněte si [dokumentaci filmového API](https://apps.kodim.cz/daweb/trening-api/docs/filmove-api). Na základě této dokumentace zobrazte na stránce pouze filmy z roku 1994
