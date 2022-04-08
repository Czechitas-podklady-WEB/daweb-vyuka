## Zobrazování více položek

Velmi častým úkolem při vývoji webové aplikace je zobrazovat seznam nějkých položek.
Takový seznam vytvoříme opakovaným voláním naší komponenty. 

```js
const item1 = {
  product: 'Rohlíky',
  amount: '10',
  done: true,
};

const item2 = {
  product: 'Rajčate',
  amount: '1kg',
  done: false,
};

const listElm = document.querySelector('.shopping-list');
listElm.innerHTML += ShoppingItem(item1);
listElm.innerHTML += ShoppingItem(item2);
```

Většinou však naše objekty budeme mít v nějakém poli. Výsledný kód by pak vypadal takto.

```js
const items = [
  {
    product: 'Rohlíky',
    amount: '10',
    done: false,
  },
  {
    product: 'Rajčate',
    amount: '1kg',
    done: false,
  },
];

const listElm = document.querySelector('.shopping-list');
listElm.innerHTML += ShoppingItem(items[0]);
listElm.innerHTML += ShoppingItem(items[1]);
```

Takto samozřejmě nelze postupovat pokud bude objektů výrazně více. Zde si už pomůžeme cyklem.

```js
const listElm = document.querySelector('.shopping-list');
for (let i = 0; i < items.length; i += 1) {
  listElm.innerHTML += ShoppingItem(items[i]);
}
```