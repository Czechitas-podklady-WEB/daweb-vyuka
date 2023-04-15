## Transformace

Transformace dat zahrnuje takzvané filtrování a mapování. Tyto operace patří mezi nejpoužívanější funkce pro zpracování dat.

### Metoda `filter`

Metoda `filter` bere jako parametr podmínku (funkci vracející `boolean`) podobně jako metody `some` nebo `every`. Nevrací však `boolean`, nýbrž nové pole. Toto nové pole obsahuje pouze ty položky, které danou podmínku splnily.

Zkusme například vybrat jen ta jména, která začínají na písmeno "p".

```js
> names.filter((name) => name[0] === 'p')
['petr', 'pavel', 'pravdoslava']
```

Ze záznamů o počasí vybereme jen ty dny, ve kterých byl slabý nebo žádný déšť, tedy méně než 5 mm srážek.

```js
> weather.filter((day) => day.rain < 5)
[
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
]
```

### Metoda `map`

Metodu `map` použijeme ve chvíli, kdy potřebujeme jednotlivé položky pole nějak pozměnit či přetvořit. Metoda `map` opět bere jako parametr funkci, kterou zavolá na každé položce pole. Výsledky této funkce pak posbírá do nově vytvořeného pole. Původní pole tak zůstane netknuté.

Převeďme například všechna jména na velká písmena:

```js
> names.map((name) => name.toUpperCase())
[ 'PETR', 'PAVEL', 'JANA', 'EVA', 'JAN', 'VERONIKA', 'PRAVDOSLAVA' ]
```

Můžeme také třeba z našeho počasí vyrobit pole obsahujuící pouze jednotlivá data:

```js
> weather.map((day) => day.date)
[
  '03.10.2022',
  '04.10.2022',
  '05.10.2022',
  '06.10.2022',
  '07.10.2022'
]
```

Transformace může být samozřejmě složitější. Vyrobme například pro každý den objekt obsahující datum a průměrnou teplotu:

```js
weather.map((day) => ({
  date: day.date,
  avgTemp: (day.temps[0] + day.temps[1] + day.temps[2]) / 3,
});
```

Pokud bám takto zkrácená funkce přijde nečitelná, můžete ji rozepsat do nazkrácené podoby:

```js
weather.map((day) => {
  const avgTemp = (day.temps[0] + day.temps[1] + day.temps[2]) / 3;

  return {
    date: day.date,
    avgTemp: avgTemp,
  };
});
```
