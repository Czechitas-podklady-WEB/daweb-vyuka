Do této chvíle jsem naše aplikace psali v "čistém" (anglicky se též říká "vanilla") JavaScriptu. Postupy, které jsme se dosud naučili jsou zcela legitimní a můžeme takto psát i větší aplikace. U aplikací, které jsou velmi interaktivní a často mění obsah stránky, však narazíme na různé problémy.

- Budeme muset náš kód zodpovědně strukturovat do komponent. S tím přichází spousta kódu, který píšeme pořád dokola.
- Zařídit správnou komunikaci mezi velkým množstvím komponent začne být čím dál těžší.
- Při velkém množství komponent je poměrně těžké zajistit dobrý výkon aplikace.

Na tyto problémy tvrdě narazili vývojáři Facebooku a proto vytvořili framework s názvem React, který by tyto problémy pomohl odstranit. Podobných frameworků existuje více, například Angular, Vue, Ember a další. V současné době je však React s přehledem nejpopulárnější a také nejžádanější na trhu práce.

## První React aplikace

Ať už je to šikovná náhoda nebo dokonale promyšlený plán, velkou část Reactových principů už jste v tomto kurzu používali, aniž byste o tom věděli. K vytvoření našeho prvního React projektu tak stačí pouze malinko upravit konfiguraci Webpacku a naučit se psát náš kód Reactovým způsobem.

Základní Webpack projekt nastavený pro práci v Reactu si můžete [stáhnout zde](assets/react-starter.zip). Používá se stejným způsobem jako jsme u Webpack projektů zvyklí. Všimněte si však, že místo `index.js` zde máme soubor `index.jsx`. Příponu `.jsx` budeme používat u souborů, které obsahují Reactový kód. Co tato přípona znamená si povíme v následující části.

### JavaScript XML

Do této chvíle jsme viděli dva způsoby, jak v JavaScriptu vytvořit obsah stránky. Jedna z možností byla vytvořit řetězec obsahující HTML a ten pak vložit do stránky pomocí `innerHTML`.

```js
const obsah = '<h1 class="title">Moje stránka</h1>';

const appElm = document.querySelector('#app');
appElm.innerHTML = obsah;
```

Toto řešení je relativně přímočaré, ale má nevýhody v tom, že je těžké udělat obsah interaktivní. Naučili jsme se proto druhý způsob, kdy místo řetězce vytvoříme DOM element.

```js
const obsah = document.createElement('h1');
obsah.className = 'title';
obsah.textContent = 'Moje stránka';

const appElm = document.querySelector('#app');
appElm.appendChild = obsah;
```

Toto řešení už je praktičtější, kód je však delší a méně přehledný. Zde přichází ke slovu React se třetím způsobem, jak obsah stránky vytvářet.

```js
const obsah = <h1 className="title">Moje stránka</h1>;
```

Všimněte si, že do proměnné <var>obsah</var> přímo bez obalení uvozovkami ukládáme něco, co vypadá podezřele jako HTML. Není to však přesně HTML, nýbrž takzvané JSX (JavaScript XML). Zápis JSX je velmi podobný jazyku HTML, jsou zde však drobné rozdíly. Například místo atributu `class` se v JSX používá atribut `className`. JSX elementy jsou Reactová obdoba DOM elementů, které jsme používali ve vanilla JavaScriptu. Jde tedy o zcela nový typ hodnoty. JSX elementy proto můžeme ukládat do proměnných, předávat funkcím, vracet z funkcí, vkládat do polí a objektů a tak dále.

Pokud chceme náš JSX element vložit na stránku, musíme použít Reactovou funkci `render`. Tato funkce má dva parametry. První parametr je JSX element a druhý parametr je element na stránce, do kterého chceme náš obsah vložit.

```js
render(<h1 className="title">Moje stránka</h1>, document.getElementById('app'));
```

Celý soubor `index.jsx` tak bude vypadat takto.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

render(<h1 className="title">Moje stránka</h1>, document.getElementById('app'));
```

Všimněte si, že aby nám React fungoval, musíme na začátku importovat balíček `react`. Funkci `render` si importujeme z balíčku `react-dom`.

### Obsah stránky v Reactu

V tuto chvíli se dostáváme k základnímu principu při vytváření React aplikací. Celý obsah stránky je vždy vytvořen přímo v Reactu. V souboru `index.html` tak už vždy budeme mít pouze element `#app`, do kterého zapojíme obsah vytvořený Reactem.

Mohli bychom tak chtít napsat složitější obsah stránky například takto.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

render(
  <header>
    <h1>React Starter</h1>
  </header>
  <main>
    <p>Moje první React stránka</p>
  </main>
  <footer>Martin Podloucký</footer>,
  document.getElementById('app')
);
```

Potíž je v tom, že tento kód nám nebude fungovat. Do funkce `render` můžeme poslat pouze jeden JSX element, my se však pokoušíme vytvořit tři najednou. Můžeme to zachránit tak, že náš obsah obalíme do jednoho velkého `divu`.

```js
render(
  <div>
    <header>
      <h1>React Starter</h1>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>
  </div>,
  document.getElementById('app')
);
```

Tento postup však s sebou nese nevýhody. Na stránce se nám objeví zbytečný `div`, který může působit problémy při stylování. React proto nabízí speciální JSX element, kterému se říká _fragment_. Tento element vypadá jako prázdná značka, která se na výsledné stránce neobjeví. Slouží pouze k zabalení více elementů do jednoho celku. Výsledná aplikace tedy bude vypadat takto.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

render(
  <>
    <header>
      <h1>React Starter</h1>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>
  </>,
  document.getElementById('app')
);
```

Ještě bychom si obsah stránky mohli uložit do proměnné, aby nám volání funkce `render` nezabíralo tolik prostoru.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

const appContent = (
  <>
    <header>
      <h1>React Starter</h1>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>
  </>
);

render(appContent, document.getElementById('app'));
```

Všimněte si šikovně použitých kulatých závorek při vytváření proměnné <var>appContent</var>, které nám umožní mít kód hezky čitelný.

### Vkládání hodnot do JSX

Velmi často budeme potřebovat do obsahu stránky zakomponovat také hodnoty uvnitř proměnných. Připomeňme si, jak bychom vložili do našeho HTML obsah proměnné ještě před Reactovými časy.

```js
const nazev = 'Moje stránka';
const obsah = `<h1 class="title">${nazev}</h1>`;
```

JSX funguje velmi podobně, nepoužívá ale symbol dolaru. V Reactu tedy budeme psát následující.

```js
const nazev = 'Moje stránka';
const obsah = <h1 className="title">{nazev}</h1>;
```

Když stavíme řetězec, můžeme si obsah proměnné vložit kam chceme. JSX je přísnější a tak velkou svobodu nemáme. Složené závorky můžeme použít pouze pro obsah elementu nebo pro hodnotu atributu. Následující kód je tedy v pořádku.

```js
const nazev = 'Moje stránka';
const trida = 'title';
const obsah = <h1 className={trida}>{nazev}</h1>;
```

Nemůžeme však udělat například toto:

```js
const nazev = 'Moje stránka';
const trida = 'title';
const znacka = 'h1';
const obsah = <{znacka} className={trida}>{nazev}</{znacka}>;
```

S těmito znalostmi můžeme naši výslednou stránku sestavit třeba takto.

````js
const title = 'React Starter';
const content = 'Moje první React stránka';
const author = 'Martin Podloucký';

const appContent = (
  <>
    <header>
      <h1>{title}</h1>
    </header>
    <main>
      <p>{content}</p>
    </main>
    <footer>{author}</footer>
  </>
);

render(appContent, document.getElementById('app'));

@exercises ## Cvičení - první React aplikace [

- prvni-kroky
- plysaci
  ]@

## React komponenty a props

Velká výhoda, kterou nám JSX přináší spočívá v tom, že můžeme naše komponenty psát podobně, jako na začátku, kdy jsme z komponent vraceli řetězec obsahující HTML. Připomeňme si, jak tehdy vypadala naše komponenta `ShoppingList`.

```js
const ShoppingItem = (props) => {
  return `
    <div class="item">
      <span class="item__name">${props.name}</span>
      <span class="item__amount">${props.amount}</span>
    </div>
  `;
};
````

V Reactu tutéž komponenty napíšeme tak, že místo řetězce bude vracet JSX element.

```js
const ShoppingItem = (props) => {
  return (
    <div class="item">
      <span class="item__name">{props.name}</span>
      <span class="item__amount">{props.amount}</span>
    </div>
  );
};
```

Všimněte si důležitých rozdílů:

1. Nepoužíváme už zpětné apostrofy. Místo toho celé JSX uzavřeme do závorek.
1. Pokud chceme dovnitř JSX zakomponenovat obsah nějaké proměnné, místo `${promenna}` píšeme prostě `{promenna}`. Proti předchozímu zápisu nám tak zmizí znak dolaru.

Ta nejhezčí věc na Reactu je však způsob, jakým naši komponentu zapojíme do zbytku stránky. Místo toho, abychom složitě používali `innerHTML` nebo `appendChild`, můžeme se tvářít, že naše komponenta je obyčejný tag a `props` jí předat pomocí atributů. Použití komponenty `ShoppingItem` by pak mohlo vypadat takto.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

const ShoppingItem = (props) => {
  return (
    <div class="item">
      <span class="item__name">{props.name}</span>
      <span class="item__amount">{props.amount}</span>
    </div>
  );
};

render(
  <>
    <header>
      <h1>Shopping List</h1>
    </header>
    <main class="shopping-list">
      <ShoppingItem name="Jablka" amount="1 kg" />
      <ShoppingItem name="Skořice" amount="1 balení" />
      <ShoppingItem name="Máslo" amount="250 g" />
      <ShoppingItem name="Mouka" amount="500 g" />
    </main>
    <footer>Martin Podloucký</footer>
  </>,
  document.getElementById('app')
);
```

## Doporučené postupy

Framework React vznikl ve společnosti Facebook mezi roky 2011 až 2013. Má tedy za sebou již několik let používání a za tu dobu se ustálily určité doporočené postupy, jak psát React aplikace. Některé z nich zmíníme již takto na začátku, abychom co nejdříve působili jako profesionálové.

### Hlavní komponenta

V Reactu není příliš zvykem psát do funkce `render` příliš obsáhly kód. Většinou postupujeme tak, že celá naše aplikace je jedna velká komponenta, která pak skládá dohromady další námi napsané komponenty. Této komponentě většinou dáváme název `App`. Kód nákupního seznamu by pak vypadal takto.

```js
import React from 'react';
import { render } from 'react-dom';
import './index.html';

const ShoppingItem = (props) => {
  return (
    <div class="item">
      <span class="item__name">{props.name}</span>
      <span class="item__amount">{props.amount}</span>
    </div>
  );
};

const App = () => {
  return (
    <>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main class="shopping-list">
        <ShoppingItem name="Jablka" amount="1 kg" />
        <ShoppingItem name="Skořice" amount="1 balení" />
        <ShoppingItem name="Máslo" amount="250 g" />
        <ShoppingItem name="Mouka" amount="500 g" />
      </main>
      <footer>Martin Podloucký</footer>
    </>
  );
};

render(<App />, document.getElementById('app'));
```

### Rozdělení komponent do složek
