## Zobrazování dat

V předešlé lekci jsme se naučili používat metody pro zpracování dat jako `map`, `join` a další. Obzvláště tyto dvě metody se nám velmi hodily na generování obsahu stránky z dat. V tuto chvíli už umíme stáhnout data ze serveru, je tedy na čase tyto dva postupy spojit dohromady.

Vzpomeňte na cvičení [Nákupní seznam](../func-data/cv-nadoma#cvdoma%3Enakupni-seznam) z minulé lekce. Zobrazovali jsme v něm položky nákupního seznamu na základě pole objektů. Místo abychom toto pole měli natvrdo uložené přímo v kódu, stáhneme si jej z API. Příslušný endpoint má URL

```
https://nakupy.kodim.app/api/sampleweek/mon/items
```

Pojďme nejdříve seznam stáhnout a vypsat do konzole.

```js
fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

Nyní už můžeme využít metody pro zpracování dat a vytvořit obsah stránky.

```js
fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const shoppingList = document.querySelector('.shopping-list');
    shoppingList.innerHTML = data.result
      .map((item) => {
        return `
          <li class="item">
            <div class="item__name">${item.product}</div>
            <div class="item__amount">${item.amount}</div>
          </li>
        `;
      })
      .join('');
  });
```

V tomto případě už může být kód malinko hůře čitelný. Mohlo by se vyplatit založit si na vytvoření obsahu vlastní funkci.

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shopping-list');
  shoppingList.innerHTML = items
    .map((item) => {
      return `
        <li class="item">
          <div class="item__name">${item.product}</div>
          <div class="item__amount">${item.amount}</div>
        </li>
      `;
    })
    .join('');
};
```

Tato funkce nám pomůže trochu pročistit náš fetchovací kód.

```js
fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderShoppingList(data.result);
  });
```

Můžeme jej pak i hezky pozkracovat.

```js
fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => response.json())
  .then((data) => renderShoppingList(data));
```
