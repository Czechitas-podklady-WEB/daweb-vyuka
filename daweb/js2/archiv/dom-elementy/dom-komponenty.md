## Komponenty pomocí DOM elementů

Do této chvíle naše komponenty tvořily obsah stránky tak, že komponenta vrátila řetězec obsahující HTML. Na žádný prvek uvnitř takového HTML však nejde v komponentě pověsit posluchač události. Naše komponenty tak nemohly být nijak interaktivní. To nyní můžeme napravit tak, že naše komponenty již nebudou vracet HTML jako řetězec, ale vrátí rovnou hotový DOM element.

Tuto novou techniku si ukážeme na našem příkladu s nákupním seznamem. Kód najdeme v repozitáři [nakupy-komponenty](https://github.com/Czechitas-podklady-WEB/nakupy-komponenty), který jsme vytvořili na konci minulé lekce. Budeme chtít uživateli umožnit nějakou položku ze seznamu označit jako koupenou. Vdechneme tedy život tlačíku pro označení položky.

Prohlédněte na původní kód komponenty `ListItem`.

```js
export const ListItem = (props) => {
  const { done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__body">
        <div class="list-item__product">${product}</div>
        <div class="list-item__amount">${amount} ${unit}</div>
      </div>
    </div>
  `;
};
```

Nyní tuto komponentu upravíme tak, aby vracela DOM element.

```js
export const ListItem = (props) => {
  const { done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  const element = document.createElement('div');
  element.classList.add('list-item');
  element.innerHTML = `
    <button class="icon-btn btn-tick${tickClass}"></button>
    <div class="list-item__body">
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;

  return element;
};
```

Protože komponenta `ListItem` nyní vrací DOM element, musíme upravit komponentu `ShopList`. Místo `innerHTML` použijeme metodu `append`.

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

Tady se nám do kódu vkradly dvě nové věci, které je potřeba lépe vysvětlit.

1. Všimněte si, že metodu `querySelector` voláme nikoliv na dokumentu, ale na našem nově vytvořeném elementu. Pokud `querySelector` voláme na DOM elementu, vybíráme pouze zevnitř tohoto elementu a nikoliv z celého dokumentu. Snadno tak vybereme náš prvek `shoplist__items` a vložíme do něj vytvořený obsah.
1. Druhá pozuruhodná věc je použití metody `append` s třemi tečkami. Tomuto operátoru se říká _spread_. Více se jím budeme zabývat až na dalších kurzech. Zde jej však potřebujeme již nyní, protože metoda `append` bere volitelný počet parametrů, nikoliv pole.

Volitelný počet parametrů znamená, že funkci můžeme předat kolik agrumentů chceme. Můžeme psát

```js
domElement.append(arg1, arg2);
```

nebo

```js
domElement.append(arg1, arg2, arg3, arg4, arg5);
```

apod.

Pokud však máme pole hodnot, nemůžeme metodu `append` volat takto:

```js
domElement.append([arg1, arg2, arg3]);
```

Musíme hodnoty z pole nějak rozložit do jednotlivých parametrů. Píšeme pak

```js
domElement.append(...[arg1, arg2, arg3]);
```

Nakonec ještě upravíme použití komponenty `ShopList` v hlavním `script.js`.

```js
import { ShopList } from './ShopList/index.js';

const mainElement = document.querySelector('main');

fetch('https://nakupy.kodim.app/api/sampleweek/mon')
  .then((response) => response.json())
  .then((data) => {
    mainElement.append(
      ShopList({ dayName: data.result.dayName, items: data.result })
    );
  });

fetch('https://nakupy.kodim.app/api/sampleweek/tue')
  .then((response) => response.json())
  .then((data) => {
    mainElement.append(
      ShopList({ dayName: data.result.dayName, items: data.result })
    );
  });
```

Když nyní aplikaci spustíme, bude fungovat úplně stejně jako dříve. Máme však připravenou půdu na posluchač události pro tlačítko.
