---
title: Oblíbené citáty
demand: 3
lead: Dejte uživateli možnost seřadit citáty podle oblíbenosti.
solutionAccess: lock
---

Pokračujte v projektu z předchozího cvičení.

1. V souboru `quotes.js` vytvořte funkci `moveToTop`, která obdrží index citátu a přesune jej na první místo v poli. Funkci exportujte, abyste ji mohli použít v `index.js`.
1. V souboru `index.js` vytvořte funkci `renderQuotes`. V té pomocí metody `forEach` projděte pole citátů a vypište je do stránky.
1. Pomocí `querySelectorAll` vyberte všechny citáty a pověste na ně posluchač události `click`. Když uživatel klikne na citát, zavolejte funkci `moveToTop` a poté `renderQuotes`. Tím by se měl vybraný citát přesunout na první místo na stránce.
1. Vyzkoušejte si, že takto můžete na stránce seřadit citáty podle oblíbenosti.
