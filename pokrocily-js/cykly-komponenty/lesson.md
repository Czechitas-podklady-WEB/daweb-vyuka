Díky JavaScriptu a práci s DOMem už dokážete vašim stránkám vdechnout hodně života a zprostředkovat tak uživateli interaktivní zážitek. Zatím jsme však pracovali pouze s elementy, které už na stránce existují. Dnes si ukážeme, jak zapojit do stránky elementy vytvořené celé přímo v JavaScriptu. Tímto postupně nastupujeme cestu, která skončí až u toho, kdy budeme vytvářet v JavaScriptu úplně celou stránku a žádné HTML soubory už skoro potřebovat nebudeme.

Než se však pustíme do hlavního tématu, ještě si lehce zopakujeme cykly.

[[[ excs Cvičení: Opáčko cyklů
- nakupni-seznam
- nakupni-seznam-funkce
]]]

## Jednoduché destrukturování

Často se nám stane, že chceme z objektu získat vícero hodnot a uložit se je do proměnných, například takto.

```js
const fullName = user1.fullName;
const login = user1.login;
const cartItems = user1.cartItems;
```

Programátoři jsou však líné bytosti a tento postup jim přijde zdlouhavý. Pokud se naše proměnné jmenují stejně jako klíče uvnitř objektu, můžeme si ušetřit psaní a použít takzvané destrukturování. 

```js
const { fullName, login, cartItems } = user1;
```

Tímto zápisem říkáme, že chceme vyrobit tři proměnné, do kterých se uloží hodnoty z objektu `user1`. 

Tento postup se nám bude zvlášť hodit ve chvíli, kdy v nějaké funkci obdržíme na vstupu objekt. 

## První komponenta

V tomtu kurzu postupně směřujeme k tomu, abychom dokázali naši stránku sestavit z menších stavebních bloků, kterým budeme říkat _komponenty_. Ke skutečným komponentám se vším všudy se dostanema až ve chvíli, kdy potkáme React. Ale už nyní si můžeme vyzkoušet malou ochutnávku.

Komponenta je v podstatě funkce, která dostane na vstupu nějaká data, a vytvoří z nich kus obsahu naší stránky. Ve cvičení [Nákupní seznam jako funkce](#exc-nakupni-seznam-jako-funkce) jste už ve skutečnosti vlastní komponentu vytvořili. Funkce `shoppingList` ze zadaného pole vytvoří kus HTML pro naši stránku.

```js
const ShoppingList = (items) => {
  let result = '';
  for (let i = 0; i < items.length; i += 1) {
    result += `<li>${items[i]}</li>`;
  }

  return result;
};
```

Máme-li tedy stránku s prázdným seznamem jako zde

```html
<body>
  <ol class="shopping-list"></ol>
</body>
```

můžeme seznam naplnit obsahem zavoláním naší funkce `ShoppingList`.

```js
const data = ['špagety', 'kečup', 'sýr'];
const listElm = document.querySelector('.shopping-list');
listElm.innerHTML = ShoppingList(data);
```

Všimněte si, že jsme funkci pojmenovali s velkým písmenem na začátku. Toto je konvence, kterou si vytvořili především React programátoři, aby dokázali rychle odlišit funkce představující komponenty od všech ostatních funkcí. JavaScriptu je úplně jedno, jaké písmenko na začátku názvu funkce uvedeme. Jde pouze o pomůcku pro nás a čtenáře našeho programu, aby všichni rychle dokázal poznat, z jakých komponent se náš program skládá. Protože také směřujeme směrem k vývoji v Reactu, budeme tuto konvenci dodržovat už od této chvíle.

[[[ excs Cvičení: Komponenty
- nadpis-stranky
- nadpis-stranky-komponenta
- hodiny
]]]

[[[ excs Doporučené úložky na doma
- podcasty
- ukolnicek
]]]

## Mandatory home reading

To better prepare you for the life of a badass professional programmer, from this lesson onwards we are going to write the mandatory home readings in English. Even if you do not aspire for a professional career in programming and just want to be a hobbyist, you will not be able to avoid English for long. It slowly sneaks in with your variable names but the road continues much further.

- Most of good courses, articles and video tutorials are in English.
- Most helpful books about programming are written in English.
- All the documentation for HTML, CSS, JavaScript and other tools and technologies is in English.
- If you have a problem and decide to take it to Stack Overflow, guess what? Your communication will be in English.

Switching to English may seem daunting at first. But in a while you will find that technical English is rather straightforward. Reading technical manuals and articles is not like reading a novel or, God forbid, reading the newspapers. The vocabulary in this particular area is quite limited and most of the time the hardest part is understanding the technical terms. If at first you feel a bit frightened by English, do not hesitate to chuck this paragraph into [Google Translator](https://translate.google.com/?sl=en&tl=cs). It is quite capable these days. In fact, with these simple texts, most of the time the translation is almost 100% acurate.

Once you get the hang of it, reading IT English will be a breeze. Actually, reading IT articles and books is a good way to get better in English in general. When at last you are smoothly reading through all the discussions on Stack Overflow, you might even get excited to read some real English literature.
