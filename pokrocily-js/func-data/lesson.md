## Funkcionální zpracování dat

Když při programování aplikací používáme cykly, brzy narazíme na často se opakující situace a konstrukce. Pro tyto situace máme na polích pomocné metody z funkcionálního světa.

### Vynechání returnu

Pokud arrow fuknce pouze něco vrací na jednom řádku, je možné vynechat složené závorky a klíčové slovo `return`. Fuknce, která nám po zavolání vrátí řetězec s pozdravem bude fungovat v obou případech.

```js
const greet = (name) => {
  return `Hi, ${name}`;
};

const greet2 = (name) => `Hi, ${name}`;

console.log(greet());
console.log(greet2());
```

### Metoda forEach()

Metoda `forEach()` nám nahrazuje `for` cyklus. Stejně jako `for` cyklus nám metoda nic nevrací.  
Do proměnné si uložíme pole čísel.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
```

Pomocí for cyklu si můžeme všechny položky vypsat do konzole:

```js
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

### metoda some()

Metoda `some()` nám vrací informaci o tom, zda alespoň jedna položka pole odpovídá naší podmínce. Řekněme si, že chceme zjistit, zda je alespoň jedno číslo v našem poli větší než deset. Můžeme si na to napsat cyklus, ale metoda `some()`, nám usnadní práci. Jako parametr metoda bere opět funkci, ve které se ptáme na podmínku. Funkce potom podmínku zkrontoluje pro každou položku pole a vrátí nám `true` nebo `false`, podle toho, zda alespoň jedna položka v poli naši podmínku splňuje. Výsledek metody si můžeme uložit do proměnné.

```js
const biggerThanTen = myArray.some((item) => item > 10);

console.log(biggerThanTen);
```

### metoda every()

Metoda `every()` je podobná metodě `some()` v tom, že nám také vrací bool. Metoda `every()` nám však vrátí `true`, pouze pokud všechny položky pole splňují naši podmínku.
Pokud bychom se chtěli ujistit, že všechna čísla v poli jsou kladná, tedy větší než nula, můžeme použít metodu `every()`.

```js
const allPositive = myArray.every((item) => item > 0);

console.log(allPositive);
```

[[[ excs Cvičení: Funkcionální zpracování dat

- jednohubky1
  ]]]

### metoda filter()

U metody `filter()` vidíme ve funkci také podmínku. Tato metoda nám však nevrací `bool`, nýbrž nové pole. Toto nové obsahuje pouze ty položky, které podmínku splnily.
Pokud bych chtěla z pole `myArray` získat pouze čísla dělitelná třemi, použiju metodu `filter()`. Získám tak nové pole, které obsahuje jen čísla dělitelná třemi. To si můžu uložit do proménné. Naše původní pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const filteredArray = myArray.filter((item) => item % 3 === 0);

console.log(filteredArray);
```

### metoda map()

Metodu `map()` použijeme především, pokud potřebujeme položky pole pozměnit, nebo z nich něco vytvořit. Metoda bere jako parametr opět fuknci. Tuto fuknci zavolá na každé položce pole a výsledek volání uloží do nově vytvořeného pole. Toto nové pole nám potom vrátí.  
Pokud bych chtěla každé číslo v našem poli `myArray` vynásobit dvěma, můžu použít metodu `map()`. Dostanu tak nové pole se zdvojnásobenými čísly. To si můžu uložit do proměnné. Naše původní pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const doubledArray = myArray.map((item) => item * 2);

console.log(doubledArray);
```

[[[ excs Cvičení: Funkcionální zpracování dat

- jednohubky2
- ukolnicek
  ]]]
