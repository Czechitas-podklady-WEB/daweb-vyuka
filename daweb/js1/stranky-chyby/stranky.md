## Vícestránkové aplikace

Málokteré webové aplikace sestávají pouze z jedné jediné stránky. Je zcela běžné, že weby obsahují nějaký typ navigace, pomocí které se můžeme přesouvat mezi jednotlivými stránkami či sekcemi webu.

Abychom mohli takové aplikace vytvořit se současnými znalostmi, budeme se držet následujícího schématu:

1. Pro každou stránku webu vytvoříme samostatný HTML soubor.
1. Pokud bude nějaká stránka obsahovat JavaScript, vytvoříme pro ni také samostatný JavaScript soubor a propojíme ho s příslušnou stránkou pomocí `<script>` tagu.

Celý postup si předvedeme na ukázkovém zpravodajském webu _Zprávičky_. Hotovou verzi si můžete [prohlédnout zde](https://czechitas-podklady.cz/ukazka-zpravicky). Repozitář s finálním řešením [najdete zde](https://github.com/Czechitas-podklady-WEB/ukazka-zpravicky).

::fig{src=assets/zpravicky.png}

## URL parametry

U vícestránkových aplikací často chceme zobrazit detail něčeho, co si uživatel vybere na hlavní stránce. Může jít například o produkt v e-shopu, detail nalezeného dopravního spojení nebo v našem případě o konkrétní zprávu na zpravodajském webu. Všechny tyto detaily mají společné to, že je potřeba je nějakým způsobem identifikovat. Máme tedy id produktu, id spoje nebo id zprávy. Jak ale uživatelem vybraný identifikátor předat na detailní stránku?

Jednou z možností je použít parametry v URL adrese. Všichni jste už jistě viděli adresy typu `https://www.google.com/search?q=vyhledavany+vyraz`. Parametry jsou vždy za otazníkem a oddělené ampersandem. V našem případě používáme například `/article.html?article=veverka_viki`. Na straně detailu pak můžeme parametry získat pomocí objektu `URLSearchParams`:

```js
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("article");
```
