---
title: Cifry jako komponenty
demand: 2
---

Pokračuje v kódu předchozího příkladu. Budeme chtít zobrazit jednotlivé cifry rodného čísla dle následujícího vzoru.

::fig[Cifry]{src=assets/digits.png size=80}

1. Vytvořte čistě JavaScriptovou komponentu `Digit`, která bude představovat jednu cifru rodného čísla. Tato komponenta bude jako svůj parametr brát props s následující strukturou.

   ```js
   {
     char: '3',
     digit: true,
   }
   ```

   Komponentu napište tak, aby vracela řetězec obsahující HTML.

1. Pokud bude prop `digit` mít hodnotu `true`, bude mít znak zelené pozadí `#00DD00`. V opačném případě bude mít červené pozadí `#FF8686`.
1. V souboru `index.html` vytvořte `div` s nějakým smysluplným `id`, ve kterém budeme zobrazovat jednotlivé cifry. Nastylujte jej pomocí flexboxu tak, abychom mohli cifry zobrazovat vedle sebe.
1. Jakmile uživatel klikne na tlačítko :i[Zkontrolovat], zavolejte na uživatelův vstup `mapCharacters`. Projděte vrácené pole pomocí cyklu a naplňte váš připravený `div` ciframi s použitím komponenty `Digit` a vlastnosti `innerHTML`.

Vaše aplikce by měla ve výsledku fungovat tak, že kdykoliv uživatel zadá rodné číslo a nechá si jej zkontrolovat, aplikace vypíše, zda je číslo zadané dobře nebo špatně, a zobrazí jednotlivé znaky čísla s tím, že cifry jsou zelené a špatně zadané znaky jsou červené.

::fig[správně]{src=assets/spravne.png}

::fig[chybně]{src=assets/chybne.png}

---solution

### `index.html`

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Opakování JavaScriptu</title>
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <form id="formular">
      <label>Rodné číslo: <input /></label>
      <button>Zkontrolovat</button>
    </form>
    <div id="vystup"></div>
    <div id="cifry"></div>
  </body>
</html>
```

### `index.js`

```js
import { Digit } from './Digit.js';
// …
const formular = document.querySelector('#formular');
formular.addEventListener('submit', (event) => {
  event.preventDefault();
  const vstup = formular.querySelector('input').value;
  const vystup =
    checkBirthID(vstup) === 'ok'
      ? '✔️ V pořádku.'
      : '❌ V rodném čísle jsou chyby.';
  document.querySelector('#vystup').textContent = vystup;
  document.querySelector('#cifry').innerHTML = mapCharacters(vstup)
    .map(Digit)
    .join('');
});
```

### `Digit.js`

```js
export const Digit = (props) => {
  const { char, digit } = props;

  return `
    <span style="background-color: ${digit ? '#00DD00' : '#FF8686'}">
      ${char}
    </span>
  `;
};
```
