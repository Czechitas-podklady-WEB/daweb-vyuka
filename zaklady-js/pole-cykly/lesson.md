Do této chvíle jsme uměli do nějaké proměnné uložit pouze jednu hodnotu, například řetězec, DOM element nebo funkci. Počítače ale často potřebují pracovat v mnohem větším objemem dat, než je několik čísel nebo řetězců. V této lekci si ukážeme jak ukládat větší množství hodnot do jedné proměnné a jak potom můžeme s takovými hodnotami zpracovávat pomocí cyklů.

## Pole

<term cs="Pole" en="Array"> nám umožňují do jedné proměnné uložit více hodnot. Pokud znáte například jazyk Python, pole v JavaScriptu jsou totéž co seznamy v Pythonu.

Pole se tvoří pomocí hranatých závorek. Pokud bychom například chtěli do jedné proměnné uložit známky ze všech testů psaných za semestr, můžeme to udělat takto.

```jscon
> const marks = [3, 1, 2, 4]
```

Uvnitř polí je možné mít zcela libovolné hodnoty, tedy například řetězce, DOM elementy apod.

```jscon
> const users = ['john', 'sue', 'peter', 'jane', 'soji']
```

Samotné pole je ovšem také hodnota. Není tedy problém mít pole polí.

```jscon
> const expenses = [['john', 250], ['sue', 170], ['peter', 337]]
```

### Indexy

Hodnoty uvnitř polí sídlí na takzvaných indexech. Je to takový zvláštní programátorský fetiš, že indexy začínají nulou, nikoliv jedničkou. Má to svoje důvody, které tady ovšem nebudeme rozvádět. Raději si rovnou ukážeme, jak přistupovat k hodnotám na indexech.

```jscon
> const marks = [3, 1, 2, 4]
> marks[0]
3
> marks[3]
4
```
