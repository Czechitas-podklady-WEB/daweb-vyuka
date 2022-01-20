## První program

Do této chvíle jsme si s runtimem JavaScriptu povídali pouze skrze konzoli. Vždy jsme poslali jeden příkaz a rovnou na něj dostali odpověď. Nyní je čas začít psát programy, tedy nechat náš prohlížeč spustit více příkazů najednou.

Naše JavaScriptové programy budou vždy součástí nějaké webové stránky. Založíme si proto složku s jedním HTML souborem, který prozatím bude obsahovat jen nadpis.

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
alert('ahoj');
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

Pokud nyní soubor `index.html` otevřete v prohlížeči, mělo by na vás vyskočit okno se zprávou :i[ahoj]. Toto okno vytvořila funkce `alert` zavolaná v našem programu.

### Funkce alert

Funkce `alert` vytvoří vyskakovací okno s textem, který jí předáme na vstup. To se nám v začátcích bude hodit pro zobrazování informací uživatelům našeho programu. Až budeme trochu zkušenějši, naučíme se takové informace zobrazovat přímo na stránce.

### Středníky

Téměř každý příkaz v JavaScriptu končí středníkem. Tím JavaScript runtime pozná, kde končí jeden příkaz a začíná jiný. Inu, ve skutečnosti by to JavaScript poznal i bez středníků a ve skutečnosti bychom je na většině míst ani psát nemuseli. Zakopaný pes je však ve slovíčku :i[většině]. Pokud středníky nepíšeme, v některých situacích se může stát, že runtime pochopí náš kód špatně. Abychom si nepřidělávali takto ze začátku starosti, budeme vkládat středníky všude, kde to je možné.

