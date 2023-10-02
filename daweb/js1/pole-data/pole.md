Do této chvíle jsme uměli do nějaké proměnné uložit pouze jednu hodnotu, například řetězec, objekt, DOM element nebo funkci. Počítače ale často potřebují pracovat s mnohem větším objemem dat, než je několik čísel nebo řetězců. V této části si ukážeme jak ukládat větší množství hodnot do jedné proměnné.

## Pole

:term{cs="Pole" en="Array"} nám umožňují do jedné proměnné uložit více hodnot.
Tvoříme je pomocí hranatých závorek. Takto například do jedné proměnné uložíme známky ze všech písemek psaných za jedno pololetí.

```js
const marks = [3, 1, 2, 4, 1];
```

Uvnitř polí je možné mít zcela libovolné hodnoty, tedy například řetězce, DOM elementy apod.

```js
const ages = [23, 28, 19, 21, 25];
const users = ['john', 'sue', 'peter', 'jane', 'soji'];
```

V praxi se nejčastějeji setkáme s poli, která obsahují objekty. Takto například můžeme reprezentovat seznam studentů.

```js
const students = [
  { name: 'John', age: 23, mark: 3 },
  { name: 'Sue', age: 28, mark: 1 },
  { name: 'Peter', age: 19, mark: 2 },
  { name: 'Jane', age: 21, mark: 4 },
  { name: 'Soji', age: 25, mark: 1 },
];
```

Tato datová struktura v podstatě reprezentuje tabulku s řádky a sloupečky. V prvním sloupečku máme jména studentů, ve druhém jejich věk. Každý řádek tabulky je jeden objekt.

| Name | Age | Mark |
|------|-----|------| 
| John | 23  | 3    |
| Sue  | 28  | 1    |
| Peter| 19  | 2    |
| Jane | 21  | 4    |
| Soji | 25  | 1    |

Pozor na to, že podobně jako existuje prázný řetězec `''`, existuje také prázdné pole `[]`. Je to zcela běžná hodnota, která se často velmi hodí.

### Indexy

Hodnoty uvnitř polí sídlí na takzvaných indexech. Na jednotlivé indexy přistupujeme také pomocí hranatých závorek. Jak už víme z lekce o řetězcích, **programátoři všechno počítají od nuly**.

```js
const marks = [3, 1, 2, 4, 1];
marks[0] // ⟶ 3
marks[3] // ⟶ 4
```

Pomocí indexů také můžeme hodnoty uvnitř pole měnit. Dejme tomu, že si nehezkou čtyřku opravíme na dvojku.

```js
marks[3] = 2;
marks // ⟶ [ 3, 1, 2, 2, 1]
```

### Vlastnosti a metody

Pole také mají zajímavé vlastnosti a metody. Vlastnost `length` už známe z řetězců.

```js
marks.length // ⟶ 5
```

Pomocí metody `push` můžeme přidat novou hodnotu na konec pole.

```js
marks.push(3);
marks // ⟶ [ 3, 1, 2, 4, 1, 3]
```

Naopak pomocí metody `pop` poslední prvek pole smažeme.

```js
marks.pop();
marks // ⟶ [ 3, 1, 2, 4, 1]
```

Pomocí metody `includes` můžeme zjistit, jestli se uvnitř pole nachází zadaný prvek.

```js
marks.includes(1) // ⟶ true
marks.includes(5) // ⟶ false
```

Metoda `indexOf` nám přímo řekne první index, na kterém se zadaný prvek v poli nachází. Pokud prvek v poli není, obdržíme -1.

```js
marks.indexOf(4) // ⟶ 3
marks.indexOf(3) // ⟶ 0
marks.indexOf(5) // ⟶ -1
```

### Řetězce versus pole

Řetězce jsme v tomto kurzu potkali na samém začátku. Nyní si však můžeme ukázat, že řetězce mají s poli hodně společného. V některých situacích se totiž chovají jako pole znaků. Už víme, že pole i řetězce mají vlastnost `length`. Můžete však také přistupovat k jednotlivých znakům skrze indexy.

```js
const name = 'Ernest';
name.length // ⟶ 6
name[1] // ⟶ 'r'
name[5] // ⟶ 't'
```

Na řetězcích také najdeme metody `includes` a `indexOf`. Tentokrát však můžeme vyhledávat nejen písmenka, ale celé podřetězce.

```js
const text = 'Kobyla má malý bok';
text.includes('b') // ⟶ true
text.includes('malý') // ⟶ true
text.indexOf('malý') // ⟶ 10
text.indexOf('velký') // ⟶ -1
```

### Použití polí

Pole v programování potkáme na každém kroku. Jejich nejčastější použití najdeme v různých aplikacích zobrazujících seznamy jako například produkty v objednávce, rezervované letenky, předpověď počasí na tento týden apod. Takto například může vypadat seznam zpráv v aplikaci WhatsApp.

```js
const messages = [
  { from: 'John', text: 'Hi, how are you?' },
  { from: 'Jane', text: 'I am fine, thanks.' },
  { from: 'John', text: 'Great!' },
  { from: 'Jane', text: 'How about you?' },
  { from: 'John', text: 'I am fine too.' },
];
```

Pomocí pole však také polí můžeme reprezentovat herní plány v různých počítačovách hrách. Takto například mohou vypadat rozehrané piškvorky 3x3.

```js
const tictactoe = [
  ['o', ' ', ' '],
  [' ', 'x', ' '],
  [' ', 'o', 'x'],
];
```

Vidíme, že na tahu je zrovna křížek. Můžeme tak snadno provést nějaký chytrý tah.

```js
tictactoe[0][2] = 'x'
```
