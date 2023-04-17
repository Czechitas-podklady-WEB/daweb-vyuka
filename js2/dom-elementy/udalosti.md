## Události v komponentách

Díky novému způsobu fungování našich komponent můžeme začít bez problému používat události, a to způsobem, na který jsme zvyklí. Přidat obsluhu odálosti `click` v komponentě `ShopList` znamená především správně vybrat tlačítko pomocí `querySelector`.

```js
const element = document.createElement('div');
element.classList.add('list-item');
element.innerHTML = `
  <button class="icon-btn btn-tick${tickClass}"></button>
  <div class="list-item__body">
    <div class="list-item__product">${product}</div>
    <div class="list-item__amount">${amount} ${unit}</div>
  </div>
`;

element.querySelector('button').addEventListener('click', () => {
  console.log('kliknuto!');
});
```

Nyní je potřeba aktualizovat element tak, aby se při kliknutí změnilo zaškrtnutí. K tomu stačí znova zavolat funkci `ListItem` s aktualizovanými `props`. Funkce nám vrátí úplně nový DOM element, kterým na stránce nahradíme starý element. K tomu nám pomůže metoda `replaceWith`. Výsledná komponenta bude pak vypadat takto.

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

  element.querySelector('button').addEventListener('click', () => {
    element.replaceWith(
      ListItem({
        product: product,
        amount: amount,
        done: !done,
        unit: unit,
      })
    );
  });

  return element;
};
```

### Překreslení komponenty

Možná si při čtení výše uvedeného kódu říkáte, proč voláme funkci `replaceWith` a tak DOM pro celou komopnenty vytváříme úplně znova. Mohli bychomn přece jednoduše přehodit třídu na tlačítku pomocí `classList.toggle()`.

Je pravda, že by to skutečně šlo provést takto jednoduše. Nám se však do budoucna bude velmi hodit řídit obsah komponenty pouze změnou jejich _props_. Kvůli tomu sice musíme komponentu vždy vytvořit celou znovu, máme však výhodu, že komponenta zobrazuje vždy přesně to, co dostala v _props_. To nám zjednoduší uvažování nad složitejšími programy. Zároveň tímto způsobem funguje i framework React, ke kterému se blížíme a vyplatí se nám již nyní trénovat tento způsob uvažování.
