## Ternární operátor

V této lekci se vrátíme k JSX a rozšíříme si paletu možnosti, které můžeme použít k vytváření obsahu stránky. Nejprve si ukážeme takzvaný :term{cs="ternární operátor" en="ternary operator"}, který umožňuje přímo do JSX vkládat podmínky.

Ternární operátor však není věc, která by pocházela z JSX. Je to naopak běžná součást čistého JavaScriptu. Představte si situaci, kdy chceme uživateli zobrazit jednoduchou zprávu podle jeho věku.

```js
let message = null;
if (age >= 18) {
  message = 'Smíš vstoupit';
} else {
  message = 'Utíkej za mamkou';
}
```

Tato podmínka vypadá velmi přímočaře. Má však určité nevýhody.

1. Jde o celkem dlouhý kód pro velmi jednoduchou věc.
1. Musíme požívat proměnnou `let`, čemuž se snažíme co nejvíce vyhýbat.

Ternární operátor nám umožňuje tuto podmínku zapsat mnohem jednodušeji.

```js
const message = age >= 18 ? 'Smíš vstoupit' : 'Utíkej za mamkou';
```

Tento operátor se dá použít vždy, když chceme do nějaké proměnné uložit různé hodnoty na základně nějaké podmínky.

V JSX se nám tento operátor bude hodit ve více situacích. První z nich je situace, kdy chceme zkonstruovat název CSS třídy podle nějaké podmínky. Vezměme například položku nákupního seznamu napsanou jako komponentu.

```jsx
const ShopItem = (props) => {
  const { name, amount } = props;

  return (
    <div className="shopitem">
      <button className="btn-tick" />
      <div className="shopitem__name">${name}</div>
      <div className="shopitem__amount">${amount}</div>
      <button className="btn-delete">Smazat</button>
    </div>
  );
};
```

V této verzi komponenty nám zatím chybí možnost označit položku jako koupenou. Předáme tedy komponentě novou `prop` s názvem `bought` a použijeme ji takto.

```js
<ShopItem namne="jablka" amount="1 kg" bought={true} />
```

Možná si ještě vzpomenete, že zaškrtnutí položky jsme dělali pomocí CSS třídy `btn-tick--on`. Vybraná položka by tak měla mít atribut `className` nastaven takto.

```js
<div className="btn-tick btn-tick--on">
```

Obsah atributu `className` chceme zkonstruovat dle hodnoty `props.bought`. To bychom mohli udělat pomocí podmínky.

```js
const ShopItem = (props) => {
  const { name, amount, bought } = props;

  let tickClass = 'btn-tick';
  if (bought) {
    tickClass += ' btn-tick--on';
  }

  return (
    <div className="shopitem">
      <button className={tickClass} />
      <div className="shopitem__name">${name}</div>
      <div className="shopitem__amount">${amount}</div>
      <button className="btn-delete">Smazat</button>
    </div>
  );
};
```

Díky podmíněnému operátoru si ovšem situaci můžeme zjednodušit takto.

```js
const ShopItem = (props) => {
  const { name, amount, bought } = props;

  const tickClass = bought ? 'btn-tick btn-tick--on' : 'btn-tick';

  return (
    <div className="shopitem">
      <button className={tickClass} />
      <div className="shopitem__name">${name}</div>
      <div className="shopitem__amount">${amount}</div>
      <button className="btn-delete">Smazat</button>
    </div>
  );
};
```

Dokonce bychom hodnotu ani nemuseli ukládat do proměnné a použít podmíněný operátor přímo na místě.

```js
const ShopItem = (props) => {
  const { name, amount, bought } = props;

  return (
    <div className="shopitem">
      <button className={bought ? 'btn-tick btn-tick--on' : 'btn-tick'} />
      <div className="shopitem__name">${name}</div>
      <div className="shopitem__amount">${amount}</div>
      <button className="btn-delete">Smazat</button>
    </div>
  );
};
```

```

Takovýto kód už však může být hůře čitelný, takže je dobré jej používat s mírou a uvážením.
```
