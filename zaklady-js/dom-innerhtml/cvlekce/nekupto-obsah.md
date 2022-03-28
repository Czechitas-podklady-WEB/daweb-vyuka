---
title: Nekup to, obsah
demand: 2
offerSolution: true
---

:::assign
Pokračujte v předchozím cvičení. Všimněte si, že v souboru `index.js` jsou uloženy údaje k jednotlivým produktům. Budeme chtít obsah naší stránky vygenerovat z těchto dat místo abychom je měli natvrdo zadrátované v HTML kódu.

1. Otevřete si soubor `index.html` a zkopírujte si HTML obsah prvního produktu a vytvořte z něj řetězec v přiloženém JavaScriptovém souboru. Váš kód může vypadat třeba takto.

   ```js
   const product1HTML = `
     <img class="card-img-top" src="img/destniklobouk.jpg" alt="Card image cap">
     <div class="card-body">
       <h2 class="card-title">Deštníklobouk</h2>
       <p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.</p>
     </div>
     <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
   `;
   ```

1. Obsah prvního produktu v souboru `index.html` můžeme nyní smazat. Výsledné HTML pak bude vypadat takto.
   ```html
   <div id="product1" class="card mb-4 box-shadow"></div>
   ```
1. Pomocí interpolace řetězců předělejte váš JavaScriptový kód tak, že do vašeho řetězce s produktem vložíte obsah vlastností `image`, `name` a `description`.
1. Do nějaké proměnné si uložte element prvního produktu a nastavte jeho `innerHTML` na váš sestavený řetězec. Tímto na stránku vložíme obrázek prvního produktu.
1. Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor `index.html` vůbec neosahuje vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.
   :::

:::solution

```
const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description:
    'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description:
    'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description:
    'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1HTML = `
  <img class="card-img-top" src="${product1.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;
const product1Elm = document.querySelector('#product1');
product1Elm.innerHTML = product1HTML;

const product2HTML = `
  <img class="card-img-top" src="${product2.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product2.name}</h2>
    <p class="card-text">${product2.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;
const product2Elm = document.querySelector('#product2');
product2Elm.innerHTML = product2HTML;

const product3HTML = `
  <img class="card-img-top" src="${product3.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product3.name}</h2>
    <p class="card-text">${product3.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;
const product3Elm = document.querySelector('#product3');
product3Elm.innerHTML = product3HTML;
```

:::
