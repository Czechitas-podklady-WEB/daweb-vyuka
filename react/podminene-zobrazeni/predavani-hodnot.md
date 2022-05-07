## Předávání hodnot pomocí props

Všimněte si, jak jsme v předchozí sekci použili naši komponentu `ShoppingItem` a jak jsme jí předali prop `done`.

```js
<ShoppingItem name="jablka" amount="1 kg" done={true} />
```

Někoho by mohlo líkat předat hodnotu `true` takto

```js
<ShoppingItem name="jablka" amount="1 kg" done="true" />
```

ve vlastnosti `props.done` uvnitř komponenty bychom pak ale měli řetězec `'true'`, nikoliv prvadivostní hodnotu `true`. Pokud totiž předáváme hodnoty do props pomocí uvozovek jako jsme zvyklí z HTML, uvnitř komponenty vždy obdržíme tyto hodnoty jako řetězce. Pokud chceme skutečnou boolean hodnotu `true` nebo `false`, musíme si pomocí složených závorek otevřít JavaScriptové okénko. Toto platí i pro ostatní hodnoty. Pokud chceme předat pomocí props číslo, nebo třeba `null`, provedeme to opět pomocí složených závorek.

```js
<ShoppingItem name="jablka" amount={3} done={true} />
```

Malinko nepřehledná situace nastane, pokud takto předáváme objekty, protože pak máme vedle sebe dvě složené závorky, kde každá znamená něco jiného.

```js
<ShoppingItem name="jablka" amount={{ value: 3, unit: 'kg' }} done={true} />
```

Vnější pár složených závorek otvírá JavaScript okénko uvnitř JSX a vnitřní pár vytváří objekt.
