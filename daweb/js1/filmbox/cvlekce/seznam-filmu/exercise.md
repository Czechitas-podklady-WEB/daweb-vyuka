---
title: Seznam filmů
demand: 3
context: cvlekce
solutionAccess: protected
---

Na stránce se seznamem filmů vypište karty se všemi filmy z pole `filmy`.

1.  Přejděte v prohlížeči na stránku se seznamem.

1.  Na konci souboru `seznam.js` pomocí `document.querySelector` vyhledejte prvek s id `seznam-filmu`.

1.  Vymažte tomuto prvku jeho vnitřní HTML, aby byl prázdný.

1.  Pomocí cyklu projděte všechny filmy z předpřipraveného pole a pro každý přidejte do prvku `#seznam-filmu` následující HTML doplněné o patřičné informace (název, ochutnávku, plakát).

    ```html
    <div class="col">
      <div class="card">
        <img
          src="https://via.placeholder.com/780x520?text=Plak%C3%A1t"
          width="780"
          height="520"
          class="card-img-top"
          alt="plakát"
        />
        <div class="card-body">
          <h5 class="card-title">Název filmu</h5>
          <p class="card-text">Krátký popisek filmu.</p>
          <a href="film.html" class="btn btn-primary">Přehrát</a>
        </div>
      </div>
    </div>
    ```

::fig[řešení]{src=assets/reseni.jpg size=60}

#### Bonus

Přidejte do pole s filmy nějaký další dle vlastního výběru.

:::solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/projekt-FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/projekt-FilmBox/tree/reseni).

:::
