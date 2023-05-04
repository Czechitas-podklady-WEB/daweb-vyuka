---
title: Hodiny
demand: 2
---

Vytvořte si repozitář ze šablony [cviceni-hodiny](https://github.com/Czechitas-podklady-WEB/cviceni-hodiny) se stránkou zobrazující digitální hodiny. Následujte instrukce níže.

1. Vytvořte komponentu `Clock`, která bude na vstupu očekávat takovýto objekt:
   ```js
   {
     hours: 12,
     minutes: 34,
   }
   ```
   Komponenta nechť z takového objektu vytvoří HTML pro jedny hodiny. Jak má vypadat HTML hodin, najdete v souboru `index.html`.
1. HTML kód hodin ze stránky vyjměte a nechte v ní pouze element `app`.
1. Ve vašem programu vyberte element `app` a pomocí komponenty `Clock` do něj zapojte hodiny zobrazující nějaký čas.
1. Pomocí funkce `Clock` vložte do stránky pod sebe několik různých hodin s různými časy.
1. Vyrobte pole hodin a zobrazte je pomocí cyklu na stránce.
1. Zajistěte, aby hodiny vždy zobrazovaly čas dvouciferně, tedy aby například pro čas
   ```js
   {
     hours: 8,
     minutes: 5,
   }
   ```
   zobrazily čas _08:05_.

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
    <div id="app"></div>
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
    minutes: 8,
  },
];

const Clock = (props) => {
  const { hours, minutes } = props;
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');

  return `
    <div class="clock">
      <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
    </div>
  `;
};

const appElm = document.querySelector('#app');
appElm.innerHTML = times.map((time) => Clock(time)).join('');
```
