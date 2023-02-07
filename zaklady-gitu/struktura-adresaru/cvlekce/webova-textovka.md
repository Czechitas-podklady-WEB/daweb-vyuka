---
title: Webová textovka
demand: 3
---

Hru z předchozího cvičení převeďte na webovou stránku.

1. Otevřete si složku `vetrelec` ve _VS Code_.

1. Z jednotlivých textových souborů udělejte soubory HTML s klasickou HTML strukturou (bez `<script>` značky). Můžete začít tím, že všem postupně změníte příponu z `.txt` na `.html`.

1. Přejmenujte `zacatek.html` v kořenové složce na `index.html`.

1. Z textových odkazů udělejte opravdové HTML odkazy ve formátu:

   ```html
   <a href="cesta/soubor.html">přejít do koupelny</a>
   ```

1. Hru si zkuste zahrát.

   1. Pusťte `npx serve` v kořenové složce `vetrelec`.

### Bonus

1. Jednotlivým souborům přidejte nadpis `<h1>` s názvem místnosti/lokace.

1. Do kořenové složky přidejte soubor `styly.css`, ve kterém nastavte písmo `sans-serif` a maximální šířku prvku `body` na `40rem` s vystředěním na střed například přes `margin: 0 auto;`. Ve všech HTML souborech tyto styly nalinkujte.

1. Do kořenové složky přidejte podsložku `obrazky`. Do té stáhněte ilustrační obrázky k jednotlivým místnostem/lokacím z [unsplash.com](https://unsplash.com/). Obrázky přidejte pod nadpisy `<h1>`.
