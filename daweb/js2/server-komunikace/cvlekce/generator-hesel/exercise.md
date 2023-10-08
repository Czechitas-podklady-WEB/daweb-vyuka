---
title: Generátor hesel
demand: 3
lead: Vyrobte stránku na generování silných hesel.
---

Vyrobíme stránku, která pomůže uživateli vygenerovat opravdu silné a neprůstřelné heslo. Použijeme k tomu [tréninkové API](https://apps.kodim.cz/daweb/trening-api/docs/heslo) na generování hesel. Zároveň už projekt vytvoříme pomocí Vite a JSX.

1. Založte si nový projekt příkazem

   ```shell
   npm init kodim-app@latest cviceni-generator-hesel jsx
   ```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-generator-hesel`.
1. Prohlédněte si dokumentaci API pro generování hesla a vyzkoušejte si jej „na sucho“ v prohlížeči. Zkuste vygenerovat hesla různých délek a prohlédněte si, jak vypadá struktura dat, která API vrací.
1. V hlavním `index.jsx` promažte JSX ve funkci `render`. Nechte na stránce pouce prvek `.container` a nadpis `h1`.
1. Před voláním funkce `render` vytvořte proměnnou `data`, do které si pomocí volání `fetch` na tréninkové API uložíte vygenerované heslo délky 16.
1. Upravte JSX ve funkci `render` tak, aby zobrazila uživateli vygenerované heslo s nějakým vhodným textem pro uživatele.

### Bonus

1. Vytvořte pro zobrazení heslo komponentu `StrongPassword`, která bude mít dvě `props` s názvem `password` a `length`. Tuto komponentu pak použijte ve funkci `render`.
1. Nezapomeňte pro komponentu vytvořit vlastní složku ve složce `src/components` a správně ji importujte.

:::solution

Soubor `index.jsx`:

```jsx
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = fetch(
  'https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16'
);
const data = response.json();

document.querySelector('#root').innerHTML = render(
  <div class="container">
    <h1>Webová aplikace</h1>
    <p>
      Vaše heslo je: {data.password}, délka: {data.length}
    </p>
  </div>
);
```

#### Bonus

Soubor `src/components/StrongPassword/index.jsx`:

```jsx
export const StrongPassword = (props) => {
  return (
    <p>
      Vaše heslo je: {props.password}, délka: {props.length}
    </p>
  );
};
```

Soubor `src/pages/index.jsx`:

```jsx
import { render } from '@czechitas/render';
import { StrongPassword } from '../components/StrongPassword';
import '../global.css';
import './index.css';

const response = fetch(
  'https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=16'
);
const data = response.json();

document.querySelector('#root').innerHTML = render(
  <div class="container">
    <h1>Webová aplikace</h1>
    <StrongPassword password={data.password} length={data.length} />
  </div>
);
```

:::
