Do této chvíle jsme si s runtimem JavaScriptu povídali pouze skrze konzoli. Vždy jsme posílali jeden příkaz a rovnou na něj dostali odpověď. Nyní je čas začít psát programy, tedy nechat náš prohlížeč spustit více příkazů najednou. 

## První program

Naše JavaScriptové programy budou vždy součástí nějaké webové stránky. Založíme si proto složku s jedním HTML souborem, který prozatím bude obsahovat jen nadpis.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>První program</title>
</head>
<body>
  <h1>První program</h2>
</body>
</html>
```

Podobně jako jste zvyklí u CSS stylů, pro JavaScriptový kód budeme také vždy vytvářet separátní soubor. Nyní mu dáme název `index.js`.  Jeho obsah bude vypadat takto.

```js
'use strict';

document.write('Moc nečum!');
```

Pokud chceme JavaScriptový program propojit se stránku, vložíme odkaz na konec značky `body`.

```html
<body>
  <h1>První program</h2>
  <script src="index.js"></script>
</body>
```

Pokud nyní soubor `index.html` otevřete v prohlížeči, měli byste pod nadpisem vidět text, který jsme předali funkci `document.write`. To je funkce, která dokáže na konec naší stránky vložit libovolný řetězec. Takto může náš jednoduchý program komunikovat s uživatelem. 

Všimněte si, že náš program začíná direktivou `use strict`. Ta je pro nás velmi důležitá obzvlášť na úplném začátku kurzu, protože nás chrání před různými začátečníckými chybami. Zakazuje JavaScript runtimu mimo jiné například vytvářet nové proměnné bez použití `let`, `const` nebo `var`. Vždy, když přiřadíte hodnotu do neexistující proměnné obdržíte chybu místo toho, aby runtime vytvořil novou proměnnou. Tuto direktivu tedy budeme používat ve všech našich programech. 

## Vstup a výstup