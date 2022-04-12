---
title: Filmy pokračování
demand: 4
---

Pokračujte v předchozím cvičení. Cílem cvičení je vytvořit v projektu novou komponentu, která bude sloužit pro zabrazování seznamu filmů.

1. V projektu vytvořte složku `MovieList` a v ní vytvořte soubory `index.js` a `style.css`.
1. Napište kód pro komponentu `MovieList`, která ve svých props pod vlastností `movies` očekává pole filmů. Přijaté filmy vykreslí uvnitř elementu `<ul class="movie-list"></ul>` pomocí komponenty `Movie`, kterou již známe z předchozího cvičení.
1. Upravte hlavní `index.js` tak, aby používal nově vytvořenou komponentu `MovieList` a stažený json s daty jí předával tak, jak jej komponenta očekává.
Kódem, který komponenta vygeneruje, nahraďte innerHTML elementu `#app`.

#### Bonus

1. Přesuňte styly patřící komponentě `MovieList` k jejím stylům. Nezapomeňte styly komponenty připojit v souboru `index.html`.
1. Prohlédněte si [dokumentaci filmového API](https://apps.kodim.cz/daweb/trening-api/docs/filmove-api). Na základě této dokumentace zobrazte na stránce pouze filmy z roku 1994.

---solution

1. ```js
    //MovieList/index.js
    import { Movie } from './../Movie/index.js';

    export const MovieList = (props) => {
      const { movies } = props;
      let result = `<ul class="movie-list">`;
      for (let i = 0; i < movies.length; i = i + 1) {
        result += Movie(movies[i]);
      }
      result += `</ul>`;

      return result;
    };
   ```
1. ```js
    //index.js
    import { MovieList } from './MovieList/index.js';

    fetch('https://apps.kodim.cz/daweb/trening-api/apis/movies')
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('#app').innerHTML = MovieList({
          movies: data,
        });
      });
   ```
