## CSS Selektory

Při stylování stránky je nutné přesně specifikovat jaký prvek má mít jaké styly. Pomocí selektorů v CSS vybíráme prvky, na které aplikujeme daný styl.

### Základní selektory

#### Univerzální selektor: `*`

Vybere všechny elementy.

#### Selektor typu element: `h1`

Vybere všechny elementy `h1`

#### Selektor typu třída: `.card`

Vybere všechny elementy, které mají třídu `card`

#### Selektor typu id: `#unique-content`

Vybere všechny elementy, které mají id `unique-content`

### Pseudotřídy

Tento zápis při stylování dokáže určit v jakém stavu je element a podle toho styl aplikovat nebo ne. Zápis je:

```css
selector:pseudo-class {
  property: value;
}
```

Existuje mnoho druhů pseudotříd, které určují prvky podle stavu odkazu, chování uživatele, nebo HTML struktury. V HTML tyto třídy nevidíme a prohlížeč si je přidá, pokud prvek stavu odpovídá. Některé často využívané pseudotřídy jsou

#### Odkaz před navštívením `:link`

Aplikuje stylování, pokud je element odkaz a uživatel ho zatím nenavštívil.

#### Odkaz po navštívení `:visited`

Aplikuje stylování, pokud je element odkaz, který uživatel již navštívil.

#### Při najetí myši `:hover`

Aplikuje stylování, pokud nad ním uživatel přejede myší.

#### Prvek, který má fokus `:focus`

Aplikuje stylování, pokud má na sobě element fokus (projeví se nejčastěji na tlačítkách a inputech)

#### Prvek, který je aktivní `:active`

Aplikuje stylování, pokud je prvek aktivní - například tlačítko, na které uživatel právě kliká.

</br>

Existují také pseudotřídy, které vybírají elementy podle jejich pozice v dokumentu

#### Selektor typu n-tý potomek `p:nth-child(n)`

Za `n` je možné si dosadit jakékoli číslo.
Selektor **`p:nth-child(3)`**, vybere ten element `p`, který je třetím potomkem svého rodiče. Je možné používat i násobky.
Selektor **`div:nth-child(2n)`**, vybere všechny elementy `div`, které jsou sudé potomky svého rodiče.
Nezapomeňte, že při výpočtu se počítají všechny potomci v daném rodiči, ne pouze paragrafy nebo pouze divy.
</br>

Pro referenci si můžete pročíst celý [seznam pseudotříd](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#syntax)

### Selektor podle atributu

Pomocí CSS selektorů je možné vybírat elementy v HTML podle toho, jaké mají artibuty.

#### `a[href="https://stage.kodim.cz/"]`

Pomocí tohoto selektoru vybíráme prvek `a`, který má atribut `href`, jehož hodnota je `https://stage.kodim.cz/`.
Je možné vybírat podle přesné hodnoty atributu, nebo podle toho zda atribut na nějakou hodnotu začíná, končí nebo ji obsahuje.

Pro referenci si můžete pročíst celý [seznam selektorů podle atributu](https://css-tricks.com/almanac/selectors/a/attribute/).

### Kombinátory selektorů

#### Vícenásobný selektor `h1, h2`

Vybere všechny elementy `h1` a na všechny elementy `h2`

#### Selektor pro vícenásobnou třídu `p.active.newsfeed`

Vybere elementy `p`, které mají třídu `active` a zároveň třídu `newsfeed`

#### Selektor typu potomek `div p`

Vybere všechny elementy `p`, které jsou potomky elementu `div`, a to na jakékoli úrovni zanoření.

#### Selektor typu přímý potomek `div > p`

Vybere všechny elementy `p`, které jsou přímí potomci elementu `div`.

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
