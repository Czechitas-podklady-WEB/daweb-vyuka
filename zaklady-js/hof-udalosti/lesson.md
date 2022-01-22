V předchozích lekcích jsme si ukázali, jak můžeme pomocí JavaScriptu měnit obsah stránky a jak vyrábět vlastní funkce. Obě tato témata tvoří základ pro to, abychom mohli naše stránky udělat skutečně interaktivní. Chceme například umět něco zobrazit, když uživatel klikne na tlačítko, umožnit mu vložit nějaký vstup do textového políčka a tak dále. K tomu potřebujeme porozumět takzvaným událostem. K tomu, abychom uměli dobře používat události se však také potřebujeme dozvědět něco více o tom, jak fungují funkce.

## Funkce vyššího řádu

Z minula už víme, že funkce jsou hodnoty podobně jako čísla, řetězce nebo DOM elementy. Vzpomeňte si, že při vytváření funkce ve skutečnosti vytváříme proměnnou do které novou funkci ukládáme.

```js
const goodbye = (name) => {
  return `S pozdravem ${name}`;
};
```

Ohledně toho, co vše je možné s funkcemi dělat, jsme teprve na začátku. Je tedy čas pustit se králičí norou malinko hlouběji.

Jelikož každá funkce je zcela rovnoprávná hodnota, můžeme ji nejen uložit do proměnné, ale také předat jiné funkci jako vstup. Je tedy možné zavolat funkci a na vstup jí při tom předat jinou funkci jako hodnotu. Taková myšlenka může ze začátku působit dost odvážně a neuchopitelně. Postupujme tedy pomaličku a s rozvahou.

### Rozvoz jídla

Představme si Pražskou restauraci, která rozváží jídlo k jednotlivým zákazníkům. K rozvozu jídla máme k dispozici následující tři rozvozové služby, každou s jiným cenníkem a jinou úrovní kvality služeb.

**Hejsci na kolech**
: Šance, že zásilka bude skutečně doručena, je 90%. Pokud se doručení povede, je to vždy do 30 minut do okolí 5 km.

**Machři, co maj drony**
: Šance, že zásilka bude skutečně doručena, je 50%. Pokud se doručení povede, je to vždy do deseti minut po celé Praze.

**Borci v autech**
: Zásilka je doručena vždy. Doručení však může trvat až dvě hodiny.

Napišme si funkce, které simulují naše doručovací společnosti.

```js
const hejsci = (zasilka) => {
  if (Math.random() > 0.1) {
    return `Zásilka ${zasilka} doručena za 30 minut, kámo.`;
  }

  return `Zásilka ${zasilka} se ztratila. Kurýra přepadla smečka hladových bezdomovců.`;
};

const machri = (zasilka) => {
  if (Math.random() > 0.5) {
    return `Zásilka ${zasilka} doručena za 10 minut.`;
  }

  return `Zásilka ${zasilka} ztracena. Drona přepadlo hejno hladových holubů`;
};

const borci = (zasilka) => {
  return `Zásilka ${zasilka} doručena s přehledem za dvě hodiny.`;
};
```

Tyto funkce si můžeme vyzkoušet například v konzoli.

```jscon
> machri('Cous cous se zeleninou')
'Zásilka Cous cous se zeleninou ztracena. Drona přepadlo hejno hladových holubů.'
```

Představme si nyní, že si jako zákazník objednáte jídlo a chcete si zvolit, jakou službou vám bude doručeno. Můžeme tedy napsat funkci `objednat`, které předáme objednané jídlo a funkci, která se má použít k doručení. Funkci `objednat` vygeneruje číslo objednávky a použije zadanou funkci k doručení balíčku.

```js
const objednat = (jidlo, doruceni) => {
  const cislo = Math.floor(Math.random() * 1000);
  const id = String(cislo).padStart(4, '0');
  const balicek = `${jidlo} (${id})`;
  return doruceni(balicek);
};
```

Všimněte si, že funkce `objednat` se chová k parametru `doruceni` jako by to byla funkce. Očekáváme tedy, že v tomto parametru skutečně obdržíme nějakou funkci, kterou poté můžeme zavolat. Zkusme třeba naši funkci `objednat` zavolat s funkcí `hejsci`.

```jscon
> objednat('Hovězí cheeseburger', hejsci)
'Zásilka Hovězí cheeseburger (0397) doručena za 30 minut, kámo.'
```

Pokud si chceme být doručením opravdu jistí, můžeme použít Borce v autech.

```jscon
> objednat('Hovězí cheeseburger', borci)
'Zásilka Hovězí cheeseburger (7354) doručena s přehledem za dvě hodiny.'
```

Všimněte si, že funkce `hejsci` a `borci` předáváme jako celek, tedy jako hodnotu. Nevoláme je tady my sami, nýbrž je předáváme funkci `objednat`, aby ta je zavolala dle svého vlastního uvážení.

Dejte si pozor na následující chybu, kdy funkci `hejsci` místo předávání omylem zavoláme a funkce `objednat` tak jako druhý vstup nedostane funkci `hejsci` ale její výsledek.

```jscon
> odeslat('6682', hejsci())
```

Způsob uvažování, na který si díky tomuto příkladu snažíme zvyknout je, že občas můžeme mít funkci jako například `objednat`, která očekává na vstupu nějako jinou funkci, kterou poté sama zavolá. Takových funkcí uvidíme během naší pouti JavaScriptovou krajinou docela dost a budeme je často používat.

### Chytřejší kalkulačka

Příklad výše byl malinko strojený a trošku přitažený za vlasy, abyste si ihned neutopili v technickém žargonu. Nyní však zkusíme něco praktičtějšího. Vraťme se na chvíli k příkladu [kalkulačka](../funkce-obory/#exc-kalkulacka) z minulé lekce. Zadání bylo vytvořit funkci `calc`, která spočítá výsledek operace zadané jako řetězec. Přímočaré řešení by mohlo vypadat například takto.

```js
const calc = (num1, op, num2) => {
  if (op === '+') {
    return num1 + num2;
  }
  if (op === '-') {
    return num1 - num2;
  }
  if (op === '*') {
    return num1 * num2;
  }
  if (op === '/') {
    return num1 / num2;
  }

  return null;
};
```

Možná si říkáte, jestli by tato funkce nešla napsat nějak šikovněji a úsporněji. Například zkusit předat funkci operaci tak nějak přímo a naše funkce by ji jen vykonala. Něco ve stylu

```jscon
> calc(2, +, 3)
5
```

Pokud přemýšlíte tímto směrem, jste na správné stopě. Jen na to musíme jít trošku od lesa. Nejprve si vyrobíme funkce, které provádějí jednotlivé operace.

```js
const plus = (num1, num2) => {
  return num1 + num2;
};

const minus = (num1, num2) => {
  return num1 - num2;
};

const times = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};
```

Jelikož každá takováto funkce je hodnota, můžeme ji předat jako vstup do funkce `calc`. Ta pak obdrženou funkci pouze zavolá.

```js
const calc = (num1, op, num2) => {
  return op(num1, num2);
};
```

Funkci `calc` pak použijeme velmi přímočaře.

```jscon
> calc(2, plus, 3)
5
> calc(4, times, 5)
20
```

Ze začátku se vám možná z takovýchto triků malinko točí hlava. Pojďme si proto zopakovat následující fakta, abychom získali zpět ztracenou rovnováhu.

1. V parametru `op` nyní není řetězec, jako tomu bylo dříve, nýbrž celá funkce.
1. Funkce `calc` funkci `op` zavolá, aniž by věděla, co je tato funkce vlastně zač. Prostě vezme cokoliv, co jí dáme na vstup, a zavolá to.
1. Když voláme funkci `calc` a na vstupu je například funkce `plus`, všimněte si, že funkci `plus` nevoláme. Za proměnnou `plus` nejsou kulaté závorky. Funkci pouze předáváme jako hodnotu, podobně, jako bychom předávali číslo, řetězec apod.

Funkcím, které berou jiné funkce jako vstup nebo vracejí funkce jako svůj výstup, se v teorii programování říká :term{cs="funkce vyšších řádů" en="higher order functions"}. Je to velmi důležitý koncept, který má spoustu využítí a budeme jej používat v mnoha různých situacích.

[[[ excs Cvičení: Funkce vyššího řádu
- hesla
- e-mail-2
]]]

### Zpoždění a časovače

Dobrá zpráva pro začínající programátory je, že psát vlastní funkce vyšších řádů je spíš pokročilá věc a budeme ji používat až při práci v Reactu. Zatím budeme používat funkce vyšších řádů, které nám JavaScript nabízí už hotové.

Jedna ze situací, kdy se nám velmi hodí funkce vyššího řádu, je chvíle, kdy chceme v JavaScriptu provedení nějaké funkce pozdržet nebo její volání pravidelně opakovat. Vzpomeňte si na příklad [kvíz](../dom-funkce/#exc-kviz). Představme si, že chceme, aby uživatel měl na každou odpověď nějaký časový limit. Po zobrazení otázky chceme počkat 5 vteřin a poté vypsat něco jako "čas vypršel". Vyrobíme si tedy funkci, která vypisuje naši zprávu, zatím pro jednoduchost pouze do konzole.

```js
const timeIsUp = () => {
  console.log('Čas vypršel');
};
```

Tuto funkci chceme spustit pět vteřin poté, co se otevře naše stránka. K takovému účelu JavaScript poskytuje funkci `setTimeout`. Ta jako svůj vstup bere funkci a počet milisekund, které mají uplynout před tím, než se tato funkce zavolá. Použití tak vypadá následovně.

```js
setTimeout(timeIsUp, 5000);
```

Všimněte si, že `setTimeout` je funkce vyššího řádu, neboť bere jako svůj první vstup funkci. Opět vidíme, že funkci `timeIsUp` nevoláme my, ale zavolá ji až JavaScript runtime po uplynutí 5000 milisekund. Celý program pak vypadá takto.

```js
'use strict';

const timeIsUp = () => {
  console.log('Čas vypršel');
};

setTimeout(timeIsUp, 5000);
```

Pokud chceme, aby se nějaká funkce volala opakovaně, například každých pět vteřín, stačí místo `setTimeout` použít `setInterval`.

```js
setInterval(timeIsUp, 5000);
```

### Anonymní funkce

V předchozíme programu je vidět, že funkci `timesIsUp` používáme pouze jednou. Je proto trochu zbytečné pro ni vytvářet proměnnou. Funkci můžeme vytvořit přímo na místě, kdy ji používáme.

```js
'use strict';

setTimeout(() => {
  console.log('Čas vypršel');
}, 5000);
```

Pokud nějakou funkci vytváříme přímo takto na místě místo toho, abychom ji nejdříve uložili do proměné, říkáme, že taková funkce je takzvaně :term{cs="anonymní" en="anonymous">. V teorii programování se místo pojmu anonymní funkce používá pojem <term cs="lambda funkce" en="lambda functions"}. V JavaScriptu se tento pojem až tolik nepoužívá, zato v jazyce Python je to zažitý termín.

Program napsaný pomocí lambda funkcí vám možná přijde hůř k přečtení. Anonymní funkce se ovšem v JavaScriptu používají zcela běžně a jakmile si na tento způsob zapisu zvyknete, budete jej radostně používat také.

Podobně jako u funkce `setTimout`, anonymní funkci můžeme předat i naší známé funkci `calc`. Schválně zkuste odhanout, co bude výsledkem následujícího výrazu a proč.

```jscon
> calc(13, (x, y) => x % y, 7)
?
```

## Události

Aby naše stránky mohly být skutečně interaktivní, potřebujeme být schopni reagovat na akce, které uživatel na stránce provádí - klikání na tlačíka, stiknutí kláves, scrollování, pohyb myší apod. Vždy, když některá z těcho akcí na stránce nastane, říkáme, že nastala určitá :term{cs="událost" en="event"}. JavaScript reprezentuje takovou událost jako speciální typ hodnoty podobně jako číslo, řetězec nebo funkci. Událost tedy můžeme uložit do proměnné nebo poslat nějaké funkci jako vstup. Událost obsahuje vlastnosti a metody, které popisují co se přesně stalo, například jaká klávesa byla zrovna stisknuta, kde na obrazovce bylo kliknuto a spoustu dalších užitenčných informací.

Abychom mohli na události reagovat, JavaScriptu nám umožňuje ke každé události, která nás zajímá, připojit funkci, která se zavolá ve chvíli, kdy daná událost nastane. Takové funkci často říkáme :term{cs="posluchač události" en="event listener"}. Můžeme si představit, že JavaScirpt runtime pečlivě naslouchá všem možným událostem a volá k nim přiřazené funkce. Ve chvíli, kdy JavaScript runtimu tuto funkcí volá, předá jí na vstup událost, která zrovna nastala. Taková funkce tedy může vypadat například takto.

```js
const changeTitle = () => {
  const h1Elm = document.querySelector('h1');
  h1Elm.textContent = 'Baf!';
};
```

Nyní zařídíme, aby se tato funkce zavolala ve chvíli, kdy stiskneme tlačítko. Vytvoříme si tedy jednoduchou stránku s tlačítkem a nadpisem.

```html
<body>
  <h1>Nadpis</h1>
  <button>Zmáčkni mě</button>
  <script src="index.js"></script>
</body>
```

Nejdříve tlačítko z dokumentu vybereme a poté na něm zavoláme speciální metodu `addEventListener`. Ta očekává název události a funkci, která se má spustit, když událost nastane. V našem případě se událost jmenuje `click` a naše funkce je `changeTitle`. Celý program tedy bude vypadat takto.

```js
'use strict';

const changeTitle = () => {
  const h1Elm = document.querySelector('h1');
  h1Elm.textContent = 'Baf!';
};

const btnElm = document.querySelector('button');
btnElm.addEventListener('click', changeTitle);
```

### Nástrahy

S událostmi přichází několik nástrah, na které když si nedáme pozor, naše stránka nejen že nebude fungovat, ale nevyhodí ani žádnou chybu. V takové situací může být těžké odhalit, v čem přesně je zakopaný pes. Tyto nástrahy se často rády objevjí těsně před deadlinem odevzdání projektu a jejich hektické řešení pak má neblahý vliv na naše zdraví a zdraví našich kolegů.

Nástraha první spočítá v předávání funkce `changeTitle`. Všimněte si opět toho, že používáme funkci `changeTitle` jeko hodnotu a předáváme ji jako vstup metodě `addEventListener`. Nikde v našem kódu funkci sami nevoláme. Zavolá ji až JavaScript runtime ve chvíli, kdy na tlačíku nastane událost `click`. Častou začátečnickou chybou je pokušet se funkci zavolat sami.

```js
btnElm.addEventListener('click', changeTitle());
```

V tomto případě se funkce `changeTitle` zavolá už ve chvíli, kdy voláme metodu `addEventListener`. Té se pak jako druhý vstup předá **výsledek** volání funkce `changeTitle`, nikoliv funkce samotná. Jelikož `changeTitle` nic nevrací (přesněji řečeno, vrací `undefined`), k události `click` se žádný posluchač nepřipojí. Naše tlačítko tedy nebude fungovat. Co nás může zmást je to, že takováto stránka nevyhodí žádnou chybu. Náš JavaScript kód totiž funguje jak má. Jen jsme ho napsali tak, že dělá něco jiného než chceme. JavaScript runtime však nemůže telepaticky nahlížet do našich hlav aby věděl, co doopravdy chceme. Prostě dělá to, co jsme mu řekli.

Nástraha druhá spočívá v názvech událostí. To jsou obyčejné řetězce jak je známe už z první lekce. Není vůbec těžké udělat v názvu události překlep, obzvlášť, pokud je název delší, nebo nejsme tolik zdatní v angličtině.

```js
btnElm.addEventListener('clik', changeTitle);
btnElm.addEventListener('keypress', changeTitle);
```

JavaScript runtime bohužel nekontroluje, zda událost `clik` nebo `keypres` může skutečně nastat nebo nikoliv. Jenoduše k tomuto názvu připojí posluchače a o nic dalšího se nestará. Jelikož takto pojmenované události nikdy nenastanou, naše stránka nebude fungovat a opět také nenastane žádná chyba. Z hlediska runtimu je jako v předchozím případě všechno v naprostém pořádku.

Když tedy pracujete s událostmi, vždy si dobře zkontrolujte, že jste jméno události napsali správně a že také správným způsobem předáváte posluchače.

## Druhy událostí

Jak už bylo řečeno, událostí je mnoho typů a mohou nastat na různých elementech. My jsme zatím reagovali na kliknutí na tlačítko. Kliknutí však může nastat na jakémkoliv elementu. Takto například zareagujeme na kliknutí na celé stránce.

```js
const handleClick = () => {
  console.log('klik');
};

document.addEventListener('click', handleClick);
```

Takto přidáme posluchače události k celé naší stránce. Na celé stránce také můžeme použít událost `scroll`, která nastave pokaždé, když uživatel na stránce zascrolluje.

```js
const handleScroll = () => {
  console.log('skrol');
};

document.addEventListener('scroll', handleScroll);
```

Často se nám také mohou hodit události `keydown` a `keyup`. Událost `keydown` nastane, když uživatel stiskne nějakou klávesu. Událost `keyup` nastane, když uživatel klávesu uvolní. To je velmi šikovné, protože pokud uživatel drží zmáčknutou nějakou klávesu, událost `keydown` nám bude chodit pořád dokola. Naopak událost `keyup` přijde vždy pouze jednou ve chvíli, kdy uživatel klávesu uvolní.

Událostí, na které můžete na stránce reagovat je nepřeberné množství. Seznam všech událostí si můžete pro inspiraci prohlédnout [na stránkách MDN](https://developer.mozilla.org/en-US/docs/Web/Events).

[[[ excs Cvičení: Události
- objednavka
- kontrola-dostupnosti
- zarovka
]]]

## Povinné čtení na doma

### Rušení časovačů

Pokud spustíme nějaký časovač, často jej také chceme po určité době zrušit. Vyrobme například časovač, který každé 3 vteřiny řekne 'ahoj'.

```js
const timerId = setInterval(() => console.log('ahoj'), 3000);
```

Všimněte si, že tentokrát jsme si uložili hodnotu, kterou funkce `setInterval` vrací. Tato hodnota je číslo, které identifikuje náš časovač. Pokud kdykoliv chceme, aby časovač přestal běžet, stačí zavolat funkci `clearInterval` s identifikátorem našeho časovače.

```js
clearInterval(timerId);
```

Takto se dá předčasně zrušit i časovač vyrobený pomocí `setTimeout`. Musíme však použít metodu `clearTimeout`.

```js
const timerId = setTimeout(() => console.log('ahoj'), 5000);
setTimeout(() => clearTimeout(timerId), 2000);
```

Tento kód zařídí, že první časovač vůbec neproběhne. Jeho čas je nastaven na 5 vteřin. Už za dvě vteřiny se však spustí druhý časovač, který jej nekompromisně vypne ten první dřív, než stačí cokoli udělat.

[[[ excs Doporučené úložky na doma
- catering
- kostka
- minutka
]]]
