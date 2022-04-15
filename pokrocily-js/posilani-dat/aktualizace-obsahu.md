## Aktualizace obsahu stránky

V této části si ukážeme, jak můžeme aktualizovat obsah stránky, pokud se naše zobrazovaná data nějak změní. V naší aplikaci s nákupním seznamem můžeme například chtít přidat do seznamu novou položku. Abychom si malinko ulehčili situaci, zatím si nákupní seznam uložím natvrdo do proměnné. 

```js
const list = [
  {
    product: 'Rohlíky',
    amount: '10',
    bought: false,
  },
  {
    product: 'Rajčate',
    amount: '1kg',
    bought: false,
  },
];
```

Kód HTML naší stránky může vypadat například takto.

```html
<body>
  <section id="list-section"></section>
  <script src="index.js"></script>
</body>
```

Z minulé lekce máme k dispozici komponentu `ShoppingList`, která umí vyrobit seznam položek. Můžeme tedy tento seznam vložit do sekce `#list-section`.

```js
const ShoppingList = ({ items }) => {
  let resultHTML = '<ol class="shopping-list">';
  for (let i = 0; i < items.length; i += 1) {
    resultHTML += ShoppingItem(items[i]);
  }

  return resultHTML + '</ol>';
};

const listSection = document.querySelector('#list-section');
listSection.innerHTML = ShoppingList({ items: list });
```

Stránka je zatím poměrně statická. Zobrazuje pořád tentýž seznam. Určitě bychom chtěli uživateli umožnit přidat do seznamu nějakou položku. Naše pole je globální, můžeme to tedy zatím zkusit udělat programátorsky přímo z konzole.

```js
> list.push({ product: 'koriandr', amount: '1 balení', bougth: false });
7
```

Naše pole se tímto rozroste o jeden prvek. K našemu zklamání však obsah stránky zůstává pořád stejný. Je to logické, protože obsah seznamu `ol` jsme v JavaScriptu vytvořili hned po načtení stránky. Změna našeho pole tento kód znovu magicky nespustí. Musíme jej spustit sami ve chvíli, kdy chceme říct, že se má obsah seznamu `ol` vytvořit znova podle nového obsahu pole `list`. Máme zde velkou výhodou v tom, že náš kód vytvářející obsah stránky dle pole `list` máme hezky zabalený v komponentě `ShoppingList`. Chceme-li tedy obsah stránky aktualizovat podle nových hodnot v poli `list`, stačí naši komponentu znova zavolat a vytvořit nové HTML.

```js
listSection.innerHTML = ShoppingList({ items: list });
```

Všimněte si, že takto zcela přepíšeme původní obsah `innerHTML` celé sekce. Tím celou HTML strukturu vytváříme v podstatě úplně znova. Funkci `ShoppingList` tak můžeme zavolat pokaždé, když chceme, aby naše stránka zobrazila aktuální obsah našeho pole `list`. To nám dává svobodu si s polem dělat co chceme, přidávat položky, měnit položky, mazat položky a tak dále. Vždy jen pak musíme zavolat funkci `ShoppingList`, aby se změny projevily i v našem HTML. Můžete si to vyzkoušet rovnou z konzole a sledovat, jak stránka reaguje.

```js
> list.push({ product: 'zázvor', amount: '30g', bought: false });
8
> listElm.innerHTML = ShoppingList({ items: list });
> list.shift();
> listElm.innerHTML = ShoppingList({ items: list });
> list[0] = { product: 'klíčky', amount: '20g', bought: true };
> listElm.innerHTML = ShoppingList({ items: list });
```

### Zpracování vstupu od uživatele

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
```