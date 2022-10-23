## Komponenty pomocí DOM elementů

Do této chvíle naše komponenty tvořily obsah stránky tak, že komponenta vrátila řetězec obsahující HTML. Na žádný prvek uvnitř takového HTML však nejde v komponentě pověsit posluchač události. Naše komponenty tak nemohly být nijak interaktivní. To nyní můžeme napravit tak, že naše komopnenty již nebudou vracet HTML jako řetězec, ale vrátí rovnou hotový DOM element.

Tuto novou techniku si ukážeme na našem příkladu s nákupním seznamem. Kód najdeme v už známém [repozitáři](https://github.com/Czechitas-podklady-WEB/prvni-komponenta). Budeme chtít uživateli umožnit nějakou položku ze seznamu označit jako koupenou. Vdechneme tedy život tlačíku pro pro označení položky.

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

Protože komponenta `ShoppingList` nyní vrací DOM element, musíme upravit komponentu `ShoppingList`. Místo `innerHTML` použijeme metodu `append`. 

```js
import { ShoppingItem } from '../ShoppingItem/index.js';

export const ShoppingList = (props) => {
  const { day, items } = props;
  
  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${day}</h2>  
    <ul class="shopping-list__items"></ul>
  `;
  
  const ulElement = element.querySelector('ul');
  ulElement.append(...items.map((item) => ShoppingItem(item)));
  
  return element;
};
```

Tady se nám do kódu vkradly dvě věci, které je potřeba lépe vysvětlit. 

Všimněte si, že metodu `querySelector` voláme nikoliv na dokumentu, ale na našem novém elementu. Pokud `querySelector` voláme na DOM elementu, vybíráme pouze zevnitř tohoto elementu a nikoliv z celého dokumentu. Snadno tak vybereme náš prvek `ul` a vložíme do něj vytvořený obsah.

Druhá pozuruhodná věc je použití metody `append` s třemi tečkami. Tomuto operátoru se říká *spread*. Zde jej potřebujeme, protože metoda `append` bere libovolný počet parametrů. Můžeme psát

```js
domElement.append(arg1, arg2, arg3);
```

Pokud však máme pole hodnot, nemůžeme metodu `append` volat takto. 

```js
domElement.append([arg1, arg2, arg3]);
```

Musíme hodnoty z pole nějak dostat do jednotlivých parametrů. Píšeme pak

```js
domElement.append(...[arg1, arg2, arg3]);
```

*Spread* operátor má ještě mnoho využití v jiných situacích, ale o tom si povíme až někdy přiště.

Nakonec ještě upravíme použití komponenty `ShoppingList` v hlavním `index.js`.

```js
import { ShoppingList } from './ShoppingList/index.js';

const listsElement = document.querySelector('#lists');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping/mon')
  .then((response) => response.json())
  .then((data) => {
    listsElement.append(ShoppingList({ day: 'Pondělí', items: data }));
  });

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping/tue')
  .then((response) => response.json())
  .then((data) => {
    listsElement.append(ShoppingList({ day: 'Úterý', items: data }));
  });
```

Když nyní aplikaci spustíme, bude fungovat úplně stejně, jako dříve. Máme však připravenou půdu na posluchač události pro tlačítko.

