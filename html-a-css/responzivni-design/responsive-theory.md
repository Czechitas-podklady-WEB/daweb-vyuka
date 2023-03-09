## Techniky responzivního webdesignu
Máme tři hlavní techniky responzivního webdesignu, v minulé lekci jsme prošli flexibilní grid, dnes se zaměříme na další dvě: 
- flexibilní obrázky
- media queries

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
