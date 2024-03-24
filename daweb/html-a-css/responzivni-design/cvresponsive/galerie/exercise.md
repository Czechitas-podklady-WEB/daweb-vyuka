---
title: Galerie
demand: 2
context: lekce
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony [cviceni-galerie](https://github.com/Czechitas-podklady-WEB/cviceni-galerie). V repozitáři máte soubor `index.html`, `style.css` a obrázek se zadáním úkolu. Prohlédněte si pečlivě HTML strukturu, všímejte si jak jsou prvky do sebe zanořené.

Zařiďte, aby se fotogalerie měnila tak, že pro různé šířky prohlížeče je na jednom řádku vždy jiný počet obrázků vedle sebe.
Viz obrázek `zadani-ukolu.jpg`.

::fig[responsive layout result]{src=assets/zadani-ukolu.jpg}

Okno prohlížeče:

- výchozí (=mobil) - 1 obrázek na řádku (tj. 12 obrázků pod sebou)
- širší než 500px - 2 obrázky vedle sebe
- širší než 650px - 3 obrázky vedle sebe
- širší než 800px - 4 obrázky vedle sebe
- širší než 1000px - 6 obrázků vedle sebe

HTML není potřeba nijak upravovat.

Výsledek bude vypadat takto:
::fig[responsive layout result]{src=assets/galerie-result.gif}

:::solution

```css
.foto img {
  width: 100%;
}

@media (min-width: 500px) {
  .galerie {
    display: flex;
    flex-wrap: wrap;
  }
  .foto {
    width: 50%;
  }
}

@media (min-width: 650px) {
  .foto {
    width: calc(100% / 3);
  }
}

@media (min-width: 800px) {
  .foto {
    width: calc(100% / 4);
  }
}

@media (min-width: 1000px) {
  .foto {
    width: calc(100% / 6);
  }
}
```

:::
