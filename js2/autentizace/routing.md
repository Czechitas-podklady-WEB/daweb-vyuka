## Routing na klientu

Do naší aplikace s nákupními seznamy, kterou už několik lekcí stále vylepšujeme, bychom chtěli přidat možnost registrace a přihlášení. K tomu však potřebujeme, abychom se v aplikaci mohli pomocí navigace přepínat mezi různými stránkami, jako je formulář pro registraci nebo přihlášení. 

Hlavní `index.html`:
```html
<body>
  <div id="app"></div>
</body>
```

Hlavní `index.js`:

```js
import { Header } from './Header/index.js';
import { HomePage } from './HomePage/index.js';
import { LoginPage } from './LoginPage/index.js';
import { RegisterPage } from './RegisterPage/index.js';
import './style.css';

document.querySelector('#app').append(Header());

window.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app');
  
  const { pathname } = window.location;
  console.log(pathname);
  if (pathname === '/') {
    appElement.append(HomePage());
  } else if (pathname === '/login') {
    appElement.append(LoginPage());
  } else if (pathname === '/register') {
    appElement.append(RegisterPage());
  }
});
```

Komponenta `Header`:

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

Celý projekt najdete ve větvi [routing](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/routing) repozitáře s naší aplikací.
