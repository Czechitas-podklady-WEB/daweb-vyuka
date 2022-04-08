## Props

V praxi není problém psát naše komponenty tak jako výše. V Reactu však platí konvence, že vstupní objekt komponenty se vždy jmenuje `props`. Je to podobný princip, jako když parametr v posluchači události pojmenováváme `event`, i když JavaScriptu je úplně jedno, jaký název si zvolíme. 

Abychom se při přechodu na React nemuseli nic přeučovat, budeme naše komponenty psát Reactovým způsobem již nyní. Naše komponenta `ShoppingItem` by pak vypadala takto:

```js
const ShoppingItem = (props) => {
  let yesNo = 'NE';
  if (props.bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${props.product}</div>
      <div class="item__amount">${props.amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

U delších komponent se nám velmi hodí destrukturovat objekt `props` do separátnich proměnných, abychom jej při konstrukci HTML nemuseli pořád opakovat. Komponenta pak bude vypadat takto. 

```js
const ShoppingItem = (props) => {
  const { bought, product, amount } = props;
  
  let yesNo = 'NE';
  if (bought) {
    yesNo = 'ANO';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <div class="item__bought">${yesNo}</div>
    </li>
  `
};
```

Abychom si na tento způsob zvykli, budeme jej používat úplně ve všech komponentách.