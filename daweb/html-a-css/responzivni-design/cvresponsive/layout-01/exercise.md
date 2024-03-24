---
title: Responzivní layout 01
demand: 1
context: lekce
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony [cviceni-layout-01](https://github.com/Czechitas-podklady-WEB/cviceni-layout-01). V repozitáři máte soubor `index.html`, `style.css` a obrázek se zadáním úkolu. Prohlédněte si pečlivě HTML strukturu, všímejte si jak jsou prvky do sebe zanořené.

Nakódujte stránku podle obrázku `zadani-ukolu.jpg`.

::fig[responsive layout result]{src=assets/zadani-ukolu.jpg}

Rozložení stránky se mění v breakpointech:

- 640px
- 1000px

HTML není potřeba nijak upravovat.

:::solution

```css
@media (min-width: 640px) {
  .kontejner {
    display: flex;
    flex-wrap: wrap;
  }

  .druhy,
  .prvni {
    width: 50%;
  }
}

@media (min-width: 1000px) {
  .prvni,
  .druhy,
  .treti {
    width: calc(100% / 3);
  }
}
```

:::
