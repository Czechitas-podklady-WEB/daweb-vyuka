---
title: Oblíbené citáty
demand: 3
context: lekce
lead: Dejte uživateli možnost seřadit citáty podle oblíbenosti.
solutionAccess: protected
---

Pokračujte v projektu z předchozího cvičení.

1. V souboru `quotes.js` vytvořte funkci `moveToTop`, která obdrží index citátu a přesune jej na první místo v poli. Funkci exportujte, abyste ji mohli použít v `index.jsx`. Pro smazání prvku pole a vložení na začátek se vám budou hodit metody [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) resp. [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift).
1. V souboru `index.jsx` vytvořte funkci `renderQuotes`. V té pomocí metody `forEach` projděte pole citátů a vypište je do stránky.
1. Pomocí `querySelectorAll` vyberte všechny citáty a pověste na ně posluchač události `click`. Když uživatel klikne na citát, zavolejte funkci `moveToTop` a poté `renderQuotes`. Tím by se měl vybraný citát přesunout na první místo na stránce.
1. Vyzkoušejte si, že takto můžete na stránce seřadit citáty podle oblíbenosti.
