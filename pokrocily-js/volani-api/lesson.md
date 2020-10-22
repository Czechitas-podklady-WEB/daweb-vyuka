Většina webových aplikací pracuje s daty, která jsou uložena na nějakém vzdáleném serveru. Pokud chceme s daty na nějakém serveru pracovat, server musí poskytovat takzvané API (<i>Application Programming Interface</i>). Většina API poskytuje data ve formátu JSON. Nejprve si tedy povíme o tomto formátu a pak se naučíme si data stahovat pomocí JavaScriptu.

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

Toto je z hlediska JavaSriptu naprosto korektní zápis. Vznikne tak zcela stejný objekt, jak ten, který by vznikl bez použití uvozovek kolem klíčů. Tento způsob zápisu má své speciální jméno - <i>JavaScript Object Notation</i>, nebo-li <i>JSON</i>. Za dobu existence JavaScriptu se tento zápis rozšířil po celém internetu a dnes jde o nejpoužívanější formát pro výměnu dat. Pokud si tedy budeme chtít stáhnout data z nějakého API, dostaneme je většinou právě ve formátu JSON.

## Volání API

K tomu, abychom mohli pracovat s API je potřeba si detailněji popsat, jak funguje komunikace s webovým serverem. Pokud po webovém serveru něco chceme, například HTML stránku nebo nějaká data, musíme odeslat takzvaný <term cs="HTTP požadavek" en="HTTP request">. Každý požadavek musí být zacílený na nějakou URL adresu. Adresy URL mají následující formát.

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

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějaký endpont a server vám pošle odpověď s kýženými daty nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou napsat toto.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažené také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevím, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezi tím by náš program zcela zamrznul a uživatel by neměl ze stránky dobrý pocit. Z tohoto důvodu funkce `fetch` nevrací data, nýbrž takzvaný _promise_. Promise je speciální JavaScriptová konstrukce podobná události. Podobně jako na událost můžeme na promisepověsit funkci, která se má zavolat ve chvíli, kdy dorazí odpověď od serveru. To se provede pomocí metody `then`.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
promise.then((resp) => {
  console.log(resp);
});
```

Promise se můžeme uložit do proměnné jako vidíme výše, je to však trochu zbytečné. Metodu `then` můžeme zavolat roznou na výsledku funkce `fetch`.

```js
fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => {
    console.log(resp);
  });
```

V parametru `resp` máme uloženu odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí na něm zavolat metodu `json`. Čeká nás však podraz. Tado metoda opět nevrací samotný JSON nýbrž pouze promise. Musíme tedy znova použít metodu `then` a vznikne nám takováto kaskáda.

```js
fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then((json) => console.log(json));
```

Tento zápis může na první pohled vypadat poněkud složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že "takto se to prostě dělá." Promisy jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hluběji než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Naše funkce pro zpracování získaných dat je zatím pouze vypisovala do konzole. Můžeme si však napsat funkci, která dělá cokoliv chceme. Takto například můžeme zobrazím jméno mající dnes svátek v elementu s třídou `name`.

```js
const displayName = (json) => {
  const nameElm = document.querySelector('.name');
  nameElm.textContent = json.data.namedays.cz;
};

fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then(displayName);
```

@exercises ## Cvičení - volání API [

- svatek-zitra
- svatek-v-den
  ]@

## Aktualizace obsahu stránky

V této části si ukážeme, jak můžeme aktualizovat obsah stránky, pokud se naše zobrazovaná data nějak změní. V naší aplikaci s nákupním seznamem můžeme například chtít přidat do seznamu novou položku. Prohlédněme si nejdříve původní kód stránky s nákupním seznamem.

Obsah elementu `body`:

```html
<body>
  <ol id="shopping-list"></ol>
  <script src="index.js"></script>
</body>
```

Obsah `index.js`:

```js
'use strict';

const ShoppingItem = (props) => {
  return `<li>${props.name} - ${props.amount}</li>`;
};

const ShoppingList = (props) => {
  let result = '';
  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  return result;
};

const list = [
  { name: 'mrkev', amount: '3ks' },
  { name: 'paprika', amount: '2ks' },
  { name: 'cibule', amount: '2ks' },
  { name: 'čínské zelí', amount: '1ks' },
  { name: 'arašídy', amount: '250g' },
  { name: 'sojová omáčka', amount: '1ks' },
];

const listElm = document.querySelector('#shopping-list');
listElm.innerHTML = ShoppingList({ items: list });
```

Stránka je zatím poměrně statická. Zobrazuje pořád tentýž seznam. Určitě bychom chtěli uživateli umožnit přidat do seznamu nějakou položku. Naše pole je globální, můžeme to tedy zatím zkusit udělat programátorsky přímo z konzole.

```js
> list.push({ name: 'koriandr', amount: '1 balení' });
7
```

Naše pole se tímto rozroste o jeden prvek. K našemu zklamání však obsah stránky zůstává pořád stejný. Je to logické, protože obsah seznamu `ol` jsme v JavaScriptu vytvořili hned po načtení stránky. Změna našeho pole tento kód znovu magicky nespustí. Musíme jej spustit sami ve chvíli, kdy chceme říct, že se má obsah seznamu `ol` vytvořit znova podle nového obsahu pole `list`. Máme zde velkou výhodou v tom, že náš kód vytvářející obsah stránky dle pole `list` máme hezky zabalený v komponentě `ShoppingList`. Chceme-li tedy obsah stránky aktualizovat podle nových hodnot v poli `list`, stačí naši komponentu znova zavolat a vytvořit nové HTML.

```js
listElm.innerHTML = ShoppingList({ items: list });
```

Všimněte si, že takto zcela přepíšeme původní obsah `innerHTML` našeho `ol` seznamu, abychom celou HTML strukturu vytvořili úplně znova. Funkci `ShoppingList` tak můžeme zavolat pokaždé, když chceme, aby naše stránka zobrazila aktuální obsah našeho pole `list`. To nám dává svobodu si s polem dělat co chceme, přidávat položky, měnit položky, mazat položky a tak dále. Vždy jen pak musíme zavolat funkci `ShoppingList`, aby se změny projevily i v našem HTML. Můžete si to vyzkoušet rovnou z konzole a sledovat, jak stránka reaguje.

```js
> list.push({ name: 'zázvor', amount: '30g' });
8
> listElm.innerHTML = ShoppingList({ items: list });
> list.shift();
'mrkev'
> listElm.innerHTML = ShoppingList({ items: list });
> list[0] = { name: 'klíčky', amount: '20g' };
'klíčky'
> listElm.innerHTML = ShoppingList({ items: list });
```

### Zpracování vstupu od uživatele

Do teď jsme měnili obsah našeho pole programaticky. Nyní však chceme umožnit uživateli, aby mohl do nákupního seznamu sám přidat nějakou položku. K tomu budeme v HTML potřebovat textové políčka pro název a množství, a tlačítko pro provedení samotné akce.

```html
<body>
  <ol id="shopping-list"></ol>

  <input type="text" id="name-input" />
  <input type="text" id="amount-input" />
  <button id="add-btn">Přidat</button>

  <script src="index.js"></script>
</body>
```

Když uživatel klikne na tlačíko, musíme udělat tyto tři věci:

1. získat příslušné hodnoty z textových políček,
1. přidat do pole `list` nový objekt vytvořený z těchto hodnot,
1. aktualizovat obsah seznamu `ol` voláním komponenty `ShoppingList`.

```js
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const name = document.querySelector('#name-input').value;
  const amount = document.querySelector('#amount-input').value;
  list.push({ name: name, amount: amount });
  listElm.innerHTML = ShoppingList({ items: list });
});
```

Kód celý soubor `index.js` pak bude vypadat takto.

```js
'use strict';

const ShoppingItem = (props) => {
  return `<li>${props.name} - ${props.amount}</li>`;
};

const ShoppingList = (props) => {
  let result = '';
  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  return result;
};

const list = [
  { name: 'mrkev', amount: '3ks' },
  { name: 'paprika', amount: '2ks' },
  { name: 'cibule', amount: '2ks' },
  { name: 'čínské zelí', amount: '1ks' },
  { name: 'arašídy', amount: '250g' },
  { name: 'sojová omáčka', amount: '1ks' },
];

const listElm = document.querySelector('#shopping-list');
listElm.innerHTML = ShoppingList({ items: list });

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const name = document.querySelector('#name-input').value;
  const amount = document.querySelector('#amount-input').value;
  list.push({ name: name, amount: amount });
  listElm.innerHTML = ShoppingList({ items: list });
});
```

@exercises ## Cvičení - aktualizace stránky [

- lokalni-cas
- dopravni-prestupky
  ]@
