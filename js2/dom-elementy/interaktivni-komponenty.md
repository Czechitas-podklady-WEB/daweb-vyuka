## Interaktivní komponenty

Do této chvíle naše komponenty tvořily obsah stránky tak, že komponenta vrátila řetězec obsahující HTML. Na žádný prvek uvnitř takového HTML však nejde v komponentě pověsit posluchače událostí. Naše kaomponenty tedy nemohly být nijak interaktivní. To nyní můžeme napravit tak, že naše komopnenty již nebudou vracet HTML jako řetězec, ale vrátí rovnou hotový DOM element.

Tuto novou techniku si ukážeme na našem příkladu s nákupním seznamem. Kód najdeme v už známém [repozitáři](https://github.com/podlomar/skladani-komponent). Budeme chtít uživateli umožnit nějakou položku ze seznamu označit jako koupenou. Vdechneme tedy život tlačíku pro pro označení položky.

Prohlédněte na původní kód komponenty `ShoppingItem`.

```js
export const ShoppingItem = (props) => {
  const { product, amount, done } = props;

  let check = 'nocheck';
  if (done) {
    check = 'check';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <button class="item__btn-done item__btn-done--${check}"></button>
    </li>
  `;
};
```

Nyní tuto komponentu upravíme tak, aby vracela DOM element.

```js
export const ShoppingItem = (props) => {
  const { product, amount, done } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <div class="item__name">${product}</div>
    <div class="item__amount">${amount}</div>
    <button class="item__btn-done ${checkClass}"></button>
  `;

  return element;
};
```

<!-- Nyní chceme přidat funkci pro kliknutí, která na náš element přidá CSS třídu `item--bought`.

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
``` -->

Protože komponenta `ShoppingList` nyní vrací DOM element, musíme upravit komponentu `ShoppingList`.

```js
import { ShoppingItem } from '../ShoppingItem/index.js';

export const ShoppingList = (props) => {
  const { items } = props;
  const element = document.createElement('ul');
  element.classList.add('shopping-list');

  for (let i = 0; i < items.length; i += 1) {
    element.appendChild(ShoppingItem(items[i]));
  }

  return element;
};
```

Nakonec musíme ještě upravit použití komponenty `ShoppingList` v hlavním `index.js`.

```js
import { ShoppingList } from './ShoppingList/index.js';

fetch('https://apps.kodim.cz/daweb/shoplist/api/lists/default')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector('#list-container');
    container.appendChild(ShoppingList({ items: data.results.items }));
  });
```

Když nyní aplikaci spustíme, bude fungovat úplně stejně, jako dříve. Máme však připravenou půdu na posluchač události pro tlačítko.

### Přidání posluchač na tlačítko

Díky tomu, že uvnitř funkce vytvářím DOM element, můžeme se pomocí funkce `querySelector` dostat k tlačítku a napojit na něj posluchač události. Ten si vytvoříme přímo uvnitř komponenty.

```js
export const ShoppingItem = (props) => {
  const { product, amount, done } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <div class="item__name">${product}</div>
    <div class="item__amount">${amount}</div>
    <button class="item__btn-done ${checkClass}"></button>
  `;

  const doneButton = element.querySelector('.item__btn-done');
  doneButton.addEventListener('click', (e) => {
    e.target.classList.toggle('item__btn-done--check');
  });

  return element;
};
```

Všimněte si, že metodu `querySelector` voláme nikoliv na dokumentu, ale na našem novém elementu. Pokud `querySelector` voláme na DOM elementu, vybíráme pouze zevnitř tohoto elementu a nikoliv z celého dokumentu. Snadno tak vybereme naše tlačíkto a pověsíme na něj posluchače. Každý DOM element naší komponenty tak má svoje tlačíko se svým vlastním posluchačem. Veškerou logiku tak mám zabalenou uvnitř komponenty a můžene si jich na stránce vytvořit kolik chceme. Musíme však k zapojení komponenty do stránky používat metodu `appendChild`, protože naše komponenta už nevrací řetězec, nýbrž hotový DOM element.
