## Vkládání hodnot do JSX

Velmi často budeme potřebovat do obsahu stránky zakomponovat také hodnoty uvnitř proměnných. Připomeňme si, jak bychom vložili do našeho HTML obsah proměnné ještě před Reactovými časy.

```js
const nazev = 'Moje stránka';
const obsah = `<h1 class="title">${nazev}</h1>`;
```

JSX funguje velmi podobně, nepoužívá ale symbol dolaru. V Reactu budeme psát následující:

```js
const nazev = 'Moje stránka';
const obsah = <h1 className="title">{nazev}</h1>;
```

Když stavíme řetězec, můžeme si obsah proměnné vložit kam chceme. JSX je však přísnější a takto velkou svobodu nemáme. Složené závorky můžeme použít pouze pro obsah elementu nebo pro hodnotu atributu. Následující kód je tedy v pořádku.

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

```js
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
```
