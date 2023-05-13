## Autentizace

Nyní máme naší aplikaci propojenou s cloudovou databází. Zbývá nám vyřešit poslední problém, kterým je, že si zatím stále ukládáme klíč ručně do localStorage. Pokud se chceme vyhnout, bude potřeba omezit přístupová práva do databáze na konkrétní uživatele. Abychom toto mohli udělat, musíme nejprve v naší aplikaci umožnit registraci a přihlašování uživatelů.

Supabase umožňuje implementovat autentizaci pomocí velkého množství poskytovatelů. Pro náš účel bude stačit základní autentizace pomocí **E-mailu** a **Hesla**. Než se pustíme do programování, jen trochu upravíme základní nastavení v administraci našeho projektu, aby bylo možné registrovat i fiktivní emailové adresy a nebylo nutné klikat na odkaz v emailu pro aktivaci účtu. Přejdeme do **Authentication** -> **Providers** -> **Email**. Zde deaktivujeme položku **Confirm email** a uložíme.

::fig[Nastavení registrace]{src=assets/auth_email_settings.jpg}

Pro implementaci autentizace budeme vycházet z [repozitáře](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-supabase-autentizace-start), kde jsou připravené stránky pro přihlášení a registraci.

Jak implementovat registraci uživatele můžeme najít v [dokumentaci](https://supabase.com/docs/reference/javascript/auth-signup). Zde vidíme, že jsou metodu pro autentizaci asynchonní, stejně jako metody pro práci s databází. Metody, se kterými budeme pracovat i oprodti dokumetaci trochu upravíme a připravíme si je do souboru `functions/auth.js` takto:

Implementace přihlášení a odhlášení bude fungovat velice podobně jako registrace. Pokud bychom v implementaci pokračovali dle dokumentace, náš výsledný soubor `auth.js` bude vypadat nějak takto:

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

Pokud budeme chtít impolemtovat registraci, mohlo by odeslání registračního formuláře vypadat následovně:

```js
formElm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = formElm.querySelector('.input__email');
  const passwordInput = formElm.querySelector('.input__password');
  console.log(emailInput.value, passwordInput.value);
  // registrace uživatele
  signUp(emailInput.value, passwordInput.value).then((response) => {
    console.log(response);
    window.location.href = '/';
  });
});
```

Nejprve si uložíme do proměnných hodnoty ze vstupů našeho registračního formuláře, ty následně předáme naší funkci `signUp`, která vrací promise. Pokud vče proběhlo v pořádku, tak uživatele přesměrujeme na domovskou stránku. Bylo by dobré zde případně i ošetřit nějaké chyby a eventuelně vypsat chybové hlášky, tomu se ale pro dnešek vyhneme.

Dále by bylo vhodné podobným způsobem implementovat přihlašování a odhlašování.

Jako poslední vidíme v souboru `auth.js` funkci `getSession`, která je pro nás také velice důležitá. Můžeme díky ní zjistit, zda a jaký uživatel je právě přihlášený. To se nám bude hodit vědět napříč celou naší aplikací, z toho důvodu bude nejsnazší tuto funkci využít rovnou v hlavním `index.js` a její výsledek předávat ostatním komponentám.

```js
import { HomePage } from './pages/HomePage/index.js';
import { SignUpPage } from './pages/SignUpPage/index.js';
import { LoginPage } from './pages/LoginPage/index.js';
import { getSession } from './functions/auth.js';
import './style.css';

const appElement = document.querySelector('#app');

getSession().then((response) => {
  const { data } = response;
  const { session } = data;

  if (location.pathname === '/') {
    appElement.append(HomePage({ session: session }));
  } else if (location.pathname === '/sign-up') {
    appElement.append(SignUpPage({ session: session }));
  } else if (location.pathname === '/login') {
    appElement.append(LoginPage({ session: session }));
  }
});
```

Díky tomu, že předáváme `session` do všech stránek, můžeme nyní třeba automaticky zajistit přesměrování uživatele na jinou stránku, pokud by na ni neměl mít přístup. Například na domovkou stránku by neměl mít přístup nepřihlášený uživatel. Pokud uživatel přihlášený není, tak jej odsud přesměrujeme na stránku pro přihlášení.

Do komponenty `HomePage` můžeme tedy hned nahoru přidat:

```js
const { session } = props;
if (!session) {
  window.location.pathname = '/login';
}
```

Opačně budeme postupovat na stránce pro přihlášení a registraci, odkud budeme chtít přesměrovat uživatele, který je již přihlášený.

Nyní když máme přihlášeného užovatele, můžeme upravit naší databázi tak, aby obsahovala propojení mezi registrovanými uživateli a položkami nákupního seznamu. To uděláme tak, že si do tabulky v databázi přidáme sloupec `user_id` a nastavíme mu propojení následujícám způsobem. Půjdeme s administraci supabase do `Database -> Tables` u naší tabulky klikneme na talčítko pro editaci. Následně v dolní části klikneme na `Add column`, pojmenuje jej `user_id` a nakonec klikneme na tlačítko řetězu, kde zajistíme propojení na uživatele následujícím způsobem:
::fig[Excel tabulka]{src=assets/db_relation.jpg}

Nakonec už zbývá jen upravit naši aplikaci tak, aby při vytváření položky nákupního seznamu ukládala také `id` přihlášeného uživatele.
Upravíme funkci pro přidávání položky v `db.js` takto:

```js
export const addShoppingItem = (product, amount, unit, userId) => {
  const supabase = getSupabase();
  return supabase.from('shopping_items').insert({
    product: product,
    amount: amount,
    unit: unit,
    done: false,
    user_id: userId,
  });
};
```

Do komponenty `ShopList` si předáme `session` při volání funkce `addShoppingItem` předáme jako 4. parametr id uživatele, které nalezneme v `session.user.id`. Kód pro přidání bude nakonec vypadat takto:

```js
addShoppingItem(
  productInput.value,
  amountInput.value,
  unitInput.value,
  session.user.id
).then((response) => {
  getShoppingItems().then((response) => {
    const { data, error } = response;
    if (data) {
      element.replaceWith(
        ShopList({
          day: day,
          dayResult: data,
        })
      );
    }
  });
});
```

V poslední části lekce si povíme něco o zabezpečení databáze a konečne smažeme klíč z localStorage.
