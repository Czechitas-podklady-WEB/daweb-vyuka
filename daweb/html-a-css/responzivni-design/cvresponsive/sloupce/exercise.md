---
title: Responzivní sloupce
demand: 1
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony [cviceni-sloupce](https://github.com/Czechitas-podklady-WEB/cviceni-sloupce).
Prohlédněte si pečlivě HTML strukturu, všímejte si jak jsou prvky do sebe zanořené.

Nastavte CSS pro třídu `.kontejner` a `.sloupec`:

- ve výchozím stavu (=mobil) budou obdélníky pod sebou
- na obrazovce širší než 800px budou všechny 3 obdélníky vedle sebe a budou roztažené přes celou stránku, všechny budou mít stejnou šířku.

HTML není potřeba nijak upravovat.

Výsledek bude vypadat takto:
::fig[responsive columns result]{src=assets/sloupce-result.gif}

:::solution

```css
@media (min-width: 800px) {
  .kontejner {
    display: flex;
  }
  .sloupec {
    width: calc(100% / 3);
  }
}
```

nebo:

```css
.kontejner {
  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .kontejner {
    flex-direction: row;
  }
  .sloupec {
    width: calc(100% / 3);
  }
}
```

:::
