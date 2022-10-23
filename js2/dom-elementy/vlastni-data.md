## Stahování vlastních dat

Naše aplikace je téměr hotová, trpí však jedním výrazným nešvarem. V závislosti na tom, který z *promisů* v hlavním `index.js` se splní dříve, občas vidíme na stránce nejprve položky pro úterý a až poté pro pondělí. Toto vyřešíme tak, že komponentu `ShoppingList` vyrenderujeme už ve chvíli, kdy ještě nemá žádná data. Komponenta si pak data stáhne sama a sama se také aktualizuje. 

```js
import { ShoppingItem } from "../ShoppingItem/index.js";

export const ShoppingList = (props) => {
  const { day, dayName, items } = props;

  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${dayName}</h2>
    <ul class="shopping-list__items"></ul>
  `;
  
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/shopping/${day}`)
    .then((response) => response.json())
    .then((data) => {
      element.replaceWith(ShoppingList({
        day: day,
        dayName: dayName,
        items: data,
      }));
    });

  const ulElement = element.querySelector('ul');
  ulElement.append(...items.map((item) => ShoppingItem(item)));

  return element;
};
```

Náš hlavní soubor `index.js` se nám tak velmi zjednoduší.

```js
import { ShoppingList } from './ShoppingList/index.js';

document.querySelector('#lists').append(
  ShoppingList({ day: 'mon', dayName: 'Pondělí', items: [] }),
  ShoppingList({ day: 'tue', dayName: 'Úterý', items: [] }),
);
```

Všimněte si, že každé komponentě jako položku `items` předáváme prázdné pole. Komponenta se tak na začátku zobrazí bez dat a čeká, než přijdou data ze serveru. 

Čistotě kódu můžeme ještě drobně pomoct tak, že prázdný seznam komponentě předávat vůbec nebudeme. 

```js
import { ShoppingList } from './ShoppingList/index.js';

document.querySelector('#lists').append(
  ShoppingList({ day: 'mon', dayName: 'Pondělí' }),
  ShoppingList({ day: 'tue', dayName: 'Úterý' }),
);
```

Komponenta si za chybějící poližku dosadí prázdný seznam sama pomocí default hodnoty v destrukturování. 

```js
export const ShoppingList = (props) => {
  const { day, dayName, items = [] } = props;
```

Hotový kód aplikace najdete ve [větvi *dom-elementy*](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/dom-elementy) v již známém repozitáři.
