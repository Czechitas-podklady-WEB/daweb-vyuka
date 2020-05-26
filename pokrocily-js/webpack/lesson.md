## NPM

V lekci o komponentách jsme poprvé potkali takzvanou <term cs="knihovnu" en="library">. Knihovna je v podstatě ucelená sada funkcí, které řeší nějakou konkrétni věc. Například šablonovací systém Handlebars je knihovna, která nám umožňuje v naších programech používat pokřočilé šablony.

Knihoven existuje obrovská spousta a každá řeší nějaký problém jako jsou například pokročilé matematické výpočty, různé algoritmy, práce s datem a časem, zpracování dat nebo práce s 2D i 3D grafikou.

Aby byl v JavaScriptových knihovnách trochu pořádek a neválely se jen tak všude možně po internetu, máme k dispozici takzvaný Node Package Manager (NPM).

### Nastavení projektu

Vytvoříme si pokusný projekt s názvem `pokusnik`.

1. Někde na disku vytvořte novou složku s názvem `pokusnik`. Ta bude obsahovat náš projekt.
1. Otevřete si tuto složku v terminálu a proveďte příkaz
   ```sh
   $ npm init
   ```
   Objeví se série otázek, na které můžete zatím odpovědět prostě stisknutím klávesy [[Enter]].
1. Ve vaší složce se objeví nový soubor s názvem `package.json`. Jeho obsah bude vypadat nějak takto.
   ```json
   {
     "name": "pokusnik",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC"
   }
   ```

V souboru `package.json` je uložena veškerá konfigurace našeho projektu. Jsou zde uloženy informace o všec balíčcích, které náš projekt použivá, jeho verze, název, autor a podobně.

V našem projektu zatím žádný balíček nepoužíváme. Rovnou si tedy pojďme nainstalovat balíček `handlerbars`, který obsahuje dobře známé Handlebars šablony.

```sh
  $ npm install --save-dev handlebars
```

Všimněte si, že po spuštení tohoto příkazu nám ve složce projektu přibyly nějaké nové soubory a složky. Souboru `package-lock.json` si zatím všímat moc nebudeme. Přibyla nám však složka `node_modules`, ve které je stažný náš balíček `handlebars` spolu se všami dalšími balíčky, na které `handlebars` používají.

Změnil se nám také soubor `package.json`.

```json
{
  "name": "pokusnik",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "handlebars": "^4.7.6"
  }
}
```

Přibyla nám sekce `devDependencies`, která obsahuje seznam všech balíčků, které v projektu používáme, spolu s jejich verzemi.

### Struktura složek

Aby byl náš projekt dobře organizovaný, je dobré respektovat určitou strukturu složek, na kterou je většina programátorů z praxe zvyklá.

Kód naší aplikace budeme vkládat do složky s názvem `src`. To je zkratka z anglického <it>sources</it>, nebo-li <it>zdrojový kód</it>. Pojďme si vytvořit následující soubory.

`src/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Pokusník</title>
  </head>
  <body>
    <h1>
      <!-- Nadpis stránky -->
    </h1>
    <script src="index.js"></script>
  </body>
</html>
```

`src/style.css`

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

h1 {
  color: orange;
}
```

`src/index.js`

```js
const titleElm = document.querySelector('h1');
titleElm.textContent = 'Pokusník funguje';
```

Celá struktura našeho projektu tedy bude vypadat takto.

```
├──node_modules
├──src
│  ├──index.html
│  ├──index.js
│  └──style.css
├──package-lock.json
└──package.json
```

## Webpack

V minulé lekci jsme viděli, že větší projekty jako naše podcastová aplikace obsahují mnoho JavaScriptových i CSS souborů. To se velmi hodí nám lidem, abychom se v projektu vyznali. Pro naše výsledné stránky to však je problém, protože stahovat velké množství malých souborů je mnohem pomalejší než stahovat jeden velký soubor. Potřebujeme tedy nástroj, který dokáže naše malé souboru spojit do jednoho. Tomuto procesu se říká <term cs="sestavení projektu" en="project building">. Na sestavování projektů existuje mnoho nástrojů, mezi které patří například Browserify, Gulp, Brunch, Webpack, Rollup, Parcel a další. Jeden z nejpopulárnějších nástrojů je v dnešní době Webpack. Budeme jej tedy používat ve zbytku našeho kurzu.

### Nastavení Webpacku

Abychom mohli webpack v našem projektu požívat, musíme jej nejdříve nainstalovat příslušné balíčky.

```sh
$ npm install --save-dev webpack webpack-cli
```

V našem souboru `package.json` nám přibudou dva řádky.

```json
"devDependencies": {
  "handlebars": "^4.7.6",
  "webpack": "^4.43.0",
  "webpack-cli": "^3.3.11"
}
```

Aby se nám projekt dobře sestavoval, změníme obsah sekce `scripts` v `package.json` takto.

````
```json
"scripts": {
  "build": "webpack -d",
  "watch": "webpack -wd",
  "build:prod": "webpack -p",
}
````

Nakonec potřebujeme říct webpacku co má s naším projektem dělat. K tomu potřebujeme v hlavní složce projektu vytvořit configurační soubor `webpack.config.js`, který bude obsahovat následující kód.

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

V tomto kódu v podstatě říkáme, že Webpack má zpracovat soubor `index.js` a vyrobit z něj soubor `bundle.js` ve složce `dist`.

Nyní už můžeme zkusit náš projekt sestavit příkazem

```sh
$ npm run build
```

Pokud se v3echno povedlo, měli byste v konzoli vidět výstup pobodný tomuto.

```
Version: webpack 4.43.0
Time: 89ms
Built at: 05/25/2020 9:56:40 AM
    Asset      Size  Chunks             Chunk Names
bundle.js  4.26 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/index.js] 90 bytes {main} [built]
```

Ve složce projektu by měla přibýt nová složka `dist` se souborem `bundle.js`. To je náš výsledný sestvený soubor. Můžete do něj zkusit nahlédnout, avšak pouze na vlastní nebezpečí, neboť obsahuje mnoho webackového kódu, který se těžko čte a slabším povahám by mohl přivodit záchvat tropického šílenství. Webový prohlížeč však z takového kódu má radost a my zase máme radost z našeho hezky strukturovaného kódu uvnitř složky `src`.

### Soubory CSS a HTML

Všimněte si, že výsledkem naše sestavovacího procesu je pouze jeden JavaSciptový soubor. Žádné HTML ani CSS. Webpack totiž primárně pracuje s JavaScriptem. Pokud chceme, aby zpracoval i HTML a CSS, musíme ho to naučit pomocá takzvaných loaderů. Budeme potřebovat nainstalovat tři loadery.

```sh
$ npm install --save-dev file-loader style-loader css-loader
```

Nyni musíme doplnit kus konfigurace do `webpack.config.js`, abychom webpacku řekli, co má dělat s jednotlivými souboru. Obsah souboru pak bude vypadat takto.

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
};
```

Přibyla nám sekce `modules`, ve kter říkáme, co si má Webpac počít a jednotlivými typy souborů.

Webpack však naše CSS a HTML soubory nezpracuje jen tak sám od sebe. Musíme mu přesně říct, které soubory má zpracovat. A protože Webpack vždy začíná od souboru `index.js`, musíme do něj takzvaně importovat všechny soubory, které chceme v projektu mít.

Náš `index.js` tak bude vypadat takto.

```js
import './index.html';
import './style.css';

const titleElm = document.querySelector('h1');
titleElm.textContent = 'Pokusník funguje';
```

Musíme taky malinko upravit náš `index.html`, protože náš výsledný skript se jmenuje `bundle.js`.

```html
<script src="bundle.js"></script>
```

Nyní už můžeme spustit sestavení.

```sh
$ npm run build
```

Pokud se vše povedlo správně, obdržíme následující výstup.

```
Hash: 56f005029328396e0902
Version: webpack 4.43.0
Time: 571ms
Built at: 05/25/2020 10:36:39 AM
     Asset       Size  Chunks             Chunk Names
 bundle.js   35.6 KiB    main  [emitted]  main
index.html  349 bytes          [emitted]
Entrypoint main = bundle.js
[./node_modules/css-loader/dist/cjs.js!./src/style.css] 337 bytes {main} [built]
[./src/index.html] 54 bytes {main} [built]
[./src/index.js] 136 bytes {main} [built]
[./src/style.css] 519 bytes {main} [built]
    + 2 hidden modules
```

Nyní stačí zajít do nově vytvořené složky `dist` a pomocí Live Serveru otevřít soubor `index.html`.

@exercises ## Cvičení - Základy Webpacku [

- schranka-zalozeni
- schranka-zprava
  ]@
