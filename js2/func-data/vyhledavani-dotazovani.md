## Vyhledávání a dotazování

Z předchozích kurzů jste již zvyklí na metodu `forEach`, která jako svůj parametr obdrží funkci a tato funkce se pak spustí na každém prvku pole.

```js
const names = [
  'petr',
  'pavel',
  'jana',
  'eva',
  'jan',
  'veronika',
  'pravdoslava',
];

names.forEach((name) => console.log(name));
```

Metody pro vyhledávání a dotazování fungují na stejném principu. Vždy obdrží jako parametr nějakou funkci, kterou poté spouští nad každým prvkem pole.

### Metody `find` a `findIndex`

Pokud chceme v poli vyhledat **první hodnotu**, která splňuje nějaká kritéria, použijeme metodu `find` nebo `findIndex`.

Metoda `find` vrátí přímo nalazený prvek nebo `undefined`, pokud žádná hodnota vyhledávací kritérium nesplňuje.

```js
> names.find((name) => name === 'jana');
'jana'
> names.find((name) => name === 'roman');
undefined
```

Pokud bychom chtěli místo hodnoty její index, použijeme metodu `findIndex`. V případě, že tato metoda prvek nenajde, vrací -1.

```js
> names.findIndex((name) => name === 'jana');
2
> names.findIndex((name) => name === 'roman');
-1
```

### Pole objektů

Naše data samozřejmě mohou mít složitější strukturu. Jedním z nejčastějších formátů, v jakém budeme data získávat a zobrazovat, je pole objektů. Proto je dobré si hned od začátku zvyknout na používání metod na polích, které obsahují objekty.

V proměnné `weather` máme pro příklad uložena data o počasí za posledních 5 dní. Pro každý den máme

- datum jako string,
- odpolední, večerní a noční temploty jako pole čísel (ve stupních Celsia),
- dešťové srážky jako číslo (v milimetrech),
- sluneční podmínky jako string.

```js
const weather = [
  {
    date: '03.10.2022',
    temps: [12, 12, 8],
    rain: 4.1,
    sunlight: 'partly-cloudy',
  },
  {
    date: '04.10.2022',
    temps: [14, 13, 11],
    rain: 0,
    sunlight: 'sunny',
  },
  {
    date: '05.10.2022',
    temps: [17, 15, 10],
    rain: 1.2,
    sunlight: 'partly-cloudy',
  },
  {
    date: '06.10.2022',
    temps: [20, 18, 14],
    rain: 10.5,
    sunlight: 'cloudy',
  },
  {
    date: '07.10.2022',
    temps: [21, 18, 16],
    rain: 12.4,
    sunlight: 'cloudy',
  },
];
```

Můžeme zkusit najit první den, kdy bylo zataženo:

```js
> weather.find((day) => day.sunlight === 'cloudy');
{
  date: '06.10.2022',
  temps: [20, 18, 14],
  rain: 10.5,
  sunlight: 'cloudy',
},
```

### Metody `some` a `every`

Metoda `some` jako parametr bere funkci vracející boolean. Vrací pak `true` nebo `false` podle toho, zda předaná funkce alespoň na jednom prvku pole vrátila `true`.

Zkusme zjistit, zda máme v poli `names` nějaká čtyřpísmenná jména.

```js
> names.some((name) => name.length === 4);
true
```

Můžeme také ověřit zda například bude alespoň jeden svítilo slunce.

```js
> weather.some((day) => day.sunlight === 'sunny');
true
```

Metoda `every` je podobná metodě `some` v tom, že také vrací pravdivostní hodnotu. Vrátí však `true` pouze pokud **všechny** položky pole splňují zadanou podmínku.

Zkusme zjistit, zda jsou všechna jména kratší než pět znaků.

```js
> names.every((name) => name.length < 5);
false
```

Zjistíme také, zda náhodou nebylo pořád zataženo.

```js
> weather.every((day) => day.sunlight === 'cloudy');
false
```
