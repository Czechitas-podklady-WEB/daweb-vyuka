## Vstup pomocí textových polí

Poslední věc, která nám chybí pro příjemnou interakci s uživatelem, je získávat vstup jinak, než pomnocí funkce `prompt`. Naštěstí se vším, co už umíme, je to jen malý krůček. Stačí kdekoliv na stránce použít textové políčko, například takto.

```html
<input id="my-input" type="text" />
```

Kdykoliv chceme získat text, který uživatel do políčka vepsal, stačí nám toto políčko vybrat pomocí `querySelector` a použít vlastnost `value`.

```js
const inputElm = document.querySelector('#my-input');
const text = inputElm.value;
```

Stejně jako vlastnost `textContent`, i vlastnost `value` je jak pro čtení, tak pro zápis. Můžeme tak řetězec z políčka přečíst, ale také jej políčku nastavit. Všimněte si, že schválně používám slovo řetězec. Stejně jako u funkce `prompt` i zde platí, že vlastnost `value` je vždy řetězec. Je tedy opět nutné mít se na pozoru, chceme-li od uživatele například číslo, a provést nezbytnou konverzi.

```js
const inputElm = document.querySelector('#my-input');
const num = Number(inputElm.value);
```

Od této chvíle navždy se tedy vzdáváme funkce `prompt` a budeme už používat pouze textová políčka. Ta můžeme hezky nastylovat, aby dobře zapadla do grafiky našich stránek.
