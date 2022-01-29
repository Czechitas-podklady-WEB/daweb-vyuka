## Speciální druhy funkcí

Většina práce v JavaScriptu se točí kolem vytváření a volání funkcí. Během programování tak často budeme narážet na různé jejich podoby a příchuťe. Je proto dobré se už od začátku začít učit, k čemu tyto různé podoby slouží.

Podle druhu vykonávané práce můžeme funkce rozdělit v podstatě na dvě skupiny:

1. funkce, které vyrábějí nějaký výsledek (hodnotu),
1. funkce, které nic nevyrábějí a pouze vykonají nějaký kus práce.

Funkce vyrábějící nějakou hodnotu tuto hodnotu vrací pomocí `return`. Naopak funkce, které pouze vykonávají nějakou práci žádnou hodnotu nevyrábějí a slovíčko `return` tedy nepoužívají. 

### Funkce bez návratové hodnoty

Představte si například funkci, jejíž úkolem je vypsat do stránky nějakou souhrnou informaci, například shrnutí objednávky v e-shopu. 

```js
const showOrderSummary = (summary) => {
  const summaryElm = document.querySelector('#summary');
  summaryElm.innerHTML = `
    <div class="summary__count">Celkem položek: ${summary.count}</div>
    <div class="summary__sum">Částka: ${summary.sum}</div>
  `;
}
```

K tomu, aby funkce splnila svůj úkol stačí, že do stránky vloží patřičný kus HTML. Už nemusí vracet žádnou hodnotu. JavaScript se však snaží být konzistentní a i takováto funkce tajně vrací hodnotu. Pokud sami nenapíšeme slovíčko `return`, JavaScript si jej sám doplní na konec funkce. 

```js
const showOrderSummary = (summary) => {
  const summaryElm = document.querySelector('#summary');
  summaryElm.innerHTML = `
    <div class="summary__count">Celkem položek: ${summary.count}</div>
    <div class="summary__sum">Částka: ${summary.sum}</div>
  `;

  return undefined;
}
```

V JavaScriptu tedy každá funkce něco vrací. Pokud my sami z naší funkce nevrátíme žádnou hodnotu, JavaScript automaticky vrátí `undefined`. Proto můžeme klidně psát

```js
const result = showOrderSummary({ count: 5, sum: 5270 });
```

V proměnné `result` pak po tomto příkazu bude uložena hodnota `undefined`. Vzhledem k tomu, že funkce `showOrderSummary` vrací `undefined` vždy, ukládat si její výsledek je zbytečné. Takovou funkci prostě zavoláme takto. 

```js
showOrderSummary({ count: 5, sum: 5270 });
```

O její návratovou hodnotu se nestaráme, protože nám k ničemu není. Z této části si však můžeme odnést důležité poučení:

**Každá funkce vrací nějakou hodnotu, i když uvnitř nepoužijeme `return`.** 

### Funkce bez parametrů

V praxi běžně narazíme také na funkce, které žádné parametry nemají. V takovém případě na místo parametrů píšeme prostě prázdné závorky. Příkladem může být následující funkce, která pro nás hodí kostkou, tedy vygeneruje náhodné celé číslo mezi 1 a 6.

```js
const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};
```

Tato funkce ke své činnosti žádné hodnoty z venku napotřebuje, proto je bez parametrů. Další příklad může být funkce, který obarví nadpis stránky na červeno.

```js
const colorHeadingRed = () => {
  const headingElm = document.querySelector('h1');
  headingElm.style.color = 'red';
};
```

Tato funkce parametry nemá, protože ke své činnosti opět nepotřebuje žádné informace z venku. Mohli bychom však také chtít funkci, která obarví nadpis námi zvolenou barvou. V takovém případě funkci přidáme jeden parametr.

```js
const colorHeading = (colorName) => {
  const headingElm = document.querySelector('h1');
  headingElm.style.color = colorName;
};
```
