Do této chvíle jsme z jazyka JavaScript již poznali mnoho věcí. Věcí, které často potřebují čas na strávení a zažití aby se v hlavě dobře usadily na ta správná místa. Pokud se něco nového a náročného snažíme naučit příliš rychle, snadno se stane, že nám v hlavách nové pojmy lítají jak splašené a není jasné, co souvisí s čím a co kam patří. V této lekci tedy vrhneme více světla na věci, které jste už v minulých lekcích použili, ale možná ještě nebyl čas se nad nimi pořádně zamyslet.

## Hodnoty null a undefined

Občas se nám stane, že si potřebujeme nějakou proměnnou připravit, ale zatím ještě nevíme, jaká v ní bude hodnota. Chceme tedy, aby na začátku v proměnné byla nějaká neutrální hodnota, která jakoby nic neznamená. To můžeme zařídit pomocí speciální hodnoty `null`. Můžeme si představit, že hodnota `null` je jakási prázdná výplň, taková vata, která zabírá místo tam, kde zatím nic skutečného není. Jde zároveň o nový typ hodnoty vedle čísel, řetězců, objektů, funkcí apod. 

```js
'use strict';

const password = prompt('Zadejte heslo: ');
let message = null;

if (password === 'swordfish') {
  message = 'Access granted';
} else {
  message = 'Access denied';
}

const msgElm = document.querySelector('#msg');
msgElm.textContent = message;
```

Explicitnímu ukládání hodnoty `null` do proměnných jako výše, bychom se měli spíše vyhýbat. Uvedený program se dá bez problému přepsat bez použití `null`.

```js
let message = 'Access denied';

if (password === 'swordfish') {
  message = 'Access granted';
}

const msgElm = document.querySelector('#msg');
msgElm.textContent = message;
```

Často se však stane, že hodnotu `null` vrací nějaké funkce v situaci, kdy se něco nepovedlo. Velmi častý případ je to právě u funkce `document.querySelector`, která vrací `null`, pokud se jí na stránce nezdaří najít element podle zadaného selektoru.

Pojďme zkusit omylem vybrat element pro naší zprávu pomocí CSS třídy, která však v HTML vůbec není.

```jscon
> const msgElm = document.querySelector('.msg')
> msgElm
null
```

Vidíme, že v proměnné `msgElm` máme místo očekávaného elementu uloženo `null`. Z toho si domyslíme, že metoda `querySelector` kýžený element nenašla a můžeme začít zkoumat, kde jsme v programu udělali chybu. 

Pokud to v programu potřebujeme, můžeme proměnnou na hodnotu `null` otestovat pomocí jednoduché podmínky.

```js
if (msgElm === null) {
  console.log('Element nenalezen');
}
```

### Hodnota undefined

Kromě celkem užitečné hodnoty `null` JavaScript také obsahuje zákeřnou hodnotu `undefined`. Pokud `null` je jakási neutrální výplň, hodnota `undefined` v podstatě znamená "prázdno". Pokud bychom přirovnali proměnné k šuplíkům, mohli bychom si představovat, že hodnota `null` znamená šuplík vyplněný vatou nebo molitanem. Hodnota `undefined` by pak znamenala, že šuplík je úplně prázdný. 

Hodnotu `undefined` potkáme v mnoha situacích, ale nejčastěji ve chvíli, kdy se snažíme u nějakého objektu přistoupit k vlastnosi, která neexistuje. Je například velmi snadné udělat překlep v anglickém slově `length`.

```jscon
> const name = 'martin'
> name.lenght
undefined
```

Všimněte si, že JavaScript runtime vrací `undefined` také jako výsledek vytvoření proměnné. Kód uvedený výše tak ve skutečnosti vypadá v konzoli takto.

```jscon
> const name = 'martin'
undefined
> name.lenght
undefined
```

Hodnotu `undefined` najdeme také v proměnných, do kterých nepřiřadíme žádnout hodnotu. Toto je však možné provést pouze s proměnnými vytvořenými pomocí `let`.

```jscon
> let name
undefined
> name
undefined
```

Podobně jako u hodnoty `null` můžeme přítomnost hodnoty `undefined` ověřit podmínkou.

```js
if (name === undefined) {
  console.log('Něco se pokazilo');
}
```

Hodnota `undefined` nám v budoucní způsobí ještě hodně nepříjemností, je tedy dobré se již teď obrnit trpělivostí.

## Speciální druhy funkcí

Většina práce v JavaScriptu se točí kolem vytváření a volání funkcí. Během programování tak často budeme narážet na různé jejich podoby a příchuťe. Je proto dobré se už od začátku začít učit, k čemu tyto různé podoby slouží.

Podle druhu vykonávané práce můžeme funkce rozdělit v podstatě na dvě skupiny:

1. funkce, které vyrábějí nějaký výsledek (hodnotu),
1. funkce, které nic nevyrábějí a pouze vykonají nějaký kus práce.

Funkce vyrábějící nějakou hodnotu tuto hodnotu vrací pomocí `return`. Naopak funkce, které pouze vykonávají nějakou práci žádnou hodnotu nevyrábějí a slovíčko `return` tedy nepoužívají. 

### Funkce bez návratové hodnoty

Představte si například funkci, jejíž úkolem je vypsat do stránky nějakou souhrnou informaci, například shrnutí objednávky v e-shopu. 

```js
const showOrderSummary = (summary) => {
  const summaryElm = document.querySelector('#summary');
  summaryElm.innerHTML = `
    <div class="summary__count">Celkem položek: ${summary.count}</div>
    <div class="summary__sum">Částka: ${summary.sum}</div>
  `;
}
```

K tomu, aby funkce splnila svůj úkol stačí, že do stránky vloží patřičný kus HTML. Už nemusí vracet žádnou hodnotu. JavaScript se však snaží být konzistentní a i takováto funkce tajně vrací hodnotu. Pokud sami nenapíšeme slovíčko `return`, JavaScript si jej sám doplní na konec funkce. 

```js
const showOrderSummary = (summary) => {
  const summaryElm = document.querySelector('#summary');
  summaryElm.innerHTML = `
    <div class="summary__count">Celkem položek: ${summary.count}</div>
    <div class="summary__sum">Částka: ${summary.sum}</div>
  `;

  return undefined;
}
```

V JavaScriptu tedy každá funkce něco vrací. Pokud my sami z naší funkce nevrátíme žádnou hodnotu, JavaScript automaticky vrátí `undefined`. Proto můžeme klidně psát

```js
const result = showOrderSummary({ count: 5, sum: 5270 });
```

V proměnné `result` pak po tomto příkazu bude uložena hodnota `undefined`. Vzhledem k tomu, že funkce `showOrderSummary` vrací `undefined` vždy, ukládat si její výsledek je zbytečné. Takovou funkci prostě zavoláme takto. 

```js
showOrderSummary({ count: 5, sum: 5270 });
```

O její návratovou hodnotu se nestaráme, protože nám k ničemu není. Z této části si však můžeme odnést důležité poučení:

**Každá funkce vrací nějakou hodnotu, i když uvnitř nepoužijeme `return`.** 

### Funkce bez parametrů

V praxi běžně narazíme také na funkce, které žádné parametry nemají. V takovém případě na místo parametrů píšeme prostě prázdné závorky. Příkladem může být následující funkce, která pro nás hodí kostkou, tedy vygeneruje náhodné celé číslo mezi 1 a 6.

```js
const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};
```

Tato funkce ke své činnosti žádné hodnoty z venku napotřebuje, proto je bez parametrů. Další příklad může být funkce, který obarví nadpis stránky na červeno.

```js
const colorHeadingRed = () => {
  const headingElm = document.querySelector('h1');
  headingElm.style.color = 'red';
};
```

Tato funkce parametry nemá, protože ke své činnosti opět nepotřebuje žádné informace z venku. Mohli bychom však také chtít funkci, která obarví nadpis námi zvolenou barvou. V takovém případě funkci přidáme jeden parametr.

```js
const colorHeading = (colorName) => {
  const headingElm = document.querySelector('h1');
  headingElm.style.color = colorName;
};
```

[[[ excs Cvičení: Procvičování funkcí
- pozdravy
- e-mail
- prevod-meny
]]]

## Obor platnosti proměnných

Mějme následující podmínku, která kontroluje věk uživatele a vypisuje neurvalé hlášky.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains <= 2) {
    console.log('Už to máš za pár');
  } else if (remains <= 5) {
    console.log(`Ještě si počkáš ${remains} let`);
  } else {
    console.log('Utíkej za mamkou');
  }
} else {
  console.log('Vítej mezi dospěláky');
}
```

Zatím nebudeme řešit odkud se vzala proměnná <var>age</var>. Především si všimneme, že celý program obsahuje dohromady pět různých bloků kódu oddělených složenými závorkami. Pokud uvnitř nějakého bloku vytvoříme proměnnou, například <var>remains</var>, tato proměnná je "vidět" pouze uvnitř tohoto bloku. Tento blok se stává jejím :term{cs="oborem platnosti" en="scope"}. Jakmile její blok kódu skončí, proměnná <var>remains</var> zanikne a již s ní není možné pracovat.

Pokud se proměnnou pokusíme použít mimo její obor platnosti, JavaScript runtime se bude tvářit jako kdyby tuto proměnnou nikdy neviděl.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    console.log('Už to máš za pár');
  } else if (remains >= 5) {
    console.log(`Ještě si počkáš ${remains} let`);
  } else {
    console.log('Utíkej za mamkou');
  }
} else {
  console.log(remains); // Zde vznikne chyba
  console.log('Vítej mezi dospěláky');
}

console.log(remains); // Zde vznikne chyba
```

Naopak všechny bloky zanořené uvnitř bloku, ve kterém byla proměnná vytvořene, k této proměnné přistupovat mohou. To můžeme v našem kódu vidět v bloku `else if`, kde proměnnou `remains` normálně používáme, přestože je vytvořena o blok výše.

Pokud tedy JavaScript runtime narazí uvnitř nějakého bloku na něco, co vypadá jako jméno proměnné, zkusí tuto proměnnou najít uvnitř tohoto bloku. Pokud se mu to nezdaří, podívá se do bloku a patro výš. Takto postupně prochází všechny nadřezené bloky, dokud nenarazí na nejvyšší patro -- takzvaný :term{cs="globální obor platnosti" en="global scope"}.

### Globální obor platnosti

Každý JavaScriptový program si můžeme představeit jako jeden velký blok kódu, který v sobě obsahuje všechny příkazy. Takto vznikne globální obor platnosti, ve kterém JavaScript runtime nakonec hledá všechny proměnné, které nanašel nikde jinde. Ukažme si náš program kontrolující věk v celé své kráse.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    console.log('Už to máš za pár');
  } else if (remains >= 5) {
    console.log(age); // V pořádku
    console.log(`Ještě si počkáš ${remains} let`);
  } else {
    console.log('Utíkej za mamkou');
  }
} else {
  console.log(age); // V pořádku
  console.log('Vítej mezi dospěláky');
}

console.log(age); // V pořádku
```

V tomto programu vidíme, že proměnná <var>age</var> je vytvořená v globálním oboru platnosti. Takové proměnné říkáme prostě <em>globální</em>. Globální proměnné jsou vidět v celém programu a můžeme je tedy použít kdekoliv. Pokud proměnná není globální a je tedy vytvořena uvnitř nějakého bloku, říkáme o ni, že je :term{cs="lokální" en="local"}.

Obory platnosti nám pomáhají rodělit náš kód na menší samostatné celky, které se navzájem neovlivňují. Můžete tak bez problému mít ve dvou blocích stejně pojmenovavnou lokální proměnnou a význam bude zcela jasný.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const message = 'Utíkej za mamkou';
  console.log(message);
} else {
  const message = 'Vítej mezi dospěláky';
  console.log(message);
}
```

V tom příkladu máme dvě lokální proměnné <var>message</var>, které náhodou mají stejné jméno, jinak však spolu nemají nic společného.

## Zastiňování proměnných

Uvažujíc nad příkladem výše vás možná napadne, co by se stalo, kdybychom proměnné <var>message</var> vytvořili takto.

```js
const age = Number(prompt('Zadej svůj věk:'));
const message = 'Utíkej za mamkou';

if (age < 18) {
  console.log(message);
} else {
  const message = 'Vítej mezi dospěláky';
  console.log(message);
}
```

Pravidlo při hledání proměnných říká, že se použije ta deklarace, na kterou runtime při procházení nadřazených bloků narazí nejdříve. Díky tomu, že se prohledává vždy od nejnižšího patra k nejvyššímu, v bloku `if` narazíme nejdřív na globální proměnnou <var>message</var>. Naopak v bloku `else` dříve najdeme lokální proměnnou. Tomuto principu se říká :term{cs="zastínění" en="shadowing"}. Proměnná, která je z hlediska hierarchie bloků níže, takzvaně zastíní stejně pojmenovou proměnnou, která se nachází výše.

V praxi je nejlepší, když má náš program tak dobře pojmenované proměnné, že se nevzájem nazastiňují. Zjednodušujeme tak práci všem čtenářům, kteří tak mají o starost méně při louskání našeho kódu. Rozhodně je ale dobré vědět, že zastínění může nastat a JavaScript runtime se s ním snadno vypořádá.

## Obory platnosti a funkce

Jak po předchozích lekcích už všichni víme, bloky kódu se používají také k vytváření funkci. Zde do oborů platnosti vstupuje další hráč, a to jsou parametry funkce. Ty se z hlediska hierarchie nacházejí jakoby na rozhraní mezi blokem funkce a jeho nadřazeným blokem. Prohlédněte si porozně následující kód.

```js
'use strict';

const message = 'Vítej ve světě slasti';

const checkAge = (age, message) => {
  if (age < 18) {
    return message;
  } else {
    const message = 'Vítej mezi dospěláky';
    return message;
  }
};
```

Vytváříme zde funkci `checkAge`, která má dva parametry `age` a `message`. Uvnitř této funkce parametr `message` zastíní globální proměnnou `message`. V bloku `else` je však tento parametr dále zastíněn lokální proměnnou `message`. Zkuste si rozmyslet, co pak bude výsledkem těchto volání.

```jscon
> checkAge(15, 'Utři si sopel')
?
> checkAge(21, 'Oh yeah!')
?
```

Je dobré připomenout, že program výše je napsán obzvlášť zlovolně je zde především ze vzdělávacích důvdodů. Pokud takový kód někady napíšete v praxi, dostanete od vašich kolegů nejspíš pořádně za uši. Nikdo nechce číst kód, nad kterým musí zbytečně hodinu přemýšlet.

[[[ excs Cvičení: Porozumění kódu
- porozumeni-kodu
]]]

<!-- ## Uzávěry

Když JavaScript runtime vykonává blok kódu, po celou dobu si pamatuje všechny proměnné, které v něm byly vytvořeny. Jakmile vykonávání bloku skončí, všechny takto zapamatované proměnné se z paměti uvolní. Toto může představovat problém ve chvíli, kdy uvnitř nějakého bloku vytváříme vlastní funkci. Prohlédněte si následující kód, který požádá uživatele o počet vteřin a poté postupně odpočítává každou vteřinu směrem dolů.

```js
'use strict';

const seconds = prompt('Zadejte cas:');

if (seconds > 0) {
  const timeElm = document.querySelector('#name');

  const countDown = () => {
    seconds -= 1;
    timeElm.textContent = seconds;
  };

  setInterval(countDown, 1000);
}
```

Všimněte si lokální proměnné `timeElm`. Tato je vytvořena v bloku `if`. Její životnost je tak spjata s tímto blokem. Funkce `countDown` tuto proměnou používá k nastavení času na stránce. Blok této funkce se však poprvé spustí až za vteřinu. To už bude blok `if` dávno u konce a proměnná `timeElm` tak už bude dávno uvolněná z paměti. Funkce by se tak pokusila přistoupit k již neexistující proměnná a náš program by spadnul.

JavaScript runtime však tuto prekérní situaci vyřeší za nás. Ve chvíli, kdy nějaká funkce používá proměnnou z nadřazeného bloku, runtime si zapamatuje, že takovou proměnnou nemá na konci jejího bloku mazat. Funkce si potom tuto proměnnou nese s sebou po celý svůj život. Říkáme pak, že proměnná se do funkce uzavře a vzniká tak :term{cs="uzávěr" en="closure"}. V našem případě se tedy proměnná `timeElm` uzavřela do funkce `countDown`.

Uzávěr takto zkraje možná zní jako velmi technická záležitost. V JavaScriptu ale budeme uzávěry používat na každém kroku. Je tedy dobré vědět, co se v takovém případě děje. Občas také můžeme narazit na velmi prekérní problémy způsobené nesprávným použitím uzávěru. Takovéto perly si ukážeme, až budeme probírat cykly. -->

[[[ excs Doporučené úložky na doma
- vyplata
- kalkulacka
- cenik
]]]


[[[ excs Volitelné úložky na doma
- vyplnorez
- prestupny-rok-funkce
]]]
