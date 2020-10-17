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

1. Mějme následující pole obsahující několik epizod našeho podcastu.
   ```js
   const episodes = [
     [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
     [128, 'Moderní hrachová polévka', 'Kamila Štancová'],
     [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
     [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
     [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
     [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
     [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová'],
   ];
   ```
   Napište cyklus, který projde toto pole a pro každou položku vytvoří novou epizodu uvnitř elementu `episodes-list`.
