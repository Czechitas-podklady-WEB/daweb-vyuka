## Agregace a řetězení

Agregaci provádíme ve chvíli, kdy data nějakým způsobem slučujeme dohromady. Budeme k tomu používat metody `join` a `flat`.

### Metoda `join`

Metoda `join` spojí všechny prvky pole za sebe jako řetězce a vloží mezi ně čárky.

```js
> [1, 2, 3].join()
'1,2,3'
```

Oddělovací řetezec si můžeme zvolit

```js
> [1, 2, 3].join('-')
'1-2-3'
> [1, 2, 3].join('...')
'1...2...3'
> [1, 2, 3].join('')
'123'
```

### Řetězení

Jelikož funkce `map` a `filter` vracejí pole, můžeme na výsledném poli použít nějakou další metodu pro zpracování dat. Takto za sebe můžeme řetězit mnoho metod a sestavit tak nějakou složitější operaci.

Pojďme například z pole `names` vybrat všechna jména začínající na "p", převést je na velká písmena a spojit do jednoho dlouhého řetězce.

```js
names
  .filter((name) => name[0] === 'p')
  .map((name) => name.toUpperCase())
  .join('');

// 'PETRPAVELPRAVDOSLAVA'
```

Tento příklad může působit dětinsky. V praxi se nám však tento postup velmi hodí ke generování obsahu stránky.
