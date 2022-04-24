V předešlé lekci jsme se naučili, jak pomocí API měnit data na serveru. To je však pouze první část příběhu. Poté co změníme data, musíme je také uživateli správně zobrazit na stránce, by viděl, že se jím provedené změny skutečně staly.

## Aktualizace obsahu stránky

Budeme pracovat s [poslední verzí](https://github.com/Czechitas-podklady-WEB/skladani-komponent) našeho nákupního seznamu. Při práci s požadavekm POST už jsme si vyzkoušeli, jak do seznamu pomocí API přidat novou položku. Abychom si pro tuto chvíli situaci trochu ulehčili, prozatím si nákupní seznam uložíme natvrdo do proměnné.

```js
const list = [
  {
    product: 'Rohlíky',
    amount: '10',
    done: false,
  },
  {
    product: 'Rajčata',
    amount: '1kg',
    done: true,
  },
];
```

V našem projektu máme k dispozici komponentu `ShoppingList`, která umí vyrobit seznam položek.

```js
import { ShoppingList } from './ShoppingList/index.js';

const container = document.querySelector('#list-container');
container.innerHTML = ShoppingList({
  items: list,
});
```

Přidejme nyní na stránku tlačíko, pomocí kterého přidáme do seznamu novou položku.

Soubor `index.html`:

```html
<body>
  <div class="container">
    <button id="btn-add">Přidat</button>
  </div>
  <div id="list-container" class="container"></div>
</body>
```

Do souboru `index.js` přidáme:

```js
document.querySelector('#btn-add').addEventListener('click', () => {
  list.push({ product: 'koriandr', amount: '1 balení', done: false });
  console.log(list);
});
```

Po kliknutí na tlačítko se naše pole rozroste o jeden prvek, což si můžeme oveřit v konzoli. K našemu zklamání však obsah stránky zůstává pořád stejný. Je to logické, protože obsah seznamu `ul` jsme v JavaScriptu vytvořili hned po načtení stránky. Změna našeho pole tento kód znovu magicky nespustí. Musíme jej spustit sami ve chvíli, kdy chceme říct, že se má obsah seznam `ul` vytvořit znova podle nového obsahu pole `list`. Máme zde velkou výhodou v tom, že náš kód vytvářející obsah stránky dle pole `list` máme hezky zabalený v komponentě `ShoppingList`. Chceme-li tedy obsah stránky aktualizovat podle nových hodnot v poli `list`, stačí naši komponentu znova zavolat a vytvořit nové HTML.

```js
document.querySelector('#btn-add').addEventListener('click', () => {
  list.push({ product: 'koriandr', amount: '1 balení', done: false });
  console.log(list);
  const container = document.querySelector('#list-container');
  container.innerHTML = ShoppingList({
    items: list,
  });
});
```

Všimněte si, že takto zcela přepíšeme původní obsah `innerHTML` celého oddílu `.container`. Tím celou HTML strukturu vytváříme v podstatě úplně znova. Funkci `ShoppingList` tak můžeme zavolat pokaždé, když chceme, aby naše stránka zobrazila aktuální obsah našeho pole `list`. To nám dává svobodu si s polem dělat co chceme, přidávat položky, měnit položky, mazat položky a tak dále. Vždy jen pak musíme zavolat funkci `ShoppingList`, aby se změny projevily i v našem HTML. Můžete si to vyzkoušet rovnou z konzole a sledovat, jak stránka reaguje.

<!-- ### Zpracování vstupu od uživatele

Do teď jsme měnili obsah našeho pole programaticky. Nyní však chceme umožnit uživateli, aby mohl do nákupního seznamu sám přidat nějakou položku. K tomu budeme v HTML potřebovat textové políčka pro název a množství, a tlačítko pro provedení samotné akce.

```html
<section id="list-section"></section>

<input type="text" id="product-input" />
<input type="text" id="amount-input" />
<button id="add-btn">Přidat</button>

<script src="index.js"></script>
</body>
```

Když uživatel klikne na tlačíko, musíme udělat tyto tři věci:

1. získat příslušné hodnoty z textových políček,
1. přidat do pole `list` nový objekt vytvořený z těchto hodnot,
1. aktualizovat obsah seznamu `ol` voláním komponenty `ShoppingList`.

```js
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const name = document.querySelector('#name-product').value;
  const amount = document.querySelector('#amount-input').value;
  list.push({ product: product, amount: amount });

  const listSection = document.querySelector('#list-section');
  listSection.innerHTML = ShoppingList({ items: list });
});
``` -->
