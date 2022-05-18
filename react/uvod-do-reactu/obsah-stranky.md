## Obsah stránky v Reactu

V tuto chvíli se dostáváme k základnímu principu při vytváření React aplikací. Celý obsah stránky je vždy vytvořen přímo v Reactu. V souboru `index.html` tak už vždy budeme mít pouze element `#app`, do kterého zapojíme obsah vytvořený Reactem.

Samozřejmě budeme chtít, aby naše byla zajímavější než jen jeden nadpis. Můžeme tedy zkusit napsat například toto.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#app')).render(
  <header>
    <h1>React Starter</h1>
  </header>
  <main>
    <p>Moje první React stránka</p>
  </main>
  <footer>Martin Podloucký</footer>
);
```

Potíž je v tom, že tento kód nám nebude fungovat. Do funkce `render` můžeme poslat pouze jeden JSX element, my se však pokoušíme vytvořit tři najednou. Můžeme to zachránit tak, že náš obsah obalíme do jednoho velkého `divu`.

```js
createRoot(document.querySelector('#app')).render(
  <div>
    <header>
      <h1>React Starter</h1>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>
  </div>
);
```

Tento postup však s sebou nese nevýhody. Na stránce se nám objeví zbytečný `div`, který může působit problémy při stylování. React proto nabízí speciální JSX element, kterému se říká _fragment_. Tento element vypadá jako prázdná značka, která se na výsledné stránce neobjeví. Slouží pouze k zabalení více elementů do jednoho celku. Výsledná aplikace tedy bude vypadat takto.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#app')).render(
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
```

Ještě bychom si obsah stránky mohli uložit do proměnné, aby nám volání funkce `render` nezabíralo tolik prostoru.

```js
import React from 'react';
import { createRoot } from 'react-dom/client';

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

createRoot(document.querySelector('#app')).render(appContent);
```

Všimněte si šikovně použitých kulatých závorek při vytváření proměnné :var[appContent], které nám umožní mít kód hezky čitelný.
