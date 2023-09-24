---
title: Cifry jako HTML elementy
demand: 3
access: claim
---

Pokračuje v kódu předchozího příkladu. Budeme chtít zobrazit jednotlivé cifry rodného čísla dle následujícího vzoru.

::fig[Cifry]{src=assets/digits.png size=80}

Cifry budeme do stránky vkládat pomocí vlastnosti `innerHTML`.

1. Nedříve si rozmysleme, jak bude vypadat HTML pro jednu cifru. Může jít například o jednoduchý `div` s nějakou vhodně nastylovanou třídou.
1. Pokud je znak platná číslice, bude mít na stránce zelené pozadí `#00DD00`. V opačném případě bude mít červené pozadí `#FF8686`.
1. V souboru `index.html` vytvořte `div` s nějakým smysluplným `id`, ve kterém budeme zobrazovat jednotlivé cifry. Nastylujte jej pomocí flexboxu tak, abychom mohli cifry zobrazovat vedle sebe.
1. Jakmile uživatel klikne na tlačítko :i[Zkontrolovat], zavolejte pro uživatelův vstup funkci `validateCharacters`. Projděte vrácené pole pomocí cyklu `forEach` a naplňte váš připravený `div` ciframi s použitím vlastnosti `innerHTML`.

Vaše aplikce by měla ve výsledku fungovat tak, že kdykoliv uživatel zadá rodné číslo a nechá si jej zkontrolovat, aplikace vypíše, zda je číslo zadané dobře nebo špatně, a zobrazí jednotlivé znaky čísla s tím, že cifry jsou zelené a špatně zadané znaky jsou červené.

::fig[správně]{src=assets/spravne.png}

::fig[chybně]{src=assets/chybne.png}

:::solution

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
const formular = document.querySelector('#formular');
formular.addEventListener('submit', (event) => {
  event.preventDefault();
  const vstup = formular.querySelector('input').value;
  const vystupElm = document.querySelector('#vystup');
  const vysledekValidace = checkBirthID(vstup);
  if (vysledekValidace === 'ok') {
    vystupElm.textContent = '✔️ V pořádku.';
  } else {
    vystupElm.textContent = '❌ V rodném čísle jsou chyby.';
  }

  const overeni = validateCharacters(vstup);
  const cifry = document.querySelector('#cifry');

  overeni.forEach((znak) => {
    cifry.innerHTML += `
      <span style="background-color: ${digit ? '#00DD00' : '#FF8686'}">
        ${char}
      </span>
    `;
  });
});
```

:::
