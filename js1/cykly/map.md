## `map`

// K doplnění

### `querySelectorAll` a `map`

Na rozdíl od `forEach` metoda `map` neexistuje na objektu `NodeList` (návratová hodnota volání `querySelectorAll`). Proto je potřeba před použitím `map` z `NodeList` udělat klasické pole pomocí funkce `Array.from` například takto:

<!-- Vymyslet lepší příklad -->

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

seznam.innerHTML = novePole.join('');
```

// K doplnění
