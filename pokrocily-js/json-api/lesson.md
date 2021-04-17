Čím jsou naše programy větší a užitečnější v reálném životě, tím větší je objem a složitost informací, se kterými potřebují pracovat. Informacím, se kterými program pracuje říkáme data. Jednoduchá data v naších programech reprezentujeme pomocí základních hodnot jako čísla, řetězce, pravdivostní hodnoty apod. Brzy narazíme na komplexnější data, která mají nějakou složitější vnitřní strukturu. Pro uložení takových dat pak používáme pole a objekty. 

## Objekty jako data

Při práci s většími daty se často potkáváme s polem objektů. Představme si například tabulku výdajů, která má 13 řádků a tři sloupečky. 

```js
const expenses = [
  { name: 'Petr', product: 'Prací prášek', price: 240 },
  { name: 'Ondra', product: 'Savo', price: 80 },
  { name: 'Pavla', product: 'Toaleťák', price: 65 },
  { name: 'Zuzka', product: 'Mýdlo', price: 50 },
  { name: 'Pavla', product: 'Závěs do koupelny', price: 350 },
  { name: 'Libor', product: 'Pivka na kolaudačku', price: 124 },
  { name: 'Petr', product: 'Pytle na odpadky', price: 75 },
  { name: 'Míša', product: 'Utěrky na nádobí', price: 130 },
  { name: 'Ondra', product: 'Toaleťák', price: 120 },
  { name: 'Míša', product: 'Pečící papír', price: 30 },
  { name: 'Zuzka', product: 'Savo', price: 80 },
  { name: 'Petr', product: 'Tapeta na záchod', price: 315 },
  { name: 'Ondra', product: 'Toaleťák', price: 6 },
];
```

Takováto data bychom pak pomocí komponent zobrazili na naší stránce podobně, jako jste se to naučili v předchozí lekci. 

V praxi samozřejmě budeme mít data, jejichž struktura je hlubší. Budeme tedy často mít struktury jako objekty, které obsahují pole objektů a podobně. Takto bychom mohli reprezentovat například kurz Czechitas jménem <i>Úvod do programování</i>.

```js
const course = {
  nazev: 'Úvod do programování',
  lektor: 'Martin Podloucký',
  konani: [
    {
      misto: 'T-Mobile',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Martina Nemčoková'],
      ucastnic: 30,
    },
    {
      misto: 'MSD IT',
      koucove: ['Dan Vrátil', 'Zuzana Tučková', 'Martina Nemčoková'],
      ucastnic: 25,
    },
    {
      misto: 'Škoda DigiLab',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Kateřina Kalášková'],
      ucastnic: 41,
    },
  ],
};
```

Všimněte si, jak objekt představující jeden kurz obsahuje pod klíčem `konani` pole dalších objektů. Každý z těchto objektů reprezentuje jedno konání kurzu a dále obsahuje například pole koučů, místo atp.

## Formát JSON

Podle většiny moderních doporučení je lepší v JavaScriptu používat v řetězcích jednoduché uvozovky. V počátcích JavaScriptu však bylo běžné používat spíše dvojité. Pokud v našich objektech schválně uzavřeme všechny klíče a řetězce do dvojitých uvozovek i tam, kde by to jinak nebylo potřeba, dostaneme reprezentaci zapsanou takto.

<!-- prettier-ignore-start -->
```js
const row = {
  "name": {
    "first": "Petr",
    "last": "Bílek"
  },
  "product": {
    "name": "Prací prášek",
    "amount": 1.5,
    "unit": "kg"
  },
  "price": 240
};
```
<!-- prettier-ignore-end -->

Toto je z hlediska JavaSriptu naprosto korektní zápis. Vznikne tak zcela stejný objekt, jak ten, který by vznikl bez použití uvozovek kolem klíčů. Tento způsob zápisu má své speciální jméno - <i>JavaScript Object Notation</i>, nebo-li <i>JSON</i>. Za dobu existence JavaScriptu se tento zápis rozšířil po celém internetu a dnes jde o nejpoužívanější formát pro výměnu dat mezi aplikacemi. Pokud si budeme chtít stáhnout data z nějakého serveru, dostaneme je většinou právě ve formátu JSON.

## Volání API

Většina webových aplikací pracuje s daty, která jsou uložena na nějakém vzdáleném serveru. Pokud chceme s takovými daty pracovat, musíme si serveru o tato data říct. Požadavky na data se provádějí prostřednictvím takzvaného API (<i>Application Programming Interface</i>). Jak už jsme si řekli výše, většina API poskytuje data ve formátu JSON.

K tomu, abychom mohli pracovat s API, je potřeba si detailněji popsat, jak funguje komunikace s webovým serverem. Pokud po webovém serveru něco chceme, například HTML stránku nebo nějaká data, musíme odeslat takzvaný <term cs="HTTP požadavek" en="HTTP request">. Každý požadavek musí být zacílený na nějakou URL adresu. Adresy URL mají následující formát.

```
protokol://adresa_serveru/cesta?parametr1=hodnota1&parametr2=hodnota2
```

Protokol je většinou `http` nebo `https`. Adresa serveru může být například `www.google.com`. Za adresou serveru následuje cesta, která specifikuje kam v rámci serveru se má požadavek odeslat. Za otazníkem se píšou takzvané parametry, které dále upřesňují požadavek.

Takto například vypadá adresa požadavku na server `www.google.com`, který spustí vyhledávání.

```
https://www.google.com/search?q=praha&sourceid=chrome
```

Cesta v požadavku je tedy `/search`, parametr `q` udává, že se má vyhledat slovo `praha` a parametr `sourceid` říká, že se ptáme z prohlížeče `chrome`. Tuto adresu můžete normálně zadat do prohlížeče a uvidíte výsledky vyhledávání.

### Dotazy na API

Dotazy na API fungují naprosto stejně jako jsme popsali výše. Jedno z nejjednodušších API, které si můžete sami vyzkoušet, poskytuje informace o tom, kdo má který den v jaké zemi svátek. Pokud chcete vědět, kdo má zrovna dneska svátek v České republice, vložte do prohlížeče následující adresu.

```
https://api.abalin.net/today?country=cz
```

Zkuste si pro sebe určit, co je zde adresa serveru, cesta a parametry. Podle toho, jaký je zrovna den, dostanete odpověď podobnou této.

<!-- prettier-ignore -->
```json
{"data":{"dates":{"day":9,"month":5},"namedays":{"cz":"Ctibor"}}}
```

Server se snaží posílat data co nejúsporněji a vynechává v JSONu pro počítače zbytečné mezery. Naštěstí dat není mnoho, takže jsou čitelná i v této formě.

Většina API poskytuje více různých cest. Pro vyhledání jména pro dnešní den jsme použili cestu `/today`. Můžeme však položit i obrácený dotaz a zeptat se, kdy má v Americe svátek Suzanne. K to mu použijeme cestu `/getdate` s parametry `name` a `country`.

```
https://api.abalin.net/getdate?name=suzanne&country=us
```

Pokud server poskytuje API, cestám v rámci jednoho serveru se říká _endpointy_. Z našeho API pro získání jsme zatím viděli dva různé endpointy. Toto API jich má však ještě více. Vrátíme se k nim v příkladech na procvičení.

### Volání API z JavaScriptu

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějaký endpoint a server vám pošle odpověď s kýženými daty nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou napsat toto.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažení také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevíme, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezi tím by náš program zcela zamrznul a uživatel by neměl ze stránky dobrý pocit. Z tohoto důvodu funkce `fetch` nevrací data, nýbrž takzvaný _promise_. Promise je speciální JavaScriptová konstrukce podobná události. Podobně jako na událost můžeme na promise pověsit funkci, která se má zavolat ve chvíli, kdy dorazí odpověď od serveru. To se provede pomocí metody `then`.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
promise.then((response) => {
  console.log(response);
});
```

Promise můžeme uložit do proměnné jako vidíme výše, je to však trochu zbytečné. Metodu `then` můžeme zavolat roznou na výsledku funkce `fetch`.

```js
fetch('https://api.abalin.net/today?country=cz').then((response) => {
  console.log(response);
});
```

V parametru `response` máme uloženu odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí na něm zavolat metodu `json`. Čeká nás však podraz. Tado metoda opět nevrací samotný JSON nýbrž pouze promise. Musíme tedy znova použít metodu `then` a vznikne nám takováto kaskáda.

```js
fetch('https://api.abalin.net/today?country=cz')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Tento zápis může na první pohled vypadat poněkud složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že „takto se to prostě dělá“. Promisy jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hluběji než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Naše funkce pro zpracování získaných dat je zatím pouze vypisovala do konzole. Můžeme si však napsat funkci, která dělá cokoliv chceme. Takto například můžeme zobrazím jméno mající dnes svátek v elementu s třídou `name`.

```js
const displayName = (json) => {
  const nameElm = document.querySelector('.name');
  nameElm.textContent = json.data.namedays.cz;
};

fetch('https://api.abalin.net/today?country=cz')
  .then((response) => response.json())
  .then(displayName);
```

[[[ excs Cvičení: Volání API
- svatek-zitra
- svatek-v-den
]]]

## Jednoduché destrukturování

Při tvorbě komponent se nám bude velmi hodit takzvané destrukturování. 

Vezměme pro příklad následující objekt. 

```js
const product = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč',
}
```

Často se nám stane, že chceme z objektu získat vícero hodnot a uložit je do proměnných, například takto.

```js
const name = product.name;
const price = product.price;
const currency = product.currency;
```

Programátoři jsou však líné bytosti a tento postup jim přijde zdlouhavý. Pokud se naše proměnné jmenují stejně jako klíče uvnitř objektu, můžeme si ušetřit psaní a použít takzvané destrukturování. 

```js
const { name, price, currency } = product;
```

Tímto zápisem říkáme, že chceme vyrobit tři proměnné, do kterých se uloží hodnoty z objektu `product`.

Tento postup se nám zvlášť hodí v komponentách, když chceme získat vlastnosti objektu `props`. Vzpomeňme si na komponentu `ShoppingItem` z předchozí lekce.

```js
const ShoppingItem = (props) => {
  let yesNo = 'NE';
  if (props.bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${props.product}</div>
      <div class="item__amount">${props.amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

Kód můžeme malinko pročistit tím, že si parametr `props` destrukturujeme. 

```js
const ShoppingItem = (props) => {
  const { product, amount, bought } = props;

  let yesNo = 'NE';
  if (bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

JavaScript však umožňuje zajít ještě dále a použít destrukturování přímo v parametru funkce. 

```js
const ShoppingItem = ({ product, amount, bought }) => {
  let yesNo = 'NE';
  if (bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

Takto píší komponenty praví profesionálové a bychom se jim příblížili, budeme je takto psát také. 

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
  const resultHTML = '<ol class="shopping-list">';
  for (let i = 0; i < items.length; i += 1) {
    resultHTML += ShoppingItem(items[i]);
  }

  return resultHTML + '</ol>';
};
```

Pomocí skládání komponent tak můžeme budovat větší a větší kusy naší aplikace, až jednou bude celá hotová.

[[[ excs Cvičení: Komponenty a objekty
- kontakt
- emaily
- emaily2
]]]

[[[ excs Doporučené úložky na doma
- jogini
- odjezdy
]]]
