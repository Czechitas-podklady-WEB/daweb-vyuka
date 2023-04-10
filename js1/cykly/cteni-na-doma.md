## Povinné čtení na doma

Při práci s cykly v JavaScriptu je dobré si osvojit základní koncepty, které vám umožní efektivně pracovat s daty a provádět různé operace v kódu. Kromě syntaxe cyklů `forEach` a `map` je dobré se seznámit také s klíčovými slovy `while` a `for`, které však v praxi s Reactem nejsou tolik využívané.

### Cyklus `while`

Cyklus `while` je základním typem cyklu v JavaScriptu. Používá se k opakování bloku kódu, dokud je podmínka splněna.

Syntaxe cyklu `while` vypadá následovně:

```js
while (podmínka) {
  // kód, který se opakuje
}
```

Například, pokud chceme vypsat čísla od `1` do `10`, můžeme použít cyklus while následovně:

```js
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

### Cyklus `for`

Cyklus `for` je kompaktnější verzí cyklu `while` a často se používá pro procházení prvků pole. Syntaxe cyklu `for` vypadá takto:

```js
for (inicializace; podmínka; krok) {
  // kód, který se opakuje
}
```

Příklad pro vypsání čísel od `1` do `10` pomocí cyklu `for`:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Příklad pro vypsání položek v poli:

```js
const jmena = ['Petr', 'Jana', 'Pavel', 'Marie'];
for (let i = 0; i < jmena.length; i++) {
  console.log(jmena[i]);
}
```
