## Interpolace řetězců

Když chceme v JavaScriptu vytvořit nějaký kus textu, například nějakou zprávu pro uživatele, často potřebujeme do tohoto textu vložit obsah několika různých proměnných.

```js
const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

document.body.innerHTML =
  '<h2>Objednávka: ' +
  order.id +
  '</h2>' +
  '<p>Zboží ' +
  order.product +
  ' bude doručeno ' +
  order.delivery +
  '.</p>';
```

Abychom se ze všeho toho sčítání a uvozovek nezbláznili, moderní JavaScript nabízí zápis řetězců, kterému se odborně říká :term{cs="interpolace řetězců" en="string interpolation"}. V tomto zápisu se místo obyčejných nebo dvojitých uvozovek používá takzvaný zpětný apostrof &#96;. Pomocí tohoto zápisu můžeme obsah proměnných vložit přímo do řetězce pomocí znaku `$` a složených závorek.

```js
document.body.innerHTML =
  `<h2>Objednávka: ${order.id}</h2>` +
  `<p>Zboží ${order.product} bude doručeno ${order.delivery}.</p>`;
```

Uvnitř složených závorek otevíráme jakési JavaScriptové okno, do kterého můžeme vepsat nejen proměnnou, ale zcela libovolný výraz, jehož výsledek bude automaticky zkonvertován na řetězec.

```js
document.body.innerHTML =
  `<h2>Objednávka: ${String(order.id).padStart(8, '0')}</h2>` +
  `<p>Zboží ${order.product} bude doručeno ${order.delivery}.</p>`;
```

Díky interpolaci řetězců se náš kód stává mnohem čitelnějším a budeme ji tedy používat všude, kde to půjde.

### Víceřádkové řetězce

Když v JavaScriptu vytváříme kus HTML, která chceme vložit do stránky, často potřebujeme vygenerovat dlouhý řetězec, který se nám ovšem nevejde na jeden řádek. V JavaScriptu nelze zapsat běžný řetězec na více řádků. Následující kód by bohužel nefungoval.

```
const content = '
  <header>
    <h1>Název stránky</h1>
  </header>
  <main>Obsah srtánky</main>
  <footer>Patička</footer>
';
```

Abychom takový řetězec sestavili, musíme si pomoct sčítáním řetězců.

```js
const content =
  '<header>' +
  '  <h1>Název stránky</h1>' +
  '</header>' +
  '<main>Obsah stránky</main>' +
  '<footer>Patička</footer>';
```

Tento zápis je ovšem dost neohrabaný a po čase nám začne lézt na nervy. Interpolace řetězců nás ale zachrání, neboť řetězce ve zpětných apostrofech nové řádky obsahovat mohou.

```js
const content = `
  <header>
    <h1>Název stránky</h1>
  </header>
  <main>Obsah stránky</main>
  <footer>Patička</footer>
`;
```

Navíc můžeme do takového řetězce snadno zakomponovat proměnné a vytvořit tak obsah stránky opravdu profesionálně.

```js
const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

const content = `
  <header>
    <h1>Objednávka: ${String(order.id).padStart(8, '0')}</h1>
  </header>
  <main>
    <p>Zboží ${order.product} bude doručeno ${order.delivery}.</p>
  </main>
  <footer>www.matrace-a-syn.cz</footer>
`;

document.body.innerHTML += content;
```
