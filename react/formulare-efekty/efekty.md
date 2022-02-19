## Efekty

V mírně komplikovanějších React aplikacích brzy narazíme na potřebu zareagovat na určité situace, které nastávají během vykreslování (renderování) komponenty. Budeme chtít například spustit nějaký kód ve chvíli, kdy se komponenta poprvé objeví na stránce. Čas od času také budeme chtít v komponentě provést něco ve chvíli, kdy se změní hodnota v props nebo ve stavu. K tomuto nám v Reactu slouží takzvané <term cs="efekty" en="effects" />.

Efekty jsou v podstatě velmi podobné událostem. Ve chvíli, kdy uvnitř komponenty něco nastane, budeme chtít zavolat naši funkci. Jako příklad si vyrobíme jednoduchou aplikaci, která řiká, kdo má zrovna svátek.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Jiří</div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
```

Pokud bychom chtěli spustit kousek kódu ve chvíli, kdy se naše komponenta `App` objeví na stránce, použijeme funkci `useEffect` a té předáme námi vytvořenou funkci.

```js
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  useEffect(() => console.log('jsem tady'), []);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má Jiří</div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
```

Funkce `useEffect` má dva parametry. Prvním je funkce, která se má zavolat a druhý parametr říká, za jakých okolností se má naše funkce volat. Prázdné pole `[]` znamená, že se efekt spustí pouze ve chvíli, kdy se komponenta poprvé objeví na stránce.
