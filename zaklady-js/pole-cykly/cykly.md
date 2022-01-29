## Cykly

Pole a cykly jsou jakýmsi svatým grálem začátečníckého programování. Otvírají cestu k mnohem zajímavějším a komplexnějším programům a aplikacím. Cykly slouží k tomu, abychom mohli nějaký kus kódu provádět opakovaně. Síla počítačů spočívá právě v tom, že dokážou extrémně rychle provádět opakovanou činnost a tím nám ušetřit mnoho práce. V JavaScriptu existuje vícero typů cyklů a v této lekci se zatím představíme pouze ty hlavní a základní.

### Cyklus WHILE

Na nejpřímočařejší použití cyklu narazíme ve chvíli, kdy chceme provést nějaký kus kódu vícekrát po sobě. Pro jednoduchost zečněme tím, že budeme chtít do konzole vypsat čísla od 1 do 10. Toho dosáhneme následujícím kódem.

```js
let num = 1
while (num <= 10) {
	console.log(num)
	num += 1
}
```

Na začátku si vytváříme proměnnou `num`, která bude obsahovat naše čísla. Poté následuje cyklus, který vypadá velmi podobně jako podmínka `if`. Podobně jak u podmínek, i zde se do kulatých závorek píše výraz, který vrací pravdivostní hodnotu. Pokud tento výraz vrátí `true`, vykoná se zadaný blok kódu. Jakmile však blok kódu skončí, výraz v kulatých závorkách se vyhodnotí znovu. Pokud opět vrátí `true`, blok kódu se vykoná znova. Takto se cyklus opakuje tak dlouho, dokud výraz v závorkách nevrátí `false`.

Protože v bloku kódu vždy přičteme k proměnné `num` jedničku, cyklus se nám zopakuje dohromady desetkrát.

Cyklus nemusíme použít jen k počítání. Můžeme například nechat uživatele zadávat heslo tak dlouho, dokud nezadá to správné.

```js
let pass = prompt('Enter your password:')
while (pass !== 'fatboyslim') {
	pass = prompt('Wrong password. Try again:')
}
```

Tento program je na uživatele zbytečně zlý. Lepší by nejspíš bylo, kdybychom počet opakování omezili například na maximálně pět.

```js
let attempt = 1
let pass = prompt('Enter your password:')
while (pass !== 'fatboyslim' && attempt < 6) {
	pass = prompt('Wrong password. Try again:')
	attempt += 1
}
```

Pozor na to, že stačí malá nepozornost a vyrobíme cyklus, který se opakuje do nekonečna.

```js
let num = 1
while (num <= 10) {
	console.log(num)
	num + 1
}
```

V praxi se nám občas nekonečný cyklus hodí, ale většinou vzníká jako chyba v programu. Jistě se vám již mnohokrát stalo, že počítač takzvaně zamrznul. Většinou je to právě proto, že nějaký program se omylem dostal do nekonečné smyčky.

### Procházení pole

Velmi často budeme používat cyklus k tomu, abychom prošli nejaké pole prvek po prvku a s každým prvkem něco udělali. V takovém případě si vyrobíme cyklus, který prochází jednotlivé indexy pole a tyto indexy pak používáme k přístupu k jednotlivým prvkům. Zkusme například vypsat na obrazovku naše pole známek.

```js
const marks = [2, 4, 1, 3, 4, 3]

let i = 0
while (i < marks.length) {
	console.log(marks[i])
	i += 1
}
```

Aby cyklus správně fungoval, musíme si dát dobrý pozor jednak na to, abychom s indexem `i` začínali od nuly a abychom nepřekročili délku pole.

Všimněte si, že už po několikáté vidíme cyklus, kde používáme nějakou proměnnou, kterou postupně navyšujeme dokud nedojdeme k nějakému limitu. Protože tato proměnná vlastně řídí, jak dlouho se celý cyklus bude opakovat, říkáme jí :term{cs="řídící proměnná" en="control variable"}.

### Cyklus FOR

Cyklus s řídící proměnnou je v programování tak častý, že si pro něj programátoři vytvořili speciální syntax, která se jmenuje FOR cyklus. V cyklech FOR jsou všechny příkazy s řídící proměnnou na jednom místě a kód je pak lépe čitelný.

Ukažme si ještě jednou cyklus WHILE pro výpis známek do konzole.

```js
const marks = [2, 4, 1, 3, 4, 3]

let i = 0
while (i < marks.length) {
	console.log(marks[i])
	i += 1
}
```

Nyní pohlédněte na tutéž funkčnost zapsanou pomocí cyklu FOR.

```js
const marks = [2, 4, 1, 3, 4, 3]

for (let i = 0; i < marks.length; i += 1) {
	console.log(marks[i])
}
```

Vidíte nyní všechny příkazy pro práci s řídící proměnnou pěkně na začátku cyklu a nemusíme se rozlížet po celém kódu, abychom je našli.

## Složitejší cykly

K zajímavějším programům se dostaneme ve chvíli, kdy uvnitř cyklů začneme pracovat s proměnnými mimo cyklus. Takto například spočítáme průměrnou známku.

```js
const marks = [2, 4, 1, 3, 4, 3]

let sum = 0
for (let i = 0; i < marks.length; i += 1) {
	sum += marks[i]
}

const averageMark = sum / marks.length
```

Tímto způsobem se můžeme propracovat až k velmi složitým algoritmům, cyklům uvnitř cyklů apod. V této lekci se však budeme zatím držet při zemi.
