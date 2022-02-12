## Označení položek v seznamu

Díky tomu, že už umíme psát interaktivní komponenty, můžeme uživateli umožnit nějakou položku ze seznamu označit jako koupenou, aby uživatel mohl sledovat, co už koupil a co ještě zbývá. Ke každé položce tedy přidáme tlačíko pro označení. Kvůli tomu bude potřeba přepsat naše komponenty tak, aby vracely DOM elementy.

Kód naší aplikace pro nákupní seznam si můžete [stáhnout zde](assets/nakupni-seznam.zip). Máme zde vytvořeny dvě komponenty `ShoppingItem` a `ShoppingList`.

```js
const ShoppingItem = (props) => {
  return `
    <div class="item">
      <span class="item__product">${props.product}</span>
      <span class="item__amount">${props.amount}</span>
    </div>
  `;
};

const ShoppingList = (props) => {
  let result = '<div class="shopping-list">';

  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  result += '</div>';
  return result;
};
```

Komponentu `ShoppingItem` převedeme na DOM element a přidáme do ní tlačítko.

```js
const ShoppingItem = (props) => {
  const element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `
    <span class="item__product">${props.product}</span>
    <span class="item__amount">${props.amount}</span>
    <button class="btn-bought">koupeno</button>
  `;

  return element;
};
```

Nyní chceme přidat funkci pro kliknutí, která na náš element přidá CSS třídu `item--bought`.

```js
const ShoppingItem = (props) => {
  const element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `
    <span class="item__product">${props.product}</span>
    <span class="item__amount">${props.amount}</span>
    <button class="btn-bought">koupeno</button>
  `;

  const deleteBtn = element.querySelector('.btn-bought');
  deleteBtn.addEventListener('click', () => {
    element.classList.add('item--bought');
  });

  return element;
};
```

Nyní musíme upravit komponentu `ShoppingList`.

```js
const ShoppingList = (props) => {
  const element = document.createElement('div');
  element.classList.add('shopping-list');

  for (let i = 0; i < props.items.length; i += 1) {
    element.appendChild(ShoppingItem(props.item));
  }

  return element;
};
```

Nakonec musíme ještě upravit použití komponenty `ShoppingList`, protože už nevrací řetězec ale DOM element.

```js
mainElm.innerHTML = '';
mainElm.appendChild(ShoppingList({ items: list }));
```

Všimněte si, že je třeba nejdříve vyprázdnit element `mainElm`, abychom do něj mohli vložit nový obsah pomocí `appendChild`.
