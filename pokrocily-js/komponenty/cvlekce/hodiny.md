---
title: Hodiny
demand: 2
---

Naklonuje si [repozitář](https://github.com/Czechitas-podklady-WEB/hodiny-zadani) se stránku zobrazující digitální hodiny. Následujte instrukce níže.

1. Vytvořte komponentu `Clock`, která bude na vstupu očekávat takovýto objekt:
   ```js
   {
     hours: 12,
     minutes: 34,
   }
   ```
   Komponenta nechť z takového objektu vytvoří HTML pro jedny hodiny. Jak má vypadat HTML hodin najdete v souboru `index.html`.
1. HTML kód hodin ze stránky vyjměte a nechte v ní pouze element `app`.
1. Ve vašem programu vyberte element `app` a pomocí komponenty `Clock` do něj zapojte hodiny zobrazující nějaký čas.
1. Zkuste pomocí funkce `Clock` vložit do stránky několik různých hodin pod sebe.
1. Zkuste vyrobit pole hodin a zobrazit je pomocí cyklu na stránce.

---solution

## `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <script type="module" src="index.js"></script>
  <title>Hodiny</title>
</head>
<body>
  <div id="app">
</body>
</html>
```

## `index.js`

```js
const times = [
  {
    hours: 12,
    minutes: 34,
  },
  {
    hours: 5,
    minutes: 23,
  },
  {
    hours: 17,
    minutes: 18,
  },
];

const Clock = (props) => {
  const { hours, minutes } = props;

  return `
    <div class="clock">
      <span class="clock__hours">${hours}</span>:<span class="clock__minutes">${minutes}</span>
    </div>
  `;
};

// const appElm = document.querySelector('#app');
// appElm.innerHTML += Clock(time1);

const appElm = document.querySelector('#app');
for (let i = 0; i < times.length; i += 1) {
  appElm.innerHTML += Clock(times[i]);
}
```
