Dnes konečně pootevřeme Pandořinu skříňku a nahlédneme do tajů objektového programování. Objektové nebo objektové orientované programování (OOP) je takzvané <em>programovací paradigma</em>. Je to určitý specifický pohled na to, jak strukturovat programy tak, aby se dobře spravovaly, i když jejich velikost začne růst do obřích rozměrů. My si zde ukážeme pouze nejnutější základy. Svět OOP je ohromný a opravdu dobře se naučit tímto způsobem přemýšlet vyžaduje hodně studia a také praxe.

## Metody

Zečněme opravdu zvolna a jednoduše. Vytvoříme si objekt, představující jednoho člena jedné z nejznámějších seriálových rodinek.

```js
const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39
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
  age: 39
  name: () => {
    return `${homer.firstName} ${homer.middleName[0]}. ${homer.lastName}`;
  }
};
```

Můžeme pak psát

```jscon
> homer.name()
'Homer J. Simpson
```

To vypadá daleko elegantněji. Co se týče funkcí jako hodnot v objektech, nečeká nás zatím žádné velké překvapení. Dokonce si možná někteří z vás hnání zvědavostí podobnou věc už zkusili na vlastní pěst. Je tu však jedna drobnost, která je trochu nešikovná. Uvnitř metody se musíme k našemu objektu odkazovat skrze proměnnou `homer`. Vzniká nám tak uzávěr, který však musíme pro každý další objekt vyrábět znova.

```js
const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39
  name: () => {
    return `${homer.firstName} ${homer.middleName[0]}. ${homer.lastName}`;
  }
};

const marge = {
  firstName: 'Marge',
  middleName: 'Jacqueline',
  lastName: 'Simpson',
  age: 36
  name: () => {
    return `${marge.firstName} ${marge.middleName[0]}. ${marge.lastName}`;
  }
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
const personEmail = function(person, domain) {
  const username = `${person.firstName}.${person.lastName}`;
  return username.toLowerCase() + domain;
};
```

Takovýmto funkcím budeme říkat <term cs="staré dobré funkce" en="old-fashioned functions">. Není zde velký rozdíl co se týče zápisu. Staré dobré funkce však mají jednu vlastnost, kterou arrow funkce nemají. Mají speciální tajný parametr, který lze do této funkce propašovat jakýmisi zadními vrátky. Tento parametr se jmenuje `this`. Jeho obsah závisí na tom, jakým způsobem naši funkci voláme. Pojďme si rovnou napsat jednoduchou testovací funkcí, abychom zjistili, jak `this` funguje.

```js
'use strict';

const greet = function(name) {
  return `hello from ${this} and ${name}`;
};
```

Tato funkce jednoduše vrátí řetězec obsahující cokoliv, co je zrovna uloženo v tajném parametru `this` a v parametru `name`. Pokud takovou funkci zavoláme zavoláme ve strict módu běžným způsobem, parametr `this` je `undefined`.

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
const name = function() {
  return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
};

const email = function(domain) {
  const username = `${this.firstName}.${this.lastName}`;
  return username.toLowerCase() + domain;
};

const homer = {
  firstName: 'Homer',
  middleName: 'Jay',
  lastName: 'Simpson',
  age: 39,
  name: name,
  email: email
};

const marge = {
  firstName: 'Marge',
  middleName: 'Jacqueline',
  lastName: 'Simpson',
  age: 36,
  name: name,
  email: email
};
```

Můžeme pak psát jako obvykle

```jscon
> marge.email('gmail.com')
"marge.simpson@gmail.com"
```

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
    price: 7990
  }
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
  age: 39
};

const marge = {
  __proto__: Person,

  firstName: 'Marge',
  middleName: 'Jacqueline',
  lastName: 'Simpson',
  age: 36
};
```

Nyní když provedeme takovéto volání

```jscon
> homer.name()
"Homer J. Simpson"
```

JavaScript runtime zkouší najit metodu `name` v objektu `homer`. Pokud tam není, zkouší ji najít v jeho prototypu `Person`. Tam už metoda je. Runtime tedy nastaví její `this` na objekt `homer` a zavolá ji. Tím se nám všchno hezky propojí a běží jako po másle.

Na závěr této sekce je nutno dodat, že vlastnost `__proto__` není úplně spolehlivá, protože nejde o standardizovanou část JavaScriptu. Na světě existuje vícero JavaScriptových runtimů a každý může prototypy objektů ukládat malinko jinak. V příští části si tedy ukážeme, jak naše objekty tvořit ještě elegantnějí, abychom se použití `__proto__` zcela vyhnuli.

## Konstrukce objektů
