---
title: Podcasty
demand: 2
context: nadoma
lead: Vytvořte komponentu pro zobrazení seznamu podcastových epizod.
solutionAccess: protected
---

1. Nastylovanou stránku zobrazující epizody jakéhosi podcastu najdete v repozitáři [cviceni-podcasty](https://github.com/Czechitas-podklady-WEB/cviceni-podcasty). Tento repozitář **nebudeme používat jako šablonu**. Místo toho si repozitář rovnou naklonujte – příkazem `git clone https://github.com/Czechitas-podklady-WEB/cviceni-podcasty.git`. Repozitář použijeme jenom jako vzor, nebudeme v něm nic měnit.
1. Známým postupem si založte nový Vite/JSX projekt.
1. Vytvořte komponentu `Episode`, která bude zobrazovat jednu podcastovou epizodu. Její props budou `num`, `title` a `guest`. Pomocí této komponenty zobrazte stejné dvě epizody, jako vidíte na připravené stránce. Z připravené stránky vykradněte CSS styly a zařiďte, aby vaše aplikace vypadala stejně.
1. Nezapomeňte pro vaši komponentu vytvořit separátní složku s vlastním JavaScriptem a CSS styly.
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

1. Rozmyslete si, která vlastnost se nejlépe hodí jako klíč, a použijte ji, aby JSX přestalp v konzoli prudit, že mu chybí `key` prop.
