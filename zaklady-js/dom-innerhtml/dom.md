V předchozích lekcích jsme se naučili psát JavaScriptové programy, které už dokáží dělat něco skutečně užitečného. Co nám však zatím chybí je opravdová interakce s uživatelem. Místo zobrazování vyskakovacích oken budeme chtít pomocí JavaScriptu měnit přímo obsah stránky.

## Document Object Model

K práci s obsahem stránky pomocí JavaScriptu se potřebujeme naučit používat takzvaný DOM, nebo-li _Document Object Model_.

Ve chvíli, kdy uživatel zadá do prohlížeče URL adresu, webový prohlížeč pošle po internetu požadavek na server sídlící na této adrese. Server pošle prohlížeči zpátky HTML požadované stránky. Takové HTML může vypadat například takto.

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="header">Hlavička</div>
    <div class="cards">
      <div class="card">Karta 1</div>
      <div class="card">Karta 2</div>
      <div class="card">Karta 3</div>
    </div>
    <div class="footer">Patička</div>
  </body>
</html>
```

Prohlížeč si HTML přečte a vytvoří si z něj v paměti stromovou strukturu, která reprezentuje obsah stránky. Této struktuře říkáme DOM a můžeme ji znázornit jako na obrázku níže.

::fig[HTML a DOM]{src=assets/dom.svg}

Jakmile má prohlížeč DOM zkonstruovaný, může úplně zahodit a zapomenout celé HTML. Stránku zobrazí podle toho, co je obsaženo v DOMu.

::fig[DOM Stránka]{src=assets/dom-page.svg}

Je to podobné, jak když si například čtete knížku a v hlavě si automaticky vytváříte reprezentaci celého příběhu. Později jej tedy dokážete odvyprávět i bez knihy. Výhoda pro nás programátory spočívá v tom, že prohlížeč nám umožní DOM pomocí JavaScriptu měnit a tím ovlivňovat, co se zobrazuje na stránce.

To hlavní, co je dobré si z tého sekce zapamatovat je, že HTML je pouze text, který se za života stránky nikdy nemění, kdežto DOM je vnitřní reprezentace stránky, která se měnit dá.
