## Skládání komponent

Většina webových aplikací se skládá z mnoha různých komponent. Když aplikaci tvoříme, postupujeme směrem zdola nahoru. Vytváříme nejdříve jednoduché komponenty jako tlačítka, položky seznamů, vstupní pole apod. Tyto pak skládáme do větších komponent jako formuláře, seznamy, různá menu a další. Nakonec se dostaneme až k největším komponentám jako jsou samotné jednotlivé stránky naší aplikace.

Struktura komponent často kopíruje strukturu naších dat. Připomeňme si náš nákupní seznam. Ten bychom z nějakého serveru mohli ve formátu JSON obdržet například takto. 

```js
const list = [
  {
    "product": "Rohlíky",
    "amount": "10",
    "bought": false,
  },
  {
    "product": "Máslo",
    "amount": "1 ks",
    "bought": false,
  },
  {
    "product": "Mléko",
    "amount": "1 litr",
    "bought": true,
  },
];
```

Vidíme, že náš seznam se skládá z jednotlivých položek. Ty můžeme zobrazovat pomocí komponenty `ShoppingItem`, kterou už známe. Celý seznam pak můžeme zobrazit pomocí komponenty `ShoppingList`. Ta bude k zobrazení jednotlivých položek používat právě komponentu `ShoppingItem`.

```js
const ShoppingList = ({ items }) => {
  let resultHTML = '<ol class="shopping-list">';
  for (let i = 0; i < items.length; i += 1) {
    resultHTML += ShoppingItem(items[i]);
  }

  return resultHTML + '</ol>';
};
```

Pomocí skládání komponent tak můžeme budovat větší a větší kusy naší aplikace, až jednou bude celá hotová.
