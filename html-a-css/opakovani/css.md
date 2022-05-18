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
- **`width`** - šířka
- **`height`** - výška
- **`padding`** - okraj okolo prvku unvitř rámečku
- **`border`** - rámeček, skládá se z vlastností
  - `border-width`, `border-style`, `border-color`
- **`margin`** - okraj okolo prvku vně rámečku

::fig[Box model]{src=assets/boxmodel.png}

Pokud v CSS nastavíme

```css
* {
  box-sizing: border-box;
}
```

bude výška a šířka prvku v sobě zahrnovat i padding a border.

### Jednotky v CSS

Hodnoty velikostí a vzdáleností můžeme při kódování webových stránek určovat pomocí různých jednotek.

#### `px`

Pixely jsou jednou z nejpoužívanějších absolutních jednotek a původně jsou definovány jako 1/96 palce. Tato velikost odpovídala až do doby, kdy se začaly vyvíjet kvalitnější monitory s velikým rozlišením. Proto v současné době už na nějakých monitorech 1 pixel přesně neodpovídá 1/96 palce.

#### `em`

Pokud použijeme na určení velikosti jednotku **em**, znamená to velikost závisející na velikosti fontu rodičovského elementu. Pokud má rodič nastavenou `font-size: 12px`, a my pak použijeme velikost `2em`, bude to reprezentovat `24px`.

#### `rem`

Jednotka **rem** je velice podobná jednotce `em` s tím rozdílem, že velikost určujeme v poměru vůči velikosti fontu **root elementu**, tedy **html** elementu. Pokud je v dokumentu nastavena `font-size: 16px` a my nastavíme na našem prvku `font-size: 1.25rem` bude to znamenat 16\*1.25, tedy `20px`.

#### `%`

Procenta vyjadřují velikost v procentech relativně k velikosti rodiče.

#### `vw, vh`

Jednotky `vw` a `vh` reprezentují **viewport width** a **viewport height**, tedy celá šířka nebo výška průhledu (toho, co právě vidíme v okně, ne celé stránky). Element, který má nastaveno `width: 100vw`, zabírá celou šířku viewportu. Nastavení `height: 50vh` znamená 50% výšky viewportu.

### Funkce calc

Funkce `calc` se v CSS používá, pokud nedokážeme určit přesnou výšku pomocí celých jednotek. Výhodou je, že můžeme počítat pomocí kombinace různých jednotek. Například potřebujeme, aby element vyplnil celou výšku viewportu kromě headeru, který má výšku 50px. Toto je možné napsat jako:

```css
.content {
  height: calc(100vh - 50px);
}
```
