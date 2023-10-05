## Šablonovací systémy

Jedním z najčastějších úkonů při tvorbě webových stránek je vytváření obsahu stránky z nějakých dat. My k tomuto účelu zatím používáme vlastnost `innerHTML`, což znamená, že musíme vždy sestavit řetězec obsahující přesně takové HTML, jaké poté chceme vložit do stránky. Tento postup nám při tvorbě větších stránek brzy přeroste přes hlavu. Z tohoto důvodu se většina vývojářů obrací k nějakému šablonovacímu systému, který tvorbu HTML v JavaScirptu usnadní.

Takových systému je pro JavaScript k dispozici nepřeberné množství. Tady je seznam jen několika nejznámějších:

- [Handlebars](https://handlebarsjs.com/)
- [EJS](https://ejs.co/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [uhtml](https://github.com/WebReflection/uhtml)

S příchodem frameworku React, ke kterému zde postupně s napětím směřujeme, se stal populární šablonovací systém [JSX](https://reactjs.org/docs/introducing-jsx.html), který je součástí frameworku React. My proto JSX v tomto kurzu budeme také používat, protože se tak mimochodem naučíme i základy Reactu ještě dříve, než se k němu oficiálně prokoušeme.

## Základy JSX

Abychom mohli pracovat s JSX, potřebujeme mít správně nastavený projekt. V úplně čístém JavaScriptu by nám JSX šablony nefungovaly. Naštěstí náš startovač projektů už je na toto připraven. Stačí tedy založi vanilla projekt už známým příkazem

```sh
npm init kodim-app@latest muj-projekt vanilla
```

a následně v něm spustit vývojový server příkazem `npm run dev`.

Nyní zkusíme pomocí JSX vytvořit jednoduchý obsah.

```jsx
import { render } from 'react-dom';

document.querySelector('#app').innerHTML = render(<h1>Ahoj ze světa JSX</h1>);
```

Tady nás čeká velké překvapení. Díky JSX můžeme psát HTML **přímo v JavaScriptu**. Všimněte si, že funkci `render` předáváme něco, co kolem sebe nemá uvozovky, není to tedy řetězec. Tomuto novému typu hodnoty budeme říkat prostě JSX.

Hned na začátku je důležité si říct, že JSX není úplně přesně HTML. Je to podobný jazyk, který se snaží HTML co nejvíce napodobit. V JSX můžeme používat všechny HTML značky co známe, ale
narazíme na drobné odlišnosti:

1. Všechny uzavírací značky musí být v JSX uzavřeny. To znamená, že i samozavírací značky musí mít uzavírací lomítko. Například `<br>` se vždy píše jako `<br />`.
1. Místo atributu `class` píšeme `className`. To proto, že `class` je v JavaScriptu klíčové slovo, které sice v tomto kurzu nepoužíváme, ale časem na něj jistě narazíte.
1. Místo atributu `for` píšeme `htmlFor`. I slovo `for` je v JavaScriptu klíčové slovo, které v tomto kurzu také nepoužíváme, ale jistě jej později potkáte.

Když jsme vytvářeli kousky HTML pomocí interpolace řetězců, používali jsme znak doloru pro vložení nějaké proměnné nebo výsledku nějakého krátkého výpočtu.

```js
const name = 'Martin';
const age = 35;
const cssTrida = 'message';
const zprava = `<p class="${cssTrida}">Jmenuji se ${name} a je mi ${age} let.</p>`;
```

V JSX dolar používat nemusíme a stačí nám pouze složené závorky. Pokud chceme takto vložit hodnotu nějakého atributu, nemusíme používat ani uvozovky.

```jsx
const name = 'Martin';
const age = 35;
const cssTrida = 'message';
const zprava = (
  <p className={cssTrida}>
    Jmenuji se {name} a je mi {age} let.
  </p>
);
```

Tady vidíte, že JSX je hodnota jako každá jiná z bez rozpaků ji tak můžeme uložit do proměnné nebo poslat na vstup nějaké funkci.

## Funkce `render`

Pomocí funkce `render` převedeme JSX na normální JavaScriptový řetězec, který pak můžeme vložit do stránky běžným způsobem pomocí vlastnosti `innerHTML`.

Takto by například v JSX vypadalo vytvoření položky nákupního seznamu, jak ji známe z naší aplikace _Nákupy_.

```jsx
shoplistElement.innerHTML += render(
  <div className="shopitem">
    <button className={tickClass} className="shopitem__tick"></button>
    <div className="shopitem__name">item.name</div>
    <div className="shopitem__amount">item.amount</div>
    <button className="btn-delete">Smazat</button>
  </div>
)

Nyní to možná vypadá, že nám JSX ušetřilo tak možná uvozovky a dolary a nepřináší nic zásadně průlomového. Už za chvíli si ale ukážeme, že JSX je mocnější, než se na první pohled zdá.
```
