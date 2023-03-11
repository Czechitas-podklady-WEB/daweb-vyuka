## Kódování responzivních stránek

### Meta značka viewport

Meta značka `viewport` v hlavičce HTML zajišťuje, že obsah našeho webu se bude přizpůsobovat šířce zařízení a že standardní zobrazení je 1:1, tj. prohlížeč nebude stránku sám zvětšovat nebo zmenšovat (_zoomovat_).

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Document Title</title>
  </head>
  <body>
    ...
  </body>
</html>
```

## Techniky responzivního webdesignu

Máme tři hlavní techniky responzivního webdesignu:

- flexibilní grid
- flexibilní obrázky
- media queries

V této lekci si projdeme flexibilní grid.

### Flexibilní grid

Grid, neboli mřížka, byla původně používaná pro tištěný design. Mřížku tvořil systém sloupců a řádků, na které se umisťuje obsah – představte si třeba staré papírové noviny. Je to ale i velice užitečný návod pro návrh webových designů. [Příklad komponent navrhovaných do grid systému.](https://dribbble.com/shots/15341964-Grid-System-UI-Components)

Protože nevíme, na jak velké obrazovce se bude náš web zobrazovat, je potřeba zajistit, aby se přizpůsobil všem. V našem kódu toho docílíme pomocí relativních jednotek (např. procenta).

::codepen{user=marketaanezka id=RwxpYzY tab=html,result}
