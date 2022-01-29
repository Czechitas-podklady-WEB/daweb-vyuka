## Pokročilejší práce s třídami

Představme si nějaký DOM element, který na sobě má navázáno vícero CSS tříd. Například nějaké přepínací tlačíko, které začíná ve stavu 'vypnuto'.

```html
<button id="login-btn" class="btn btn--off btn--primary">Login</button>
```

Dejme tomu, že bychom chtěli prostřední třídu odstranit a tím tlačítko přepnout do stavu 'zapnuto'. Se současnými dovednostmi můžeme udělat například toto.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.className = 'btn btn--primary';
```

Takto ovšem nastavujeme celý atribut `class`. Musíme tedy znát všechny ostatní třídy, které na tlačítku máme. To nám začne časem velmi znepříjemňovat život. JavaScript však nabízí vlastnost `classList`, díky které můžeme s CSS třídami na elementu pracovat mnohem přímočařeji. Výše zmíněný úkol pak vyřešíme takto.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.classList.remove('btn--off');
```

Metoda `remove` udělá veškerou špinavou práci za nás nehledě na to jaké další CSS třídy jsou na element navázány. Pokud chceme naopak třídu přidat, použíjeme metodu `add`.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.classList.add('btn--off');
```

### Přepínání

Naše tlačítko funguje jako přepínač. Chceme, aby například na kliknutí přepnulo stav z 'vypnuto' na 'zapnuto' a obráceně. Což v řeči programátorské znamená: když element obsahuje třídu `btn--off` tak ji odstraň, v opačném případě ji přidej. Takový kód můžeme napsat pomocí metody `contains`.

```js
const btnElm = document.querySelector('#login-btn');
if (btnElm.classList.contains('btn--off')) {
  btnElm.classList.remove('btn--off');
} else {
  btnElm.classList.add('btn--off');
}
```

Přepínání tříd je však tak častá situace, že `classList` má přímo na toto metodu `toggle`. Ta dělá přesně to, co náš kód výše. Můžeme jej tak zkrátit takto.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.classList.toggle('btn--off');
```

Pokud se daná CSS třída na elementu nachází, metoda `toggle` ji odstraní. Pokud tam naopak není, metoda `toggle` ji přidá.

Pomocí vlastnosti `classList` jsme opět rozšířili náš arzenál pro manipulaci s obsahem stránky a také máme život zase o kousek jednodušší.