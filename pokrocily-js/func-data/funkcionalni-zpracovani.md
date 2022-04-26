## Funkcionální zpracování dat

Když při programování aplikací používáme cykly, brzy narazíme na často se opakující situace a konstrukce. Pro tyto situace máme na polích pomocné metody z funkcionálního světa.
Jsou to metody

- `Array.forEach`
- `Array.every`
- `Array.some`
- `Array.map`
- `Array.filter`

## Vynechání returnu

Předtím, než se podíváme na samotné metody, ukážeme si, jak se dají zkrátit arrow funkce. Pokud arrow funkce pouze něco vrací na jednom řádku, je možné vynechat složené závorky a klíčové slovo `return`. Obě níže napsané funkce budou fungovat a vrátí nám řetězec s pozdravem.

```js
const greetFunction = (name) => {
  return `Hi, ${name}`;
};

const shortGreetFunction = (name) => `Hi, ${name}`;

console.log(greetFunction('Alex'));
console.log(shortGreetFunction('Alex'));
```

Dejte si ale pozor, aby kód zůstal čitelný. Pokud je funkce jasná a jednoduchá, zkrácení se vyplatí, ale není potřeba všechny funkce zkracovat na úkor čitelnosti kódu!

## Metody na polích

Na polích v javascriptu můžeme zavolat výše vypsané metody. Jak už víme, metody jsou fuknce, a ty mohou očekávat parametry. Například z metod na řetězcích víme, že metoda `slice` očekává dva parametry, odkud má výřez začínat (včetně) a kde výřez končí (vyjma).

```js
'popokatepetl'.slice(4, 7);
```

Metody na polích očekávají jeden parametr. Tímto parametrem je fuknce (tzv. callback funkce). Tato fuknce sama má také jeden parametr, a tím je jednotlivá položka pole, na kterém metodu voláme. V těle fuknce poté s touto položkou pracujeme.

Takto vypadá zápis metody `forEach`, která každou položku pole vypíše do konzole.

```js
myArray.forEach((item) => {
  console.log(item);
});
```

Ve většině případů se používá anonymní arrow funkne se zkráceným zápisem bez returnu, jako jsme viděli výše.

### Metoda forEach()

Metoda `forEach` nám nahrazuje `for` cyklus. Do proměnné si uložíme pole čísel. Pomocí for cyklu si můžeme všechny položky vypsat do konzole:

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

> 4 1 6 8 16 -3 9
```

Další možností je rovnou na daném poli zavolat metodu `forEach`. Metoda `forEach` bere jeden parametr, a to funkci. Tato funkce se zavolá na každé položce pole. Metoda `forEach` vždycky vrací `undefined`.

```js
myArray.forEach((item) => {
  console.log(item);
});

> 4 1 6 8 16 -3 9
```

### Metoda some()

Řekněme si, že chceme zjistit, zda je alespoň jedno číslo v našem poli větší než deset. Můžeme si na to napsat cyklus, ale metoda `some`, nám usnadní práci. Metoda `some` jako parametr bere funkci, ve které se ptáme na podmínku. Tato podmínka se zkontroluje pro každou položku pole a nakonec nám metoda vrátí `true` nebo `false` podle toho, zda alespoň jedna položka v poli naši podmínku splňuje. Výsledek volání metody si můžeme uložit do proměnné.

```js
const biggerThanTen = myArray.some((item) => item > 10);

console.log(biggerThanTen);

> true
```

### Metoda every()

Metoda `every` je podobná metodě `some` v tom, že nám také vrací bool. Metoda `every` nám však vrátí `true`, pouze pokud **všechny** položky pole splňují naši podmínku.
Pokud bychom chtěli zjistit, zda všechna čísla v poli jsou kladná, tedy větší než nula, můžeme použít metodu `every`.

```js
const allPositive = myArray.every((item) => item > 0);

console.log(allPositive);

> false
```

## Pole objektů

Jedním z nejčastějších formátů, v jakém budete získávat a zobrazovat data, je pole objektů. Proto je dobré si hned od začátku zvyknout na používání metod na polích, které obsahují objekty. Při používání metod na poli máme přístup k jednotlivým položkám pole, a tak je možné se dostat i ke klíčům objektů.

V proměnné `weatherForcast` je uložená předpověď počasí na následujících 5 dní. Pro každý den máme datum jako string, maximální a minimální teplotu jako číslo (ve stupních celsia) a pravděpodobnost deště jako číslo (v mm).

```js
const weatherForcast = [
  {
    date: '28.4.2022',
    high: 14,
    low: 5,
    rain: 2.1,
  },
  {
    date: '29.4.2022',
    high: 19,
    low: 3,
    rain: 0,
  },
  {
    date: '30.4.2022',
    high: 19,
    low: 8,
    rain: 0.2,
  },
  {
    date: '1.5.2022',
    high: 16,
    low: 10,
    rain: 2.5,
  },
  {
    date: '2.5.2022',
    high: 12,
    low: 8,
    rain: 2.1,
  },
];
```

Pomocí metody `forEach` můžeme do konzole vypsat datumy následujících pěti dní

```js
weatherForcast.forEach((dayForecast) => {
  console.log(dayForecast.date);
});

> "28.4.2022"
> "29.4.2022"
> "30.4.2022"
> "1.5.2022"
> "2.5.2022"
```

Případně pomocí zkráceného zápisu:

```js
weatherForcast.forEach((dayForecast) => console.log(dayForecast.date));
```

Pomocí metody `some` můžeme například zjistit, zda bude alespoň jeden den bez deště. Této metodě předáme jako parametr funkci, která pro každou položku zkontroluje, zda její vlastnost `rain` je rovna nule. Výsledek `true` nebo `false` si uložíme do proměnné `noRain` a vypíšeme do konzole.

```js
const noRain = weatherForcast.some((dayForecast) => dayForecast.rain === 0);

console.log(noRain);

> true
```
