---
title: Responzivní layout 02
demand: 2
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony [cviceni-layout-02](https://github.com/Czechitas-podklady-WEB/cviceni-layout-02). V repozitáři máte soubor `index.html`, `style.css` a obrázek se zadáním úkolu. Prohlédněte si pečlivě HTML strukturu, všímejte si jak jsou prvky do sebe zanořené.

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
  .menu {
    width: 30%;
  }
  .obsah {
    width: 70%;
  }
}

@media (min-width: 1000px) {
  .menu,
  .reklama {
    width: 20%;
  }
  .obsah {
    width: 60%;
  }
}
```

:::
