---
title: Responzivní menu
demand: 2
context: nadoma
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony [cviceni-menu](https://github.com/Czechitas-podklady-WEB/cviceni-menu).
V repozitáři máte soubor `index.html`, `style.css` a obrázek se zadáním úkolu.

Nakódujte stránku podle obrázku `zadani-ukolu.jpg`.

::fig[responsive menu result]{src=assets/zadani-ukolu.jpg}

<br/>

Rozložení stránky se mění v breakpointech: 640px a 1000px. Bude potřeba nastylovat i položky seznamu, mimo jiné i vlastnost `list-style-type`.

:::solution

```css
.hlavicka {
  display: flex;
  flex-direction: column;
}

.menu {
  display: flex;
}

.logo {
  margin-bottom: 20px;
}

ul {
  margin: 0;
  padding: 0;
  width: 100%;
}

li {
  list-style: none;
  margin: 1px;
  padding: 0;
  text-align: center;
}

@media (min-width: 640px) {
  ul {
    display: flex;
  }

  li {
    width: 25%;
  }
}

@media (min-width: 1000px) {
  .hlavicka {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-bottom: 0;
  }
}
```

:::
