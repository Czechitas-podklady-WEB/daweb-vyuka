---
title: Fine Dining
demand: 1
context: lekce
solutionAccess: protected
---

Použijte šablonu [cviceni-flexibilni-layout](https://github.com/Czechitas-podklady-WEB/cviceni-flexibilni-layout).
Naklonujte si repozitář a spusťte si `npx serve`.

V HTML souboru je připravený obsah stránky. V souboru `style.css` je nastylovaný typ písma (font) a další základní styly. Vlastní styly doplňte dolů pod komentář.

Nastylujte `header` tak, aby nadpis a podnadpis byly vedle sebe na opačných koncích stránky.

Galerii nastylujte tak, aby obrázky byly ve svou sloupcích vedle sebe, které se flexibilně roztahují podle šířky stránky. Potom si zkuste nastylovat 3 a 4 sloupce. Ty už se vám sice nevejdou na menší velikost obrazovky, ale příští hodinu si ukážeme, jak je zobrazovat jen na širších obrazovkách. Pokud už znáte media queries, můžete si rovnou vyzkoušet.

Každou variantu si zkontrolujte v devtools a udělejte si printscreen celé stránky.

Podívejte se na výsledek:
::fig[výsledek]{src=assets/result.png}

:::solution

Varianty pro tři a čtyři sloupce jsou níže uvedeny v blocích `@media(…)` – co znamenají se dozvíte v příští lekci.
Bez použití media queries by byl rozměr přímo u selektoru třídy `.foto`, jako je tomu v případě 2 sloupců.
Když použijete níže uvedené řešení s `@media(…)`, bude se počet sloupců měnit v závislosti na šířce okna prohlížeče.

Protože je v galerii _náhodou_ 12 obrázků, nemusíme extra řešit poslední řádek.
Dvanáct je dělitelné 2, 3 i 4, tedy v každém případě budeme mít i poslední řádek kompletní.

```css
header {
  display: flex;
  justify-content: space-between;
}

.galerie {
  display: flex;
  flex-wrap: wrap;
}

.foto {
  flex: 50%;
}

/*
Řešení pro tři a čtyři sloupce:
*/
@media (min-width: 600px) {
  /* Tři sloupce */
  .foto {
    flex: calc(100% / 3);
  }
}

@media (min-width: 1000px) {
  /* Čtyři sloupce. */
  .foto {
    flex: 25%;
  }
}
```

:::
