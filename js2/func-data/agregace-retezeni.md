## Agregace a řetězení

Agregaci provádíme ve chvíli, kdy data nějakám způsobem slučujeme dohromady. Budeme k tomu používat metody `join` a `flat`. 

### Metoda `join`

Metoda `join` spojí všechny prvky pole za sebe jako řetězce a vloží mezi ně čárky.

```js
> [1, 2, 3].join()
'1,2,3'
```

Oddělovací řetezec si můžeme vybrat

```js
> [1, 2, 3].join('-')
'1-2-3'
> [1, 2, 3].join('...')
'1...2...3'
> [1, 2, 3].join('')
'123'
```

### Řetězení

Jelikož funkce `map` a `filter` vracejí pole, můžene na výsledném pole použít nějakou další metodu pro zpracování dat. Tako za sebe můžeme řetězit mnoho metod a sestavit tak nějakou sožitější operaci. 

Pojďme například z pole `names` vybrat všechna jména začínající na "p", převést je na velká písmena a spojit do jednoho dlouhého řetězce.

```js
names
  .filter((name) => name[0] === 'p')
  .map((name) => name.toUpperCase())
  .join('');

// 'PETRPAVELPRAVDOSLAVA'
```

Tento příklad může působit dětinsky. V praxi se nám však tento postup velmi hodí ke generování obsahu stránky. 
