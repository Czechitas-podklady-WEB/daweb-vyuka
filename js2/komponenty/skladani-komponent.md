## Skládání komponent

Většina webových aplikací se skládá z mnoha různých komponent. Když takovou aplikaci tvoříme, postupujeme vždy směrem zdola nahoru. Vytváříme nejdříve jednoduché komponenty jako tlačítka, položky seznamů, vstupní pole apod. Tyto pak skládáme do větších komponent jako formuláře, seznamy, různá menu a další. Nakonec se dostaneme až k největším komponentám, jako jsou samotné stránky naší aplikace.

Struktura komponent často kopíruje strukturu našich dat. Vraťme se zde k našemu nákupnímu seznamu. Chtěli bychom aplikaci rozšířit tak, abychom mohli zobrazovat nákupní seznamy pro jednotlivé dny v týdnu. Budeme tedy chtít vytvořit komponentu `ShoppingList`, která zobrazí nákupní seznam pro jeden den v týdnu.

```js
const ShoppingList = (props) => {
  const { day, items } = props;
  return `
    <div class="shopping-list">
      <h2>${day}</h2>  
      <ul class="shopping-list__items">
        ${items.map((item) => ShoppingItem(item)).join('')}
      </ul>
    </div>
  `;
};
```

Všimněte si, jak elegantně můžeme pomocí interpolace vložit do HTML řetězce obsah generovaný pomocí komponenty `ShoppingItem`.

Komponentu `ShoppingList` pak použijeme k vytvoření seznamu pro pondělí a úterý. Zbavíme se tak úplně funkce `renderShoppingList`.

```js
const listsElement = document.querySelector('#lists');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping/mon')
  .then((response) => response.json())
  .then((data) => {
    listsElement.innerHTML += ShoppingList({ day: 'Pondělí', items: data });
  });

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping/tue')
  .then((response) => response.json())
  .then((data) => {
    listsElement.innerHTML += ShoppingList({ day: 'Úterý', items: data });
  });
```

Dejte pozor, že všechny komponenty vždy očekávají jako _props_ objekt. Tedy i v situaci výše uložíme pole `data` do objektu s vlastností `items`, protože přesně takto strukturovaný objekt komponenta očekává.
