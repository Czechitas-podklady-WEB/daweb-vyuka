Do této chvíli jsme ohledně jazyka JavaScript učili mnoho a mnoho nových věcí. Věcí, které často potřebují čas na strávení a zažití aby se v hlavě dobře usadily na ta správná místa. Pokud se něco nového a náročného snažíme naučit příliš rychle, snadno se stane, že nám v hlavách nové pojmy lítají jak splašené a není jasné, co souvisí s čím a co kam patří. V této lekci tedy vrhneme více světla na věci, které jste už v minulých lekcích použili, ale možná ještě nebyl čas se nad nimi pořádně zamyslet.

## Hodnoty null a undefined

Občas se nám stane, že si potřebujeme nějakou proměnnou připravit, ale zatím ještě nevíme, jaká v ní má být hodnota. Chceme tedy, aby na začátku byla prázdná. To můžeme zařídit pomocí speciální hodnoty `null`. Toto je v postatě nový typ hodnoty vedle čísel, řetězců, funkcí apod. Můžeme si představit, že hodnota `null` znamená <i>nic</i>.

```js
'use strict';

const submitClick = () => {
  const passwordElm = document.querySelector('#pass-input');
  const password = passwordElm.value;
  let message = null;

  if (password === 'swordfish') {
    message = 'Access granted';
  } else {
    message = 'Access denied';
  }

  alert(message);
};

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', submitClick);
```

Explicitnímu ukládání hodnoty `null` do proměnných jako výše, bychom se měli spíše vyhýbat. Uvedený program se dá bez problému přepsat bez použití `null`.

```js
let message = 'Access denied';

if (password === 'swordfish') {
  message = 'Access granted';
}

alert(message);
```

Často se však stane, že hodnotu `null` vrací nějaké funkce v situaci, kdy se něco nepovedlo. Velmi častý případ je to u funkce `document.querySelector`, která vrací `null`, pokud se jí na stránce nezdaří najít element podle zadaného selektoru.

Pojďme zkusit omylem vybrat vstupní políčko pomocí CSS třídy, která však v HTML vůbec není.

```jscon
> const passwordElm = document.querySelector('.pass-input')
> passwordElm
null
```

Vidíte, že v proměnné `passwordElm` máme místo očekávaného elementu uloženo `null`.

Otestovat proměnnou na hodnotu `null` můžeme provést jednoduchou podmínkou.

```js
if (passwordElm === null) {
  console.log('Element nenalezen');
}
```

### Hodnota undefined

Kromě celkem užitečné hodnoty `null` JavaScript také obsahuje zákeřnou hodnotu `undefined`. Tato hodnota v podstatě znamená "ještě větší prázdno než nic". Pokud bychom přirovnali proměnné k šuplíkům, mohli bychom si představovat, že hodnota `null` znamená prázdný šuplík. Hodnota `undefined` by pak znamenala, že ve skříni chybí i sám šuplík a zíráme jen na prázdnou díru ve skříni.

Hodnotu `undefined` potkáme v mnoha situacích, ale nejčastěji ve chvíli, kdy se snažíme přistoupit k vlastnosi, která neexistuje. Je například velmi snadné udělat překlep v anglickém slově `length`.

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

@exercises ## Cvičení - vlastní funkce [

- pocitadlo
  ]@

## Obor platnosti proměnných

Mějme následující podmínku, která kontroluje věk uživatele a vypisuje neurvalé hlášky.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains <= 2) {
    alert('Už to máš za pár');
  } else if (remains <= 5) {
    alert(`Ještě si počkáš ${remains} let`);
  } else {
    alert('Utíkej za mamkou');
  }
} else {
  alert('Vítej mezi dospěláky');
}
```

Zatím nebudeme řešit odkud se vzala proměnná <var>age</var>. Především si všimneme, že celý program obsahuje dohromady pět různých bloků kódu oddělených složenými závorkami. Pokud uvnitř nějakého bloku vytvoříme proměnnou, například <var>remains</var>, tato proměnná je "vidět" pouze uvnitř tohoto bloku. Tento blok se stává jejím <term cs="oborem platnosti" en="scope">. Jakmile její blok kódu skončí, proměnná <var>remains</var> zanikne a již s ní není možné pracovat.

Pokud se proměnnou pokusíme použít mimo její obor platnosti, JavaScript runtime se bude tvářit jako kdyby tuto proměnnou nikdy neviděl.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    alert('Už to máš za pár');
  } else if (remains >= 5) {
    alert(`Ještě si počkáš ${remains} let`);
  } else {
    alert('Utíkej za mamkou');
  }
} else {
  console.log(remains); // Zde vznikne chyba
  alert('Vítej mezi dospěláky');
}

console.log(remains); // Zde vznikne chyba
```

Naopak všechny bloky zanořené uvnitř bloku, ve kterém byla proměnná vytvořene, k této proměnné přistupovat mohou. To můžeme v našem kódu vidět v bloku `else if`, kde proměnnou `remains` normálně používáme, přestože je vytvořena o blok výše.

Pokud tedy JavaScript runtime narazí uvnitř nějakého bloku na něco, co vypadá jako jméno proměnné, zkusí tuto proměnnou najít uvnitř tohoto bloku. Pokud se mu to nezdaří, podívá se do bloku a patro výš. Takto postupně prochází všechny nadřezené bloky, dokud nenarazí na nejvyšší patro -- takzvaný <term cs="globální obor platnosti" en="global scope">.

### Globální obor platnosti

Každý JavaScriptový program si můžeme představeit jako jeden velký blok kódu, který v sobě obsahuje všechny příkazy. Takto vznikne globální obor platnosti, ve kterém JavaScript runtime nakonec hledá všechny proměnné, které nanašel nikde jinde. Ukažme si náš program kontrolující věk v celé své kráse.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    alert('Už to máš za pár');
  } else if (remains >= 5) {
    console.log(age); // V pořádku
    alert(`Ještě si počkáš ${remains} let`);
  } else {
    alert('Utíkej za mamkou');
  }
} else {
  console.log(age); // V pořádku
  alert('Vítej mezi dospěláky');
}

console.log(age); // V pořádku
```

V tomto programu vidíme, že proměnná <var>age</var> je vytvořená v globálním oboru platnosti. Takové proměnné říkáme prostě <em>globální</em>. Globální proměnné jsou vidět v celém programu a můžeme je tedy použít kdekoliv. Pokud proměnná není globální a je tedy vytvořena uvnitř nějakého bloku, říkáme o ni, že je <term cs="lokální" en="local">.

Obory platnosti nám pomáhají rodělit náš kód na menší samostatné celky, které se navzájem neovlivňují. Můžete tak bez problému mít ve dvou blocích stejně pojmenovavnou lokální proměnnou a význam bude zcela jasný.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const message = 'Utíkej za mamkou';
  alert(message);
} else {
  const message = 'Vítej mezi dospěláky';
  alert(message);
}
```

V tom příkladu máme dvě lokální proměnné <var>message</var>, které náhodou mají stejné jméno, jinak však spolu nemají nic společného.

## Zastiňování proměnných

Uvažujíc nad příkladem výše vás možná napadne, co by se stalo, kdybychom proměnné <var>message</var> vytvořili takto.

```js
const age = Number(prompt('Zadej svůj věk:'));
const message = 'Utíkej za mamkou';

if (age < 18) {
  alert(message);
} else {
  const message = 'Vítej mezi dospěláky';
  alert(message);
}
```

Pravidlo při hledání proměnných říká, že se použije ta deklarace, na kterou runtime při procházení nadřazených bloků narazí nejdříve. Díky tomu, že se prohledává vždy od nejnižšího patra k nejvyššímu, v bloku `if` narazíme nejdřív na globální proměnnou <var>message</var>. Naopak v bloku `else` dříve najdeme lokální proměnnou. Tomuto principu se říká <term cs="zastínění" en="shadowing">. Proměnná, která je z hlediska hierarchie bloků níže, takzvaně zastíní stejně pojmenovou proměnnou, která se nachází výše.

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

## Uzávěry

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

JavaScript runtime však tuto prekérní situaci vyřeší za nás. Ve chvíli, kdy nějaká funkce používá proměnnou z nadřazeného bloku, runtime si zapamatuje, že takovou proměnnou nemá na konci jejího bloku mazat. Funkce si potom tuto proměnnou nese s sebou po celý svůj život. Říkáme pak, že proměnná se do funkce uzavře a vzniká tak <term cs="uzávěr" en="closure">. V našem případě se tedy proměnná `timeElm` uzavřela do funkce `countDown`.

Uzávěr takto zkraje možná zní jako velmi technická záležitost. V JavaScriptu ale budeme uzávěry používat na každém kroku. Je tedy dobré vědět, co se v takovém případě děje. Občas také můžeme narazit na velmi prekérní problémy způsobené nesprávným použitím uzávěru. Takovéto perly si ukážeme, až budeme probírat cykly.
