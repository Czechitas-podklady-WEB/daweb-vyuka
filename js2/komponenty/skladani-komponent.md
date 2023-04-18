## Skládání komponent

Většina webových aplikací se skládá z mnoha různých komponent. Když takovou aplikaci tvoříme, postupujeme vždy směrem zdola nahoru. Vytváříme nejdříve jednoduché komponenty jako tlačítka, položky seznamů, vstupní pole apod. Tyto pak skládáme do větších komponent jako formuláře, seznamy, různá menu a další. Nakonec se dostaneme až k největším komponentám, jako jsou samotné stránky naší aplikace.

Struktura komponent často kopíruje strukturu našich dat. Vraťme se zde k našemu nákupnímu seznamu. Chtěli bychom aplikaci rozšířit tak, abychom mohli zobrazovat nákupní seznamy pro jednotlivé dny v týdnu. Budeme tedy chtít vytvořit komponentu `ShopList`, která zobrazí nákupní seznam pro jeden den v týdnu.

```js
const ShopList = (props) => {
  const { dayName, items } = props;

  return `
    <div class="shoplist">
      <div class="shoplist__head">
        <h2 class="shoplist__day">${dayName}</h2>
      </div>
      <div class="shoplist__items">
        ${items.map((item) => ListItem(item)).join('')}
      </div>
    </div>
  `;
};
```

Všimněte si, jak elegantně můžeme pomocí interpolace vložit do HTML řetězce obsah generovaný pomocí komponenty `ListItem`.

Komponentu `ShopList` pak použijeme k vytvoření seznamu pro pondělí a úterý. Zbavíme se tak úplně funkce `renderShoppingList`.

```js
const mainElement = document.querySelector('main');

fetch('https://nakupy.kodim.app/api/sampleweek/mon')
  .then((response) => response.json())
  .then((data) => {
    mainElement.innerHTML += ShopList({
      dayName: data.result.dayName,
      items: data.result.items,
    });
  });

fetch('https://nakupy.kodim.app/api/sampleweek/tue')
  .then((response) => response.json())
  .then((data) => {
    mainElement.innerHTML += ShopList({ 
      dayName: data.result.dayName,
      items: data.result
    });
  });
```

Dejte pozor, že všechny komponenty vždy očekávají jako _props_ objekt. Tedy i v situaci výše uložíme pole `data` do objektu s vlastností `items`, protože přesně takto strukturovaný objekt komponenta očekává.
