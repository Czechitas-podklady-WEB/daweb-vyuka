## Interpolace řetězců

Když chceme v JavaScriptu vytvořit nějaký kus textu, například nějakou zprávu pro uživatele, často potřebujeme do tohoto textu vložit obsah několika různých proměnných.

```js
const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

const { id, product, delivery } = order;

document.body.innerHTML = (
  '<h2>Objednávka: ' + id + '</h2>' +
  '<p>Zboží ' + product + ' bude doručeno ' + delivery + '.'
);
```

Abychom se ze všeho toho sčítání a uvozovek nezbláznili, moderní JavaScript nabízí nový zápis řetězců, kterému se odborně říká :term{cs="interpolace řetězců" em="string interpolation"}. V tomto zápisu se místo obyčejný nebo dvojitých uvozovek používá takzvaný zpětný apostrof &#96;. Pomocí tohoto zápisu můžeme obsah proměnných vložit do řetězce pomocí znaku `$` a složených závorek.

```js
document.body.innerHTML = (
  `<h2>Objednávka: ${id}</h2>` + 
  `<p>Zboží ${product} bude doručeno ${delivery}.`
);
```

Uvnitř složených závorek otevíráme jakési JavaScriptové okno, do kterého můžeme vepsat nejen proměnnou, ale zcela libovolný výraz, jehož výsledek bude automaticky zkonvertován na řetězec.

```js
document.body.innerHTML = (
  `<h2>Objednávka: ${String(id).padStart(8, '0')}</h2>` +
  `<p>Zboží ${product} bude doručeno ${delivery}.`
);
```

Díky interpolaci řetězců se náš kód stává mnohem čitelnějším a budeme ji tedy používat všude, kde to půjde.

### Víceřádkové řetězce

Když v JavaScriptu vytváříme HTML, které chceme vložit do stránky, často potřebujeme vygenerovat dlouhý řetězec, který se nám nevejde na jeden řádek. V JavaScriptu ovšem nelze zapsat běžný řetězec na více řádků. Následující kód by bohužel nefungoval.

```js
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
const content = (
  '<header>' + 
  '  <h1>Název stránky</h1>' + 
  '</header>' + 
  '<main>Obsah stránky</main>' + 
  '<footer>Patička</footer>'
);
```

Tento zápis je ovšem dost neohrabaný a po čase nás začne vytáčet. Interpolace řetězců nás ale zachrání, neboť řetězce v uvozovkách nové řádky obsahovat mohou.

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

const { id, product, delivery } = order;

const content = `
  <header>
    <h1>Objednávka: ${String(id).padStart(8, '0')}</h1>
  </header>
  <main>
    <p>Zboží ${product} bude doručeno ${delivery}.</p>
  </main>
  <footer>www.matrace-a-syn.cz</footer>
`;

document.body.innerHTML = content;
```
