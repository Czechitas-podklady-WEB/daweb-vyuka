## Routing na klientu

Do naší aplikace s nákupními seznamy, kterou už několik lekcí stále vylepšujeme, bychom chtěli přidat možnost registrace a přihlášení. K tomu však potřebujeme, abychom se v aplikaci mohli pomocí navigace přepínat mezi různými stránkami, jako je formulář pro registraci nebo přihlášení. 

Hlavní `index.js`:

```js
import { Header } from './Header/index.js';
import { HomePage } from './HomePage/index.js';
import { RegisterPage } from './RegisterPage/index.js';
import './style.css';

document.querySelector('#app').append(Header());

window.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app');
  const { pathname } = window.location;
  
  if (pathname === '/') {
    appElement.append(HomePage());
  } else if (pathname === '/register') {
    appElement.append(RegisterPage());
  }
});
```
