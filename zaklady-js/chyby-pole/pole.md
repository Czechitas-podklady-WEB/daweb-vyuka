Do této chvíle jsme uměli do nějaké proměnné uložit pouze jednu hodnotu, například řetězec, DOM element nebo funkci. Počítače ale často potřebují pracovat s mnohem větším objemem dat, než je několik čísel nebo řetězců. V této části si ukážeme jak ukládat větší množství hodnot do jedné proměnné.

## Pole

:term{cs="Pole" en="Array"} nám umožňují do jedné proměnné uložit více hodnot. 
Tvoříme je pomocí hranatých závorek. Takto například do jedné proměnné uložíme známky ze všech písemek psaných za jedno pololetí.

```jscon
> const marks = [3, 1, 2, 4]
```

Uvnitř polí je možné mít zcela libovolné hodnoty, tedy například řetězce, DOM elementy apod.

```jscon
> const temperatures = [13.5, 12.7, 11.2, 12.3, 15.1]
> const users = ['john', 'sue', 'peter', 'jane', 'soji']
```

Samotné pole je ovšem také hodnota. Není tedy problém mít například pole polí. Pole polí je možné si představit jako tabulku. Takto může vypadat například tabulka útrat po jednom příjemném večeru v hospodě. 

```jscon
> const expenses = [['john', 350], ['sue', 470], ['peter', 437]]
```

Pozor na to, že podobně jako existuje prázný řetězec `''`, existuje také prázdné pole `[]`. Je to zcela běžná hodnota, která se často velmi hodí.

### Indexy

Hodnoty uvnitř polí sídlí na takzvaných indexech. Na jednotlivé indexy přistupujeme také pomocí hranatých závorek. Jak už víme z lekce o řetězcích, programátoři všechno počítají od nuly. 

```jscon
> const marks = [3, 1, 2, 4]
undefined
> marks[0]
3
> marks[3]
4
```

Pomocí indexů také můžeme hodnoty uvnitř pole měnit. Dejme tomu, že si poslední nehezkou čtyřku opravíme na dvojku.

```jscon
> marks[3] = 2
2
> marks
[ 3, 1, 2, 2 ]
```

U polí, která obsahují další pole, se k jednotlivým prvkům dostaneme pomocí vícenásobného indexování. Takto například zjistíme, kolik utratil Petr v našem polí výdajů.

```jscon
> const expenses = [['john', 350], ['sue', 470], ['peter', 437]]
undefined
> expenses[2][1]
437
```

### Vlastnosti a metody

Pole také mají zajímavé vlastnosti a metody. Vlastnost `length` už známe z řetězců.

```jscon
> marks.length
4
```

Pomocí metody `push` můžeme přidat novou hodnotu na konec pole.

```jscon
> marks.push(1)
5
> marks
[ 3, 1, 2, 2, 1]
```

Naopak pomocí metody `pop` poslední prvek pole smažeme.

```jscon
> marks.pop()
1
> marks
[ 3, 1, 2, 2 ]
```

Pokud chceme odebrat prvek ze začátku pole, použijeme metodu `shift`.

```jscon
> marks.shift()
3
> marks
[ 1, 2, 2 ]
```

Chceme-li přidat prvek na začátek pole, je to vlastně opačná operace k `shift`. Metoda pro přidání prvku na začátek pole má tedy trochu zvláštní jméno `unshift`.

```jscon
> marks.unshift(1)
4
> marks
[ 1, 1, 2, 2 ]
```

Pomocí metody `includes` můžeme zjistit, jestli se uvnitř pole nachází zadaný prvek.

```jscon
> marks
[ 1, 1, 2, 2 ]
> marks.includes(1)
true
> marks.includes(3)
false
```

Metoda `indexOf` nám přímo řekne první index, na kterém se zadaný prvek v poli nachází. Pokud prvek v poli není, obdržíme -1.

```jscon
> marks
[ 1, 1, 2, 2 ]
> marks.indexOf(2)
2
> marks.indexOf(3)
-1
```

### Řetězce versus pole

Řetězce jsme v tomto kurzu potkali na samém začátku. Nyní si však můžeme ukázat, že řetězce mají s poli hodně společného. V některých situacích se totiž chovají jako pole znaků. Už víme, že pole i řetězce mají vlastnost `length`. Můžete však také přistupovat k jednotlivých znakům skrze indexy.

```jscon
> const name = 'Ernest'
undefined
> name.length
6
> name[1]
'r'
> name[5]
't'
```

Na řetězcích také najdeme metody `includes` a `indexOf`. Tentokrát však můžeme vyhledávat nejen písmenka, ale celé podřetězce.

```jscon
> const text = 'Kobyla má malý bok'
undefined
> text.includes('b')
true
> text.includes('malý')
true
> text.indexOf('malý')
10
> text.indexOf('velký')
-1
```

### Použití polí

Pole v programování potkáme na každém kroku. Můžeme je například použít pro reprezentaci dat. Takto například pomocí pole reprezentujeme tabulku výdajů několika zpolubydlících za společné věci do domácnosti.

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

Pomocí pole polí můžeme také reprezentovat herní plány v různých počítačovách hrách. Takto například mohou vypadat rozehrané piškvorky 3x3.

```js
const tictactoe = [
  ['o', ' ', ' '],
  [' ', 'x', ' '],
  [' ', 'o', 'x'],
];
```

Vidíme, že na tahu je zrovna křížek. Můžeme tak snadno provést nějaký chytrý tah.

```jscon
> tictactoe[0][2] = 'x'
> tictactoe
[
  ['o', ' ', 'x'],
  [' ', 'x', ' '],
  [' ', 'o', 'x'],
];
```
