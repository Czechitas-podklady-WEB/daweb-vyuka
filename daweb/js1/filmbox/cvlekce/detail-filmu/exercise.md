---
title: 'Bonus: Detail filmu'
demand: 4
context: lekce
solutionAccess: protected
---

Zobrazte příslušné informace o filmu na stránce s detailem.

1. Protože stránka `film.html` obsluhuje datail všech filmů, budete si muset přes adresu stránky předat informaci, který konkrétní film si uživatel právě prohlíží. Využijeme toho, že dna konec adresy můžeme přidat znak mřížky (`#`) a za něj libovolný text, který následně můžeme v JavaScriptu přečíst. (V tomto kroku jsou jen informace, nic neděláte.)
1. V souboru `seznam.js` v HTML kódu z předchozího úkolu (který zobrazuje jeden film v seznamu) přidejte do odkazu `href` za `film.html` znak mřížky (`#`) a za něj ještě unikátní identifikátor (`id`), který má každý film jiný. HTML by pak mělo vypadat zhruba takto:

   <!-- prettier-ignore -->
   ```js
   `<a href="film.html#${id}" class="btn btn-primary">Přehrát</a>`
   ```

1. V souboru `film.js` zjistěte, na film s jakým `id` se uživatel chce dívat – zjistíte to z property `location.hash`. Všimněte si, že hodnota vlastnosti `hash` začíná znakem mřížky (`#`). Id v poli `filmy` mřížkou nezačínají. Mřížku vhodnou metodou na řetězcích odřízněte. Mřížka není potřeba, je spíš na škodu.

1. Cyklem prohledejte pole `filmy` a film s `id` stejným jako hash (bez mřížky) si poznamenejte do proměnné. (Případně můžete také použít funkci [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) na poli.)

1. Vepište informace (název, popis, plakát) o nalezeném filmu do stránky. Upravte textový obsah a atributy příslušných potomků prvku `#detail-filmu`. Do `.card-text` vepište dlouhý popis filmu.

::fig[řešení]{src=assets/reseni.jpg size=60}

:::solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/projekt-FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/projekt-FilmBox/tree/reseni).

:::
