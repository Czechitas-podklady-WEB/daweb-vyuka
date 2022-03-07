## Vlastnost innerHTML

Z předchozí části už umíme změnit obsah nějakého DOM elementu pomocí vlastnosti `textContent`. Takto však můžeme pravovat pouze s čistě textovým obsahem. Co kdybychom však do nějakého elementu chtěli vložit kus HTML? K tomu nám poslouží vlastnost `innerHTML`. Tuto vlastnost jste potkáváli již od samého počátku kurzu při používání :var[dockument.body.innerHTML]. Vlastnost `innerHTML` však kromě elementu `body` najdeme i na většině ostatních elementů.

Vraťme se k ukázkové stránce z předchozí části.

```html
<body>
  <div class="header">Hlavička</div>
  <div class="cards">
    <div id="card1" class="card">Karta 1</div>
    <div id="card2" class="card">Karta 2</div>
    <div id="card3" class="card">Karta 3</div>
  </div>
  <div class="footer">Patička</div>
</body>
```

Kdybychom chtěli do elementu `header` vložit například nadpis první úrovně, můžeme to provést takto.

```js
const headerElm = document.querySelector('.header');
headerElm.innerHTML = '<h1>Hlavička</h1>';
```

Ve chvíli, kdy takto nastavíme vlastnost `innerHTML`, prohlížeč si přečte obsah našeho řetězce a automaticky z něj vyrobí DOM elementy pro naši stránku. Můžete si v developer tools zkontrolovat, že obsah hlavičky má nyní opravodou DOM strukturu.

Pokud vytváříme kus stránky pomocí `innerHTML`, děláme to většinou proto, že chceme do HTML vložit obsah nějaký proměnných. Realističtější příklad by tedy byl ten, kdy máme například název stránky uložený v proměnné.

```js
const pageTitle = 'Moje stránka';
const headerElm = document.querySelector('.header');
headerElm.innerHTML = `<h1>${pageTitle}</h1>`;
```

Pomocí `innerHTML` tak získáváme mnohem větší kontrolu nad obsahem stránky než jsme měli pouze s použitím `textContent` a `document.body.innerHTML`. Čím dál častěji se nám bude stávat, že budeme větší a větší kusy stránky vytvářet JavaScriptem právě pomocí `innerHTML`. Můžeme třeba na první kartu naší stránky vložit nějaký produkt.

```js
const product1 = {
  name: 'Lední brusle',
  price: 1259,
  description:
    'Lední brusle dámské vhodné pro rekreační bruslaře, nůž: klasická svařovaná brusle, nerezová ocel',
  color: 'white',
};

const card1Elm = document.querySelector('#card1');
card1Elm.innerHTML = `
  <h2 class="product__name>${product1.name}</h2>
  <p class="product__desc>${product1.description}</p>
  <div class="product__price">${product1.price} Kč</div>
  <button>Koupit</button>
`;
```
