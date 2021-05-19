---
title: URL parametry
demand: 3
---

Vyzkoušejme si práci s URL parametry v naší React Router aplikaci. Podíváme se na to, jak vytvořit detailovou stránku a dostat na ní relevantní data.

1. Otevřete si aplikaci v [codesandboxu](https://codesandbox.io/s/rough-morning-rvx0n). Projděte si její soubory a strukturu. Úlohu můžete vypracovávat přímo v prohlížeči, nebo si obsah souborů správně překopírovat do vašeho lokálního projektu.
1. V souboru `App.jsx` najděte kus kódu, kde se pomocí metody `map` vypisují názvy filmů jako paragrafy na stránku. Upravte tuto sekci tak, aby se místo paragrafů vypisovaly `<Link>` komponenty z `react-router-dom`. Pro hezčí stylování můžete zabalit celý výpis do `<ul>` a jednotlivé `<Link>` komponenty obalit do `<li>`. Cesta odkazu by měla vypadat jako `/movies/id-filmu`.
   ```js
   <Link to={`/movies/${movie.id}`}>...</Link>
   ```
1. V souboru `Movie.jsx` vytvořte detail jednoho filmu. Pomocí `useParams` hooku z `react-router-dom` zjistěte id současného filmu. V importovaném poli `movies` podle id najděte současně prohlížený film. Pomůže vám metoda find.
   ```js
   const urlId = 'moje-id'
   const currentBook = books.find(book => book.id === urlId)
   ```
   O filmu vypište jeho název, popis a zobrazte obrázek.
1. V souboru `App.jsx` odkomentujte `<Route>` komponentu uvnitř `<Switch>` komponenty. Zamyslete se, proč jsou `path` a `children` takové, jaké jsou. Porovnejte s dokumentací React Routeru.
1. Vyzkoušejte, že aplikace funguje - správně naviguje a na stránce se mění detail filmu. Nastylujte dle libosti. Zkuste přidat vlastní film v souboru `movies.js` a pozorujte změny na stránce.