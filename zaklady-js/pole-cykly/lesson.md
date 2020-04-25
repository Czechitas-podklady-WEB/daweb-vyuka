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

@exercises ## Cvičení - práce s poli [

- pole-v-divadle
- registrace
  ]@

## Cykly

Pole a cykly jsou jakýmsi svatým grálem začátečníckého programování. Otvírají cestu k mnohem zajímavějším a komplexnějším programům a aplikacím. Cykly slouží k tomu, abychom mohli nějaký kus kódu provádět opakovaně. Síla počítačů spočívá právě v tom, že dokážou extrémně rychle provádět opakovanou činnost a tím nám ušetřit mnoho práce. V JavaScriptu existuje vícero typů cyklů a v této lekci se zatím představíme pouze ty hlavní a základní.

### Cyklus WHILE

Na nejpřímočařejší použití cyklu narazíme ve chvíli, kdy chceme provést nějaký kus kódu vícekrát po sobě. Pro jednoduchost zečněme tím, že budeme chtít do konzole vypsat čísla od 1 do 10. Toho dosáhneme následujícím kódem.

```js
let num = 1;
while (num <= 10) {
  console.log(num);
  num += 1;
}
```

Na začátku si vytváříme proměnnou `num`, která bude obsahovat naše čísla. Poté následuje cyklus, který vypadá velmi podobně jako podmínka `if`. Podobně jaku u podmínek, i zde se do kulatých závorkách píše výraz, který vrací pravdivostní hodnotu. Pokud tento výraz vrátí `true`, vykoná se zadaný blok kódu. Jakmile však blok kódu skončí, výraz v kulatých závorkách se vyhodnotí znovu. Pokud opět vrátí `true`, blok kódu se vykoná znova. Takto se cyklus opakuje tak dlouho, dokud výraz v závorkách nevrátí `false`.

Protože v bloku kódu vždy přičteme k proměnné `num` jedničku, cyklus se nám zopakuje dohromady desetkrát.

Cyklus nemusíme použít jen k počítání. Můžeme například nechat uživatele zadávat heslo tak, dlouho, dokud nezadá to správné.

```js
let pass = prompt('Enter your password:');
while (pass !== 'fatboyslim') {
  pass = prompt('Wrong password. Try again:');
}
```

Tento program je na uživatele zbytečně zlý. Lepší by nejspíš bylo, kdybychom počet opakování omezili například na maximálně pět.

```js
let attempt = 1;
let pass = prompt('Enter your password:');
while (pass !== 'fatboyslim' && attempt < 6) {
  pass = prompt('Wrong password. Try again:');
  attempt += 1;
}
```

Pozor na to, že stačí malá nepozornost a vyrobíme cyklus, který se opakuje do nekonečna.

```js
let num = 1;
while (num <= 10) {
  console.log(num);
  num + 1;
}
```

V praxi se nám občas nekonečný cyklus hodí, ale většinou vzníká jako chyba v programu. Jistě se vám již mnohokrát stalo, že počítač takzvaně zamrznul. Většinou je to právě proto, že nějaký program se omylem dostal do nekonečné smyčky.

### Procházení pole

Velmi často budeme používat cyklus k tomu, abychom prošli nejaké pole porvek po prvku a s každým prvkem něco udělali. V takovém případě si vyrobíme cyklus, který prochází jednotlivé indexy pole a tyto indexy pak používáme k přístupu k jednotlivým prvkům. Zkusme například vypsat na obrazovku naše pole známek.

```js
const marks = [2, 4, 1, 3, 4, 3];

let i = 0;
while (i < marks.length) {
  console.log(marks[i]);
  i += 1;
}
```

Aby cyklus správně fungoval, musíme si dát dobrý pozor jednak na to, abychom s indexm `i` začínali od nuly a bychom nepřekročili délku pole.

Všimněte si, že už po několikáté vidíme cyklus, kde používáme nějakou proměnnou, kterou postupně navyšujeme dokud nedojdeme k nějakému limitu. Protože tato proměnná vlastně řídí, jak dlouho se celý cyklus bude opakovat, říkáme jí _řídící proměnná_.

### Cyklus FOR

Cyklus s řídící proměnnou je v programování tak častý, že si pro něj programátoři vytvořili speciální syntaxi, která se jmenuje FOR cyklus. V cyklech FOR jsou všechny příkazy s řídící proměnnou na jednom místě a kód je pak lépe čitelný.

Ukažme si ještě jednou cyklus WHILE pro výpis známek do konzole.

```js
const marks = [2, 4, 1, 3, 4, 3];

let i = 0;
while (i < marks.length) {
  console.log(marks[i]);
  i += 1;
}
```

Nyní pohlédněte na tutéž funkčnost zapsanou pomocí cyklu FOR.

```js
const marks = [2, 4, 1, 3, 4, 3];

for (let i = 0; i < marks.length; i += 1) {
  console.log(marks[i]);
}
```

Vidíte že, že nyní všechny příkazy pro práci s řídící proměnnou pěkně na začátku cyklu a nemusíme se rozlížet po celém kódu, abychom je našli.

## Složitejší cykly

K zajímavějším programům se dostaneme ve chvíli, kdy uvnitř cyklů začneme pracovat s proměnnými mimo cyklus. Takto například spočítáme průměrnou známku.

```js
const marks = [2, 4, 1, 3, 4, 3];

let sum = 0;
for (let i = 0; i < marks.length; i += 1) {
  sum += marks[i];
}

const averageMark = sum / marks.length;
```

Tímto způsobem se můžeme propracovat až k velmi složitým algoritmům, cyklům uvnitř cyklů apod. V této lekci se však budeme zatím držet při zemi.

@exercises ## Cvičení - Cykly [

- suda-cisla
- uzivatele
- pohyby-na-uctu
  ]@
