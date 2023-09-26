---
title: Flexibilní článek
demand: 2
---

Použijte šablonu [cviceni-flexibilni-clanek](https://github.com/Czechitas-podklady-WEB/cviceni-flexibilni-clanek).
Naklonujte si repozitář a spusťte si `npx serve`.

V HTML souboru je připravený obsah stránky. V souboru `style.css` je základní stylování, vlastní styly přidejte dolů pod komentář.

Nastylujte flexibilní layout článku. Na širších obrazovkách, kde se obrázek a text vejdou vedle sebe, by měl obrázek zabírat 40% boxu a text 60% boxu.

Jak se bude zmenšovat obrazovka, bude se zmenšovat šířka obrázku i textu. Když dosáhne obrázek své minimální velikosti 250px, měl by se text zalomit dolů pod něj.

Aby se nám obrázek při zvětšování obrazovky moc neroztáhl, měl by mít nastavenou maximální šířku 300px.

Cvičení je převzaté z knihy [CSS Moderní layout](https://www.vzhurudolu.cz/css-layout/), kde je mnoho skvělých tipů, jak si procvičit flexbox a další CSS techniky.

Výsledek by měl vypadat následovně
::fig[výsledek]{src=assets/flexi-clanek.gif}

:::solution

```css
.article {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.article__image {
  flex: 1 1 40%;
  max-width: 300px;
  min-width: 250px;
}

.article__text {
  flex: 1 1 60%;
}
```

:::
