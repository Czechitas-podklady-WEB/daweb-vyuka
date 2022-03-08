## CSS Selektory

Při stylování stránky je nutné přesně specifikovat jaký prvek má mít jaké styly. Pomocí selektorů v CSS vybíráme prvky, na které aplikujeme daný styl.

### Základní selektory

#### Univerzální selektor: `*`

#### Selektor typu element: `h1`

#### Selektor typu třída: `.card`

#### Selektor typu id: `#unique-content`

### Pseudotřídy

Tento zápis při stylování dokáže určit v jakém stavu je element a podle toho styl aplikovat nebo ne. Zápis je:

```css
selector:pseudo-class {
  property: value;
}
```

Existuje mnoho druhů pseudotříd, které určují prvky podle stavu odkazu, chování uživatele, nebo HTML struktury. V HTML tyto třídy nevidíme a prohlížeč si je přidá, pokud prvek stavu odpovídá. Některé často využívané pseudotřídy jsou

#### Odkaz před navštívením `:link`

#### Odkaz po navštívení `:visited`

#### Při najetí myši `:hover`

#### Prvek, který má fokus `:focus`

#### Prvek, který je aktivní `:active`

Existují také pseudotřídy, které vybírají elementy podle jejich pozice v dokumentu

#### Selektor typu n-tý potomek `p:nth-child(n)`

Celý [seznam pseudotříd](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#syntax)

### Kombinátory selektorů

#### Vícenásobný selektor `h1, h2`

#### Selektor pro vícenásobnou třídu `article.active.newsfeed`

#### Selektor typu potomek `div p`

#### Selektor typu přímý potomek `div > p`

### Pseudoelementy

Za zmínku také stojí kategorie pseudoelementů. Ty nám umožňují ve stránce vybrat „virtuální elementy“, které nevidíme v HTML dokumentu, ale může být užitečné s nimi pracovat a přiřadit jim odlišný způsob zobrazení. Pomocí pseudoelementů můžeme například vybrat první písmeno textu, nebo přidat obsah před prvek.

```css
selector::pseudo-element {
  property: value;
}
```

Užitečné pseudoelementy jsou například:

#### První písmeno textu `::first-letter`

#### První řádek textu `::first-line`

#### Obsah před prvkem `::before`

#### Obsah za prvkem `::after`

::codepen{user=marketaanezka id=gOXyjqb tab=html,result}
