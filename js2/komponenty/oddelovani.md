Čím budou naše webové aplikace pokročilejší a schopnější, tím více budou obsahovat komponent, ale také různých knihoven. Brzy již přestane být únosné mít všechen kód v jednom obřím `index.js`, protože by se v něm za chvíli už nikdo nikdy nevyznal. Od samého začátku se tedy budeme snažit rozdělovat naše komponenty do jednotlivých souborů.

## Oddělování komponent

Ve výsledku se chceme ke každé komponentě chovat jako k jakémusi samostatnému uzlíku či balíčku. Každá komponenta má nějaký JavaScriptový kód, styly a také třeba soubory s obrázky. Toto všechno chceme mít pohromadě, aby bylo jasné, co všechno patří k jaké komponentě.

Pro každou komponentu si tedy vytvoříme speciální složku a domluvíme se na společné struktuře, kterou budeme dodržovat. Každá složka bude obsahovat

- soubor `index.js` s JavaScriptovým kódem komponenty,
- soubor `style.css` s CSS styly pro komponentu,
- případně složku `img` s obrázky.

Kromě složek s komponentami budeme v každém projektu také mít hlavní soubor `index.html`, hlavní `index.js` a hlavní `style.css`, jak jsme byli doposud zvyklí.

Uvažme například náš projekt dříve v této lekci používající komponenty `ListItem` a `ShopList`,

::fig{src=assets/struktura-projektu.png size=40}

V souboru `ListItem/index.js` bude JavaScriptový kód komponenty:

```js
const ListItem = (props) => {
  let tickClass = '';
  if (props.done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__body">
        <div class="list-item__product">${props.product}</div>
        <div class="list-item__amount">${props.amount}</div>
      </div>
    </div>
  `;
};
```

Podobně bude vypadat soubor `ShopList/index.js`:

```js
const ShopList = (props) => {
  const { dayName, items } = props;

  return `
    <div class="shoplist">
      <div class="shoplist__head">
        <h2 class="shoplist__day">${dayName}</h2>
      </div>
      <div class="shoplist__items">
        ${items.map((item) => ListItem(item)).join('')}
      </div>
    </div>
  `;
};
```

Každá komponenta potřebuje také svoje styly. Ve startovacím projektu v souboru `style.css` máte nadepsané sekce pro jednotlivé komponenty. Stačí je tedy přesunou do souborů `ListItem/style.css` a `ShopList/style.css`.

Do složky `ListItem` také přidáme složku `img`, do které přesunňte všechny obrázky z hlavní složky `img` kromě obrázků `icon.svg` a `bg.png`, které zůstanou na svém místě.

Hlavní soubor `index.html` bude vypadat takto:

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
    />

    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="ListItem/style.css" />
    <link rel="stylesheet" href="ShopList/style.css" />

    <script type="module" src="script.js"></script>

    <title>Nákupy</title>
  </head>
  <body>
    <div id="app">
      <div class="page">
        <header>
          <div class="container">
            <div class="brand">
              <div class="brand__logo"></div>
              <div class="brand__name">Nákupy</div>
            </div>
          </div>
        </header>
        <main class="container"></main>
        <footer>
          <div class="container">
            <p class="footer__text">Cvičná aplikace pro výuku JavaScriptu.</p>
          </div>
        </footer>
      </div>
    </div>
  </body>
</html>
```

Všimněte si hlavičky, kam musíme vložit všechny soubory stylů. Co se JavaScriptu týče, stačí nám do stránky vložit pouze hlavní `script.js` s tímto obsahem:

```js
const mainElement = document.querySelector('main');

fetch('https://nakupy.kodim.app/api/sampleweek/mon')
  .then((response) => response.json())
  .then((data) => {
    mainElement.innerHTML += ShopList(
      { dayName: data.result.dayName, items: data.result.items }
    );
  });

fetch('https://nakupy.kodim.app/api/sampleweek/tue')
  .then((response) => response.json())
  .then((data) => {
    mainElement.innerHTML += ShopList(
      { dayName: data.result.dayName, items: data.result.items }
    );
  });
```

V hlavním souboru `style.css` pak zbydou pouze obecné styly týkající se celé stránky:

Nyní máme veškerý kód projektu hezky rozdělený na logické části. Všimněte si však, že jsme do hlavičky HTML vložili pouze hlavní `script.js`, nevložili jsme tam ale JavaScript našich komponent. Ten se do stránky dostane jiným způsbem, který uvidíme v následující sekci.
