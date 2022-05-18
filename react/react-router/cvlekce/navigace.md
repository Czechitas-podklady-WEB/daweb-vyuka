---
title: Vlastní navigace
demand: 3
---

Vyzkoušejme si přidání React Router knihovny do naší vlastní aplikace. Zkusíme si udělat vlastní navigaci a pár jednoduchých stránek.

1. Vygenerujeme si novou aplikaci pomocí příkazu
   ```sh
   npx create-czechitas-app react-router
   ```
   nebo si otevřeme již existující projekt. V případě vygenerování nové aplikace vám vznikne složka `react-router`, nezapomeňte do ní přejít příkazem `cd react-router`.
1. Nainstalujme si knihovnu React Router pomocí npm. Zavolejme příkaz
   ```sh
   npm install react-router-dom
   ```
1. Spusťme si aplikaci příkazem `npm start` a zkontrolujme, že nám v prohlížeči správně běží.
1. Nebojme se v následujících krocích inspirovat dokumentací [React Routeru](https://reactrouter.com/docs/en/v6)!
1. V `src` adresáři vytvořme nové soubory (komponenty) pro jednotlivé stránky. Adekvátně je pojmenujme, tedy: `Expenses.jsx` a `Invoices.jsx`. Obsah stránek může být cokoliv, stačí jednoduchý text. Příklad obsahu jedné stránky:

   ```js
   import React from 'react';

   const Expenses = () => {
     return (
       <main>
         <h2>Expenses</h2>
       </main>
     );
   };

   export default Expenses;
   ```

1. V souboru `index.jsx` si naimportujme vaše dvě vytvořené stránky.
1. V souboru `index.jsx` si naimportujme všechny potřebné komponenty z `react-router-dom`. Příklad jednoho importu:
   ```js
   import { Link } from 'react-router-dom';
   ```
1. Podle dokumentace obalme `jsx` celé aplikace do `<BrowserRouter>` komponenty. To naší aplikaci umožní uvnitř používat ostatní komponenty z `react-router-dom`.
   ```js
   root.render(
     <BrowserRouter>
       <App />
     </BrowserRouter>
   );
   ```
1. Použitím komponenty `<Link>` vložme do aplikace odkazy na níže uvedené stránky. Vkládat je můžeme například do `<header>` nebo `<nav>` prvku. Záleží na stavbě naší aplikace.

   1. text: `'Expenses'`, cesta: `'/expenses'`
   2. text: `'Invoices'`, cesta: `'/invoices'`

   ```js
   <Link to="/expenses">Expenses</Link>
   ```

   V prohlížeči si rovnou můžeme vyzkoušet, že klikání na odkazy mění naši url adresu za lomítkem v adresním řádku.

1. Podívejme se v [dokumentaci](https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-routes), jak se zapisuje struktura s React Router komponentami `<Routes>` a `<Route>`. Tuto strukturu vložme do kódu tak, aby ji obalovala komponenta `<BrowserRouter>` a uvnitř použijme naše dvě nové stránky `Expenses` a `Invoices`, které jsme si naimportovali.
   ```js
   <Routes>
     <Route path="/" element={<App />} />
     <Route path="expenses" element={<Expenses />} />
     <Route path="invoices" element={<Invoices />} />
   </Routes>
   ```
1. Vyzkoušejme, že aplikace správně naviguje - mění adresu a obsah podle klikání na odkazy.
1. Přidejme zajímavější obsah dle libosti a nastylujme jednotlivé stránky i navigaci.

#### Bonus

1. Upravme obsah `<Routes>` a přidejme použití komponenty `<Outlet />` tak, aby navigace a hlavní obsah aplikace zůstával vždy vidět, ikdyž přecházíme mezi stránkami. Neváhejme použít [dokumentaci](https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes).
1. Co se stane, když v adresním řádku budeme mít za lomítkem například `/blabla`? Nezobrazí se žádná stránka. Podívejme se, jak to lze řešit [zde](https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route) a zkuste tuto logiku přidat do naší aplikace.
