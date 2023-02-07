---
title: 'Bonus: Detail filmu'
demand: 4
---

Zobrazte příslušné informace o filmu na stránce s detailem.

1. Protože stránka `film.html` obsluhuje datail všech filmů, budete si muset přes adresu předat informací, který konkrétní film si uživatel právě prohlíží. V HTML z předchozího úkolu přidejte do odkazu `href` za znak mřížky (`#`) ještě unikátní identifikátor (`id`), který má každý film vlastní. HTML by pak mělo vypadat zhruba takto:

   <!-- prettier-ignore -->
   ```js
   `<a href="film.html#${id}" class="btn btn-primary">Přehrát</a>`
   ```

1. Najděte prvek s id `detail-filmu` a zařiďte, aby se následující kód vykonal, pouze pokud je prvek přítomen.

1. Zjistěte, na film s jakým `id` se uživatel chce dívat kódem `location.hash`. Všimněte si, že hodnota vlastnosti `hash` začíná znakem mřížky (`#`). Id v poli `filmy` mřížkou nezačínají. Mřížku vhodnou metodou na řetězcích odřízněte. Není potřeba. Je spíš na škodu.

1. Cyklem prohledejte pole `filmy` a film se stejným id si poznamenejte do proměnné.

1. Vepište informace (název, popis, plakát) o nalezeném filmu do stránky. Upravte textový obsah a atributy příslušných potomků prvku `#detail-filmu`. Do `.card-text` vepište dlouhý popis filmu.

::fig[řešení]{src=assets/reseni.jpg size=60}

---solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni).
