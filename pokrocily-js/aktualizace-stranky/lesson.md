

## Aktualizace obsahu stránky

V této části si ukážeme, jak můžeme aktualizovat obsah stránky, pokud se naše zobrazovaná data nějak změní. V naší aplikaci s nákupním seznamem můžeme například chtít přidat do seznamu novou položku. Prohlédněme si nejdříve původní kód stránky s nákupním seznamem.

Obsah elementu `body`:

```html
<body>
  <ol id="shopping-list"></ol>
  <script src="index.js"></script>
</body>
```

Obsah `index.js`:

```js
'use strict';

const ShoppingItem = (props) => {
  return `<li>${props.name} - ${props.amount}</li>`;
};

const ShoppingList = (props) => {
  let result = '';
  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  return result;
};

const list = [
  { name: 'mrkev', amount: '3ks' },
  { name: 'paprika', amount: '2ks' },
  { name: 'cibule', amount: '2ks' },
  { name: 'čínské zelí', amount: '1ks' },
  { name: 'arašídy', amount: '250g' },
  { name: 'sojová omáčka', amount: '1ks' },
];

const listElm = document.querySelector('#shopping-list');
listElm.innerHTML = ShoppingList({ items: list });
```

Stránka je zatím poměrně statická. Zobrazuje pořád tentýž seznam. Určitě bychom chtěli uživateli umožnit přidat do seznamu nějakou položku. Naše pole je globální, můžeme to tedy zatím zkusit udělat programátorsky přímo z konzole.

```js
> list.push({ name: 'koriandr', amount: '1 balení' });
7
```

Naše pole se tímto rozroste o jeden prvek. K našemu zklamání však obsah stránky zůstává pořád stejný. Je to logické, protože obsah seznamu `ol` jsme v JavaScriptu vytvořili hned po načtení stránky. Změna našeho pole tento kód znovu magicky nespustí. Musíme jej spustit sami ve chvíli, kdy chceme říct, že se má obsah seznamu `ol` vytvořit znova podle nového obsahu pole `list`. Máme zde velkou výhodou v tom, že náš kód vytvářející obsah stránky dle pole `list` máme hezky zabalený v komponentě `ShoppingList`. Chceme-li tedy obsah stránky aktualizovat podle nových hodnot v poli `list`, stačí naši komponentu znova zavolat a vytvořit nové HTML.

```js
listElm.innerHTML = ShoppingList({ items: list });
```

Všimněte si, že takto zcela přepíšeme původní obsah `innerHTML` našeho `ol` seznamu, abychom celou HTML strukturu vytvořili úplně znova. Funkci `ShoppingList` tak můžeme zavolat pokaždé, když chceme, aby naše stránka zobrazila aktuální obsah našeho pole `list`. To nám dává svobodu si s polem dělat co chceme, přidávat položky, měnit položky, mazat položky a tak dále. Vždy jen pak musíme zavolat funkci `ShoppingList`, aby se změny projevily i v našem HTML. Můžete si to vyzkoušet rovnou z konzole a sledovat, jak stránka reaguje.

```js
> list.push({ name: 'zázvor', amount: '30g' });
8
> listElm.innerHTML = ShoppingList({ items: list });
> list.shift();
'mrkev'
> listElm.innerHTML = ShoppingList({ items: list });
> list[0] = { name: 'klíčky', amount: '20g' };
'klíčky'
> listElm.innerHTML = ShoppingList({ items: list });
```

### Zpracování vstupu od uživatele

Do teď jsme měnili obsah našeho pole programaticky. Nyní však chceme umožnit uživateli, aby mohl do nákupního seznamu sám přidat nějakou položku. K tomu budeme v HTML potřebovat textové políčka pro název a množství, a tlačítko pro provedení samotné akce.

```html
<body>
  <ol id="shopping-list"></ol>

  <input type="text" id="name-input" />
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
  const name = document.querySelector('#name-input').value;
  const amount = document.querySelector('#amount-input').value;
  list.push({ name: name, amount: amount });
  listElm.innerHTML = ShoppingList({ items: list });
});
```

Kód celý soubor `index.js` pak bude vypadat takto.

```js
'use strict';

const ShoppingItem = (props) => {
  return `<li>${props.name} - ${props.amount}</li>`;
};

const ShoppingList = (props) => {
  let result = '';
  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  return result;
};

const list = [
  { name: 'mrkev', amount: '3ks' },
  { name: 'paprika', amount: '2ks' },
  { name: 'cibule', amount: '2ks' },
  { name: 'čínské zelí', amount: '1ks' },
  { name: 'arašídy', amount: '250g' },
  { name: 'sojová omáčka', amount: '1ks' },
];

const listElm = document.querySelector('#shopping-list');
listElm.innerHTML = ShoppingList({ items: list });

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const name = document.querySelector('#name-input').value;
  const amount = document.querySelector('#amount-input').value;
  list.push({ name: name, amount: amount });
  listElm.innerHTML = ShoppingList({ items: list });
});
```

[[[ excs Cvičení: Aktualizace stránky
- lokalni-cas
- dopravni-prestupky
]]]

[[[ excs Doporučené úložky na doma
- svetovy-cas
- svetovy-cas-2
]]]
