Do této chvíle jsme uměli do nějaké proměnné uložit pouze jednu hodnotu, například řetězec, DOM element nebo funkci. Počítače ale často potřebují pracovat v mnohem větším objemem dat, než je několik čísel nebo řetězců. V této lekci si ukážeme jak ukládat větší množství hodnot do jedné proměnné a jak potom můžeme s takovými hodnotami zpracovávat pomocí cyklů.

## Pole

<term cs="Pole" en="Array"> nám umožňují do jedné proměnné uložit více hodnot. Pokud znáte například jazyk Python, pole v JavaScriptu jsou totéž co seznamy v Pythonu.

Pole tvoříme pomocí hranatých závorek. Takto například do jedné proměnné uložíme známky ze všech písemek psaných za jedno pololetí.

```jscon
> const marks = [3, 1, 2, 4]
```

Uvnitř polí je možné mít zcela libovolné hodnoty, tedy například řetězce, DOM elementy apod.

```jscon
> const temperaturs = [13.5, 12.7, 11.2, 12.3, 15.1]
> const users = ['john', 'sue', 'peter', 'jane', 'soji']
```

Samotné pole je ovšem také hodnota. Není tedy problém mít například pole polí.

```jscon
> const expenses = [['john', 250], ['sue', 170], ['peter', 337]]
```

### Indexy

Hodnoty uvnitř polí sídlí na takzvaných indexech. Programátoři však mají takový zvláštní fetiš, že všechno počítačí počínaje nulou, nikoliv jedničkou. Má to svoje důvody, které však zatím nebudeme rozvádět. Raději si rovnou ukážeme, jak přistupovat k hodnotám na jednotlivých indexech.

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

Naopak pomocí metody `pop` poslení prvek pole smažeme.

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

Chceme-li přidat prvek na začátek pole, je to vlastně opačná operace k `shift`. Metoda pro přidání prvku na začátek pole ma tedy trochu zláštní jméno `unshift`.

```jscon
> marks.unshift(1)
4
> marks
[ 1, 1, 2, 2 ]
```

Pomocí metody `includes` můžeme zjistit, jestli se unvitř pole nechází zadaný prvek.

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

Řetězce jsme v tomto kurzu potkali na samém začátku. Nyní si však můžeme ukázat, že řetězce mají s poli hodně společného. V některých situacích se totiž chovají jako pole znaků. Už víme, že pole i řetězce mají vlastno `length`. Můžete však také přistupovat k jednotlivých znakům skrze indexy.

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

## Cykly

Pole a cykly jsou jakýmsi svatým grálem začátečníckého programování. Otvírají nám totiž cestu k mnohem zajímavějším a komplexnějším programům. Cykly slouží k tomu, abychom mohli nějaký kus kódu provádět opakovaně. Síla počítačů spočívá právě v tom, že dokážou extrémně rychle provádět opakovanou činnost a tím nám ušetřit mnoho práce. Tato síla se nám odemyká právě díky cyklům. V JavaScriptu existuje vícero typů cyklů a v této lekci se zatím představíme pouze ty hlavní a základní.

### Cyklus FOR

Na nejpřímočařejší použití cyklu narazíme ve chvíli, kdy chceme provést nějaký kus kódu pro každý prvek pole. Představme si, že chceme například vzít naše pole známek z písemek a každou známku vypsat do konzole. K tomu můžeme použit jednoduchou variantu cyklu FOR.

```js
const marks = [2, 1, 1, 3, 2, 3];
for (const mark of marks) {
  console.log(mark);
}
```

Všímněte si, že cyklus FOR se píše velmi podobně jako podmínka. Stejně jako u podmínek, příkazy, které se mají vykonat, píšeme jako blok kódu. Cyklus zařídí, že náš blok kódu se spustí tolikrát, kolik se nachází prvků v poli `marks`. V kulatých závorkách vytváříme speciální proměnnou, jež se v tomto případě jmenuje `mark`. Do této proměnné runtime v každé obrátce cyklu uloží ten prvek pole, který právě zpracováváme. Cyklus pole prochází od začátku do konce. V první obrátce tak bude proměnná `mark` obsahovat známku 2, v druhé obrátce známku 1 a tak dále až do konce pole.

Proměnná `mark` tedy funguje podobně jako například parametr funkce. Její jméno si můžeme zvolit libovolně, ale vždy nejlépe tak, aby kód čtenáři dával smysl. V našem případě jsou prvky pole známky, je tedy vhodné proměnnou pojmenovat tak, aby bylo jasné, že v ní je vždy uložena známka.

### Obsáhlejší cyklus

Cyklus samozřejmě zdaleka nemusí obsahovat pouze jeden příkad.
