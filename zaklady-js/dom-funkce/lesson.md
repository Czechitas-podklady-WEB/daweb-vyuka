V předchozích lekcích jsme se naučili psát JavaScriptové programy, které už zvládnou hodně věcí a dokážeme napsat i něco skutečně užitečného. Co nám ale zatím chybí je hezká interakce s uživatelem. Budeme chtít, abychom pomocí JavaScriptu dokázali měnit obsah stránky a tak umožnit uživateli opravdu interaktivní zážitek namísto pouhého vypisování textu na obrazovku.

## Document Object Model

K interakci se stránkou pomocí JavaScriptu nám slouží takzvaný DOM, neboli _Document Object Model_. Ten představuje interní reprezentaci webové stránky v paměti prohlížeče. Pojďme si vysvětlit, co to znamená.

Ve chvíli, kdy uživatel zadá do prohlížeče URL adresu, webový prohlížeč pošle po internetu požadavek na server sídlící na této adrese. Server pošle prohlížeči zpátky HTML požadované stránky. Takové HTML může vypadat například takto.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="header">Hlavička</div>
    <div class="cards">
      <div class="card">Karta 1</div>
      <div class="card">Karta 2</div>
      <div class="card">Karta 3</div>
    </div>
    <div class="footer">Patička</div>
  </body>
</html>
```

Prohlížeč si HTML přečte a vytvoří si z něj v paměti stromovou strukturu, která reprezentuje obsah stránky. Této struktuře říkáme DOM a můžeme ji znázornit jako na obrázku níže.

![HTML a DOM](assets/dom.svg)

Jakmile má prohlížeč DOM zkonstruovaný, může úplně zapomenout na HTML a stránku zobrazí podle toho, co je obsaženo v DOMu.

![DOM Stránka](assets/dom-page.svg)

Je to podobné, jak když si například čtete knížku a v hlavě si automaticky vytváříte reprezentaci celého příběhu. takže jej později dokážete odvyprávět i bez knihy. Výhoda pro nás programátory spočívá v tom, že prohlížeč nám umožní DOM pomocí JavaScriptu měnit a tím ovlivňovat, co se zobrazuje na stránce.

To hlavní, co je dobré si z tého sekce zapamatovat je, že HTML je pouze text, který se za života stránky nikdy nemění, kdežto DOM je vnitřní reprezentace stránky, která se měnit dá.

## DOM Elementy

Když prohlížeč zpracovává HTML kód, každá značka a její obsah se převedou na takzvaný _DOM element_. Každý žlutá krabička na obrázku výše představuje jeden DOM element. Z hlediska JavaScriptu je důležité, že DOM elementy jsou nový typ hodnoty. Můžeme je tedy podobně jako čísla, řetězce nebo pravdivostní hodnoty ukládat do proměnných, předávat jako vstupy funkcím apod. Jak se ale k nějakému DOM elementu z naší stránky dostaneme? Poslouží nám k tomu funkce `document.querySelector`. Pro ukázku použití se vraťme k naší stránce s třemi kartami.

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

JavaScript by si pomlčku spletl s mínusem a kód by nefungoval. Druhá důležitá věc je, že hodnoty všech CSS vlastností se zapisují pomocí řetězců. Proto dávejte pozor například na takového chyby.

```jscon
> headerElm.style.color = white
> headerElm.style.marginBottom = 2rem
```

### Změna třídy

Pomocí JavaScriptu můžeme také snadno změnit CSS třídu elementu. Použijeme k tomu vlastnost `className`. Můžeme tak například snadno měnit třídy hlavičky na naší stránce.

```jscon
> const headerElm = document.querySelector('.header')
> headerElm
<div class="header">Dobré ráno</div>
> headerElm.className = 'new-header'
> headerElm
<div class="new-header">Dobré ráno</div>
```

U vlastnosti `className` je dobré si dát pozor na to, že se mždy mění celý obsah atributu. Dejme tomu, že mám tlačítko s třídou `btn`.

```html
<button class="btn">Click me</button>
```

Pokud chci tlačítko vzýraznit a přidat mu další třídu například takto

```html
<button class="btn btn-primary">Click me</button>
```

musím nastavit obsah celého atributu `class`.

```jscon
> const buttonElm = document.querySelector('button')
> buttonElm
<button class="btn">Click me</button>
> buttonElm.className = 'btn btn-primary'
> headerElm
<button class="btn btn-primary">Click me</button>
```

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

Používání `id` je vůbec ten nejvychovanější způsob, jak ze stránky něco vybírat, protože je ihned vidět, který prvek máme na mysli a nemusíme řešit žádné CSS hádanky. Dokonce je to tak vychovaný a běžný způsob, že JavaScript poskytuje speciální funkci `document.getElementById`, která vybírá na základě `id`. Kód výše by šel tedy napsat i takto.

```js
const cardElm = document.getElementById('card2');
```

Všimněte si, že zde napíšeme znak mřížky, protože vstupem pro `document.getElementById` není CSS selektor, nýbrž samotné `id` prvku.

Oba z výše uvedených způsobů výběru podle `id` jsou zcela legitimní a je pouze na vás, který si zvolíte.

@exercises ## Cvičení - Manipulace s DOMem [

- novinky
- kviz
  ]@

## Vlastní funkce

Funkce jsou jednou z nejdůležitějších součástí programování. Všimněte si, jak často vaše programy sestávají z volání různých funkcí. Ve všech programovacích jazycích je již od začátku mnoho funkcí rovnou k dispozici. Často ale potřebujeme funkci, která dělá něco specifického, důležitého pouze pro náš program. Představme si například, že vyměřujeme pozemek a chceme spočítat plochu pozemku, který má tvar pravoúhlého trojúhelníka o šířce `width` a výšce `height` jako na obrázku.

![Pozemek](assets/fields.svg)

Naše funkce tedy bude mít dva vstupy - šířku a výšku. Ze školy si pamatujeme, že plochu prvoúhlého trojúhelníka spočítáme tak, že vynásobíme šířku výškou a výsledek vydělíme dvěma. Už tedy víme, co má funkce dělat a zbývá nám tento postup zapsat v JavaScritpu.

```js
(width, height) => (width * height) / 2;
```

Zápis funkce se dělí na definici _vstupů_ (před šipkou) a _tělo_ (za šipkou). Jako vstupy v kulatých závorkách vidíme dvě slova `width` a `height`. To jsou speciální proměnné, kterým říkáme _parametry_. Pokud naší funkci zavoláme s nějakými hodnotami, například 5 a 3 jak napovídá obrázek, JavaScript tyto hodnoty uloží do argumentů. V těle funkce pak můžeme agrumenty použít jako normální proměnné pro náš výpočet.

Zbývá nám ukázat si, jak naší funkci zavolat. Zde přichází jedno z nejdůležitějších uvědomění, které v JavaScriptu kdy zažijete.

**Funkce je hodnota, podobně jako číslo nebo řetězec!**

Funkci tedy můžeme uložit do proměnné stejně jako každou jinou hodnotu. Uložením do proměnné tak vlastně funkci dáme jméno. Všimněte si, že jde o stejný postup jako s jakoukoliv jinou hodnotou.

```js
const age = 25;
const user = 'robert';
const married = false;
const element = document.querySelector('.card');
const landArea = (width, height) => (width * height) / 2;
```

Jakmile máme funkci takto hezky uloženou v proměnné, můžeme jí zavolat známým způsobem.

```js
landArea(5, 3);
```

### Složitější funkce

Ne každá funkce je tak přímočará, jako výpočet obsahu. Často se stane, že potřebujeme ve funkci provést nějaké rozhodování, výpočet sestávají více kroků apod. Mějme například funkci, která nám vrátí absolutní hodnotu čísla. V takové funkci potřebujeme použít podmínky. Tělo funkce tedy bude obsahuje více příkazů a nevejde se nám na jeden řádek. V takovém případě může tělo funkce být blokem kódu podobně jako je to už známe u podmínek.

```js
const abs = (x) => {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
};
```

Všimněte si důležitého slovíčka `return`. To slouží k tomu, abychom z funkce vrátili nějakou hodnotu. Ve chvíli, kdy napíšeme `return`, kontrola se vrátí zpět na místo, odkud byla funkce volána a vrácená hodnota bude na tomto místě výsledkem naší funkce.

```js
const delka = abs(-10);
```

Vzhledem k tomu, že příkazem `return` se průběh funkce ukončuje, můžeme funkce `abs` napsat také takto.

```js
const abs = (x) => {
  if (x >= 0) {
    return x;
  }
  return -x;
};
```

Proč není `else` potřeba? Zde je nuté oprášit logické uvažování. Pokud bylo <var>x</var> kladné nebo nula, funkce skončila u prvního `return` a k druhému se vůbec nedostala. Pokud se tedy vykonávání funkce dostalo až k druhému `return`, znamená to, že <var>x</var> musí být záporné, jinak by funkce skončila mnohem dřív a sem bychom se vůbec nedostali. Nemusíme už tedy říkat žádné `else` a prostě vrátíme `-x`.

Zkušení programátoři `else` vynechávají, pokud není potřeba. Je proto dobré si na tento způsob zápistu zvyknout.

@exercises ## Cvičení - Vlastní funkce [

- obsah-elipsy
- maximum-ze-dvou
- ramecek
  ]@

## Povinné čtení na doma

Manipulace s CSS třídami pomocí `classList`.

@exercises ## Doporučené úložky na doma [

- kalkulacka
- dovednosti
- python-round
  ]@
