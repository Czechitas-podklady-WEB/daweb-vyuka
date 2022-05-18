## Pokročilejší práce s třídami

Představme si nějaký DOM element, který na sobě má navázáno vícero CSS tříd. Například nějaké přepínací tlačíko, které začíná ve stavu 'vypnuto'.

```html
<button id="login-btn" class="btn btn--off btn--primary">Login</button>
```

Dejme tomu, že bychom chtěli prostřední třídu odstranit a tím tlačítko přepnout do stavu 'zapnuto'. Se současnými dovednostmi můžeme udělat například toto.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.classList.remove('btn--off');
```

Pokud chceme tlačítko vrátit do stavu vypnuto, můžeme třídu opět přidat.

```js
btnElm.classList.add('btn--off');
```

Naše tlačítko funguje jako přepínač. Chceme, aby například na kliknutí přepnulo stav z 'vypnuto' na 'zapnuto' a obráceně. To v řeči programátorské znamená: když element obsahuje třídu `btn--off` tak ji odstraň, v opačném případě ji přidej. Takový kód můžeme napsat pomocí metody `contains`.

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

### Vlastnost className

Občas nastane situace, kdy chceme nastavit obsah celého atributu `class` najednou a nechceme se piplat s přidáváním nebo odebiráním jednotlivých CSS tříd. K tomu můžeme použít vlastnost `className`.

Pokud bychom například chtěli, aby na našem přepínacím tlačíku zůstala jen třída `btn`, místo složitého mazání všech ostatních tříd prostě atribut `class` nastavíme natvrdo.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.className = 'btn';
```

Podobným postupem můžeme například smazat úplně všechny CSS třídy na nějakém prvku.

```js
const btnElm = document.querySelector('#login-btn');
btnElm.className = '';
```
