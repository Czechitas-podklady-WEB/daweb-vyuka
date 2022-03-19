## Specificita

Existují různé způsoby, jak vybírat prvky na stránce - pomocí selektorů typu element, třída, pseudotřídy, kombinátory. Co se ale stane, pokud jednomu elementu nastavíme jednu vlastnost na různé hodnoty? Tady přichází do hry CSS specificita. Je to priorita různých selektorů v CSS. Určuje nám, jaké vlastnosti se aplikují. Každý ze selektorů má nějakou váhu, prioritu při vyhodnocování stylů.

### Jak funguje přebíjení stylů

Často stylujeme jeden element na více různých místech v CSS. To není problém, protože různé třídy většinou stylují různé vlastnosti. V tom případě se projeví stylování určené pomocí všech selektorů. Občas se ale může se stát, že jednu hodnotu nastavíme v CSS na dvě různé vlastnosti. V takovém případě se prohlížeč musí rozhodnout, kterou hodnotu vlastnosti použije.
Pokud mají selektory stejnou specificitu, prohlížeč prostě vezme tu hodnotu, kterou přečetl jako poslední, tedy tu, která je v CSS dokumentu nejníž. Pokud mají selektory různou specificitu, prohlížeč si spočítá, který selektor má vyšší, a to stylování použije. Pamatujte si, že přebíjení stylů se děje pouze pokud **jednu CSS vlastnost nastavíme na dvé různé hodnoty**.

#### Selektor typu element

Jeden ze způsobů je vybírat prvky pomocí jejich značky. Pokud nastavíme prvku `h1` barvu na různé hodnoty, bude platit ta, která je v CSS napsaná jako poslední. Je to proto, že prohlížeč "čte" CSS dokument odshora dolů.

#### Selektor typu třída

Pokud bychom použili na vybrání stejného prvku třídu, barva se nastaví podle třídy, a to i když bude v CSS nahoře. Je to proto, že selektor typu třída, má větší specificitu, má přednost, před selektorem typu element.

#### Selektor typu id

Pokud bych přidala prvku id, stylování podle id přebije i třídu, a to proto, že má ještě větší specificitu.

## Kalkulace specificity

Jelikož můžeme používat i kombinace selektorů, například `h1.hlavni`, potřebujeme způsob, jak zjistit, co se v CSS propíše. Proto existuje kalkulace specificity prvku.

- Selektor typu element má specificitu **`0, 0, 1`**
- Selektor typu třída má specificitu **`0, 1, 0`**
- Selektor typu id má specificitu **`1, 0, 0`**

Při použití kombinace selektorů tedy prostě sečteme kolikrát se jaký selektor používá a víme jeho specificitu.

Pokud bychom jeden prvek stylovali pomocí dvou selektorů:

- `body > h1.hlavni-nadpis`
- `h1.hlavni-nadpis.reportaz`

Porovnáme si specificitu jednotlivých selektorů. **`body > h1.hlavni-nadpis`** je selektor, který kombuje dvakrát selektor podle elementu (`body` a `h1`) a jednou třídu `hlavni-nadpis`. Specificita je tedy **`0, 1, 2`**. Zatímco **`h1.hlavni-nadpis.reportaz`** je selektor, který používá jednou element `h1` a dvě třídy `hlavni-nadpis` a `reportaz`. Specificita je **`0, 2, 1`**.
Při porovnání vidíme, že druhý selektor má vyšší specificitu `0, 2, 1`, na dané vlastnosti bude tedy použito stylování podle selektoru `h1.hlavni-nadpis.reportaz`.

## Specificita - cheatsheet

Podívejte se na níže ukázaný cheatsheet. Vidíte kalkulaci specificity, od nejniží po nejvyšší

::fig[Cheatsheet]{src=assets/cheatsheet.png}

<br/>

### Inline stylování v HTML

Úplně nejníže na obrázku vidíš, že ještě vyšší specificitu než **id**, má inline html stylování. To se aplikuje tak, že přímo u danému prvku do HTML se použije atribut `style`, do kterého se styly napíšou.

```html
<p style="color:red;">A red paragraph.</p>
```

Tento způsob stylování není doporučovaný, jelikož může vnést do stylování zmatek. Existují ale případy, kdy se tomu nejde vyhnout, například u stylování některých e-mailových šablon.

### `!important`

Úplně nejvyšší specificitu, která přebije i inline HTML stylování má použití `!important` v CSS stylování. Tento příklad si pouze ukážeme, ale takové stylování není "good practice" a je lepší se mu vyhnout. Použití `!important` je možné k přebití stylování, které se tvoří dynamicky pomocí JS a není jiná možnost úpravy.

::fig[important]{src=assets/important.png}

<br/>

### Praktické tipy

Ve VSCode můžeme zjistit specificitu selektoru přímo při najetí na daný selektor v souboru css. Objeví se okénko, které kromě dalších informací ukáže i kalkulaci specificity selektoru.

::fig[Vscode kalkulace specificity]{src=assets/CSS-specificita.png}

<br/>

Další způsob je podívat se do vývojářských nástrojů. V záložce **styles** je možné vidět, který styl a aplikuje a které se přebijí.

::fig[Devtools specificity]{src=assets/Devtools-specificity.png}
