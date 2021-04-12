Díky JavaScriptu a práci s DOMem už dokážete vašim stránkám vdechnout hodně života a zprostředkovat tak uživateli interaktivní zážitek. Vaše aplikace tak můžou začít růst a kódu v nich bude přibývat. Abychom se ve spletitých zdrojácích dokázali vyznat, budeme se postupně učit, jak rozsekávat aplikace na samostatné funkční celky, takzvané komponenty.

Než se však pustíme do tohoto tématu, ještě si lehce zopakujeme cykly z minulé lekce.

[[[ excs Cvičení: Opáčko cyklů
- nakupni-seznam
- nakupni-seznam-funkce
]]]

## První komponenta

V tomtu kurzu postupně směřujeme k tomu, abychom dokázali naši stránku sestavit z menších stavebních bloků, kterým budeme říkat _komponenty_. Ke skutečným komponentám se vším všudy se dostanema až ve chvíli, kdy potkáme React. Už nyní si však můžeme vyzkoušet malou ochutnávku.

Komponenta je v podstatě funkce, která dostane na vstupu nějaká data v podobě objektu, a jejím úkolem je vytvořit z těchto dat kus obsahu naší stránky. Ve cvičení [Nákupní seznam jako funkce](#exc-nakupni-seznam-jako-funkce) jste už ve skutečnosti něco jako  komponentu vytvořili. Funkce `shoppingList` ze zadaného pole vytvoří kus HTML pro naši stránku na základě pole dat. 

Začněme však jednodušeji a představme si, že programujeme aplikaci pro evidenci nákupních seznamů. Jednu položku takového seznamu bychom mohli reprezentavat například takto:

```js
const item1 = {
  name: 'Rohlíky',
  amount: '10',
  bought: false,
};
```

Takovouto položku bychom chtěli na stránce zobrazit například takto:

```html
<div class="item">
  <div class="item__name">Rohlíky</div>
  <div class="item__amount">10</div>
  <div class="item__bought">NE</div>
</div>
```

Se současnými znalostmi by nebyl problém vytvořit toto HTML pomocí následujícího kódu.

```js
let yesNo = 'NE';
if (item1.bought) {
  yesNo = 'ANO';
}

const item1Html = `
  <div class="item">
    <div class="item__name">${item1.name}</div>
    <div class="item__amount">${item1.amount}</div>
    <div class="item__bought">${yesNo}</div>
  </div>
`
```

Takový kus HTML bychom pak mohli vložit někam do stránky. V naší aplikaci však budeme chtít zobrazovat víc než jednu položku. Tento kód tak budeme chtít spustit pro všechny objekty položek. Proto se nám vyplatí napsat si funkci, která na vstupu obdrží objekt položky a vrátí nám vyrobené HTML. 

```js
const ShoppingItem = (item) => {
  let yesNo = 'NE';
  if (item.bought) {
    yesNo = 'ANO';
  }

  return `
    <div class="item">
      <div class="item__name">${item.name}</div>
      <div class="item__amount">${item.amount}</div>
      <div class="item__bought">${yesNo}</div>
    </div>
  `
};
```

Tímto jsem vytvořili naši první komponentu! Všechny komponenty ve výsledku vypadají podobně. Komponenta vždy obdrží nějaký datový objekt, který chceme zobrazit na naší stránce, a vygeneruje HTML, které pak můžeme na stránku vložit. 

Máme-li tedy stránku s prázdným seznamem jako zde

```html
<body>
  <ol class="shopping-list"></ol>
</body>
```

můžeme do něj vložit jednu položku tak, že zavoláme naši komponentu. 

```js
const item1 = {
  name: 'Rohlíky',
  amount: '10',
  bought: false,
};

const listElm = document.querySelector('.shopping-list');
listElm.innerHTML += ShoppingItem(item1);
```

Všimněte si, že jsme funkci pojmenovali s velkým písmenem na začátku. Toto je konvence, kterou si vytvořili především React programátoři, aby dokázali rychle odlišit funkce představující komponenty od všech ostatních funkcí. JavaScriptu je úplně jedno, jaké písmenko na začátku názvu funkce uvedeme. Jde pouze o pomůcku pro nás a čtenáře našeho programu, aby všichni rychle dokázali poznat, z jakých komponent se náš program skládá. Protože v tomto kurzu směřujeme k vývoji v Reactu, budeme tuto konvenci dodržovat už od této chvíle.

### Zobrazování více položek

Pokud bychom mělí více položek, vložíme je do sezanmu opakovaným voláním naší komponenty. 

```js
const item1 = {
  name: 'Rohlíky',
  amount: '10',
  bought: false,
};

const item2 = {
  name: 'Rajčate',
  amount: '1kg',
  bought: false,
};

const listElm = document.querySelector('.shopping-list');
listElm.innerHTML += ShoppingItem(item1);
listElm.innerHTML += ShoppingItem(item2);
```

Většinou však naše objekty budeme mít v nějakém poli. Výsledný kód by pak vypadal takto.

```js
const items = [
  {
    name: 'Rohlíky',
    amount: '10',
    bought: false,
  },
  {
    name: 'Rajčate',
    amount: '1kg',
    bought: false,
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

### Props

V praxi není problém psát naše komponenty tak jako výše. V Reactu však platí konvence, že vstupní objekt komponenty se vždy jmenuje `props`. Je to podobný princip, jako když parametr v posluchači události pojmenováváme `event`, i když JavaScriptu je úplně jedno, jaký název si zvolíme. 

Abychom se při přechodu na React nemuseli nic přeučovat, budeme naše komponenty psát Reactovým způsobem již nyní. Naše komponenta `ShoppingItem` by pak vypadala takto:

```js
const ShoppingItem = (props) => {
  let yesNo = 'NE';
  if (props.bought) {
    yesNo = 'ANO';
  }

  return `
    <div class="item">
      <div class="item__name">${props.name}</div>
      <div class="item__amount">${props.amount}</div>
      <div class="item__bought">${yesNo}</div>
    </div>
  `
};
```

[[[ excs Cvičení: Komponenty
- produkt
- produkt-komponenta
- hodiny
]]]

[[[ excs Doporučené úložky na doma
- podcasty
- ukolnicek
]]]

<!-- ## Mandatory home reading

To better prepare you for the life of a badass professional programmer, from this lesson onwards we are going to write the mandatory home readings in English. Even if you do not aspire for a professional career in programming and just want to be a hobbyist, you will not be able to avoid English for long. It slowly sneaks in with your variable names but the road continues much further.

- Most of good courses, articles and video tutorials are in English.
- Most helpful books about programming are written in English.
- All the documentation for HTML, CSS, JavaScript and other tools and technologies is in English.
- If you have a problem and decide to take it to Stack Overflow, guess what? Your communication will be in English.

Switching to English may seem daunting at first. But in a while you will find that technical English is rather straightforward. Reading technical manuals and articles is not like reading a novel or, God forbid, reading the newspapers. The vocabulary in this particular area is quite limited and most of the time the hardest part is understanding the technical terms. If at first you feel a bit frightened by English, do not hesitate to chuck this paragraph into [Google Translator](https://translate.google.com/?sl=en&tl=cs). It is quite capable these days. In fact, with these simple texts, most of the time the translation is almost 100% acurate.

Once you get the hang of it, reading IT English will be a breeze. Actually, reading IT articles and books is a good way to get better in English in general. When at last you are smoothly reading through all the discussions on Stack Overflow, you might even get excited to read some real English literature. -->
