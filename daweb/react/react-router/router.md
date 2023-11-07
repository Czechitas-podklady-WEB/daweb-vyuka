## React Router

Většina vývojářů v Reactu používá na client-side routing knihovnu, která se jmenuje přiléhavě [React Router](https://reactrouter.com/). Nainstalovat si ji můžete jako závislost přes _npm_ a následně z ní můžeme používat připravené komponenty přímo v našem kódu.

Do existujícího projektu můžeme nainstalovat React Router knihovnu přest terminál pomocí _npm_.

```sh
npm install react-router-dom
```

Nyní máme v projektu k dispozici celou škálu komponent, se kterými můzeme pracovat. Stačí si je správně naimportovat a použít jako kteroukoliv jinou komponentu.

Vytvořme pro začátek kostru webové aplikace pro vedení účetnictví. Stránky zatím pro rychlost vložíme přímo do hlavního souboru `index.jsx`. Později je samozřejmě přesuneme do samostatných složek ve složce `src/pages`.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './style.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
};

const ExpensesPage = () => {
  return (
    <main>
      <h2>Expenses</h2>
      <p>Here are your business expenses for the last month</p>
    </main>
  );
};

const InvoicesPage = () => {
  return (
    <main>
      <h2>Invoices</h2>
      <p>Here are your issued invoices for the last month</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/expenses',
    element: <ExpensesPage />,
  },
  {
    path: '/invoices',
    element: <InvoicesPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
```

Na začátku aplikace jsme vytvořili komponentu `HomePage`, která se zobrazí jako hlavní stránka. Jednotlivé odkazy pak vedou na dvě podstránky `ExpensesPage` a `InvoicesPage`.

## Komponenta `Link`

Všimněte si, že pro navigaci mezi stránkami používáme místo obyčejného prvku `<a href>` komponentu `Link`. To je velmi důležité, protože kdybychom použili normální HTML odkazy, vždy bychom tím poslali požadavek na novou stránku na server. V SPA aplikacích však server posílá vždy jednu a tutéž stránku `index.html` jako odpověd na všechny cesty v URL. Soubor `index.html` už však dávno máme načtený, takže jej nepotřebujeme znovu. Dotaz na server je zbytečný a zbytečně by způsobil refresh stránky. My naopak chceme, aby se ze serveru nic nenačítalo a přepnutí stránky se stalo pouze na frontendu v režii React Routeru.

## Routování části stránky

Naše aplikace má nevýhodu v tom, že nám při přepnutí na jednotlivé stránky zmizí navigace. Weby často fungují tak, že při přepínání mezi stránkami se zachovává například hlavička a patička. Tohoto chování docílíme pomocí tazvaných _child routes_ a komponenty `Outlet`.

Nejprve naši komponentu `HomePage` přejmenujeme na `App`. Tato komponenta bude sloužit jako kořenová komponenta naší aplikace. Náš objekt s routami pak upravíme takto:

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'expenses',
        element: <ExpensesPage />,
      },
      {
        path: 'invoices',
        element: <InvoicesPage />,
      },
    ],
  },
]);
```

Vytvořili jsme tak dva potomky naší kořenové routy. Nyní musíme routeru říct, kde na stránce má naše potomky zobrazovat. To zařídíme pomocí komponenty `Outlet`.

```jsx
const App = () => {
  return (
    <div className="container">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
};
```

Nyní už naše aplikace bude mnohem hezčí a přehlednější.
