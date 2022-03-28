## Kódování responzivních stránek

### Meta značka viewport

Meta značka `viewport` v hlavičce html zajišťuje, že obsah našeho webu se bude přizpůsobovat šířce zařízení a že standardní zobrazení je 1:1.

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Document Title</title>
  </head>
  <body>
    ...
  </body>
</html>
```

## Techniky responzivního webdesignu

### Flexibilní grid

Grid, neboli mřížka byla původně používaná pro tištěný design. Mřížku tvořil systém sloupců a řádků, na které se umisťuje obsah. Je to ale i velice užitečný návod pro návrh webových designů. [Příklad komponent navrhovaných do grid systému.](https://dribbble.com/shots/15341964-Grid-System-UI-Components)

Protože nevíme, na jak velké obrazovce se bude náš web zobrazovat, je potřeba zajistit, aby se přizpůsobil všem. V našem kódu toho docílíme pomocí relativních jednotek (např. procenta).

::codepen{user=marketaanezka id=RwxpYzY tab=html,result}

### Flexibilní obrázky

Obrázky na stránce často dostáváme v různých velikostech. Je potřeba, aby uživatel i na malém displeji viděl celý obrázek a ne jen roh nebo výřez.

Fluidní obrázky jsou takové, které se přizpůsobují kontejneru, ve kterém jsou umístěny. Dosáhneme toho nastavením stylu obrázku na

```css
img {
  width: 100%;
}
```

Pokud chceme, aby obrázek měl ideálně šířku 500px, a pokud se nevejde, tak se přizpůsobil obsahu, můžeme použít tento zápis.

```css
img {
  width: 500px;
  max-width: 100%;
}
```

::codepen{user=marketaanezka id=jOYBePP tab=html,result}
<br/>
Další možností jak přizpůsobit obrázek velikosti kontejneru je použití [background image](https://www.freecodecamp.org/news/css-background-image-with-html-example-code/).

Pro případ, že potřebujeme ovlivnit i rychlost načítání, je možnost na menším displeji zobrazovat menší obrázek a na větším zase obrázek v lepší kvalitě. K tomu se používá [srcset](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/).

### Media queries

Hlavním nástrojem pro tvorbu responzivních stránek jsou media queries. Je to způsob, jak v css aplikovat nějaké styly pouze pokud zařízení odpovídá požadovaným parametrům.

```
.button-login {
  width: 100%
}

@media (min-width: 600px) {
  .button-login {
    width: 50%
  }
}
```

Výše uvedený kód můžeme číst jako:
**element s třídou `button-login` má primárně šířku 100% svého rodiče a pokud je zařízení širší než 600px má šířku 50% svého rodiče.**

I přesto, že je možné uvádět v media queries [více dalších podmínek](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), doporučuje se jít od nejmenšího zařízení a přidávát postupně podmínky pro větší a větší šířky displejů.

#### Breakpoint

Breakpoint se říká bodu, kdy se při překročení určité šířky displeje styl naší stránky změní. Neexistují oficiální breakpointy, dobrým pravidlem je **vytvořit breakpoint ve chvíli, kdy současný design už nedává smysl.** Je možné se podívat třeba na breakpointy populárních stylovacích knihoven jako [Boostrap](https://getbootstrap.com/docs/5.0/layout/breakpoints/), [Material UI](https://mui.com/customization/breakpoints/) nebo [Tailwinds](https://tailwindcss.com/docs/screens). Ve vývojářských nástrojích je možné taky najít základní breakpointy.
