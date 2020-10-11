---
title: Podcasty
demand: 2
---

Stáhněte si [základ stránky](assets/podcasty-zadani.zip) zobrazující seznam epizod nějakého podcastu. Prohlédněte si HTML stránku a všimněte si, že jedna epizoda podcastu se zobrazí pomocí tohoto HTML.

```html
<div class="episode">
  <div class="episode__num">127</div>
  <div class="episode__body">
    <div class="episode__title">Hledání plyšového Yettiho</div>
    <div class="episode__guest">host: Vojtěch Ryba</div>
  </div>
</div>
```

1. Vytvořte komponentu `Podcast` se třemi parametry `num`, `title` a `host` představující číslo podcastu, název podcastu a hosta podcastu. Vaše komponenta nechť z těchto dat vyrobí HTML sturkturu pro jeden podcast.
1. V souboru `index.html` smažte obsah elementu `episode-list`. V JavaScriptu vyberte tento element a s použitím komponenty `Podcast` a vlastnosti `innerHTML` v něm vytvořte jednu epizodu podcastu dle nějakých vymyšlených dat.
