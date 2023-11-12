## Dotaz PATCH

Zatím jsme pro úpravu dat na serveru používali pouze dotaz POST. Tento se používá, pokud chceme přidat nějakou novou datovou položku, například položku do nákupního seznamu, zboží do nákupního košíku apod. Pro úpravu již existujících položek se používá dotaz PATCH. Ten nám poslouží například

1. k zaškrtnutí/pdškrtnutí položky v seznamu,
1. ke změně jména, množství nebo jednotky,
1. ke změne pořadí jednotek v seznamu.

Nejprve si ukážeme, jak můžeme změnit zaškrtnutí položky. Budeme pokračovat v našem Webpackovém projektu `nakupy-webpack` vytvořeném v předchozí sekci.

Do této chvíle jsme vždy překreslovali celou komponentu `ShopList` najednou. Pro zaškrtnutí jedné položky nám však stačí překreslit pouze příslušnou komponentu `ListItem`. Jelikož budeme data položky stahovat z API, komponenta `ListItem` potřebuje znát jednak _id_ položky, kterou zobrazuje a také den, do kterého položka patří. Upravíme si proto _props_ v `ListItem` takto:

```js
export const ListItem = (props) => {
  const { day, item } = props;
  const { id, done, product, amount, unit } = item;
```

Uvnitř komponenty `ShopList` pak musíme upravit volání funkce `ListItem`:

```js
const itemsElement = element.querySelector('.shoplist__items');
itemsElement.append(
  ...dayResult.items.map((item) => ListItem({ day: day, item: item }))
);
```

Nyní vytvoříme posluchač události pro tlačítko `.btn-tick` postupem, který už dobře známe.

```js
const handleTick = () => {
  console.log('id a den položky:', id, day);
};

element.querySelector('.btn-tick').addEventListener('click', handleTick);
```

V osbsluze události pošleme PATCH dotaz na API endpoint

```
https://nakupy.kodim.app/api/me/week/:day/items/:id
```

Musíme mu předat _body_, které říká, jakou vlastnost chceme změnit. Pokud chceme položku zaškrnout, pošleme

```json
{
  "done": true
}
```

v opačeném případě

```json
{
  "done": false
}
```

Pozor, že když nám přijdou aktualizovaná data ze serveru, je potřeba položku překreslit tak, jak už to známe pomocí `replaceWith`.

```js
const handleTick = () => {
  fetch(`https://nakupy.kodim.app/api/me/week/${day}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      done: !done,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      element.replaceWith(ListItem({ day, item: data.result }));
    });
};
```

Celý výsledný projekt z této lekce s Webpack a dotazem PATCH najdete v repozitáři [projekt-nakupy-patch](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-patch).
