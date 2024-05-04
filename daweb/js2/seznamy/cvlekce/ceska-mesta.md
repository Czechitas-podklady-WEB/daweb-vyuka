---
title: Česká města
demand: 2
context: lekce
lead: Zobrazte na stránce deset největších českých měst.
solutionAccess: protected
---

1. Založte si Vite/JSX projekt:

```shell
npm init kodim-app@latest cviceni-ceska-mesta jsx
```

1. Do souboru `index.jsx` vložte mimo komponentu pole s názvy deseti největších českých měst.
   ```js
   const cities = [
     'Praha',
     'Brno',
     'Ostrava',
     'Plzeň',
     'Liberec',
     'Olomouc',
     'České Budějovice',
     'Hradec Králové',
     'Ústí nad Labem',
     'Pardubice',
   ];
   ```
1. Z pole `cities` pomocí funkce `map` vyrobte pole JSX elementů. Každý JSX element nechť má následující strukturu.
   ```js
   <div className="city">Název města</div>
   ```
   Výsledné pole uložte do proměnné `cityElements`.
1. Použijte pole `cityElements` uvnitř komponenty JSX a zobrazte jej tak na vaší stránce.
1. Zbavte se proměnné `cityElements` a funkci `map` použijte přímo uvnitř komponenty JSX.
1. V konzoli si JSX bude stěžovat, že chybí `key` prop. Máme však štěstí, jména měst jsou unikátní. Můžeme tak na náš `div` přidat prop `key` a do něj poslat přímo název města.

<!-- :::solution

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

const App = () => (
  <div className="container">
    <div className="cities">
      {cities.map((city) => (
        <div key={city} className="city">
          {city}
        </div>
      ))}
    </div>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
```

::: -->
