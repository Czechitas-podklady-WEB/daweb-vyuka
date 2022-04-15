## React Router

Neexistuje žádný magický přepínač, kterým bychom rozhodli, jestli z aplikace uděláme SPA nebo ne. Takovou funkcionalitu někdo musel nejdříve vymyslet, implementovat a následně aktivně používat v kódu. Naštěstí žijeme v krásné době, kde je taková implementace hotová a připravená k použití. K práci s navigací v našich React aplikacích budeme používat knihovnu [React Router](https://reactrouter.com/web/guides/quick-start). Nainstalujeme si ji jako závislost přes npm a následně z ní můžeme používat připravené komponenty přímo v našem kódu.

### Instalace a používání knihovny

Do existujícího projektu můžeme nainstalovat React Router knihovnu přest terminál pomocí npm.

```sh
npm install react-router-dom
```

Nyní máme v projektu k dispozici celou škálu komponent, se kterými můzeme pracovat. Stačí si je správně naimportovat a použít jako kteroukoliv jinou komponentu.

```js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Users = () => {
  return <h2>Users</h2>;
};

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
```
