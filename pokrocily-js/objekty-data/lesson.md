Čím jsou naše programy větší a užitečnější v reálném životě, tím větší je objem a složitost informací, se kterými potřebují pracovat. Informacím, se kterými program pracuje říkáme data. Jednoduchá data v naších programech reprezentujeme pomocí hodnot jako čísla, řetězce, pravdivostní hodnoty apod. Brzy ale narazíme na komplexnější data, která mají nějakou složitější vnitřní strukturu. K reprezentaci takových dat používáme různé <term cs="datové struktury" en="data structures">. V tomto kurzu jsme zatím viděli pouze jednu takovou strukturu a tou je pole. Dnes si ukážeme další strukturu zvanou <term cs="objekt" en="object">, která na začátku vypadá zcela nevinně, nakonec však navždy změní naše životy a programování už nikdy nebude to, co bývalo dříve.

## Objekty jako data

Pokud chceme reprezentovat složitější data, i obyčejná pole nám nabízejí dostatak prostoru. Vzpomeňte si například na naši tabulku útrat.

```js
const expenses = [
  ['Petr', 'Prací prášek', 240],
  ['Ondra', 'Savo', 80],
  ['Pavla', 'Toaleťák', 65],
  ['Zuzka', 'Mýdlo', 50],
  ['Pavla', 'Závěs do koupelny', 350],
  ['Libor', 'Pivka na kolaudačku', 124],
  ['Petr', 'Pytle na odpadky', 75],
  ['Míša', 'Utěrky na nádobí', 130],
  ['Ondra', 'Toaleťák', 120],
  ['Míša', 'Pečící papír', 30],
  ['Zuzka', 'Savo', 80],
  ['Petr', 'Tapeta na záchod', 315],
  ['Ondra', 'Toaleťák', 64],
];
```

Představme si však, že strukturovanost těchto dat ještě naroste. Každý člověk v tabulce bude mít nejen jméno, ale i příjmení, u zakoupené věci budeme zaznamenávat také množství a jednotky. Pole můžeme libovolně vnořovat, není tedy problém naší strukturu předělat takto.

```js
const expenses = [
  [['Petr', 'Bílek'], ['Prací prášek', 1.5, 'kg'], 240],
  [['Ondřej', 'Zvěřina'], ['Savo', 1, 'ks'], 80],
  [['Pavla', 'Durdíková'], ['Toaleťák', 1, 'balení'], 65],
  [['Zuzana', 'Kaczynská'], ['Mýdlo', 200, 'ml'], 50],
  [['Pavla', 'Durdíková'], ['Závěs do koupelny', 1, 'ks'], 350],
  [['Libor', 'Krejčí'], ['Pivka na kolaudačku', 40, 'ks'], 124],
  [['Petr', 'Bílek'], ['Pytle na odpadky', 3, 'balení'], 75],
  [['Michaela', 'Reischlová'], ['Utěrky na nádobí', 1, 'balení'], 130],
  [['Ondřej', 'Zvěřina'], ['Toaleťák', 2, 'balení'], 120],
  [['Michaela', 'Reischlová'], ['Pečící papír', 1, 'balení'], 30],
  [['Zuzana', 'Kaczynská'], ['Savo', 1, 'ks'], 80],
  [['Petr', 'Bílek'], ['Tapeta na záchod', 1, 'ks'], 315],
  [['Ondřej', 'Zvěřina'], ['Toaleťák', 1, 'balení'], 64],
];
```

Taková struktura už ale pomalu začíná být malinko nepřehledná. Pokud se chceme dostat k názvu zakoupené věci, musíme napsat například.

```jscon
> expenses[3][1][0]
'Mýdlo'
```

Z tohoto výrazu už je dost těžké vyčíst, co vlastně z tabulky vytahujeme, musíme počítat indexy na prstech ruky a je velmi snadné se splést. Musíme si totiž pamatovat, že jméno produktu je na indexu 0, že produkt samotný je na indexu 1 a tak dále.

Abychom měli život o kus jednodušší, použijeme k reprezentaci řádku v tabulce místo pole objekt. Objekty ukládají data ve formátu klíč - hodnota. Jeden řádek naší tabulky (jednoduchá verze) pak bude vypadat takto.

```js
const row = {
  name: 'Petr',
  product: 'Prací prášek',
  price: 240,
};
```

Výhoda objektů spočívá v tom, že ke každé hodnotě se nyní dostaneme pomocí klíče a nemusíme řešit indexy.

```jscon
> row.name
'Petr'
> row.product
'Prací prášek'
> row.price
240
```

Objekt je nový typ hodnoty. Můžeme s ním tedy jako vždy provádět cokoliv, co děláme s ostatními hodnotami - ukládat do proměnné, používat ve výrazech, předávat jako vstupy funkcím apod. Díky tomu mohou objekty být součástí polí. Celá naše tabulka pak bude vypadat takto.

```js
const expenses = [
  {name: 'Petr', product: 'Prací prášek', price: 240},
  {name: 'Ondra', product: 'Savo', price: 80},
  {name: 'Pavla', product: 'Toaleťák', price: 65},
  {name: 'Zuzka', product: 'Mýdlo', price: 50},
  {name: 'Pavla', product: 'Závěs do koupelny', price: 350},
  {name: 'Libor', product: 'Pivka na kolaudačku', price: 124},
  {name: 'Petr', product: 'Pytle na odpadky', price: 75},
  {name: 'Míša', product: 'Utěrky na nádobí', price: 130},
  {name: 'Ondra', product: 'Toaleťák', price: 120},
  {name: 'Míša', product: 'Pečící papír', price: 30},
  {name: 'Zuzka', product: 'Savo', price: 80},
  {name: 'Petr', product: 'Tapeta na záchod', price: 315},
  {name: 'Ondra', product: 'Toaleťák', price: 6}]
];
```

Navíc, každý klíč v objektu může odkazovat na libovolnou hodnotu. V řádku tabulky zatím máme jen řetězce a číslo. Není však problém použít pole nebo rovnou další objekt. Můžeme tak vytvářen zanořené struktury jako například tuto.

```js
const row = {
  name: {
    first: 'Petr',
    last: 'Bílek',
  },
  product: {
    name: 'Prací prášek',
    amount: 1.5,
    unit: 'kg',
  },
  price: 240,
};
```

K názvu produktu se pak snadno dostaneme takto.

```jscon
> row.product.name
'Prací prášek'
```

To je jistě mnohem srozumitelnější, než používat indexu u polí. Díky objektům a polím můžeme vytvářet mnohonásobně složitější a komplikovanější struktury, které mohou reprezentovat téměř jakákoliv strukturovaná data.

**Tajemství**: Pokud může být pod klíčem v objektu livobolná hodnota, zvídavého člověka možná napade co by se tak stalo, kdybychom jako hodnotu v objektu použitli funkci. Funkce jsou přece také právoplatní hodnoty. Toto je ale právě ta věc, která navždy změní naše programátorské životy a na takovou změnu je třeba se duševně připravit. Odložíme ji proto zatím do některé z dalších lekci.

### Tečková notace

Pokud objekty zapisujeme způsobem jako výše, názvy klíčů se musí řídit stejnými pravidly jako názvy proměnných. Nemůžeme tak mít uvnitř názvu klíče mezeru nebo třeba pomlčku. Většinou se nám podaří takovým znakům vyhnout. Ne vždy je to ale možné. Pokud potřebujeme klíč s názvem, který porušuje pravidla JavaScriptových proměnných, stačí jej uzavřít do uvozovek.

```js
const person = {
  'first-name': 'Petr',
  'last-name': 'Bílek',
};
```

V takovémto případě ale nemůžeme k hodnotám v objektu přistupovat jako obvykle.

```jscon
> person.first-name;
```

JavaScript by si myslel, že od hodnoty `person.first` odečítáme hodnotu `name`. Musíme tedy použít alternativní způsob přistupu ke klíčům.

```jscon
> person['first-name'];
'Petr'
```

Tento způsob zdaleka není tak elegantní jako tečková notace. Proto se snažíme v názvech klíčů vyhýbat znakům, které nepatří do názvů proměnných a můžeme tak používat tečkovou notaci.

### Složitější struktury

Díky objektům a polím můžeme nyní v našich programech reprezentovat mnohem složitější data než dříve. Takto bychom mohli reprezentovat například kurz Czechitas jménem <i>Úvod do programování</i>.

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

Všimněte si, jak objekt představující jeden kurz obsahuje pod klíčem `konani` pole dalších objektů. Každý z těchto objektů reprezentuje jedno konání kurzu a dále obsahuje například pole koučů, místo atp. Kdybychom tedy například chtěli seznam všech koučů na druhém konání kurzu, napsali bychom

```jscon
> course.konani[1].koucove
[ 'Dan Vrátil', 'Zuzana Tučková', 'Martina Nemčoková' ]
```

@exercises ## Cvičení - objekty jako data [

- zaklady
- kurz
- knihovna
  ]@

## Pokročilejší práce s komponentami

Protože už umíme používat objekty, můžeme udělát malou úpravu v tom, jak v JavaScriptu vytváříme komponenty. Do této chvíle jsme komponenty psali tak, jak vidíme níže na komponentě `Clock`, která zobrazuje hodiny.

```js
const Clock = (hours, minutes) => {
  return `
    <div class="clock">
      <span class="clock__hours">${hours}</span>
      :
      <span class="clock__minutes">${minutes}</span>
    </div>
  `;
};
```

Naše komponenty vždy měly jeden nebo více parametrů představujících data, která chceme zakomponovat do výsledného HTML. Nyní však uděláme změnu a budeme vždy komponentě předávat data jako objekt. Všechny naše komponenty tak budou mít pouze jeden parametr, ve kterém budeme očekávat objekt obsahující všechna nezbytná data. Tento parametr se bude u všech komponent jmenovat `props`.
Naše komponenta `Clock` bude po této změně vypadat takto.

```js
const Clock = (props) => {
  return `
    <div class="clock">
      <span class="clock__hours">${props.hours}</span>
      :
      <span class="clock__minutes">${props.minutes}</span>
    </div>
  `;
};
```

### Aktualizace obsahu stránky

Pohlédněme na celý kód naší stránky s nákupním seznamem.

```js
const ShoppingList = (items) => {
  let result = '';
  for (let i = 0; i < items.length; i += 1) {
    items.innerHTML += `<li>${items[i]}</li>`;
  }

  return result;
};

const list = [
  'mrkev',
  'paprika',
  'cibule',
  'čínské zelí',
  'arašídy',
  'sojová omáčka',
];

const listElm = document.querySelector('#shopping-list');
listElm.innerHTML = ShoppingList(list);
```

Stránka je zatím poměrně statícká. Zobrazuje pořád tentýž seznam. Určitě bychom chtěli uživateli umožnit přidat do seznamu nějakou položku. Naše pole je globální, můžeme to tedy zatím zkusit udělat programátorsky přímo z konzole.

```js
> shoppingList.push('koriandr');
7
```

Naše pole se tedy rozrostlo o jeden prvek. K našemu zklamání však obsah stránky zůstává pořád stejný. Je to logické, protože obsah seznamu `ul` jsme v JavaScriptu vytvořili hned po načtení stránky. Změna našeho pole tento kód znovu magicky nespustí. Musíme jej spustit sami ve chvíli, kdy chceme říct, že se má obsah seznamu `ul` vytvořit znova podle nového obsahu pole `list`. Máme zde velkou výhodou v tom, že náš kód vytvářející obsah stránky dle pole `list` máme hezky zabalený v komponentě `ShoppingList`. Chceme-li tedy obsah stránky aktualizovat podle nových hodnot v poli `list`, sta49 naši komponentu znova zavolat.

```js
const updateShoppingList = () => {
  const listElm = document.querySelector('#shopping-list');
  listElm.innerHTML = '';
  for (let i = 0; i < shoppingList.length; i += 1) {
    listElm.innerHTML += `<li>${shoppingList[i]}</li>`;
  }
};
```

Všimněte si, že na začátku funkce vymažeme `innerHTML` našeho `ul` seznamu, abychom celou HTML strukturu vytvořili úplně znova. Máme tak k dispozici funkci, kterou můžeme zavolat pokaždé, když chceme, aby naše stránka zobrazila aktuální obsah našeho pole `shoppingList`. To nám dává svobodu si s polem dělat co chceme, přidávat položky, měnit položky, mazat položky a tak dále. Vždy jen pak musíme zavolat funkci `updateShoppingList`, aby se změny projevily i v našem HTML. Můžete si to vyzkoušet rovnou z konzole a sledovat, jak stránka reaguje.

```js
> shoppingList.push('zázvor');
8
> updateShoppingList()
undefined
> shoppingList.shift();
'mrkev',
> updateShoppingList()
undefined
> shoppingList[0] = 'klíčky';
'klíčky',
> updateShoppingList()
undefined
```
