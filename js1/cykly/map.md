## `map`

Metoda `map` slouží k transformaci prvků pole. Prochází pole a každý prvek převádí na upravenou hodnotu. Výsledkem je nové pole s transformovanými prvky.

### Syntaxe

```js
const teplotyVeStupnichFahrenheit = [0, 32, 100, 212];
const teplotyVeStupnichCelsiu = teplotyVeStupnichFahrenheit.map((teplota) => {
  return ((teplota - 32) * 5) / 9;
});
```

### `querySelectorAll` a `map`

Na rozdíl od `forEach` metoda `map` neexistuje na objektu `NodeList` (návratová hodnota volání `querySelectorAll`). Proto je potřeba před použitím `map` z `NodeList` udělat klasické pole pomocí funkce `Array.from` například takto:

```html
<h2>Nákupní seznam</h2>
<ul class="seznam">
  <li>jedno zelené jablko</li>
  <li>kilo třešní</li>
  <li>tři zelené papriky</li>
  <li>dva banány</li>
  <li>pár jahod</li>
</ul>
```

```js
const seznam = document.querySelector('.seznam');
const polozkyVSeznamu = seznam.querySelectorAll('li');
const polePolozekVSeznamu = Array.from(polozkyVSeznamu);

const novePole = polePolozekVSeznamu.map((polozka) => {
  return polozka.innerHTML.replace('zelené', 'červené');
});

seznam.innerHTML = novePole.join(', ');
```

V tomto příkladu se každý prvek pole `polePolozekVSeznamu` prochází a z jeho `innerHTML` se převádí ze slovo „zelené“ na „červené“. Výsledkem je nové pole `novePole` s transformovanými prvky. Nakonec se nové prvky vypíší na stránku pomocí metody `join` a vlastnosti `innerHTML` elementu seznam.
