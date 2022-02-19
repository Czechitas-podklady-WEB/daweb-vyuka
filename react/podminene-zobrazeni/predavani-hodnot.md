## Předávání hodnot pomocí props

Všimněte si, jak jsme použili naši komponentu `ShoppingItem` a jak jsme jí předali prop `selected`.

```js
<ShoppingItem name="jablka" amount="1 kg" selected={true} />
```

Kdybychom to udělali takto

```js
<ShoppingItem name="jablka" amount="1 kg" selected="true" />
```

ve vlastnosti `props.selected` uvnitř komponenty bychom měli řetězec `'true'`. Pokud totiž předáváme hodnoty pro props pomocí uvozovek jako jsme zvyklí z HTML, uvnitř komponenty vždy obdržíme tyto hodnoty jako řetězce. Pokud chceme skutečnou boolean hodnotu `true` nebo `false`, musíme si pomocí složených závorek otevřít JavaScriptové okénko. Toto platí i pro ostatní hodnoty. Pokud chceme předat pomocí props číslo, provedeme to opět pomocí složených závorek.

```js
<ShoppingItem name="jablka" amount={3} selected="true" />
```

Malinko nepřehledná situace nastane, pokud takto předáváme objekty, protože pak máme vedle sebe dvě složené závorky, kde každá znamená něco jiného.

```js
<ShoppingItem name="jablka" amount={{ value: 3, unit: 'kg' }} selected="true" />
```

Vnější pár složených závorek otvírá JavaScript okénko uvnitř JSX a vnitřní pár vytváří objekt. Tento styl zápisu potkáme v druhé části lekce, kdy budeme nastavovat naším komponentám CSS styly.

### Předávání hodnoty true

Poslední trik, kterým si ulehčujeme práci možná znáte již z HTML. Pokud chceme nějaké prop nastavit hodnotu `true` jako v tomto kódu

```js
<ShoppingItem name="jablka" amount="1 kg" selected={true} />
```

stačí napsat pouze název dané prop a React už si domyslí, že do ní chceme vložit hodnotu `true`. Můžeme pak psát prostě

```js
<ShoppingItem name="jablka" amount="1 kg" selected />
```
