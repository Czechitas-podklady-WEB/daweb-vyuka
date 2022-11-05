---
title: Filmy
demand: 3
---

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/filmy-zadani) se stránkou, která zobrazuje seznam filmů. Zatím na stránce vidíme film pouze jeden jako příklad. Vaším cílem bude zobrazovat filmy stažené z API.

1. Spusťte si připravenou stránku, prohlédněte `index.html` a strukturu filmu v seznamu.
1. Seznam filmů budeme stahovat z endpointu `https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies`, jak vypadá struktura dat si můžete ověřit otevřením adresy v prohlížeči.
1. Napište JavaScriptový kód, který zajistí stažení pole filmů z API. Zatím jej vypište do konzole.
1. Někam si zkopírujte strukturu jednoho filmu z `index.html`. Obsah elementu `.movie-list` smažte, aby zůstal prázdný.
1. Upravte kód tak, abyste naplnili element `.movie-list` obsahem staženým z API.

---solution

Soubor `index.js`:

```js
const renderMovies = (movies) => {
  const movieListElm = document.querySelector('.movie-list');
  movieListElm.innerHTML = movies
    .map((movie) => {
      return `
    <li class="movie-detail">
    <div class="movie-poster">
      <img 
        src="${movie.posterUrl}"
        alt="${movie.title}"
      />
    </div>
    <div class="movie-info">
      <h2 class="movie-title">${movie.title}</h2>
      <div class="movie-year">Rok vydání: ${movie.year}</div>
      <div class="movie-link">
        <a href="${movie.url}" target="_blank">Odkaz na CSFD</a>
      </div>
    </div>
  </li>
    `;
    })
    .join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => {
    return response.json();
  })
  .then(renderMovies);
```
