## Události v komponentách

Díky novému způsobu fungování našich komponent můžeme začít bez problému používat události, a to způsobem, na který jsme zvyklí. Přidat obsluhu odálosti `click` v komponentě `ShoppingList` znamená především správně vybrat tlačítko pomocí `querySelector`.

```js
const element = document.createElement('li');
element.classList.add('item');
element.innerHTML = `
  <div class="item__name">${product}</div>
  <div class="item__amount">${amount}</div>
  <button class="item__btn-done ${checkClass}"></button>
`;
element.querySelector('button').addEventListener('click', () => {
  console.log('kliknuto!');
});
```

Nyní je potřeba aktualizovat element tak, aby se při kliknutí změnilo zaškrtnutí. K tomu stačí znova zavolat funkci `ShoppingItem` s aktualizovanými `props`. Funkce nám vrátí úplně nový DOM element, kterým na stránce nahradíme starý element. K domu nám pomůže metoda `replaceWith`. Výsledná komponenta bude pak vypadat takto.

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
  element.querySelector('button').addEventListener('click', () => {
    element.replaceWith(ShoppingItem({ 
      product: product,
      amount: amount,
      done: !done,
    }));
  });

  return element;
};
```

