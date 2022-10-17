---
title: Podcasty
demand: 2
---

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/podcasty-zadani) se stránkou zobrazující seznam epizod nějakého podcastu. Prohlédněte si HTML stránku a všimněte si, že jedna epizoda podcastu se zobrazí pomocí tohoto HTML.

```html
<div class="episode">
  <div class="episode__num">127</div>
  <div class="episode__body">
    <div class="episode__title">Hledání plyšového Yettiho</div>
    <div class="episode__guest">host: Vojtěch Ryba</div>
  </div>
</div>
```

1. Založte složku pro komponentu `Podcast` a vytvořte její kód uvnitř souboru `Podcast/index.js`. Komponenta vyrobí HTML strukturu pro jeden podcast.
1. Do souboru `Podcast/style.css` přesuňte styly související s jedním podcastem.
1. V souboru `index.html` smažte obsah elementu `episodes-list`. V JavaScriptu vyberte tento element a s použitím komponenty `Podcast` a vlastnosti `innerHTML` v něm vytvořte jednu epizodu podcastu dle nějakých vymyšlených dat.
1. Mějme následující pole obsahující několik epizod našeho podcastu.
   ```js
   const episodes = [
     {
       num: 127,
       title: 'Hledání plyšového Yettiho',
       guest: 'Vojtěch Ryba',
     },
     {
       num: 128,
       title: 'Moderní hrachová polévka',
       guest: 'Kamila Štancová',
     },
     {
       num: 129,
       title: 'Poloautomatické zrcadlo',
       guest: 'Janka Janovská',
     },
     {
       num: 130,
       title: 'Máčené hlavy parlamentu',
       guest: 'Jonáš Daněk',
     },
     {
       num: 131,
       title: 'Služby na hraně přívěsu',
       guest: 'Tereza Křivánková',
     },
     {
       num: 132,
       title: 'Klasifikace sněžných klokanů',
       guest: 'Josef Stix',
     },
     {
       num: 133,
       title: 'Rybolov v Oceánu bouří',
       guest: 'Ludmila Gajová',
     },
   ];
   ```
   V hlavním souboru `index.js` pomocí vaší komponenty zobrazte toto pole na stránce. Nezapomeňte na správné importy/exporty.
