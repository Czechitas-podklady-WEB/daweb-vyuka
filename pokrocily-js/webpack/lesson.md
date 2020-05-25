## NPM

V lekci o komponentách jsme poprvé potkali takzvanou <term cs="knihovnu" en="library">. Knihovna je v podstatě ucelená sada funkcí, které řeší nějakou konkrétni věc. Například šablonovací systém Handlebars je knihovna, která nám umožňuje v naších programech používat pokřočilé šablony.

Knihoven existuje obrovská spousta a každá řeší nějaký problém jako jsou například pokročilé matematické výpočty, různé algoritmy, práce s datem a časem, zpracování dat nebo práce s 2D i 3D grafikou.

Aby byl v JavaScriptových knihovnách trochu pořádek a neváleli se jen tak všude možně po internetu, máme k dispozici takzvaný Node Package Manager (NPM).

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

## Struktura projektu
