## CSS

**CSS** (Cascading style sheets) se do češtiny překládá jako Kaskádové styly, ale my budeme používat anglický výraz _css_ nebo prostě _styly_. CSS nám umožňuje stylovat - upravovat, obarvovat, posouvat, pozicovat - prvky na naší HTML stránce. Jak už víme, CSS soubory se na HTML soubory napojují v hlavičce (`head`), a to pomocí značky `link`.

### Syntax CSS souborů

::fig[CSS syntax]{src=assets/csssyntax.jpg}

### Selektory

Prvky na stránce vybíráme pomocí **selektorů**.

- `*` tento selektor nám vybere všechny prvky.
- `h1` můžeme vybírat podle značky
- `.content` podle třídy
- `#unique-id` nebo podle id

Selektor podle id zmiňujeme, my ale pomocí něj stylovat nebudeme, není to "good practice". Id určitého typu totiž může být na stránce pouze jedno, a to by nám komplikovalo efektivní stylování našich stránek. Bude se nám ale hodit při lekcích Javascriptu.

### Dědičnost (inheritance)

Dědičnost v CSS znamená, že vlastnost, která je nastavená na rodiči, se projeví i na všech jeho dětech. Vlastnosti, které se dědí jsou například barva `color` nebo font písma `font-family`. Naopak nedědí se vlastnost `border`, `height`, `margin`, a další.

### Box model

Všechny prvky na stránce jsou v základu hranaté / obdélník / box.

**Box model** je souhrnný název pro skupinu vlastností, která ovlivňuje vzhled a chování tohoto obdélníku. Těmito vlastnostmi myslíme:

- samotný obsah prvku
- **`margin`** - okraj okolo prvku vně rámečku
- **`padding`** - okraj okolo prvku unvitř rámečku
- **`border`** - rámeček, skládá se z vlastností
  - `border-width` `border-style` `border-color`
- **`width`** - šířka
- **`height`** - výška

::fig[Box model]{src=assets/boxmodel.png}

Pokud v CSS nastavíme

```css
* {
  box-sizing: border-box;
}
```

bude výška a šířka prvku v sobě zahrnovat i padding, border a margin.
