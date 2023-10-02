## Vícestránkové aplikace

Málokteré webové aplikace sestávají pouze z jedné jediné stránky. Je zcela běžné, že weby obsahují nějaký typ navigace, pomocí které se můžeme přesouvat mezi jednotlivými stránkami či sekcemi webu.

Abychom mohli takové aplikace vytvořit se současnými znalostmi, budeme se držet následujícího schématu:

1. Pro každou stránku webu vytvoříme samostatný HTML soubor.
1. Pokud bude nějaká stránka obsahovat JavaScript, vytvoříme pro ni také samostatný JavaScript soubor a propojíme ho s příslušnou stránkou pomocí `<script>` tagu.

Celý postup si předvedeme na ukázkovém zpravodajském webu _Zprávičky_. Hotovou verzi si můžete [prohlédnout zde](https://czechitas-podklady.cz/ukazka-zpravicky). Repozitář s finálním řešením [najdete zde](https://github.com/Czechitas-podklady-WEB/ukazka-zpravicky).

::fig{src=assets/zpravicky.png}

## URL hash

U vícestránkových aplikací často chceme zobrazit detail něčeho, co si uživatel vybere na hlavní stránce. Může jít například o produkt v e-shopu, detail nalezeného dopravního spojení nebo v našem případě o konkrétní zprávu na zpravodajském webu. Všechny tyto detaily mají společné to, že je potřeba je nějakým způsobem identifikovat. Máme tedy id produktu, id spoje nebo id zprávy. Jak ale uživatelem vybraný identifikátor předat na detailní stránku?

Jednou z možností je použít takzvaný _URL hash_. Tento postup je s našimi současnými znalostmi snadno pužitelný. V praxi by se použil postup jiný, který si ale ukážeme až později.

Na konci adresy URL můžeme za symbol hash kříže `#` uvést jakýkoliv kousek textu. Například:

```
https://localhost:3000#muj-text
```

Tato část adresy se dá získat z vlastnosti `window.location.hash`:

```js
const identifikator = window.location.hash.slice(1);
```

Tento trik můžeme využít k tomu, abychom si předali id článku, který chceme zobrazit, například `/article.html#veverka_viki`.
