## První program

JavaScriptový program je další díl skládačky tvořící naši webovou stránku nebo aplikaci. Pro JavaScriptový kód budeme vždy vytvářet oddělený soubor, podobně jako jsme zvyklí vytvářet oddělený soubor pro CSS styly. JavaScriptovému programu většinou budeme dávat název `index.js` a podobně jako CSS jej musíme do stránky zapojit.

Založme si nejdříve úplně prázdnou stránku:

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>První program</title>
  </head>
  <body></body>
</html>
```

Když tuto stránku zobrazíte v prohlížeči, uvidíte pouze prázdné bílé okno. Ideální inspirace pro naši první JavaScriptovou aplikaci. Založme si soubor `index.js` a vložme do něj následující příkaz.

```js
document.body.innerHTML += '<h1>Vítejte na našem webu</h1>';
```

Co tento kód přesně dělá, se dozvíme za malou chvíli. Nejprve tento program zapojíme do naší stránky. To provedeme tak, že vložíme značku `script` s odkazem na soubor `index.js` do hlavičky stránky.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>První program</title>

  <script type="module" src="index.js"></script>
</head>
```

Pokud nyní v prohlížeči obnovíte stránku, měl byste vidět nadpis :i[Vítejte na našem webu]. Takto jsme do úplně prázdné stránky vložili obsah pomocí JavaScriptu.

Proč se JavaScriptový kód vkládá do stránky tímto způsobem a co přesně znamená atribut `type="module"` si povíme později, až budete malinko zkušenější.

### Středníky

Než rozebereme náš první příklad, všimněte si, že končí středníkem. Takto JavaScript runtime pozná, kde končí jeden příkaz a začíná jiný. Inu, ve skutečnosti by to JavaScript poznal i bez středníků a dokonce bychom je na většině míst ani psát nemuseli. Psaní nebo nepsaní středníků je značně kulturní záležitost, každý na to má svůj názor. Jednou je trendy to, jindy zase ono. My na tomto kurzu budeme středníky používat svědomitě a vám do začátku doporučujeme totéž. Později se jistě sami rozhodnete pro styl, který se vám osobně líbí nejvíce.
