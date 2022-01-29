## DOM Elementy

Když prohlížeč zpracovává HTML kód, každá značka a její obsah se převedou na takzvaný _DOM element_. Každá žlutá krabička na obrázku výše představuje jeden DOM element. Z hlediska JavaScriptu je důležité, že DOM elementy jsou nový typ hodnoty. Můžeme je tedy podobně jako čísla, řetězce nebo pravdivostní hodnoty ukládat do proměnných, předávat jako vstupy funkcím apod. Jak se ale k nějakému DOM elementu z naší stránky dostaneme? Poslouží nám k tomu funkce `document.querySelector`. Pro ukázku použití se vraťme k naší stránce s třemi kartami.

```html
<body>
  <div class="header">Hlavička</div>
  <div class="cards">
    <div class="card">Karta 1</div>
    <div class="card">Karta 2</div>
    <div class="card">Karta 3</div>
  </div>
  <div class="footer">Patička</div>
</body>
```

JavaScript říká DOMu celé naší stránky _dokument_. Funkce `document.querySelector` umí z dokumentu vybrat DOM element podle stejných pravidel, která používají CSS selektory. Například element hlavičky najdeme snadno podle jeho třídy. Výsledný DOM element si pak uložíme do proměnné. Zatím budeme experimentovat v konzoli, abychom si mohli rovnou zobrazit výsledky.

```jscon
> const headerElm = document.querySelector('.header');
> headerElm
<div class="header">Hlavička</div>
```

Jakmile máme element uložený v proměnné, můžeme si s ním začít hrát pomocí jeho vlastností a metod.

### Změny obsahu a stylu

První důležitá vlastnost každého DOM elementu je `textContent`. Ta obsahuje textový obsah našeho elementu. Použitím vlastnosti `textContent` můžeme tento obsah číst a také měnit.

```jscon
> const headerElm = document.querySelector('.header')
> headerElm.textContent
Hlavička
> headerElm.textContent = 'Dobré ráno'
> headerElm
<div class="header">Dobré ráno</div>
```

Snadno také můžeme změnit jakýkoliv styl pomocí vlastnosti `style`. Takto můžeme změnit například barvu textu a dolní okraj.

```jscon
> const headerElm = document.querySelector('.header')
> headerElm.style.color = 'white'
> headerElm.style.marginBottom = '2rem'
```

Všimněte si hned dvou důležitých věcí. Za prvé, názvy CSS vlastností musíme zapisovat **velbloudí notací**. Je to proto, že kdybychom použili kebab notaci (ano, toto je skutečný název) jako zde

```jscon
> headerElm.style.margin-bottom = '2rem'
```

JavaScript by si pomlčku spletl s mínusem a kód by nefungoval. Druhá důležitá věc je, že hodnoty všech CSS vlastností se zapisují pomocí řetězců. Proto dávejte pozor například na takové chyby.

```jscon
> headerElm.style.color = white
> headerElm.style.marginBottom = 2rem
```

### Změna třídy

Pomocí JavaScriptu také můžeme elementům snadno přidávat nebo odebírat CSS třídy. Použijeme k tomu vlastnost `classList`. Takto například přidáme třídu hlavičce naší strány.

```jscon
> const headerElm = document.querySelector('.header')
> headerElm
<div class="header">Dobré ráno</div>
> headerElm.classList.add('new-header')
> headerElm
<div class="new-header">Dobré ráno</div>
```

Pomocí `classList` lze také třídy odebírat. Dejme tomu, že máme takovéto tlačítko.

```html
<button class="btn btn-primary">Click me</button>
```

Pokud chceme tlačítku odebrat modifikátor `btn-primary`, použijeme metodu `classList.remove`.

```jscon
> const buttonElm = document.querySelector('button')
> buttonElm
<button class="btn btn-primary">Click me</button>
> buttonElm.classList.remove('btn btn-primary')
> buttonElm
<button class="btn">Click me</button>
```

Vlastnost `classList` nabízí ještě další užitečné metody jako `toggle` nebo `replace`. Ty si zatím necháme na později. Pokud jste zvídaví můžete si o nich přečíst v [MDN dokumentaci](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).

### Změna atributů

Podobně jako obsah, třídy nebo styly můžeme měnit i atributy elementů. Nejšikovnější je například změna obrázku v elementu `img`. Mějme například následující HTML.

```html
<img class="pet" alt="Kočka" src="img/cat.jpg" />
```

Pomocí JavaScriptu obrázek snadno změníme takto.

```js
const petElement = document.querySelector('.pet');
petElement.src = 'img/dog.jpg';
petElement.alt = 'Pejsek';
```

Vidíte, že díky DOMu si můžeme se stránkou hrát zcela dle libosti. Možná se vám už v hlavně rodí odvážné a nadšené nápady jaké úžasné stránky by se daly tatko vyrobit. Vraťme se však na chvilinku ještě k selektorům.

### Selektory

Vybírat prvky na stránce pomocí CSS tříd se občas velmi hodí. Jindy nás to ale naopak dostává do problémů. Podívejme se znova na kód stránky s kartami.

```html
<body>
  <div class="header">Hlavička</div>
  <div class="cards">
    <div class="card">Karta 1</div>
    <div class="card">Karta 2</div>
    <div class="card">Karta 3</div>
  </div>
  <div class="footer">Patička</div>
</body>
```

Funkce `document.querySelector` vždy vrátí **první** prvek, který na stránce najde. Pokud se chceme dostat například ke druhé kartě, pomocí selectoru `.card` to nepůjde. Takto získáme pouze kartu první.

```js
const cardElm = document.querySelector('.card');
```

Jelikož lze v `document.querySelector` použít libovolný CSS selektor, někoho by mohla napadnout například takováhle frajeřinka.

```js
const cardElm = document.querySelector('.card:nth-child(2)');
```

Tento kód bude skutečně fungovat, ale rovnou zde na místě vám takové triky navždy zakazuju. Takovéto komplikované selektory používejte pouze v případě, že opravdu není vyhnutí. Pro nás existuje jednodušší řešení a to dát každé kartě unikátní `id`.

```html
<body>
  <div class="header">Hlavička</div>
  <div class="cards">
    <div id="card1" class="card">Karta 1</div>
    <div id="card2" class="card">Karta 2</div>
    <div id="card3" class="card">Karta 3</div>
  </div>
  <div class="footer">Patička</div>
</body>
```

Pak se ke druhé kartě snadno dostaneme takto.

```js
const cardElm = document.querySelector('#card2');
```

Používání `id` je vůbec ten nejvychovanější způsob, jak ze stránky něco vybírat, protože je ihned vidět, který prvek máme na mysli, a nemusíme řešit žádné CSS hádanky. Dokonce je to tak vychovaný a běžný způsob, že JavaScript poskytuje speciální funkci `document.getElementById`, která vybírá na základě `id`. Kód výše by šel tedy napsat i takto.

```js
const cardElm = document.getElementById('card2');
```

Všimněte si, že zde nepíšeme znak mřížky, protože vstupem pro `document.getElementById` není CSS selektor, nýbrž samotné `id` prvku.

Oba z výše uvedených způsobů výběru podle `id` jsou zcela legitimní a je pouze na vás, který si zvolíte.
