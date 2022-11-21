---
title: Odhlášení uživatele
demand: 2
---

V rámci tohoto cvičení si založíme projekt na supabase a vyzkoušíme si, jak přihlášeného uživatele odhlásit.

1. Udělejte si fork tohoto [repozitáře](https://github.com/Czechitas-podklady-WEB/supabase-shopping-list), vzniklý fork naklonujte k sobě do počítače a nainstalujte závislosti, projekt zatím nespouštějte
1. Zaregistrujete se na supabase
1. Dle popisu v první části lekce si založte nový projekt
1. V souboru **functions/supabase.js** nastavte hodnoty SUPABASE_URL a SUPABASE_KEY pro váš projekt
1. Vypněte odesílání potvrzovacího emailu dle popisu v lekci
1. Spusťte projekt pomocí `npm run start`, přejděte na stránku s registrací a zkuste zaregistrovat nového uživatele
1. Pokud vše proběhlo v pořádku, měl by být uživatel přihlášen. V hlavičce stránky uvidíte emailovou adresu uživatele a tlačítko **Odhlásit**
1. Na tlačítko **Odhlásit** přidejte posluchač na událost click, po tomto kliknutí zajistěte odhlášení uživatele a jeho přesměrování na stránku s přihlášením. (funkce pro odhlášení je již připravena v souboru `functions/auth.js`)
1. Pokud ti zbyl čas, můžeš se podívat do komponenty `LoginPage`, jak je implementováno přihlašování uživatele a na stránce vyzkoušet, zda přihlášení v pořádku funguje.

---solution

Soubor `Header/index.js`:

```js
import { signOut } from '../functions/auth';
import './style.css';

export const Header = (props) => {
  const { session } = props;

  let userContent = `
    <nav>
      <a href="/register">Registrovat</a>
      <a href="/login">Přihlásit</a>
    </nav>
  `;

  if (session) {
    userContent = `<div>${session.user.email}<button class="btn-logout">Odhlásit</button></div>`;
  }

  const element = document.createElement('header');
  element.innerHTML = `
    <div class="container">  
      <nav>
        <a href="/">Domů</a>  
      </nav>
      <div class="user">
        ${userContent}
      </div>
    </div>
  `;

  const logoutButton = element.querySelector('.btn-logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      signOut().then((response) => {
        if (!response.error) {
          window.location.href = '/login';
        }
      });
    });
  }

  return element;
};
```
