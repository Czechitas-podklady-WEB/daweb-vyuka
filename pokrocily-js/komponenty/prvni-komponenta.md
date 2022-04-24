V tomtu kurzu postupně směřujeme k tomu, abychom dokázali naši stránku sestavit z menších stavebních bloků, kterým budeme říkat :term{cs="komponenty" en="components"}. Ke skutečným komponentám se vším všudy se dostanema až ve chvíli, kdy potkáme React. Už nyní si však můžeme vyzkoušet malou ochutnávku.

## První komponenta

Komponenta je v podstatě funkce, která dostane na vstupu nějaká data v podobě objektu, a jejím úkolem je vytvořit z těchto dat kus obsahu naší stránky. Ve cvičení [Nákupní seznam jako funkce](../../zaklady-js/cykly/cv-cykly#cvlekce%3Enakupni-seznam-funkce) jste už ve skutečnosti něco jako komponentu vytvořili. Funkce `shoppingList` ze zadaného pole vytvoří kus HTML pro naši stránku na základě pole dat.

Začněme však jednodušeji a představme si, že programujeme aplikaci pro evidenci nákupních seznamů. V takovém seznamu budeme mít položky, které chceme při příštím výletu do města koupit a budeme označovat ty, které už jsme koupili. Jednu položku takového seznamu bychom mohli reprezentavat například takto:

```js
const item1 = {
  product: 'Rohlíky',
  amount: '10',
  done: true,
};
```

Takovouto položku bychom chtěli na stránce zobrazit například takto:

```html
<li class="item">
  <div class="item__name">Rohlíky</div>
  <div class="item__amount">10</div>
  <div class="item__done item__done--tick"></div>
</li>
```

Se současnými znalostmi by nebyl problém vytvořit toto HTML pomocí následujícího kódu.

```js
let tickClass = '';
if (item1.done) {
  tickClass = ' item__done--tick';
}

const item1Html = `
  <li class="item">
    <div class="item__name">${item1.product}</div>
    <div class="item__amount">${item1.amount}</div>
    <div class="item__done${tickClass}"></div>
  </li>
`;
```

Takový kus HTML bychom pak mohli vložit někam do stránky. V naší aplikaci však budeme chtít zobrazovat víc než jednu položku. Tento kód tak budeme chtít spustit pro všechny objekty položek. Proto se nám vyplatí napsat si funkci, která na vstupu obdrží objekt nějaké položky a vrátí nám vyrobené HTML.

```js
const ShoppingItem = (item) => {
  let tickClass = '';
  if (item.done) {
    tickClass = ' item__done--tick';
  }

  return `
    <li class="item">
      <div class="item__name">${item.product}</div>
      <div class="item__amount">${item.amount}</div>
      <div class="item__done${tickClass}"></div>
    </li>
  `;
};
```

Tímto jsem vytvořili naši první komponentu! Všechny budoucí komponenty budou ve výsledku vypadat velmi podobně. Komponenta vždy obdrží nějaký datový objekt, který chceme zobrazit na naší stránce a vygeneruje HTML, které pak da stránky vložíme.

Máme-li tedy stránku s prázdným seznamem jako zde

```html
<body>
  <ul class="shopping-list"></ul>
</body>
```

můžeme do něj vložit jednu položku tak, že zavoláme naši komponentu.

```js
const item1 = {
  product: 'Rohlíky',
  amount: '10',
  done: true,
};

const listElm = document.querySelector('.shopping-list');
listElm.innerHTML += ShoppingItem(item1);
```

Všimněte si, že jsme funkci pojmenovali s velkým písmenem na začátku. Toto je konvence, kterou si vytvořili především React programátoři, aby dokázali rychle odlišit funkce představující komponenty od všech ostatních funkcí. JavaScriptu je úplně jedno, jaké písmenko na začátku názvu funkce uvedeme. Jde pouze o pomůcku pro nás a čtenáře našeho programu, aby všichni rychle dokázali poznat, z jakých komponent se náš program skládá. Protože v tomto kurzu směřujeme k vývoji v Reactu, budeme tuto konvenci dodržovat už od této chvíle.
