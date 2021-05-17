Webové aplikace o více stránkách jsou v dnešní době standard. Představte si muzeum s jedním jediným obrazem - pořád to může být dechberoucí zážitek, ale omrzí výrazně rychleji. Jednostránkové weby rozhodně mají své místo, dnes se však naučíme způsob, jak naši aplikaci rozšířit o další stránky a posunout ji na vyšší úroveň.

## Single-page application (SPA)

Je typ aplikace, u které se obsah stránky mění dynamicky za jejího běhu, aniž by bylo třeba přenačítat celou stránku znovu. Výhodou je rychlejší a hladší navigace stránkou - uživatel nemusí čekat na načítaní každé jednotlivé podstránky. Další plus je snížená zátěž na server, protože místo odpovědi pro každou navštívenou stránku stačí uživateli odpovědět jen jednou a o navigaci se postará jeho prohlížeč. SPA mají i své nevýhody - například horší možnosti SEO optimalizace, ale to už je nad rámec této lekce.

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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}

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

[[[ excs Cvičení: React Router
- navigace
]]]

## Dynamické detaily stránek

Jsou weby, kde si vystačíme s pár stránkami - Domovská stránka, O nás, Kontakt. Tyhle tři stránky si nachystáme v kódu, nastylujeme a máme hotovo. Jednou za pár let možná upravíme naši adresu nebo telefonní číslo.
Co ale takové blogy? Zpravodajské weby? Profily na Facebooku?! Takových článků a uživatelů jsou tisíce, miliony! Potřebujeme kódit komponentu pro každou novinku ze světa, pro každý profil? Naštěstí ne. Stačí nám jedna komponenta, např. `UserProfile.jsx`, která si dynamicky vyhmátne uživatele a do předpřipravené šablony vyplní jeho data z databáze. Jak ale naše aplikace pozná, kterého uživatele má zobrazit? K tomu nám pomáhají URL parametry.

### URL parametry

URL parametry umí předávat dodatečné informace v adrese webu. Jsou tvořeny párem klíč a hodnota, ve formátu `klic=hodnota` a jednotlivé parametry se oddělují `&`. První parametr vždy začíná po symbolu otazníku v URL.

```sh
http://example.com?product=1234&utm_source=google
```

Právě v nich se dá najít informace, o jaký produkt, o jakého uživatele nebo o jaký článek se jedná. Pojďme se podívat, jak s nimi můžeme pracovat v React Routeru.

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const ParamsExample = () => {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

const Child = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
```