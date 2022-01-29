## První program

Do této chvíle jsme si s runtimem JavaScriptu povídali pouze skrze konzoli. Vždy jsme poslali jeden příkaz a rovnou na něj dostali odpověď. Nyní je čas začít psát programy, tedy nechat náš prohlížeč spustit více příkazů najednou.

Naše JavaScriptové programy budou vždy součástí nějaké webové stránky. Založíme si proto složku s jedním HTML souborem, který prozatím nebude obsahovat nic.

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>První program</title>
  </head>
  <body>
    <h1>První program</h1>
  </body>
</html>
```

Pro náš JavaScriptový kód budeme vždy vytvářet oddělený soubor podobně jako jste zvyklí vytvářet oddělený soubor pro CSS styly. JavaScriptovému programu většinou budeme dávat název `index.js`. Jeho obsah může vypadat například takto.

```js
document.body.innerHTML = '<h1>ahoj</h1>';
```

Pokud chceme náš program propojit se stránkou, vložíme odkaz na tento soubor do hlavičky stránky.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>První program</title>

  <script type="module" src="index.js"></script>
</head>
```

Pokud nyní soubor `index.html` otevřete v prohlížeči, měl by nadpis stránky znít :i[ahoj]. Všimměte si, že v HTML kódu stránka obsahuje nadpis :i[První program]. Změnu nadpisu stránky jsme zařídili pomocí našeho JavaScriptového programu. Jakým kouzlem jsme to zařídili se dozvíte v další části.

### Středníky

Téměř každý příkaz v JavaScriptu končí středníkem. Tím JavaScript runtime pozná, kde končí jeden příkaz a začíná jiný. Inu, ve skutečnosti by to JavaScript poznal i bez středníků a dokonce bychom je na většině míst ani psát nemuseli. Psaní nebo nepsaní středníků je opět kulturní záležitost podobně jako jednoduché nebo dvojité uvozovky. Každý to má rád po svém, jednou je trendy to, jindy zase ono. My na tomto webu budeme středníky používat svědomitě a vám do začátku doporučujeme totéž. Později se jistě sami rozhodnete pro styl, který se vám osobně líbí nejvíce. 
