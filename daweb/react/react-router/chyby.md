## Ošetření chyb

Naše stránky by měly umět dobře reagovat na všechny možné situace, kdy se je někdo pokouší používat nesprávným způsobem. Jednou z hlavních takových situací je pokus o načtení URL adresy, na které nic není.

Pokud například v naší ukázkové účetní aplikaci zajdeme na adresu `/nazdar`, vyskočí nám chybová stránka, jejíž obsah dodává přímo React Router. Tato stránka nás zároveň nabádá, abychom byli k uživateli vstřícnější a vyrobili si vlastní chybovou stránku, která lépe zapadá do naší aplikace.

Možná jste už někdy narazili na hezkou chybovou stránku například na [GitHubu](https://github.com/abrakadabra-treskyplesky).

Pro naši chybovou stránku si nejprve vyrobíme komponentu `ErrorPage`.

```jsx
const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
};
```

V chybové zprávě o neexistující stránce se sluší uvést kód 404, což je standardní HTTP kód pro požadavek, který nikam nevede.

Nyní naši komponentu jednoduše přidáme do routeru.

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // naše další cesty
    ],
  },
]);
```

Poté si můžeme vyzkoušet přístup na nějakou neexistující URL adresu a měli bychom vidět naši specializovanou stránku.
