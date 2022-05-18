## React Router

Neexistuje žádný magický přepínač, kterým bychom rozhodli, jestli z aplikace uděláme SPA nebo ne. Takovou funkcionalitu někdo musel nejdříve vymyslet, implementovat a následně aktivně používat v kódu. Naštěstí žijeme v krásné době, kde je taková implementace hotová a připravená k použití. K práci s navigací v našich React aplikacích budeme používat knihovnu [React Router](https://reactrouter.com/). Nainstalujeme si ji jako závislost přes npm a následně z ní můžeme používat připravené komponenty přímo v našem kódu.

### Instalace a používání knihovny

Do existujícího projektu můžeme nainstalovat React Router knihovnu přest terminál pomocí npm.

```sh
npm install react-router-dom
```

Nyní máme v projektu k dispozici celou škálu komponent, se kterými můzeme pracovat. Stačí si je správně naimportovat a použít jako kteroukoliv jinou komponentu.

```js
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function Expenses() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Expenses</h2>
    </main>
  )
}

function Invoices() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Invoices</h2>
    </main>
  )
}

const App = () => (
  <div>
    <h1>Bookkeeper!</h1>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
    </nav>
    <Outlet />
  </div>
)

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
```
