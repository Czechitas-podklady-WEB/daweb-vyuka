## CSS 
**CSS** (Cascading style sheets) se do češtiny překládá jako Kaskádové styly, ale my budeme používat anglický výraz *css* nebo prostě *styly*. CSS n8m umožňuje stylovat - upravovat, obarvovat, posouvat, pozicovat - prvky na naší HTML stránce. Jak už víme, CSS soubory se na HTML soubory napojují v hlavičce (`head`), a to pomocí značky `link`.

Syntax CSS souborů: 
IMG csssyntax.jpg

### Selektory 
Prvky na stránce vybíráme pomocí **selektorů**. Selektor `*` nám vybere všechny prvky. Dál můžeme vybírat podle značky `h1`, třídy `.content` nebo id `#unique-id`.    
Selektor id zmiňujeme, my ale pomocí něj stylovat nebudeme, není to "good practice". Id určitého typu totiž může být na stránce pouze jedno, a to by nám komplikovalo efektivní stylování našich stránek. Bude se nám to ale hodit při lekcích Javascriptu!

### Dědičnost (inheritance)
Dědičnost v CSS znamená, že vlastnost, která je nastavená na rodiči, se projeví i na všech jeho dětech. Vlastnosti, které se dědí jsou například barva `color` nebo font písma `font-family`. Naopak nedědí se vlastnost `border`, `height`, `margin`, a další. 

### Box model 
Všechny prvky na stránce jsou v základu hranaté / obdélník / box. 
Box model je souhrnný název pro skupinu vlastností, která ovlivňuje vzhled a chování tohoto obdélníku. Je to jak samotný obsah prvku, tak také `padding`, `border` a `margin`. Ty ovlivňují, jak je prvek vysoký a široký (`height` a `width`). 

Pokud v CSS nastavíme vlastnost `box-sizing` na `border-box`, bude výška a šířka prvku v sobě zahrnovat i padding, border a margin. 