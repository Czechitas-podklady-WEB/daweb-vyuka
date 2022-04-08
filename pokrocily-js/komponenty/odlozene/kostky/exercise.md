---
title: Kostky
demand: 3
---

Stáhněte si [základ stránky](../assets/kostky-zadani.zip) zobrazující několik hracích kostek.

1. Prohlédněte si HTML kód a zapamatujte si, jak se vytváří kostka s danou hodnotou. Poté v HTML ručně vymažte obsah elementu `dice-row`. Jeho obsah totiž budeme tvořit pomocí JavaScriptu.
1. Vytvořte pole `dice`, které bude obsahovat číselné hodnoty několika kostek, například 5, 1 a 3.
1. Napište funkci `updateDice`, která zobrazí kostky ve vašem poli. To provedete tak, že vyberete element `dice-row` a pomocí cyklu projdete celé pole kostek. Pro každou hodnotu v cyklu přidáte do `innerHTML` tohoto elementu jeden obrázek kostky.
1. Vyzkoušejte si v konzoli, že vaše funkce funguje. Přidejte do pole kostek novou hodnotu a vyzkoušejte, že po zavolání této funkce se stránka správně aktualizuje.
1. Upravte váš program tak, aby se po stisknutí tlačíka :i[Přidat] na stránce objevila nová kostka s nějakou hodnotou. Můžete ji zkusit rovnou vylosovat náhodně.
1. Upravte váš program tak, aby se po stisknutí tlačíka :i[Zamíchat] náhodně změnily hodnoty na všech kostkách, které jsou právě na stránce zobrazené.
