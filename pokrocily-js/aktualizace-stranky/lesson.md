Pokud ve své aplikaci používáme data z nějakého veřejného API, většinou je stahujeme pouze ke čtení. Málokterý veřejný server by nám jen tak dovolil na něm data upravovat. Pokud však píšeme aplikaci, ve které pužíváme vlastní data, většinou si vytvoříme vlastní databázi a vlastní API, do kterého pak můžeme i zapisovat. V této lekci si ukážeme, jak můžeme pomocí dotazů na API data měnit. 

## Typy dotazů na server

V minulé lekci jsme posílali dotazy na API tímto způsobem.

```js
fetch('https://api.abalin.net/today?country=cz')
```

Tímto způsobem se posílá základní typ dotazu, kterému říkáme GET. Tento dotaz má za úkol získat nějaká data ze serveru. Typů dotazů však existuje více. 

POST
: Poslat data na server

PUT
: Přidat prvek do nějaké kolekce

DELETE
: Odstranit prvek z nějaké kolekce

Pokud chceme pomocí funkce `fetch` poslat jiný dotaz než GET, musíme specifikovat několik věcí:

- typ dotazu, například `POST`,
- takzvaný `Content-Type`, tedy v jakém formátu data na server posíláme. Nejčastěji to bude JSON.
- tělo dotazu, tedy samotná data ve formátu JSON. 

Tělo dotazu se na server posíká jako řetězec obsahující JSON. Pokud tedy chceme na server odeslat JavaScriptový objektu, musíme si jej převést na řetězec. K tomu použijeme funkci `JSON.stringify`. Vyzkoušíme si ji v konzoli. 

```jscon
> JSON.stringify({name: 'Petr', age: 25})
"{"name":"Petr","age":25}"
```

Takto si můžeme z jakéhokoliv objektu připravit řetězec, který pak můžeme poslat na server. 

Představme si zatím fiktivní stránku `https://it-seznamka.cz`, která by mohla mít API endpoint `register`, kde bychom pomocí POST mohlit zaregistrovali nového uživatele. Výslední kód by vypadal takto. 

```js
fetch('https://it-seznamka.cz/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Petr', 
    age: 25
  }),
})
```

## Nákupní seznam

Abychom si komunikaci se serverm vykoušeli na nějakém skutečném API, navážeme na naši aplikaci o nákupních seznamech. API této aplikace najdete na adrese http://apps.kodim.cz/daweb/shoplist.

[[[ excs Cvičení: Manipulace s daty na serveru
- pridani-seznamu
- pridani-polozky
]]]

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

[[[ excs Cvičení: Aktualizace stránky
- lokalni-cas
- dopravni-prestupky
]]]

[[[ excs Doporučené úložky na doma
- svetovy-cas
- svetovy-cas-2
]]]
