## Import a export

Čím větší webové aplikace budeme psát, tím větší budou naše JavaScriptové soubory až začnou narůstat do nezvládnutelných rozměrů. V takové situaci potřebujeme mít možnost si kód nějakým způsobem rozdělit na menší části, abychom se v něm dobře vyznali.

K tomu využijeme klíčová slova `import` a `export`. Tyto příkazy nám umožní rozdělit náš kód do více souborů a zároveň mezi nimi sdílet proměnné a funkce.

Celý proces si předvedeme na ukázkové aplikaci _Nákupy_. Její zdrojový kód naleznete v repozitáři [ukazka-nakupy](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy). V projektu najdeme jeden už trošku delší soubor `index.js`. Už v takovéto délce se nám vyplatí si jej rozdělit na menší kusy.

Na začátku vidíme proměnnou `list` s daty pro náš program.

```js
const list = [
  { name: 'Mléko', amount: '1 litr', bought: true },
  { name: 'Rohlíky', amount: '10 ks', bought: false },
  { name: 'Pivo Krušovice', amount: '2 ks', bought: false },
  { name: 'Sýr Eidem', amount: '200 g', bought: true },
  { name: 'Paštika', amount: '1 ks', bought: false },
  { name: 'Máslo', amount: '250 g', bought: true },
];
```

Abychom neměli data přímo v hlavním `index.js`, vyčlením si pro ně samostatný soubor `shoplist.js`. Aby byla proměnná `list` dostupná i v jiných souborech, musíme ji exportovat. To uděláme pomocí klíčového slova `export`.

```js
export const list = [
  // ...
];
```

## Import

V souboru `index.js` pak můžeme proměnnou `list` importovat pomocí klíčového slova `import`.

```js
import { list } from './shoplist.js';
```

Můžeme ji pak použít stejně jako kdybychom ji definovali přímo v daném souboru. Už tímto jednoduchým krokem se nám podaří kód hodně pročistit a zpřehlednit.

Abychom náš kód dále zpřehlednili, vyčleníme si funkce pro upravování pole s položkami seznamu. Budeme potřebovat funkci pri přidání nové položky:

```js
export const addItem = (name, amount) => {
  list.push({
    name: name,
    amount: amount,
    bought: false,
  });
};
```

a funkci pro označení/odznačení položky jako koupené:

```js
export const toggleBought = (index) => {
  list[index].bought = !list[index].bought;
};
```

Naposledy potřebujeme funkci pro smazání položky ze seznamu:

```js
export const deleteItem = (index) => {
  list.splice(index, 1);
};
```

Všechny tyto funkce budeme mít v souboru `shoplist.js`. Zároveň si vyrobíme ještě jeden soubor `render.js`, do kterého přesuneme funkci pro vykreslení seznamu `renderList`. Tuto funkci uprvíme tak, aby používala naše funkce pro manipulaci se seznamem. Musíme si je proto importovat z `shoplist.js`.

```js
import { list, deleteItem, toggleBought } from './shoplist.js';

export const renderList = () => {
  // ...
};
```

Náš hlavní soubor `index.js` se tak výrazně zmenšil a zpřehlednil.

```js
import { addItem } from './shoplist.js';
import { renderList } from './render.js';

const addBtn = document.querySelector('.btn-add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');
  const amountInput = document.querySelector('#input-amount');
  addItem(nameInput.value, amountInput.value);
  renderList();

  nameInput.value = '';
  amountInput.value = '';
});

renderList();
```

Celý výsledný kód najdete v repozitáři [ukazka-nakupy-import-export](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy-import-export).
