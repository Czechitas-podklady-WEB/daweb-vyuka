---
title: Vlastní navigace
demand: 3
---

Vyzkoušejme si přidání React Router knihovny do naší vlastní aplikace. Zkusíme si udělat vlastní navigaci a pár jednoduchých stránek.

1. Vygenerujte si novou aplikaci pomocí příkazu
   ```sh
     npx create-czechitas-app react-router
   ```
nebo si otevřete již existující projekt. V případě vygenerování nové aplikace vám vznikne složka `react-router`, nezapomeňte do ní přejít příkazem `cd react-router`.
1. Nainstalujte si knihovnu React Router pomocí npm. Zavolejte příkaz
   ```sh
   npm install react-router-dom
   ```
1. Spusťte si aplikaci příkazem `npm start` a zkontrolujte, že vám v prohlížeči správně běží.
1. Nebojte se v následujících krocích inspirovat [dokumentací](https://reactrouter.com/web/guides/quick-start) React Routeru!
1. V souboru `index.jsx` si naimportujte všechny potřebné komponenty z `react-router-dom`. Příklad jednoho importu:
   ```js
   import { Link } from 'react-router-dom';
   ```
1. Použitím komponenty `<Link>` vložte do `<header>` prvku odkazy na následující stránky:
   1. text: `'Home'`, cesta: `'/'`
   2. text: `'About'`, cesta: `'/about'`
   3. text: `'Detail'`, cesta: `'/detail'`
   
   V prohlížeči si rovnou můžete vyzkoušet, že klikání na odkazy mění vaši url adresu za lomítkem v adresním řádku.
1. V `src` adresáři vytvořte nové soubory (komponenty) pro jednotlivé stránky. Adekvátně je pojmenujte, tedy: `Home.jsx`, `About.jsx` a `Detail.jsx`. Obsah stránek může být jen jeden paragraf s krátkou zprávou. Nezapomeňte na správný export. Příklad obsahu jedné stránky:
   ```js
   const Home = () => <p>Jsem domovská stránka</p>
   ```
1. Naimportujte stránkové komponenty do `index.jsx`. Podívejte se v dokumentaci, jak se zapisuje struktura s React Router komponentami `<Switch>` a `<Route>`. Tuto strukturu vložte do kódu do sekce `<main>` a uvnitř použijte vaše tři nové stránky `Home`, `About` a `Detail`, které jste si naimportovaly.
1. Vyzkoušejte, že aplikace správně naviguje - mění adresu a obsah podle klikání na odkazy.
1. Přidejte zajímavější obsah dle libosti a nastylujte jednotlivé stránky a navigaci!