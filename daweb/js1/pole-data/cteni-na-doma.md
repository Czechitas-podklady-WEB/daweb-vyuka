## Povinné čtení na doma

Pro průchod polem existují ještě dva mnohem obecnější postupy pomocí klíčových slov `while` a `for`, které však v tomto kurzu nebudeme tolik potřebovat a proto je zmíníme pouze okrajove. Pozor však na to, že v programátorské praxi se s nimi setkáte velmi často.

Na rozdíl od `map` a `forEach` nám `while` a `for` umožňují provádět cykly i bez podkladového pole. Využívají se především v případě, kdy potřebujeme provádět nějakou operaci několikrát, ale nevíme předem, kolikrát.

### Cyklus `while`

Cyklus `while` je základním typem cyklu v JavaScriptu. Používá se k opakování bloku kódu, dokud je podmínka splněna.

Syntaxe cyklu `while` vypadá následovně:

```js
while (podmínka) {
  // kód, který se opakuje
}
```

Například, pokud chceme vypsat čísla od `1` do `10`, můžeme použít cyklus `while` následovně:

```js
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

Kód výše si nachystá proměnnou `i` na hodnotu `1` a vypisuje ji tak dlouho, dokud je menší než `10`. Po každém vypsání zvětší promměnou o jedna pomocí `i++`, což je to samé jako `i += 1` nebo `i = i + 1`.

Cyklus nemusíme použít jen k počítání. Můžeme například nechat uživatele zadávat heslo tak dlouho, dokud nezadá to správné.

```js
let password = prompt('Enter your password:');
while (password !== 'fatboyslim') {
  password = prompt('Wrong password. Try again:');
}
alert(`Hurray! Your guess "${password}" is correct.`);
```

Tento program je na uživatele zbytečně zlý. Lepší by nejspíš bylo, kdybychom počet opakování omezili například na maximálně pět.

```js
let attempt = 1;
let password = prompt('Enter your password:');
while (password !== 'fatboyslim' && attempt < 6) {
  password = prompt('Wrong password. Try again:');
  attempt += 1;
}
```

Pozor na to, že stačí malá nepozornost a vyrobíme cyklus, který se opakuje do nekonečna.

```js
// Nekonečný cyklus kvůli nepozornosti
let pocitadlo = 1;
while (pocitadlo <= 10) {
  console.log(pocitadlo);
  pocitadlo + 1;
}
```

V praxi se nám občas nekonečný cyklus hodí, ale většinou vzniká jako chyba v programu. Jistě se vám již mnohokrát stalo, že počítač takzvaně zamrznul. Většinou je to právě proto, že nějaký program se omylem dostal do nekonečné smyčky.

#### Procházení pole

Velmi často se cyklus hodí k tomu, abychom prošli nejaké pole prvek po prvku a s každým prvkem něco udělali. Stejně jako to děláme s `forEach`. V takovém případě si vyrobíme cyklus, který prochází jednotlivé indexy pole a tyto indexy pak používáme k přístupu k jednotlivým prvkům. Zkusme například vypsat na obrazovku pole známek.

```js
const marks = [2, 4, 1, 3, 4, 3];

let i = 0;
while (i < marks.length) {
  console.log(marks[i]);
  i += 1;
}
```

Aby cyklus správně fungoval, musíme si dát dobrý pozor jednak na to, abychom s indexem `i` začínali od nuly a abychom nepřekročili délku pole.

Všimněte si, že už po několikáté vidíme cyklus, kde používáme nějakou proměnnou, kterou postupně navyšujeme dokud nedojdeme k nějakému limitu. Protože tato proměnná vlastně řídí, jak dlouho se celý cyklus bude opakovat, říkáme jí :term{cs="řídící proměnná" en="control variable"}.

### Cyklus `for`

Cyklus s řídící proměnnou je v programování tak častý, že si pro něj programátoři vytvořili speciální syntax, která se jmenuje `for` cyklus. V cyklech `for` jsou všechny příkazy s řídící proměnnou na jednom místě a kód je pak lépe čitelný.

Ukažme si ještě jednou cyklus `while` pro výpis známek do konzole.

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

Vidíte nyní všechny příkazy pro práci s řídící proměnnou pěkně na začátku cyklu a nemusíme se rozlížet po celém kódu, abychom je našli.

Pro srovnání se podívejte na stejný kód zapsaný pomocí `forEach`.

```js
const marks = [2, 4, 1, 3, 4, 3];

marks.forEach((mark) => {
  console.log(mark);
});
```

### Výpočty pomocí cyklů

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
