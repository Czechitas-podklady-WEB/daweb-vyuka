V našem kurzu postupně směřujeme ke stále větším a složitějším aplikacím. Jakmile velikost aplikace přesáhne určitou mez, začne být výhodné ji rozsekat na menší kousky, jakési stavební bloky, ze kterých pak výslednou aplikaci poskládáme jako z kostek lega. Takovým stavebním blokům se často říká <term cs="komponenty" en="components">. V této lekci si ukážeme, jak postavit jednoduchou komponentu a jak ji použít v naší aplikaci.

## Šablony

K tomu, abychom mohli postavit naši první komponentu budeme nejdříve potřebovat větší flexibilitu pro tvorbu HTML pomocí JavaScriput. Do této chvíle jsme naše elementy plnili obsahem pomocí vlastnosti `innerHTML` a interpolace řetězců. Připomeňme si, jak jsme vytvořili element epizody v naší podcastové aplikaci.

```js
const num = 123;
const title = 'Robot, který snědl koblihu';
const guest = 'Radovan Holátko';

const episodeElm = document.createElement('div');
episodeElm.className = 'episode';
episodeElm.innerHTML = `
  <div class="episode__num">${num}</div>
  <div class="episode__body">
    <div class="episode__title">${title}</div>
    <div class="episode__guest">${guest}</div>
  </div>
`;
```

Tento zápis má jednu velkou nevýhodu. Řetězec obsahující naše HTML lze vytvořit jedině ve chvíli, kdy už máme připravený obsah proměnných `num`, `title` a `guest`. Nemůžeme si jej proto nejdříve vytvořit a použít až později. Pokud proměnné `num`, `title` a `guest` ještě neexistují, následující kód vyhodí výjimku.

```js
const episodeHTML = `
  <div class="episode__num">${num}</div>
  <div class="episode__body">
    <div class="episode__title">${title}</div>
    <div class="episode__guest">${guest}</div>
  </div>
`;
```

Z tohoto problému se dostaneme tak, že použijeme skutečnou šablonovací knihovnu.

### Handlebars

Díky šablonám si můžeme náš řetězec s proměnnými připravit dopředu a použít jej až ve chvíli, kdy už víme, jakou mají tyto proměnné mít hodnotu. Šablonovacích knihoven existuje celá řada. My v tomto kurzu použijeme systém [Handlebars](https://handlebarsjs.com/). Abychom mohli Handlebars šablony použít na naší stránce, musíme do hlavičky stránky vložit kód této knihovny.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Šablony</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"></script>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

Pokud tuto stránku otevřeme v konzoli, můžeme si začít hrát se šablonami. Každá šablona je obyčejný řetězec, který ve dvojitých složených závorkách může obsahovat parametry šablony.

```jscon
> const msgTemp = 'Film {{movie}} začne za {{time}} minut.';
```

Každou takovou šablonu musím takzvaně _zkompilovat_ pomocí funkce `Handlebars.compile`. Tato funkce z našeho řetězce vytvoří novou funkci, kterou pak můžeme kdykoliv zavolat s libovolnými hodnotami. Hodnoty pro šablonu se specifikují jako objekt.

```jscon
> const template = Handlebars.compile(msgTemp);
undefined
> template({ movie: 'Harry Potter', time: 20 })
'Film Harry Potter začne za 20 minut.'
> template({ movie: 'Román pro ženy', time: 5 })
'Film Román pro ženy začne za 5 minut.'
```

Takto můžeme pomocí naší připravené šablony vyrobit řetězec s libovolnými hodnotami parametrů. Takto si například můžeme dopředu vytvořit šablony pro epizodu podcastu a pak ji použít pro vytvoření našeho elementu.

```js
const episodeTemplate = Handlebars.compile(`
  <div class="episode__num">{{num}}</div>
  <div class="episode__body">
    <div class="episode__title">{{title}}</div>
    <div class="episode__guest">{{guest}}</div>
  </div>
`);

const episodeElm = document.createElement('div');
episodeElm.className = 'episode';
episodeElm.innerHTML = episodeTemplate({
  num: 123,
  title: 'Robot, který snědl koblihu',
  guest: 'Radovan Holátko',
});
```

@exercises ## Cvičení - šablony [

- sablony
- nazev-kina
- program-kina
  ]@

## Šablony uvnitř HTML

Je šikovné, že si můžeme šablony připravit takto dopředu. Pořád nám však zbývá jedna nepříjemnost. Naše HTML musíme psát dovnitř řetězců a tím přicházíme o zvýrazňování syntaxe. Navíc máme HTML kód rozházeny po celém JavaScriptovém programu místo toho, abychom jej měli na jednom místě tam, kde bychom jej čakeli - uvnitř souboru `index.html`.

Z této prekérie nám pomůže speciální HTML element s výmluvným názvem `template`. Tento element můžeme vložit kamkoliv do našich stránek, jeho obsah se však nikde nezobrazí. Element `template` slouží jako určité místo, kam si můžeme odložit HTML kód, který zobrazíme až pomocí JavaScriptu. Takto si můžeme si můžeme snadno vytvořit šablonu pro naši podcastovou epizodu.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Šablony</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"></script>
  </head>
  <body>
    <template id="episode-templ">
      <div class="episode">
        <div class="episode__num">{{num}}</div>
        <div class="episode__body">
          <div class="episode__title">{{title}}</div>
          <div class="episode__guest">{{guest}}</div>
        </div>
      </div>
    </template>

    <div class="episode-list"></div>

    <script src="index.js"></script>
  </body>
</html>
```

Element s šablonou epizody pak můžeme z dokumentu snadno vybrat a z jeho obsahu zkompilovat Handlebars šablonu.

```js
const episodeTemplate = Handlebars.compile(
  document.querySelector('#episode-templ').innerHTML
);
```

Pomocí této šablony pak zkonstruujeme DOM element naší epizody. Zde náš čeká jeden technický zádrhel, který nám trochu kazí eleganci kód, ale bohužel nejde nijak obejít.

Všimněte si, že do šablony vkládáme i hlavní `div` celé epizody s třídou `episode`. To jsme v předchozích příkladech nedělali. Tento hlavní `div` jsme si vždy vyrobili pomocí `createElement` a pak jej jen naplnili obsahem pomocí `innerHTML`. Tento postup se nám však při použití šablon nehodí. Chceme, aby naše šablona obsahovala HTML celého elementu epizody, ne jen jeho vnitřek.

Pokud však chceme z nějakého řetězce vyrobit DOM elementy, nezbývá nám jiná možnost než použít vlastnost `innerHTML` nějakého jiného elementu. Zařídíme se tedy tak, že vyrobíme dočasný `div`, kterému nastavíme `innerHTML`. Tak uvnitř vyrobíme DOM strukturu naší epizody a pak ji z tohoto dočasného elementu vyjmeme a přesuneme na naši stránku. Náš kód tedy dopadne takto.

```js
const episodeTemplate = Handlebars.compile(
  document.querySelector('#episode-templ').innerHTML
);

const tempElm = document.createElement('div');
tempElm.innerHTML = episodeTemplate({
  num: 123,
  title: 'Robot, který snědl koblihu',
  guest: 'Radovan Holátko',
});
const episodeElm = tempElm.children[0];

const episodesListElm = document.querySelector('.episodes-list');
episodeListElm.appendChild(episodeElm);
```

@exercises ## Cvičení - šablony uvnitř HTML [

- menu
  ]@

## Hlavní komponentové funkce

V terminologii komponentových frameworků jako React nebo Vue se používají ustálené termíny, které popisují jednotlivé fáze života nějaké komponenty.

: render
Vytvořit HTML strukturu komponenty.

: mount
Vložit HTML strukturu komonenty do stránky.

: update
Pokud se něco změnilo, aktualizovat HTML komponenty tak, aby zobrazovala aktuální stav.

@exercises ## Cvičení - šablony uvnitř HTML [

- sablony
- nazev-kina
- program-kina
  ]@

## Tvorba komponent

Nástřel komponenty.

```js
'use strict';

const clockTemplate = Handlebars.compile(
  document.querySelector('#clock-templ').innerHTML
);

const Clock = {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  },

  render() {
    const element = document.createElement('div');
    element.innerHTML = clockTemplate(this);

    element.querySelector('button').addEventListener('click', () => {
      this.hours++;
      this.update();
    });
    return element.children[0];
  },

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  },

  update() {
    const newElm = this.render();
    this.element.replaceWith(newElm);
    this.element = newElm;
  },
};
```
