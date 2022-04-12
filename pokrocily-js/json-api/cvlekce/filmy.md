---
title: Filmy
demand: 3
---

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/filmy-zadani) se stránkou, která zobrazuje seznam filmů.
Cílem úkolu je nevypisovat filmy z pole, které je připravené v JS souboru, ale stahovat seznam filmů z API a tyto filmy na stránce zobrazovat.

1. Spusťte si připravenou stránku, prohlédněte hlavní `index.js` a komponentu `Movie/index.js`, ať víte, jak stránka nyní funguje.
1. V hlavním `index.js` smažte/zakomentujte kód s polem filmů v proměnné `movies` a cyklus, který toto pole prochází
1. Seznam filmů budeme stahovat z endpointu `https://apps.kodim.cz/daweb/trening-api/apis/movies`, jak vypadá struktura dat, si můžete ověřit otevřením adresy v prohlížeči.
1. Napište javascriptový kód, který zajistí stažení pole filmů a vypište toto pole filmů do konzole.
1. Upravte kód tak, aby se prošlo pole filmů a jednolitvé filmy se přidaly na stránku do elementu `.movie-list` s použitím komponenty `Movie`

---solution

1. ```js
    import { Movie } from './Movie/index.js';

    fetch('https://apps.kodim.cz/daweb/trening-api/apis/movies')
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < json.length; i = i + 1) {
          document.querySelector('.movie-list').innerHTML += Movie(json[i]);
        }
      });
   ```
