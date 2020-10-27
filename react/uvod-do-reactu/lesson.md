Do této chvíle jsem naše aplikace psali v "čistém" (anglicky se též říká "vanilla") JavaScriptu. Postupy, které jsme se dosud naučili jsou zcela legitimní a můžeme takto psát i větší aplikace. U aplikací, které jsou velmi interaktivní a často mění obsah stránky, však narazíme na různé problémy.

- Budeme muset náš kód zodpovědně strukturovat do komponent. S tím přichází spousta kódu, který píšeme pořád dokola.
- Zařídit správnou komunikaci mezi velkým množstvím komponent začne být čím dál těžší.
- Při velkém množství komponent je poměrně těžké zajistit dobrý výkon aplikace.

Na tyto problémy tvrdě narazili vývojáři Facebooku a proto vytvořili framework s názvem React, který by tyto problémy pomohl odstranit. Podobných frameworků existuje více, například Angular, Vue, Ember a další. V současné době je však React s přehledem nejpopulárnější a také nejžádanější na trhu práce.

## První React aplikace

Ať už je to šikovná náhoda nebo dokonale promyšlený plán, velkou část Reactových principů už jste v tomto kurzu používali, aniž byste o tom věděli. K vytvoření našeho prvního React projektu tak stačí pouze malinko upravit konfiguraci Webpacku a naučit se psát náš kód Reactovým způsobem.

Základní Webpack projekt nastavený pro práci v Reactu si můžete [stáhnout zde](assets/react-starter.zip). Používá se stejným způsobem jako jsme u Webpack projektů zvykli.

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

Všimněte si, že do proměnné <var>obsah</var> přímo bez obalení uvozovkami ukládáme něco, co vypadá podezřele jako HTML. Není to však přesně HTML, nýbrž takzvané JSX (JavaScript XML). Zápis JSX je velmi podobný jazyku HTML, jsou zde však drobné rozdíly. Například místo atributu `class` se v JSX používá atribut `className`. JSX elementy jsou Reactová obdoba DOM elementů, které jsme používali ve vanilla JavaScriptu. Jde o zcela nový typ hodnoty, můžete je tedy ukládat do proměnných, předávat funkcím, vracet z funkcí, vkládat do polí a objektů a tak dále.

Pokud chceme náš JSX element vložit na stránku, musíme použít Reactovou funkci `render`. Tato funkce má dva parametry. První parametr je JSX element a druhý parametr je element na stránce, do kterého chceme náš JSX element vložit.

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

Potíž je v tom, že tento kód nám nebude fungovat. Do funkce `render` můžeme poslat pouze jeden JSX element. Můžeme tady náš obsah obalit do jednoho `divu`.

```js
render(
  <div>
    <header>
      <h1>React Starter</h1>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>,
  </div>
  document.getElementById('app')
);
```

Zde však máme nevýhodu, že na stránce se nám objeví zbytečný `div`, který může působit problémy při stylování. React proto nabízí speciální JSX element, kterému se říká _fragment_. Tento element vypadá jako prázdná značka, která se na výsledné stránce neobjeví. Slouží pouze k zabalení více elementu do jednoho celku. Výsledná aplikace tedy bude vypadat takto.

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
    <footer>Martin Podloucký</footer>,
  </>
  document.getElementById('app')
);
```

## React komponenty a props
