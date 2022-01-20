## Výpis do stránky

Do této chvíle jsme pro zobrazení výstupu z našeho programu používali funkci `alert`. Slušně vychované webové aplikace však s uživatelem pomocí vyskakovacích oken nekomunikují. Mnohem šikovnější je vypisovat výstup přímo do stránky. Prohlížeč nám vychází vstříc tím, že celý obsah stránky je uložen ve speciální proměnné s názvem `document.body.innerHTML`. 

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

Obdrželi jsme řetězec s celým HTML stránky včetně všech mezer a odsazení. Pokud chceme obsah stránky změnit, můžeme prostě změnit obsah této proměnné. Vyzkoušejte si to v konzoli.

```jscon
> document.body.innerHTML = '<h1>Nový obsah</h1>';
```

Tímto postupem nahradíme celý obsah stránky obsahem našeho řetězce. Nejčastěji však budeme chtít k obsahu stránky pouze něco přidat. K tomu využijeme operátor `+=`.

```jscon
> document.body.innerHTML += '<p>Výsledek výpočtu</p>';
```

Takto můžeme přímo do stránky vkládat jakékoliv HTML značky a máme tak stránku zcela po kontrolou.