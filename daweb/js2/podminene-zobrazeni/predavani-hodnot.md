## Předávání hodnot pomocí props

Všimněte si, jak jsme v předchozí sekci použili naši komponentu `ShopItem` a jak jsme jí předali prop `bought`.

```js
<ShopItem name="jablka" amount="1 kg" bought={true} />
```

Někoho by mohlo lákat předat hodnotu `true` takto

```js
<ShopItem name="jablka" amount="1 kg" bought="true" />
```

ve vlastnosti `props.bought` uvnitř komponenty bychom pak ale měli řetězec `'true'`, nikoliv pravdivostní hodnotu `true`. Pokud totiž předáváme hodnoty do props pomocí uvozovek, jak jsme zvyklí z HTML, uvnitř komponenty vždy obdržíme tyto hodnoty jako řetězce. Pokud chceme skutečnou boolean hodnotu `true` nebo `false`, musíme si pomocí složených závorek otevřít JavaScriptové okénko. Toto platí i pro ostatní hodnoty. Pokud chceme předat pomocí props číslo, nebo třeba `null`, provedeme to opět pomocí složených závorek.

```js
<ShopItem name="jablka" amount={3} bought={true} />
```

Malinko nepřehledná situace nastane, pokud takto předáváme objekty, protože pak máme vedle sebe dvě složené závorky, kde každá znamená něco jiného.

```js
<ShopItem name="jablka" amount={{ value: 3, unit: 'kg' }} bought={true} />
```

Vnější pár složených závorek otvírá JavaScript okénko uvnitř JSX a vnitřní pár vytváří objekt.
