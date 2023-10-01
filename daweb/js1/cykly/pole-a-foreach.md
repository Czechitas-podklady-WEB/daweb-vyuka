## Pole a `forEach`

Pole a metoda `forEach()` jsou dva základní koncepty v práci s poli v JavaScriptu. Pole jsou datové struktury, které nám umožňují ukládat více hodnot do jedné proměnné. Metoda `forEach()` pak umožňuje iterovat přes všechny prvky v poli a provádět na nich nějakou akci.

Při práci s polem můžeme používat indexy k přístupu k jednotlivým prvkům. Indexy jsou čísla, které označují pozici prvku v poli. Indexování v JavaScriptu začíná od nuly, tedy první prvek má index `0`, druhý prvek má index `1` atd.

### Syntaxe

```js
const pole = [1, 2, 3, 4, 5];
pole.forEach((prvek) => {
  // provedení akce na prvku
  console.log(prvek);
});
```

Případně pokud bychom chtěli pracovat s indexem prvku, můžeme použít následující syntaxi:

```js
pole.forEach((prvek, index) => {
  // provedení akce na prvku
  console.log(`Hodnota prvku s indexem ${index} je:`);
  console.log(prvek);
});
```

V této syntaxi funkce v závorkách je tzv. callback funkce, která se spustí pro každý prvek v poli. Tato funkce může obsahovat jakoukoliv akci, kterou chceme na prvku provést. V příkladu výše jsme použili `console.log`, který vypíše hodnotu prvku do konzole. Postupně tak do konzole vypíše všechny prvky v poli.

<!-- // K doplnění

Zmínit rozdíl mezi funkcí a metodou.

Ukázat práci s indexem.

Dovysvětlit, co je to iterace -->
