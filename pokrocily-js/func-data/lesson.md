## Funkcionální zpracování dat

Když při programování aplikací používáme cykly, brzy narazíme na často se opakující situace a konstrukce. Pro tyto situace máme na polích pomocné metody z funkcionálního světa.
Jsou to metody

- `Array.forEach`
- `Array.every`
- `Array.some`
- `Array.map`
- `Array.filter`

### Vynechání returnu

Předtím, než se podíváme na samotné metody, ukážeme si, jak se dají zkrátit arrow fuknce. Pokud arrow fuknce pouze něco vrací na jednom řádku, je možné vynechat složené závorky a klíčové slovo `return`. Obě níže napsané fuknce budou fungovat a vrátí nám řetězec s pozdravem.

```js
const greet = (name) => {
  return `Hi, ${name}`;
};

const conciseGreet = (name) => `Hi, ${name}`;

console.log(greet());
console.log(conciseGreet());
```

Dejte si ale pozor, aby kód zůstal čitelný. Pokud je fuknce jasná a jednoduchá, zkrácení se vyplatí, ale není potřeba všechny fuknce zkracovat na úkor čitelnosti kódu!

### Metoda forEach()

Metoda `forEach()` nám nahrazuje `for` cyklus. Stejně jako `for` cyklus nám metoda defaultně nic nevrací. Do proměnné si uložíme pole čísel. Pomocí for cyklu si můžeme všechny položky vypsat do konzole:

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```

Další možností je rovnou na daném poli zavolat metodu `forEach()`. Metoda `forEach()` bere jeden parametr, a to funkci (tzv. callback funkce). Tato fuknce se zavolá na každé položce pole.

```js
myArray.forEach((item) => {
  console.log(item);
});
```

### Metoda some()

Řekněme si, že chceme zjistit, zda je alespoň jedno číslo v našem poli větší než deset. Můžeme si na to napsat cyklus, ale metoda `some()`, nám usnadní práci. Metoda `some()` jako parametr bere opět funkci, ve které se ptáme na podmínku. Funkce potom podmínku zkrontoluje pro každou položku pole a nakonec nám vrátí `true` nebo `false`, podle toho, zda alespoň jedna položka v poli naši podmínku splňuje. Výsledek volání metody si můžeme uložit do proměnné.

```js
const biggerThanTen = myArray.some((item) => item > 10);

console.log(biggerThanTen);
```

### Metoda every()

Metoda `every()` je podobná metodě `some()` v tom, že nám také vrací bool. Metoda `every()` nám však vrátí `true`, pouze pokud všechny položky pole splňují naši podmínku.
Pokud bychom chtěli zjistit, zda všechna čísla v poli jsou kladná, tedy větší než nula, můžeme použít metodu `every()`.

```js
const allPositive = myArray.every((item) => item > 0);

console.log(allPositive);
```

[[[ excs Cvičení: Funkcionální zpracování dat

- jednohubky1
  ]]]

### Metoda filter()

U metody `filter()` vidíme ve funkci také podmínku. Tato metoda nám však nevrací `bool`, nýbrž nové pole. Toto nové obsahuje pouze ty položky, které podmínku splnily.
Pokud bychom chtěli z pole `myArray` získat pouze čísla dělitelná třemi, použijeme metodu `filter()`. Získáme tak nové pole, které obsahuje jen čísla dělitelná třemi. To si můžeme uložit do proměnné. Naše původní pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const filteredArray = myArray.filter((item) => item % 3 === 0);

console.log(filteredArray);
```

### Metoda map()

Metodu `map()` použijeme především, pokud potřebujeme položky pole pozměnit, nebo z nich něco vytvořit. Metoda bere jako parametr opět fuknci. Tuto fuknci zavolá na každé položce pole a výsledek volání uloží do nově vytvořeného pole. Toto nové pole nám potom vrátí. Původní pole zůstane nezměněné.
Pokud bychom chtěli každé číslo v našem poli `myArray` vynásobit dvěma, můžeme použít metodu `map()`. Dostaneme tak nové pole se zdvojnásobenými čísly. To si můžeme uložit do proměnné. Pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const doubledArray = myArray.map((item) => item * 2);

console.log(doubledArray);
```

[[[ excs Cvičení: Funkcionální zpracování dat

- jednohubky2
- ukolnicek
  ]]]
