Do této chvíli jsme ohledně jazyka JavaScript učili mnoho a mnoho nových věcí. Věcí, které často potřebují čas na strávení a zažití aby se v hlavě dobře usadily na ta správná místa. Pokud se něco nového a náročného snažíme naučit příliš rychle, snadno se stane, že nám v hlavách nové pojmy lítají jak splašené a není jasné, co souvisí s čím a co kam patří. V této lekci tedy vrhneme více světla na věci, které jste už v minulých lekcích použili, ale možná ještě nebyl čas se nad nimi pořádně zamyslet.

## Ladění programů

Žádný programátor na světě nepíše programy bez chyby. Taková věc je zcela mimo lidské možnosti a schopnosti. Navíc čím jsou programy větší a složitější, tím roste prostor pro stále záludnější a húře odhalitelné chyby. Velmi brzy už je program tak komplikovaný, že programátor není schopen chybu najít pouze tím, že si po sobě čte svůj kód. Nedej bože, pokud navíc před sebou nemá vlastní, nýbrž kód kolegy, který již dávno opustil firmu, a svému kódu rozuměl pouze on. V takovou chvíli přichází na řadu takzvané <term cs="ladění" en="debugging">.

Ladění kódu probíhá tak, že spustíme JavaScript runtime ve speciálním ladícím módu. V tomto módu můžeme kód spouštět řádek po řádku a máme tak čas si prohlédnout, co se v programu přesně děje. Ladění se také velmi hodí v začátcích programování. To, že si můžete program krok po kroku zastavovat a sledovat jak se doopravdy provádí, vám pomůže lépe si představit, co runtime při spouštění kódu vlastně dělá a jak nad ním "přemýšlí",

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
