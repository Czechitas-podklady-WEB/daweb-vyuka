## Routing na klientu

Do naší aplikace s nákupními seznamy, kterou už několik lekcí stále vylepšujeme, bychom chtěli přidat možnost registrace a přihlášení. K tomu však potřebujeme, abychom se v aplikaci mohli pomocí navigace přepínat mezi různými stránkami, jako je formulář pro registraci nebo přihlášení.

Abychom dosáhli káženého cíle, bude potřeba vytvořit několik komponent. Konečně už naše aplikace nebude zakrslík jen se dvěma komponentami.

Nejprve vytvoříme komponentu pro hlavičku naší stránky.

```js
import './style.css';

export const Header = () => {
  const element = document.createElement('header');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <div class="container">  
      <nav>
        <a href="/">Domů</a>  
      </nav>
      <div class="user">
        <nav>
          <a href="/register">Registrovat</a>
          <a href="/login">Přihlásit</a>
        </nav>
      </div>
    </div>
  `;

  return element;
};
```

Poté budeme potřebovat komponentu pro každou stránku naší aplikace, tedy `HomePage`, `RegisterPage` a `LoginPage`.

Abychom se ve struktuře všech komponent v aplikaci vyznali, zařídíme, aby celá naše aplikace byla jedna velká komponenta. V souboru `index.html` tak v prvku `body` nezbude už vůbec žádný obsah.

Vytvoříme komponentu `App`.

```js
import { Header } from '../Header/index.js';
import { HomePage } from '../HomePage/index.js';
import { LoginPage } from '../LoginPage/index.js';
import { RegisterPage } from '../RegisterPage/index.js';

export const App = () => {
  const element = document.createElement('div');
  element.classList.add('app');
  element.append(Header());

  const { pathname } = window.location;
  if (pathname === '/') {
    element.append(HomePage());
  } else if (pathname === '/login') {
    element.append(LoginPage());
  } else if (pathname === '/register') {
    element.append(RegisterPage());
  }

  return element;
};
```

Celý projekt najdete ve větvi [routing](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/routing) repozitáře s naší aplikací.
