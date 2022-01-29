## Výpis do stránky

Zatím jsme si ještě pořád nevysvětlili, jak přesně dokážeme pomocí JavaScriptu měnit obsah stránky. Ve všech dosavadních ukázkách jsme k tomu používali tajemnou promměnou `document.body.innerHTML`. Tuto speciální proměnnou vytváří prohlížeč a ukládá si v ní obsah elementu `body` jako jeden dlouhý řetězec. 

Mějme následující stránku.

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

Když ji otevřeme v prohlížeči, můžeme si v konzoli ověřit, co proměnná `document.body.innerHTML` obsahuje. 

```jscon
> document.body.innerHTML
"
    <h1>První program</h1>
  
"
```

Obdrželi jsme řetězec s celým HTML stránky včetně všech mezer a odsazení. Pokud chceme obsah stránky změnit, můžeme prostě změnit obsah této proměnné a prohlížeč se už sám postará o překreslení stránky. Vyzkoušejte si to v konzoli.

```jscon
> document.body.innerHTML = '<h1>Nový obsah</h1>';
```

Tímto postupem nahradíme celý obsah stránky obsahem našeho řetězce. Nejčastěji však budeme chtít k obsahu stránky pouze něco přidat. K tomu využijeme operátor `+=`.

```jscon
> document.body.innerHTML += '<p>Výsledek výpočtu</p>';
```

Takto můžeme přímo do stránky vkládat jakékoliv HTML značky a máme tak stránku zcela pod kontrolou.