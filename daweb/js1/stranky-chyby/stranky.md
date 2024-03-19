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

## Metoda `find`

Kromě metod `forEach` a `map`, které jsme si už ukázali v minulé lekci, existuje v JavaScriptu ještě řada dalších metod na polích, které nám usnadní práci s daty. Jednou z hlavních je metoda `find`, která slouží k vyhledávání prvků v poli. Tuto metody potřebujeme, abychom v poli zpráv našli tu, kterou chce uživatel zobrazit.

Metoda `find` funguje tak, že prochází pole a pro každý prvek zavolá námi předanou funkci. Potud to je stejný princip jako u metody `forEach`. Na rozdíl od `forEach` ale metoda `find` očekává, že naše funkce vrátí `true` nebo `false`. Jakmile `find` narazí na prvek, pro který naše funkce vrátí `true`, vrátí tento prvek a zbytek pole ignoruje.

```js
const uzivatele = [
  { jmeno: "Viki", vek: 25 },
  { jmeno: "Pepa", vek: 30 },
  { jmeno: "Karel", vek: 40 },
];

const viki = uzivatele.find((uzivatel) => uzivatel.jmeno === "Viki");
console.log(viki); // ⟶ { jmeno: "Viki", vek: 25 }
```

Pokud naše funkce pro žádný prvek nevrátí `true`, metoda `find` vrátí `undefined`.

```js
const evca = uzivatele.find((uzivatel) => uzivatel.jmeno === "Evča");
console.log(evca); // ⟶ undefined
```

V naší aplikaci používáme metodu `find` k tomu, abychom našli zprávu, jejíž id odpovídá hashi v URL.

```js
const articleId = window.location.hash.slice(1);
const articleData = articles.find((article) => article.id === articleId);
```
