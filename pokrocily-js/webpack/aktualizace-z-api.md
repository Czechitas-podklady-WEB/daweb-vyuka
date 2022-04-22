## Aktualizace z API

V předchozích ukázkách aktualizace dat jsme měli pro jednoduchost nákupní seznam uložený v poli. Pokročme nyní k praktičtějšímu scénaři, kdy jsou data uložena na serveru a my je měníme pomocí API.

Nejprve musíme data stáhnout, abychom měli při načtení stránky co zobrazit. Tento kód už známe.

```js
fetch('https://apps.kodim.cz/daweb/shoplist/api/lists/default')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector('.container');
    container.innerHTML = ShoppingList({
      items: data.results.items,
    });
  });
```

Zbývá nám upravit přidávací tlačítko. Při stisku tlačítka už nebudeme přidávat nový prvek do pole, ale pošleme je příslušným POST požadavkem na server.

```js
document.addEventListener('click', () => {
  fetch('https://apps.kodim.cz/daweb/shoplist/api/lists/default', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'addItem',
      product: 'koriandr',
      amount: '1 balení',
      done: false,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector('#list-container');
      container.innerHTML = ShoppingList({
        items: data.results.items,
      });
    });
});
```

Endpoint pro vložení nové položky je navržený tak, že nám jako odpověď vždy vrátí celý seznam. To je pro nás velká výhoda, protože vrácená data můžeme rovnou předat komponentě `ShoppingList` tak, jak jsme zvyklí a akutalizovat obsah stránky.

### Aktualizace a React

Aktualizace stránky je velmi hluboké téma ležící v samém srdci webového vývoje. V této lekci jsme se jej dotkli jen velmi zlehka. Časem budeme narážet na složitejší a složitější případy. Občas se můžeme dostat do opravdu komplikovaných situací, které budeme řešit tak, že se naučíme framework React. Ten vznikl právě proto, aby nám zjednodušil aktualizavání obsahu na stránce.
