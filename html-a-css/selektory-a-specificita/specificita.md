## Specificita

Existují různé způsoby, jak vybírat prvky na stránce - pomocí selektorů typu element, třída, pseudotřídy, kombinátory. Co se ale stane, pokud jednomu elementu nastavíme jednu vlastnost na různé hodnoty? Tady přichází do hry CSS specificita. Je to priorita různých selektorů v CSS. Určuje nám, jaké vlastnosti se aplikují. Každý ze selektorů má nějakou váhu, prioritu při vyhodnocování stylů.

#### Selektor typu element

Jeden ze způsobů je vybírat prvky pomocí jejich značky. Pokud nastavíme prvku `h1` barvu na různé hodnoty, bude platit ta, která je v CSS napsaná jako poslední. Je to proto, že prohlížeč "čte" CSS dokument odshora dolů.

#### Selektor typu třída

Pokud bychom použili na vybrání stejného prvku třídu, barva se nastaví podle třídy, a to i když bude v CSS nahoře. Je to proto, že selektor typu třída, má větší specificitu, má přednost, před selektorem typu element.

#### Selektor typu id

Pokud bych přidala prvku id, stylování podle id přebije i třídu, a to proto, že má ještě větší specificitu.

## Kalkulace specificity

Jelikož můžeme používat i kombinace selektorů, například `h1.hlavni`, potřebujeme způsob, jak zjistit, co se v CSS propíše. Proto existuje kalkulace specificity prvku.

- Selektor typu element má specificitu `0, 0, 1`
- Selektor typu třída má specificitu `0, 1, 0`
- Selektor typu id má specificitu `1, 0, 0`

Při použití kombinace selektorů tedy prostě sečteme kolikrát se jaký selektor používá a víme jeho specificitu.

Selektor `main > h1.hlavni-nadpis` bude mít specificitu `0, 1, 2`
