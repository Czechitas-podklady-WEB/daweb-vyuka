---
title: Podcasty
demand: 2
context: nadoma
lead: Vytvořte komponentu pro zobrazení seznamu podcastových epizod.
solutionAccess: protected
---

1. Vytvořte si repository ze šablony [cviceni-podcasty](https://github.com/Czechitas-podklady-WEB/cviceni-podcasty) a naklonujte si repository z vašeho GitHub účtu na počítač.
1. Otevřete si repository ve VS Code a v terminálu spusťte příkaz `npm install` pro instalaci závislostí. Pokračujte spuštěním vývojového serveru klasickým `npm run dev`.
1. Podívejte se na HTML/JSX kód v `src/pages/index.jsx`. Seznam epizod je v kódu napevno zadrátovaný – my z něj budeme chtít udělat slušně vychované JSX komponenty, které umí zobrazit jakýkoli seznam epizod, který dostanou na vstupu v poli.
1. Vytvořte komponentu `Episode`, která bude zobrazovat jednu podcastovou epizodu. Její props budou `num`, `title` a `guest`. Pomocí této komponenty zobrazte stejné dvě epizody, jaké byly v původním kódu napevno zadrátované.
1. Nezapomeňte pro vaši komponentu vytvořit separátní složku s vlastním JavaScriptem/JSX a CSS.
1. Místo natvrdo zadrátovaných epizod přímo v kódu použijte následujicí data a na stránce zobrazte všechny uvedené epizody.

   ```js
   const episodes = [
     { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
     { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
     { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
     { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
     { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
     { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
     { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
     { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
   ];
   ```

1. Rozmyslete si, která vlastnost se nejlépe hodí jako klíč, a použijte ji, aby JSX přestal v konzoli prudit, že mu chybí `key` prop.
