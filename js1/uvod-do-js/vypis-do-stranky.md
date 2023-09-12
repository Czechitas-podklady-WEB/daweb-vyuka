## Výpis do stránky

Nakonec jsme dospěli až k odhalení tajemství našeho příkazu pro výstup do stránky, který tak trochu slepě používáme už od první lekce. Všimněte si, že v něm používáme operátor `+=`, který jsme si ukázali v předchozí části. V proměnné :var[document.body.innerHTML] má totiž prohlížeč uložen aktuální obsah elementu `<body>` jako jeden dlouhý JavaScriptový řetězec.

Pokud naše stránka vypadá například takto:

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>První program</title>

    <script type="module" src="index.js"></script>
  </head>
  <body>
    <h1>První program</h1>
  </body>
</html>
```

V proměnné :var[document.body.innerHTML] je pak uložen řetězec:

```js
"
    <h1>První program</h1>

"
```

Všiměte si, že řetězec obsahuje i všechny mezery a odsazení.

Pokud chceme obsah stránky změnit, můžeme prostě změnit obsah této proměnné a prohlížeč se už sám postará o překreslení stránky. Například můžete k řetězci v :var[document.body.innerHTML] přičíst další řetězec, klidně i třeba s kouskem HTML.

```jscon
> document.body.innerHTML = '<h1>Nový obsah</h1>';
```
