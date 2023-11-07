## Stahování vlastních dat

Naše aplikace je téměr hotová, trpí však jedním výrazným nešvarem. V závislosti na tom, který z _promisů_ v hlavním `index.js` se splní dříve, občas vidíme na stránce nejprve položky pro úterý a až poté pro pondělí. Toto vyřešíme tak, že komponenta `ShopList` si data stáhne sama. Vykreslíme ji tak už ve chvíli, kdy ještě žádná data nemá, a aktualizujeme ji, jakmile data obdrží.

Abychom toto dokázali, musíme trošku změnit _props_ komponenty. Místo `dayName` dostane komponenta přímo identifikátor dne, který si má stáhnout, tedy `mon`, `tue` apod. Místo _prop_ `items` zavedeme novou _prop_ `dayResult`, ve které budeme očekávat objekt pro celý jeden den načtený z API. Ve chvíli, kdy komponentu poprvé vykreslujeme a nemá ještě žádná data, předáme jí v _prop_ `dayResult` řetězec `'loading'`, čímž dáme najevo, že je třeba stáhnout si data.

Nejdříve tedy zařídíme, aby se komponenta správně zobrazila ve chvíli, kdy jako `dayResult` obdrží hodnotu `loading`.

```js
import { ListItem } from '../ListItem/index.js';

export const ShopList = (props) => {
  const { dayName, items } = props;

  const element = document.createElement('div');
  element.classList.add('shoplist');
  element.innerHTML = `
    <div class="shoplist__head">
      <h2 class="shoplist__day">${dayName}</h2>
    </div>
    <div class="shoplist__items"></div>
  `;

  const itemsElement = element.querySelector('.shoplist__items');
  itemsElement.append(...items.map((item) => ListItem(item)));

  return element;
};
```

```js
import { ListItem } from '../ListItem/index.js';

export const ShopList = (props) => {
  const { day, dayResult } = props;

  let dayName = 'Načítám…';
  if (dayResult !== 'loading') {
    dayName = dayResult.dayName;
  }

  const element = document.createElement('div');
  element.classList.add('shoplist');
  element.innerHTML = `
    <div class="shoplist__head">
      <h2 class="shoplist__day">${dayName}</h2>
    </div>
    <div class="shoplist__items"></div>
  `;

  if (dayResult === 'loading') {
    // sem později přidáme načtení dat
  } else {
    const itemsElement = element.querySelector('.shoplist__items');
    itemsElement.append(...dayResult.items.map((item) => ListItem(item)));
  }

  return element;
};
```

Velmi se nám tak zjednoduší náš hlavní soubor `script.js`.

```js
import { ShopList } from './ShopList/index.js';

document
  .querySelector('main')
  .append(
    ShopList({ day: 'mon', dayResult: 'loading' }),
    ShopList({ day: 'tue', dayResult: 'loading' })
  );
```

Všimněte si, jak komponentě `ShopList` posíláme hodnotu `'loading'`. Komponenta podle této hodnoty pozná, že si má data stáhnout sama. Než data ze serveru přijdou, do seznamu `.shoplist__items` se nepřidá nic a bude na stránce viset prázdný.

Při otevření stránky nyní uvidíme, jak komponenta vypadá, když ještě nemá stažena svá data. Kód pro stažení dat přidáme do první větve naší podmínky.

```js
import { ListItem } from '../ListItem/index.js';

export const ShopList = (props) => {
  const { day, dayResult } = props;

  let dayName = 'Načítám…';
  if (dayResult !== 'loading') {
    dayName = dayResult.dayName;
  }

  const element = document.createElement('div');
  element.classList.add('shoplist');
  element.innerHTML = `
    <div class="shoplist__head">
      <h2 class="shoplist__day">${dayName}</h2>
    </div>
    <div class="shoplist__items"></div>
  `;

  if (dayResult === 'loading') {
    fetch(`https://nakupy.kodim.app/api/sampleweek/${day}`)
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          ShopList({
            day: day,
            dayResult: data.result,
          })
        );
      });
  } else {
    const itemsElement = element.querySelector('.shoplist__items');
    itemsElement.append(...dayResult.items.map((item) => ListItem(item)));
  }

  return element;
};
```

Takto se komponenta `ShopList` stará o stažení vlastních dat a stane se tak mnohem samostatnějším celkem.

Hotový kód aplikace najdete v repozitáři [projekt-nakupy-dom](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-dom).
