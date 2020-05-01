Díky JavaScriptu a práci s DOMem už dokážete vašim stránkám vdechnout hodně života a zprostředkovat tak uživateli interaktivní zážitek. Zatím jsme však pracovali pouze s elementy, které už na stránce existují. Dnes si ukážeme, jak zapojit do stránky elementy vytvořené celé přímo v JavaScriptu. Tímto postupně nastupujeme cestu, která skončí až u toho, kdy budeme vytvářet v JavaScriptu úplně celou stránku a žádné HTML soubory už vytvářet nebudeme. To však až za několik lekcí.

## Interpolace řetězců

Chceme se vyhnout nepřehledným konstrukcím typu

```js
'Spolubydlící ' + name + ' utratil ' + amount + ' kč za ' + product + '.';
```

Proto napíšeme řaději

```js
`Spolubydlící ${name} utratil ${amount} kč za ${product}.`;
```

Ve složených závorkách máme jakési JavaScriptové okno uvnitř řetězce, do kterého můžeme vepsat nejen proměnnou, ale zcela libovolný výraz, jehož výsledek bude automaticky zkonvertován na řetězec.

### Víceřádkové řetězce

Dále v tomto kurzu budeme chtít pracovat s delšími řetězci, které se nám často nevejdou na jeden řádek. V JavaScriptu bohužel nelze udělat běžný řetězec na více řádků. Následující kód by bohužel nefungoval.

```js
const name = '
  petr
';
```

Abychom takový řetězec sestavili, musíme si pomoct sčítáním řetězců.

```js
const may = (
  'Late evening, on the first of May—\n' +
  'The twilit May—the time of love.\n' +
  'Meltingly called the turtle-dove,\n' +
  'Where rich and sweet pinewoods lay.\n' +
  'Whispered of love the mosses frail,\n' +
  'The flowering tree as sweetly lied,\n' +
  'The rose\'s fragrant sigh replied\n' +
  'To love-songs of the nightingale' +
);
```

Všimněte si použití zpětného lomítka u sybmolů jako `\n` a `\'`. Toto jsou takzvané _escape sekvence_, které nám umožní vložit dovnitř řetězce znak, který by jinak nešel napsat. Sekvence `\n` znamená nový řádek, sekvence `\'` vloží apostrof. Ten bychom to řetězce napsat nemohli, protože by si JavaScript myslel, že tím chceme řetězec ukončit.

Naustálé sčítání a vkládání escape sekvencí nás ovšem brzy začne dost zdržovat. Nyní však můžeme použí nové cool řetězce se zpětnými apostrofy a zapsat náš řetězec takto.

```js
const may = `
  Late evening, on the first of May—
  The twilit May—the time of love.
  Meltingly called the turtle-dove,
  Where rich and sweet pinewoods lay.
  Whispered of love the mosses frail,
  The flowering tree as sweetly lied,
  The rose's fragrant sigh replied
  To love-songs of the nightingale
`;
```

Zde už apostrof i nový řádek můžeme napsat rovnou bez escape sekvencí.

## Tvorba HTML pomocí JavaScriptu

Z předchozích lekcí už dávno umíme změnit obsah nějakého DOM elementu pomocí vlastnosti `textContent`. U složitějších aplikací však narazíme na situace, kdy nechceme měnit jen text už existujícího elementu, ale chceme vytvořit úplně nový element. Na začátku nám k tomu poslouží vlastnost `innerHTML`. Pomocí této vlastnosti můžeme nějakému elementu nastavit obsah jako HTML. Můžeme tak uvnitř elementu vyrobit úplně novou HTML strukturu.

Mějme následující jednoduchou HTML strukturu.

```html
<body>
  <div class="card">Produkt</div>
</body>
```

Nyní vybereme element s třídou `card` a vložíme do něj další HTML kód.

```js
const cardElm = document.querySelector('.card');
cardElm.innerHTML =
  '<div class="card__title">Lednička</div>' +
  '<div class="card__body">Cena: 12 000 kč</div>';
```

Můžeme si ověřit, že se nám a stránce skutečně objeví tato nově vytvořené struktura. Takto můžeme dovnitř libovolného elementu vložit libobolně komplikované HTML. Všimněte se, že jsme zatím pro náš HTML kód použili sčítání řetězců. Už však známe i lepší způsob pomocí zpětný apostrofů. Navíc můžeme do takovýchto řetězců vkádat proměnné. Není tedy problém sestavit naše HTML s použitím nějakých dat.

```js
const product = ['Lednička', 12000];
const cardElm = document.querySelector('.card');
cardElm.innerHTML = `
  <div class="card__title">${product[0]}</div>
  <div class="card__body">${product[1]}</div>
`;
```

Pomocí `innerHTML` získáváme mnohem větší kontrolu nad obsahem stránky než jsme měli pouze s použitím `textContent`.

### Ukázkový příklad - nákupní seznam

Mějme následující pole obsahující položky, které zítra nechceme zapomenout koupit při návštěvě supermarketu.

```js
const shoppingList = [
  'mrkev',
  'paprika',
  'cibule',
  'čínské zelí',
  'arašídy',
  'sojová omáčka',
];
```

Díky použití `innerHTML` můžeme snadno naše pole převést na hezký HTML seznam.

```html
<body>
  <ul id="shopping-list"></ul>
</body>
```

```js
const listElm = document.querySelector('#shopping-ling');
for (let i = 0; i < shoppingList.length; i += 1) {
  listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
}
```

Každá obrátka tohoto cyklu nám tak přidá do HTML seznamu jeden další `li` element.

@exercises ## Cvičení - innerHTML [

- interpolace
- podcasty
  ]@

## Aktualizování stránky

Pohlédněme na celý kód naší stránky s nákupním seznamem.

```js
const shoppingList = [
  'mrkev',
  'paprika',
  'cibule',
  'čínské zelí',
  'arašídy',
  'sojová omáčka',
];

const listElm = document.querySelector('#shopping-ling');
for (let i = 0; i < shoppingList.length; i += 1) {
  listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
}
```

Stránka je zatím poměrně statícká. Zobrazuje pořád tentýž seznam. Určitě bychom chtěli uživateli umožnit přidat do seznamu nějakou položku. Naše pole je globální, můžeme to tedy zatím zkusit udělat programátorsky přímo z konzole.

```js
> shoppingList.push('koriandr');
7
```

Naše pole se tedy rozrostlo o jeden prvek. K našemu zklamání však obsah stránky zůstává pořád stejný. Je to logické, protože obsah seznamu `ul` jsme v JavaScriptu vytvořili hned po načtení stránky. Změna našeho pole tento kód znovu magicky nespustí. Musíme jej spustit sami ve chvíli, kdy chceme říct, že se má obsah seznamu `ul` vytvořit znova podle nového obsahu pole `shoppingList`. Abychom mohli náš kód spouštět opakovaně, bude šikovné si jej zabalit do funkce.

```js
const updateShoppingList = () => {
  const listElm = document.querySelector('#shopping-ling');
  listElm.innerHTML = '';
  for (let i = 0; i < shoppingList.length; i += 1) {
    listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
  }
};
```

Všimněte si, že na začátku funkce vymažeme `innerHTML` našeho `ul` seznamu, abychom celou HTML strukturu vytvořili úplně znova. Máme tak k dispozici funkci, kterou můžeme zavolat pokaždé, když chceme, aby naše stránka zobrazila aktuální obsah našeho pole `shoppingList`. To nám dává svobodu si s polem dělat co chceme, přidávat položky, měnit položky, mazat položky a tak dále. Vždy jen pak musíme zavolat funkci `updateShoppingList`, aby se změny projevily i v našem HTML. Můžete si to vyzkoušet rovnou z konzole a sledovat, jak stránka reaguje.

```js
> shoppingList.push('zázvor');
8
> updateShoppingList()
undefined
> shoppingList.shift();
'mrkev',
> updateShoppingList()
undefined
> shoppingList[0] = 'klíčky';
'klíčky',
> updateShoppingList()
undefined
```

V tomto příkladu jsme poprvé narazili na velice důležitý postup při tvorbě větších aplikací. V následující části si o něm řeknemě něco více, abychom jej dokázali rozpoznat a použít i v dalších našich programech.

## Dvouvrstvá architektura

Čím zkušenější a mocnější se v JavaScriptu stáváme, tím větší a složitější budou naše programy. Tím, jak skládat dohromady větší aplikace a udržet jejich komplikovanost na uzdě, se zabývá celý velký obor, kterému se říká <i>softwarový návrh a architektura</i>. Podobně jako když stavíme most nebo budovu, nemůžeme rovnou začít skládat cihlu k cihle. Musíme si nejdříve dopředu navrhnout strukturu celé stavby, aby se nám nestalo, že začneme stavět střechu aniž bychom si rozmysleli, kde budou stát nosné zdi.

Vývoj aplikací už má za dobu existence počítačů dlouhou historii. Tisíce a tisíce programátorů před námi postupně ze svých zkušeností vydestilovali mnoho různých postupů jak zajistit, aby se nám větší programy nerozpadly pod rukama. Těmto postupům se řiká návrhové a architektonické vzory. My si zde představíme vzor, na který jsme před chvíli narazili v naší aplikaci s nákupním seznamem. Tomuto zvoru se odborně říká <term cs="dvouvrstvá architektura" en="two tier architecture">.

V principu nejde o nic zvlášť komplikovaného. Podstatou celé věci je si uvědomit, že téměř každá aplikace obsahuje dvě zcela základních části: data a prezentaci. Data jsou naše JavaScriptové hodnoty jako čísla, řetězce, pole a podobně. Prezentace je způsob, jakým tato data zobrazujeme uživateli. V našem případě jako prezentaci používáme HTML a CSS.

Důležité je, že data a prezentace jsou na sobě zcela nezávislé. Pokud nějakým zůsobem změníme data, naše prezentace se sama od sebe neaktualizuje. Musíme to provést explicitně. Vždy proto potřebujeme nějakou funkci, která prezentaci aktualizuje podle toho, co zrovna data obsahují. Abychom takovou funkci v kódu jasně poznali, dáváme do jejího názvu slovo `update`. Naše funkce `updateShoppingList` je příkladem takové funkce.

@exercises ## Cvičení - dvouvrstvá architektura [

- hodiny
- kostky
  ]@

## Mandatory home reading

To better prepare you for the life of a badass professional programmer, from this lesson onwards we are going to write the mandatory home readings in English. Even if you do not aspire for a professional career in programming and just want to be a hobbyist, you will not be able to avoid English for long. It slowly sneaks in with your variable names but the road continues much further.

- Most of good courses, articles and video tutorials are in English.
- Most helpful books about programming are written in English.
- All the documentation for HTML, CSS, JavaScript and other tools and technologies is in English.
- If you have a problem and decide to take it to Stack Overflow, guess what? Your communication will be in English.

Switching to English may seem daunting at first. But in a while you will find that technical English is rather straightforward. Reading technical manuals and articles is not like reading a novel or, God forbid, reading the newspapers. The vocabulary in this particular area is quite limited and most of the time the hardest part is understanding the technical terms. If at first you feel a bit frightened by English, do not hesitate to chuck this paragraph into [Google Translator](https://translate.google.com/?sl=en&tl=cs). It is quite capable these days. In fact, with these simple texts, most of the time the translation is almost 100% acurate.

Once you get the hang of it, reading IT English will be a breeze. Actually, reading IT articles and books is a good way to get better in English in general. When at last you are smoothly reading through all the discussions on Stack Overflow, you might even get excited to read some real English literature.
