## Autentizace

Nyní když máme připraveného supabase klienta, můžeme začít do naší aplikace implementovat autentizaci. V této kapitole se podíváme na registraci, přihlašování a odhlašování uživatelů.

Supabase umožňuje implementovat autentizaci pomocí velkého množství poskytovatelů. Pro náš účel bude stačit základní autentizace pomocí **Emailu** a **Hesla**. Než se pustíme do programování, tak jen trochu upravíme základní nastavení v administaci našeho projektu, aby bylo možné registrovat i fiktivní emailové adresy a nebylo nutné klikat na odkaz v emailu pro aktivaci účtu. Přejdeme do **Authentication** -> **Providers** -> **Email**. Zde deaktivujeme Položku **Confirm email** a uložíme.

::fig[Nastavení registrace]{src=assets/auth_email_settings.jpg}

Jak implementovat registraci uživatele můžeme najít v [dokumentaci](https://supabase.com/docs/reference/javascript/auth-signup). Zde narazíme na drobný problém, dokumentace supabase ukazuje práci s asynchronními funkcemi jinak, než jsme se učili v rámci našeho kurzu. Tím se ale nenecháme odradit a popíšeme si, jak můžeme kód z dokumentace používat tak, jak jsme zvyklí. V dokumentaci vidíme kód:

```js
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
```

Většina metod, se kterými budeme v rámci supabase pracovat vrací Promise (slib), který již dobře známe z funkce **fetch**. Na slibu jsme zvyklí volat metodu **then**, která přijímá funkci, která se vykoná po naplnění slibu. Výše uvedenou funkci bychom mohli tedy upravit tímto způsobem:

```js
supabase.auth
  .signUp({
    email: 'example@email.com',
    password: 'example-password',
  })
  .then((response) => {
    const { data, error } = response;
  });
```

Zkusíme si nyní funkci připravit tak, aby se nám s ní v rámci našeho projektu dobře pracovalo. Ve složce functions si vytvoříme soubor **auth.js**, do kterého budeme postupně přidávat funkce pro autentizaci uživatele. Zatím by obsah souboru mohl vypadat takto:

```js
import { getSupabase } from './supabase';

export const signUp = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signUp({ email, password });
};
```

Nejprve importujeme funkci **getSupabase**, kterou jsme si vytvořili v předchozí části. Dále vytváříme novou funkci **signUp**, která přijme email a heslo, následně pomocí supabase klienta zajistí registraci uživatele. Jelikož již víme, že výsledkem volání metody supabase.auth.signUp je promise, který z naší funkce vracíme, tak i výsledkem naší funkce bude promise.

Pokud budeme chtít naší nově vytvořenou funkci použít v rámci aplikace, mohlo by odeslání registračního formuláře vypadat následovně:

```js
element.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = element.querySelector('.email-input').value;
    const password = element.querySelector('.password-input').value;

    signUp(email, password).then((response) => {
      const { data, error } = response;

      if (error) {
        element.replaceWith(RegisterPage({ error: error.message }));
      } else {
        window.location.href = '/';
      }
    });
  });
```

Nejprve si uložíme do proměnných hodnoty ze vstupů našeho registračního formuláře, ty následně předáme naší funkci signUp, která vrací promise. Po naplnění slibu provedeme destrikturalizaci odpovědi, pokud došlo k nějaké chybě, tak překreslíme komponentu registrační stránky a předáme jí chybovou hlášku. V opačném případě byla registrace úspěšná, supabase automaticky vytvoří session a mi můžeme uživatele přesměrovat na domovskou stránku.

Implementace přihlášení a odhlášení bude fungovat velice podobně jako registrace. Pokud bychom v implementaci pokračovali dle dokumentace, náš výsledný soubor **auth.js** bude vypadat nějak takto:

```js
import { getSupabase } from './supabase';

export const signUp = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signUp({ email, password });
};

export const signIn = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signInWithPassword({ email, password });
};

export const signOut = () => {
  const supabase = getSupabase();
  return supabase.auth.signOut();
};

export const getSession = () => {
  const supabase = getSupabase();
  return supabase.auth.getSession();
};
```

Jako poslední zde vidíme funkci getSession, která je pro nás také velice důležitá. Může díky ní zjistit, zda a jaký uživatel je právě přihlášený. To se nám bude hodit vědět napříč celou naší aplikací, z toho důvodu bude nejsnazší tuto funkci využít rovnou v komponentě App a její výsledek předávat ostatním komponentám. Komponenta App, by tedy nakonec mohla vypadat takto:

```js
import { Header } from '../Header/index.js';
import { HomePage } from '../HomePage/index.js';
import { LoginPage } from '../LoginPage/index.js';
import { RegisterPage } from '../RegisterPage/index.js';
import { getSession } from '../functions/auth.js';

export const App = (props) => {
  const { session } = props;

  const element = document.createElement('div');

  if (session === undefined) {
    getSession().then((response) => {
      const { data } = response;
      let session = null;
      if (data && data.session) {
        session = data.session;
      }
      element.replaceWith(
        App({
          session: session,
        }),
      );
    });
  } else {
    element.classList.add('app');
    element.append(Header({ session: session }));

    const { pathname } = window.location;
    if (pathname === '/') {
      element.append(HomePage({ session: session }));
    } else if (pathname === '/login') {
      element.append(LoginPage({ session: session }));
    } else if (pathname === '/register') {
      element.append(RegisterPage({ session: session }));
    }
  }

  return element;
};
```