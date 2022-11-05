## Stahování vlastních dat

Naše aplikace je téměr hotová, trpí však jedním výrazným nešvarem. V závislosti na tom, který z _promisů_ v hlavním `index.js` se splní dříve, občas vidíme na stránce nejprve položky pro úterý a až poté pro pondělí. Toto vyřešíme tak, že komponentu `ShoppingList` vyrenderujeme už ve chvíli, kdy ještě nemá žádná data. Komponenta si pak data stáhne sama a sama se také aktualizuje.

```js
import { ShoppingItem } from '../ShoppingItem/index.js';

export const ShoppingList = (props) => {
  const { day, dayName, items } = props;

  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${dayName}</h2>
    <ul class="shopping-list__items"></ul>
  `;

  if (items === undefined) {
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/shopping/${day}`)
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          ShoppingList({
            day: day,
            dayName: dayName,
            items: data,
          })
        );
      });
  } else {
    const ulElement = element.querySelector('ul');
    ulElement.append(...items.map((item) => ShoppingItem(item)));
  }

  return element;
};
```

Náš hlavní soubor `index.js` se nám tak velmi zjednoduší.

```js
import { ShoppingList } from './ShoppingList/index.js';

document
  .querySelector('#lists')
  .append(
    ShoppingList({ day: 'mon', dayName: 'Pondělí' }),
    ShoppingList({ day: 'tue', dayName: 'Úterý' })
  );
```

Všimněte si, že komponentě `ShoppingList` neposíláme _prop_ `items`, která tak bude mít hodnotu `undefined`. Komponenta podle této hodnoty pozná, že si má data stáhnout sama. Než data se serveru přijdou, do seznamu `.shopping-list__items` se nepřidá nic a bude na stránce viset prázdný.

Hotový kód aplikace najdete ve [větvi _dom-elementy_](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/dom-elementy) v již známém repozitáři.
