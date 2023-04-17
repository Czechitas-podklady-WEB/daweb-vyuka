## Props

V praxi není problém psát naše komponenty tak jako v předchozí kapitole. V Reactu však platí konvence, že vstupní objekt komponenty se vždy jmenuje `props`. Je to podobný princip, jako když parametr v posluchači události pojmenováváme `event`, i když JavaScriptu je úplně jedno, jaký název si zvolíme.

Abychom se při přechodu na React nemuseli nic přeučovat, budeme naše komponenty psát Reactovým způsobem již nyní. Naše komponenta `ListItem` by pak vypadala takto:

```js
const ListItem = (props) => {
  let tickClass = '';
  if (props.done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__product">${props.product}</div>
      <div class="list-item__amount">${props.amount} ${props.unit}</div>
    </div>
  `;
};
```

U větších komponent se nám velmi hodí destrukturovat objekt `props` do separátnich proměnných, abychom jej při konstrukci HTML nemuseli pořád opakovat. Komponenta pak bude vypadat takto:

```js
const ListItem = (props) => {
  const { done, product, amount, unit } = props;

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__product">${product}</div>
      <div class="list-item__amount">${amount} ${unit}</div>
    </div>
  `;
};
```

Abychom si na tento způsob zvykli, budeme jej nadále používat úplně ve všech komponentách.
