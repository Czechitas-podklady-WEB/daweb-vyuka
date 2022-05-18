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
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

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
};

const Child = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};
```
