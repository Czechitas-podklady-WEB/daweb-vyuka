---
title: Stylování sekce profilu herce
demand: 2
---

Použijte HTML strukturu stránky s profilem herce **Rowana Atkinsona** na zdrojove adrese [vzoru](https://codepen.io/SimonB87/pen/XWbxBrJ) nebo použijte váš výsledek z předchozího cvičení. Kód zkopírujte do svého vlastního nového HTML souboru.

## Proveďte následující úpravy:


### HTML Úpravy

- Založte nový element `<nav>` v body jako první element a dejte mu třídu `"siteNav"`. Pak do něj přesuňte celý element `<ul>`, který obsahuje odkazy na jednotlivé sekce stránky (Obecné údaje, Role, Život, Odkazy). Navigací tak posuneme na začátek stránky. Výsledek bude vypadat takto:

```html
<nav class="siteNav" >
  
  <ul>
    <li><a href="#obecneUdaje">Obecné údaje</a></li>
    <li><a href="#role">Role</a></li>
    <li><a href="#zivot">Život</a></li>
    <li><a href="#odkazy">Odkazy</a></li>
  </ul>
  
</nav>

```

- Za element `<nav>` vložte nový element `<main>` a do něj zanořte element `<div>` s třídou `"main-profile"`. Do tohoto elementu s třídou `"main-profile"` přesuňte obrázek s třídou `"profilePicture"`, nadpis `<h1>` s jménem herce a `<p>` s popisem herce. Výsledek bude vypadat takto:

```html
<main>
  <div class="main-profile">
    <img class="profilePicture round" src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip" alt="Mr. Bean">
    <h1>Rowan Atkinson</h1>
    <p>Britský herec a komik. Znamý pro postavu Mr. Beana.</p>
  </div>
</main>
```

### CSS Úpravy - globální změny

- Abychom se zbavili okrajů u elementů, tak musíme opravit globálně okraj všem elementů na stránce. Vytvořte v CSS souboru pravidlo, které přiřadí všem elemenům základní hodnotu vnějšího okraje

```css
*{
  margin: 0;
}
```

- Upravíme dále font (druh písma) celé stránky. Jako hlavní font vybereme `Arial`. Sekundární záložní písmo v našem případě bude 'sans-serif'

```css
body{
  font-family: Arial, sans-serif;
}
```

- Dáme všem nadpisům horní a dolní `padding` o velikosti `3rem` a zarovnáme všechny odstavce na střed 

```css
h2{
  padding: 3rem 0;
  text-align: center;
}
```

### CSS Úpravy - úprava navigace

- Elementu s navígací pro třídu `"siteNav"` zadejte barvu pozadí tmavě modré a výšku 5 bodů výšky displeje

```css
.siteNav{
  background-color: #424687;
  height: 5vh;
}
```

- Musíme změnit zobrazování elementů `<li>` na `display: inline;` abychom je srovnali do linie za sebu. Dále se nyní můžeme zbavit teček uvozující body v seznamu pravidlem `list-style-type: none;`. Dále nastavíme margin vlevo a vpravo na `1rem`. Výšku řádků změníme na pět bodů výšky displeje.

```css
.siteNav li{
  display: inline;
  list-style-type: none;
  margin: 0 1rem;
  line-height: 5vh;
}
```

- Zbavíme se podrtržení odkazu elementu `<a>` pravidlem `text-decoration: none;`. Změníme barvu písma na světle modrou. Pro líbivější styl zvětšíme odstup jednotlivých písmen od sebe na `0.25rem`

```css
.siteNav li a{
  text-decoration: none;
  color: #add8e6;
  letter-spacing: 0.25rem;
}
```

### CSS Úpravy - úprava navigace

- Nyní upravíme hlavní část stránky. Aby byla navigace i hlavní část stránky s fotkou vždy vidět přes celou obrazovku plně, tak elementu main dáme výšku celého displeje sníženou o výšku navigace `100vh - 5vh = 95vh`. Nyní elementu `<main>` přidáme barvu pozadí, která přechází z odstínu oranžové do odstínu růžové po úhlem 45 stupňů (více se můžete dočíst [zde](https://www.w3schools.com/css/css3_gradients.asp))

```css
main{
  height: 95vh;
  background: linear-gradient(45deg, #fba257 0%, #f44242 50%, 	#ab3434 100%);
}
```

- Upravte ...

```css
.main-profile{
  padding-top: 15vh;
}
```

- Smažte původní pravidlo na šířku profilového obrázku s třídou`"profilePicture"` a zmeňte jej na výšku o míře 30 bodů výšky displeje. Upravte zobrazení obrázku na `display: block;`. Odsaďte obrázek na střed pomocí automatického okraje doleva a doprava `margin: 0 auto;`

```css
.profilePicture{
  height: 30vh;
  display: block;
  margin: 0 auto;
}
```
- Udělejte změny pro hlavní nadpis `<h1>` v elementu `<main>` i pro odstavec s popisem herce. Dejte `padding` o úrovni `2rem`. Odsaťe text nas střed a dejte textu tmavě modrou barvu, stejnou jako je hranice profilového obrázku.

```css
main h1, main p{
  padding-top: 2rem;
  text-align: center;
  color: 	#0e367c;
}
```

- Výsledek bude pak vypadat [takto](https://codepen.io/SimonB87/pen/YzXdxwa).
