Dnes konečně pootevřeme Pandořinu skříňku a nahlédneme do tajů objektového programování. Objektové nebo objektové orientované programování (OOP) je takzvané <em>programovací paradigma</em>. Je to určitý specifický pohled na to, jak strukturovat programy tak, aby se dobře spravovaly, i když jejich velikost začne růst do obřích rozměrů. My si zde ukážeme pouze nejnutější základy. Svět OOP je ohromný a opravdu dobře se naučit tímto způsobem přemýšlet vyžaduje hodně studia a také praxe.

## Metody

Začněme opravdu zvolna a jednoduše. Vytvoříme si objekt, představující jednoho člena jedné z nejznámějších seriálových rodinek.

```js
const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
};
```

Běžně je zvykem psát prostřední jméno pouze pomocí iniciály, tedy Homer J. Simpson. Napišme si funkci, která dělá přesně takovou věc.

```js
const personName = (person) => {
  return `${person.firstName} ${person.middleName[0]}. ${person.lastName}`;
};
```

Můžeme pak psát

```jscon
> personName(homer)
'Homer J. Simpson
```

Takováto funkce se nám bude často hodit. Vlastně by se nám hodilo, kdyby tato funkce byla svázána a naším objektem jako jeho metoda. Zde konečně odhalíme naše tajemství a použijeme naši funkci jako hodnotu přímo v našem objektu.

```js
const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
  name: () => {
    return `${homer.firstName} ${homer.middleName[0]}. ${homer.lastName}`;
  },
};
```

Všimněte si, že funkce nyní nemá žádné parametry, protože přímo pracuje s objektem `homer`. Můžeme pak psát

```jscon
> homer.name()
'Homer J. Simpson
```

To vypadá daleko elegantněji. Co se týče funkcí jako hodnot v objektech, nečeká nás zatím žádné velké překvapení. Dokonce si možná někteří z vás hnání zvědavostí podobnou věc už zkusili na vlastní pěst. Je tu však jedna drobnost, která je trochu nešikovná. Uvnitř metody se musíme k našemu objektu odkazovat skrze proměnnou `homer`. Funkce je tak závislé na jedné konkrétní proměnné musíme ji tak pro každý další objekt vyrábět znova.

```js
const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
  name: () => {
    return `${homer.firstName} ${homer.middleName[0]}. ${homer.lastName}`;
  },
};

const marge = {
  firstName: 'Marge',
  middleName: 'Jacqueline',
  lastName: 'Simpson',
  age: 36,
  name: () => {
    return `${marge.firstName} ${marge.middleName[0]}. ${marge.lastName}`;
  },
};
```

Život by nám ulehčilo, kdybychom se mohli uvnitř metody nějak odkázat na objekt, jehož je tato metoda součástí. JavaScript runtime nám v tom rád pomůže. Musíme mu však vyjít naproti a k tomu budeme potřebovat malinko jiný způsob deklarace funkcí.

## Staré dobré funkce

Způsob zápisu funkcí jako níže, který jsem doteď používali, je ve skutečnosti v JavaScriptu docela novinka.

```js
const personEmail = (person, domain) => {
  const username = `${person.firstName}.${person.lastName}`;
  return username.toLowerCase() + domain;
};
```

Tomuto zápisu se říká <em>arrow funkce</em> a v JavaScriptu přibyl až ve verzi ES6. Dříve bylo zvykem psát funkce takto.

```js
const personEmail = function (person, domain) {
  const username = `${person.firstName}.${person.lastName}`;
  return username.toLowerCase() + domain;
};
```

Takovýmto funkcím budeme říkat <term cs="staré dobré funkce" en="old-fashioned functions">. Není zde velký rozdíl co se týče zápisu. Staré dobré funkce však mají jednu vlastnost, kterou arrow funkce nemají. Mají speciální tajný parametr, který lze do této funkce propašovat jakýmisi zadními vrátky. Tento parametr se jmenuje `this`. Jeho obsah závisí na tom, jakým způsobem naši funkci voláme. Pojďme si rovnou napsat jednoduchou testovací funkcí, abychom zjistili, jak `this` funguje.

```js
'use strict';

const greet = function (name) {
  return `hello from ${this} and ${name}`;
};
```

Tato funkce jednoduše vrátí řetězec obsahující cokoliv, co je zrovna uloženo v tajném parametru `this` a v parametru `name`. Pokud takovou funkci zavoláme ve strict módu běžným způsobem, parametr `this` je `undefined`.

```jscon
> greet('Martin')
"hello from undefined and Martin"
```

Pokud však funkci zavoláme pomocí metody `call`, můžeme si v prvním parametru určit, co bude uloženo v `this`.

```jscon
> greet.call('Petr', 'Martin')
"hello from Petr and Martin"
> greet.call(5, 'Martin')
"hello from 5 and Martin"
```

K čemu nám takovéto podivné volání funkce je? Přímo nám programátorům vlastně skoro k ničemu. Tento trik totiž použije především JavaScript runtime při volání metod našich vlastních objektů. Pojďme výše uvedenou vítací metodu přidat do našeho oblíbeního objektu.

```js
const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39
  greet: function (name) {
    return `hello from ${this.firstName} and ${name}`;
  }
};
```

Ve chvíli, kdy metodu `greet` zavoláme takto

```jscon
> homer.greet('Martin')
"hello from Homer and Martin"
```

JavaScript použije stejný trik jako my dříve s `call` a parametr `this` v naší metodě nastaví na objekt, na kterém tuto metodu zrovna voláme. Díky tajnému parametru `this` tak mohou všechny naše metody mít v době volání přístup ke svému objektu. Hurá!

Pozor na to, že takto fungují pouze staré dobré funkce. Arrow funkce žádný tajný parametr `this` nemají. Tento fakt nám pozdějí bude velmi ku prospěchu. Zaplatíme za to však tím, že arrow funkce nemůžeme použít jako metody.

Díky všem komplikovaným hrátkám s `this` jsme se tak posunuli o krok kupředu na naší cestě za elegantním objektovým programováním. Díky starým dobrým funkcím se naše objekty Simpsonovic rodinky o kus zpřehlední. Nemusíme už vytvářet nové metody pro každý objekt zvlášt. Stačí nám vytvořit je všehny pouze jednout a pak je k naším objektům jen připojit.

```js
const name = function () {
  return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
};

const email = function (domain) {
  const username = `${this.firstName}.${this.lastName}`;
  return username.toLowerCase() + domain;
};

const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
  name: name,
  email: email,
};

const marge = {
  firstName: 'Marge',
  middleName: 'Jacqueline',
  lastName: 'Simpson',
  age: 36,
  name: name,
  email: email,
};
```

Můžeme pak psát jako obvykle

```jscon
> marge.email('gmail.com')
"marge.simpson@gmail.com"
```

@exercises ## Cvičení - Metody a this [

- pejsek
- seznamka
  ]@

@exercises bonuses [

- hledani
  ]@

## Prototypy

Příklad výše už je trochu hezčí než vytváření nové metody pro každý objekt, pořád však naše metody `name` a `email` musíme ručně vepisovat do každého objektu. To nás brzo přestane bavit. JavaScript runtime nám však opět přispěchá na pomoc, tentokrát s něčím, čemu se říká <term cs="prototyp" en="prototype">.

Stejně jako mají staré dobré funkce tajný parametr `this`, maji i objekty jeden tajný klíč s trochu zlověstným názvem `__proto__`. Představte si, že máme e-shop a prodáváme v něm ledničky. Jednu ledničku bychom mohli reprezentovat takovýmto objektem.

```js
const fridge1 = {
  volume: 275,
  freezer: false,
  color: 'white',

  __proto__: {
    name: 'SNAIGE CD290 1008',
    price: 7990,
  },
};
```

Všimněte si, že pod klíčem `__proto__` je objekt s dalšími parametry naší ledničky. Tomuto objektu říkáme prototyp. Pokud se pokusíme přistoupit k nějaké vlastnosti naší ledničky například takto

```jscon
> fridge1.price
7990
```

JavaScript runtime se podívá, jestli se klič `price` nachází v našem objektu. Pokud ne, podívá se do jeho prototypu uloženém v `__proto__`, zda se náhodou klíč nenachází tam. Pokud jej nenajde ani zde, zkouší prototyp prototypu a tak dál, dokud nenarazí na dno.

Prototyp tedy můžeme využít k tomu, abychom v něm skladovali věci, které jsou společné vícero objektům. Nejčastěji zde skladujeme metody, které chceme mít na všech objektech stejného typu. Můžeme tak například říct, že každý objekt představující osobu musí mít metody, která umí zobrazit celé jméno a email této osoby. Vytvoříme si tak následující prototyp.

```js
const Person = {
  name: function() {
    return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
  }
  email: function(domain) {
    const username = `${this.firstName}.${this.lastName}`;
    return username.toLowerCase() + domain;
  }
};
```

Proměnné obsahující prototypy je zvykem psát s velkým písmenem. Díky prototypu `Person` pak snadno vytvoříme naše Simpsonovic manžele.

```js
const homer = {
  __proto__: Person,

  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
};

const marge = {
  __proto__: Person,

  firstName: 'Marge',
  middleName: 'Jacqueline',
  lastName: 'Simpson',
  age: 36,
};
```

Nyní když provedeme takovéto volání

```jscon
> homer.name()
"Homer J. Simpson"
```

JavaScript runtime zkouší najit metodu `name` v objektu `homer`. Pokud tam není, zkouší ji najít v jeho prototypu `Person`. Tam už metoda je. Runtime tedy nastaví její `this` na objekt `homer` a zavolá ji. Tím se nám všchno hezky propojí a běží jako po másle.

@exercises ## Cvičení - Objekty a prototypy [

- pozemky
- cena-pozemku
- hodiny
  ]@

## Konstrukce objektů

Přechozí část této lekce sloužila k tomu, abychom si osahali jak technicky fungují prototypy objektů. Způsob, jakým jsme vytvářeli naše objekty je však pořád dost neohrabaný. V této části si ukážeme, jak tento postup zkrátit díky různým JavaScriptovým vychytávkám.

Na úvod je nutno zmínit, že vlastnost `__proto__` není spolehlivá. Nejde totiž o standardizovanou část JavaScriptu. Na světě existuje vícero JavaScriptových runtimů a každý může prototypy objektů ukládat malinko jinak. Budeme proto potřebovat způsob, jak se vyhnout přímému nastavování vlasnoti `__proto__`.

Přesně k tomu slouží funkce s názvem `Object.create`. Tato funkce vytvoří prázdný objekt a jeho prototyp nastaví na hodnotu, kterou dostane v prvním parametru.

Pokud tedy chceme vytvořit objekt, který ve výsledku bude vypadat takto

```js
const homer = {
  __proto__: Person,

  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
};
```

stačí napsat

```js
const homer = Object.create(Person);
homer.firstName = 'Homer';
homer.middleName = 'Jay';
homer.lastName = 'Simpson';
homer.age = 39;

const marge = Object.create(Person);
marge.firstName = 'Marge';
marge.middleName = 'Jacqueline';
marge.lastName = 'Simpson';
marge.age = 36;
```

Takto jsme se hezky zbavili nutnosti používat vlastnost `__proto__` a nechali jsme nastavení prototypu na JavaScript runtimu. Chtěli bychom se však také zbavit neustálého opakování nastavování hodnot jednotlivých vlastností. K tomu si uvnitř prototypu vytvříme speciální metodu s názvem `constructor`. Tato metoda bude brát všechna potřebná data jako vstupy nastaví je rovnou jako vlastností prototypu. Náš prototyp `Person` pak bude vypadat takto.

```js
const Person = {
  constructor: function (firstName, middleName, lastName, age) {
    this.firstName = 'Marge';
    this.middleName = 'Jacqueline';
    this.lastName = 'Simpson';
    this.age = 36;
  },
  name: function () {
    return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
  },
  email: function (domain) {
    const username = `${this.firstName}.${this.lastName}`;
    return username.toLowerCase() + domain;
  },
};
```

Při vytváření objektů nám pak stačí zavolat konstruktor se správnými hodnotami.

```js
const homer = Object.create(Person);
homer.constructor('Homer', 'Jay', 'Simpson', 39);

const marge = Object.create(Person);
marge.constructor('Marge', 'Jacqueline', 'Simpson', 36);
```

Vytváření objektů se tak významně zkrátilo díky tomu, že se všechna práce děje uvnitř prototypu.

Vzhledem k tomu, že objekty se v JavaScriptu vytváří velmi často a protože programátoři jsou pohodlní a nechce se jim psát ani písmenko navíc, existuje způsob jak zápis prototypu ještě o kousek zkrátit. Vždy, když v objektu vytváříme metodu, můžeme beztrestně vynechat dvojtečku a klíčové slovo `function`. Prototyp potom bude vypadat takto.

```js
const Person = {
  constructor(firstName, middleName, lastName, age) {
    this.firstName = 'Marge';
    this.middleName = 'Jacqueline';
    this.lastName = 'Simpson';
    this.age = 36;
  },
  name() {
    return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
  },
  email(domain) {
    const username = `${this.firstName}.${this.lastName}`;
    return username.toLowerCase() + domain;
  },
};
```

Jde pouze o kosmetickou změnu, která nám ušetří ťukání na klávesnici. Tento nový zápis znamená přesně totéž co předchozí zápis s funkcemi.

Tento způsob vytváření objektů už je na chlup blízko tomu, jak se objekty v praxi skutečně vytvářejí. Ještě nám chybí poslední drobnost, kterou si však necháme na některou z dalších lekcí.

@exercises ## Cvičení - konstrukce objektů [

- pozemky-2
- hodiny-2
- hodiny-3
  ]@
