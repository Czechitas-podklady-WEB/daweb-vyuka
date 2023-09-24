## Specificita

Existují různé způsoby, jak vybírat prvky na stránce - pomocí selektorů typu element, třída, pseudotřídy, kombinátory. Co se ale stane, pokud jednomu elementu nastavíme jednu vlastnost na různé hodnoty? Tady přichází do hry CSS specificita. Je to priorita různých selektorů v CSS. Určuje nám, jaké styly se aplikují. Každý ze selektorů má nějakou váhu, prioritu při vyhodnocování stylů.

### Jak funguje přebíjení stylů

Často stylujeme jeden element na více různých místech v CSS. To není problém, protože různé třídy většinou stylují různé vlastnosti. Občas se ale může se stát, že jednu hodnotu nastavíme v CSS na dvě různé vlastnosti. V takovém případě se prohlížeč musí rozhodnout, kterou hodnotu vlastnosti použije.
Pokud mají selektory stejnou specificitu, prohlížeč prostě vezme tu hodnotu, kterou přečetl jako poslední, tedy tu, která je v CSS dokumentu nejníž. Pokud mají selektory různou specificitu, prohlížeč si spočítá, který selektor má vyšší, a to stylování použije. Pamatujte si, že přebíjení stylů se děje pokud **jednu CSS vlastnost nastavíme na dvě různé hodnoty**.

#### Selektor typu element

Jeden ze způsobů je vybírat prvky pomocí jejich značky. Pokud nastavíme prvku `h1` barvu na různé hodnoty, bude platit ta, která je v CSS napsaná jako poslední. Je to proto, že prohlížeč „čte“ CSS dokument odshora dolů.

#### Selektor typu třída

Pokud bychom použili na vybrání stejného prvku třídu, barva se nastaví podle třídy, a to i když bude v CSS nahoře. Je to proto, že selektor typu _třída_ má větší specificitu, má přednost, před selektorem typu _element_.

#### Selektor typu id

Pokud bychom přidali prvku _id_, stylování podle _id_ přebije i třídu, a to proto, že má ještě větší specificitu.

## Kalkulace specificity

Jelikož můžeme používat i kombinace selektorů, například `h1.hlavni`, existuje způsob, jak zjistit, co se v CSS propíše. Je to kalkulace specificity prvku.

- Selektor typu _element_ má specificitu **`0, 0, 1`**
- Selektor typu _třída_ má specificitu **`0, 1, 0`**
- Selektor typu _id_ má specificitu **`1, 0, 0`**

Při použití kombinace selektorů tedy sečteme kolikrát se jaký selektor používá a víme jeho specificitu.

Pokud bychom jeden prvek stylovali pomocí dvou selektorů:

- `body > h1.hlavni-nadpis`
- `h1.hlavni-nadpis.reportaz`

Porovnáme si specificitu jednotlivých selektorů.

- **`body > h1.hlavni-nadpis`** je selektor, který kombinuje dvakrát selektor podle elementu (`body` a `h1`) a jednou třídu `hlavni-nadpis`. Specificita je tedy **`0, 1, 2`**.
- **`h1.hlavni-nadpis.reportaz`** je selektor, který používá jednou element `h1` a dvě třídy `hlavni-nadpis` a `reportaz`. Specificita je **`0, 2, 1`**.

Při porovnání vidíme, že druhý selektor má vyšší specificitu `0, 2, 1`, na dané vlastnosti bude tedy použito stylování podle selektoru `h1.hlavni-nadpis.reportaz`.

### Specificita - cheatsheet

Podívejte se na níže ukázaný _cheatsheet_. Vidíte kalkulaci specificity, od nejniží po nejvyšší

::fig[Cheatsheet]{src=assets/cheatsheet.png}

<br/>

#### Inline stylování v HTML

Na obrázku vidíte, že ještě vyšší specificitu než **id**, má _inline stylování_ přímo v HTML kódu. To se aplikuje tak, že přímo u danému prvku v HTML se použije atribut `style`, do kterého se styly napíšou.

```html
<p style="color:red;">A red paragraph.</p>
```

Tento způsob stylování není doporučovaný, jelikož může vnést do stylování zmatek. Existují ale případy, kdy se tomu nejde vyhnout, například u stylování některých e-mailových šablon.

#### `!important`

Úplně nejvyšší specificitu, která přebije i inline HTML stylování, má použití `!important` v CSS stylování. Tento příklad si pouze ukážeme, ale takové stylování není _good practice_ a je lepší se mu vyhnout. Použití `!important` je možné k přebití stylování, které se tvoří dynamicky pomocí JavaScriptu a není jiná možnost úpravy.

<br/>

### Praktické tipy

Ve VSCode můžeme zjistit specificitu selektoru přímo při najetí na daný selektor v souboru CSS. Objeví se okénko, které kromě dalších informací ukáže i kalkulaci specificity selektoru.

::fig[Vscode kalkulace specificity]{src=assets/CSS-specificita.png}

<br/>

Další způsob je podívat se do vývojářských nástrojů. V záložce **styles** je možné vidět, který styl se aplikuje a které se přebijí.

::fig[Devtools specificity]{src=assets/Devtools-specificity.png}
