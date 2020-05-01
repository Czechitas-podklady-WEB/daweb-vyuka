---
title: Podcasty
demand: 3
---

Stáhněte si [základ stránky](../assets/podcasty-zadani.zip) zobrazující seznam epizod nějakého podcastu. Prohlédněte si HTML stránky. Všimněte si, že jedna epizoda podcastu se zobrazí pomocí tohoto HTML.

```html
<div class="episode">
  <div class="episode__num">127</div>
  <div class="episode__body">
    <div class="episode__title">Hledání plyšového Yettiho</div>
    <div class="episode__guest">host: Vojtěch Ryba</div>
  </div>
</div>
```

1. V souboru `index.html` smažte obsah elementu `episodes`. V JavaScriptu vyberte tento element a s použitím vlastnosti `innerHTML` v něm vytvořte jednu epizodu podcastu dle hodnot uložených v proměnných `number`, `title` a `guest`.
1. Mějme následující pole obsahující několik epizod našeho podcastu.
   ```js
   const episodes = [
     [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
     [128, 'Moderní hrachová plolévka', 'Kamila Štancová'],
     [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
     [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
     [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
     [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
     [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová'],
   ];
   ```
   Napište cyklus, který projde toto pole a pro každou položku vytvoří novou epizodu uvnitř elementu `episodes`.
