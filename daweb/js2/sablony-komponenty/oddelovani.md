## Oddělování komponent

Protože větší aplikace mohou obsahovat stovky až tisíce komponent, je důležité je nějakým způsobem organizovat. Ve výsledku se chceme ke každé komponentě chovat jako k jakémusi samostatnému uzlíku či balíčku. Každá komponenta má nějaký JavaScriptový kód, styly a také třeba soubory s obrázky. Toto všechno chceme mít pohromadě, aby bylo jasné, co všechno patří k jaké komponentě. Bývá proto zvykem pro každou komponentu vytvořit samostatnou složku, ve které se nachází všechny soubory týkající se této komponenty, tedy JavaScript, CSS styly, obrázky a další.

Domluvíme se zde na společné struktuře projektu, kterou budeme od této chvíle dodržovat.

Ve složce `src` si vytvoříme složku `components`, do které budeme ukládat všechny složky pro jednotlivé komponenty. Ve složce `src` tedy vedle sebe budeme mít složky `pages` a `components`. Složku s komponentou vždy pojmenujeme jako samotnou komponentu (s velkým písmenem na začátku), tedy například `Header`, `Footer` apod. Složka komponenty bude obsahovat:

- soubor `index.jsx` s JavaScriptovým kódem komponenty,
- soubor `style.css` s CSS styly pro komponentu,
- případně složku `img` s obrázky.

Funkci komponenty vždy v souboru `index.jsx` exportujeme, abychom mohli komponentu použít. Zároveň do `index.jsx` importujeme všechny styly ze souboru `style.css`.

```jsx
import './style.css';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <a href="/">Domů</a>
      <a href="/nakupy">Nákupy</a>
      <a href="/kalendar">Kalendář</a>
      <p>Přihlášený uživatel: {props.user}</p>
    </header>
  );
};
```

## Stránky aplikace

Kromě složek s komponentami budeme v každém projektu také mít jednu či více stránek. Hlavní stránka se bude vždy skládat ze souborů `index.html`, `index.jsx` a `index.css` ve složce `src/pages`.

V souboru `index.html` bude pouze kostra HTML stránky, která bude obsahovat hlavní element aplikace s id `root`.

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script type="module" src="src/index.jsx"></script>
    <title>Moje aplikace</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Takto jsme se dostali do stavu, kdy celý obsah aplikace vytváříme v JavaScriptu a soubor HTML zůstává v podstatě prázdný.

V hlavní souboru `index.jsx` pak většinou vytváříme hlavni komponentu celé stránky. Pokud máme jednu stránku, můžeme ji nazvat třeba `HomePage`. Její použití pak vypadá následovně:

```jsx
import { render } from '@czechitas/render';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './style.css';

const HomePage = () => {
  return (
    <>
      <Header title="Hlavní stránka" user="Martin" />
      <main>
        <h1>Ahoj ze světa JSX</h1>
      </main>
      <Footer year={2021} />
    </>
  );
};

document.querySelector('#root').innerHTML = render(HomePage());
```

V hlavním souboru `global.css` nám pak po rozsekání projektu na komponenty zbydou pouze obecné styly týkající se celé stránky:

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
}
```

Nyní máme veškerý kód projektu hezky rozdělený na logické části. Bundler Vite zajistí, že se všechny exportované a importované soubory s JavaScriptem i se styly správně spojí a zapojí do výsledného HTML souboru, který se vývojový server naservíruje prohlížeči.
