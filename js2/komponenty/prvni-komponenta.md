## První komponenta

V minulé lekci jsme se naučili vyrobit obsah stránky z dat ze serveru. Takto vypadala funkce zobrazující položky nákupního seznamu:

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shopping-list');
  shoppingList.innerHTML = items
    .map((item) => {
      return `
      <li class="item">
        <div class="item__name">${item.name}</div>
        <div class="item__amount">${item.amount}</div>
      </li>
    `;
    })
    .join('');
};
```

Zde je jedna položka relativné malý kousek HTML. Brzy však obsah našich stránek bude složitější a vytvoření jedné položky zabere více řádků kódu. V takovém případě se nám vyplatí přesunout tvorbu jedné položky do speciální funkce. Nazveme ji `ShoppingItem`.

```js
const ShoppingItem = (item) => {
  return `
    <li class="item">
      <div class="item__name">${item.name}</div>
      <div class="item__amount">${item.amount}</div>
    </li>
  `;
};
```

Tuto funkci pak můžeme použít při vytváření nákupního seznamu.

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shopping-list');
  shoppingList.innerHTML = items.map((item) => ShoppingItem(item)).join('');
};
```

Funkci `ShoppingItem` budeme říkat :term{cs="komponenta" en="component"}. Komponenta je vždy nějaká funkce, která dostane na vstupu data v podobě objektu, a vytvoří z těchto dat kus obsahu naší stránky. Díky komponentám můžeme naši stránku stavět z menších a snadno stravitelných stavebních bloků.

Dle zažitých konvencí budeme komponenty vždy pojmenovávat s velkým písmenem na začátku. Tuto konvenci si vytvořili především React programátoři, aby dokázali rychle odlišit funkce představující komponenty od všech ostatních funkcí. JavaScriptu je úplně jedno, jaké písmenko na začátku názvu funkce uvedeme. Jde pouze o pomůcku pro nás a čtenáře našeho programu, aby všichni rychle dokázali poznat, z jakých komponent se náš program skládá. Protože v tomto kurzu směřujeme k vývoji v Reactu, budeme tuto konvenci dodržovat už od této chvíle.

Rozšiřme nyní naši aplikaci o možnost u každé položky označit, zda jsme ji již koupili či nikoliv. Jednu položku takového seznamu bychom mohli reprezentavat například takto:

```js
const item1 = {
  product: 'Rohlíky',
  amount: '10',
  done: true,
};
```

Komponenta pro takovouto položku by pak mohla vypadat takto:

```js
const ShoppingItem = (item) => {
  let tickClass = '';
  if (item.done) {
    tickClass = ' item__done--tick';
  }

  return `
    <li class="item">
      <div class="item__name">${item.product}</div>
      <div class="item__amount">${item.amount}</div>
      <div class="item__done${tickClass}"></div>
    </li>
  `;
};
```

Jednotlivé položky už si jako profíci stáhneme z API. Výsledné použítí pak bude vypadat takto:

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shopping-list');
  shoppingList.innerHTML = items.map((item) => ShoppingItem(item)).join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping')
  .then((response) => response.json())
  .then((data) => renderShoppingList(data));
```

Výhodou je, že v naší funkci `renderShoppingList` nemusíme nic měnit. O všechny změny nutné kvůli rozšíření dat o položku `done` jsme se postarali uvnitř komponenty `ShoppingItem`.
