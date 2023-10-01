## Techniky responzivního webdesignu

Máme tři hlavní techniky responzivního webdesignu, v minulé lekci jsme prošli flexibilní layout, dnes se zaměříme na další dvě:

- flexibilní obrázky
- media queries

### Flexibilní obrázky

Obrázky na stránce často dostáváme v různých velikostech. Je potřeba, aby uživatel i na malém displeji viděl celý obrázek a ne jen roh nebo výřez, nebo aby obrázek nezabral celou stránku a nevytvářel nám zbytečné scrollbary.

Fluidní obrázky jsou takové, které se přizpůsobují kontejneru, ve kterém jsou umístěny. Pokud chceme, aby obrázek zabíral celou šířku svého kontejneru, nastavíme:

```css
img {
  width: 100%;
}
```

Toto ale znamená, že se při zvětšení kontejneru obrázek může roztáhnout nad svojí původní šířku, a mít tak horší kvalitu. Pokud chceme, aby se obrázek přizpůsobil obsahu, ale nepřekročil svoji původní velikost, použijeme `max-width`. Zároveň můžeme využít `width` pro specifikování jeho ideální šířky.

```css
img {
  max-width: 100%;
  width: 500px;
}
```

Další možností jak přizpůsobit obrázek velikosti kontejneru je použití [background image](https://www.freecodecamp.org/news/css-background-image-with-html-example-code/).

#### Různé velikosti podle zařízení

U obrázků je také dobré myslet na jejich datový objem, abychom zbytečně nenutili uživatele mobilních zařízení stahovat obrázky o velikosti pro desktop. Nechceme jim vyplýtvat data ani zpomalovat rychlost načítání stránky. V ideálním případě do HTML připravíme různé varianty velikostí.

```html
<img
  srcset="large-img.jpg 1024w, middle-img.jpg 640w, small-img.jpg 320w"
  src="small.jpg"
/>
```

Kromě vlastnosti `src` tedy přidáme ještě vlastnost `srcset`, kde uvedeme varianty obrázku a jeho šířku. Prohlížeč pak sám podle šířky viewportu a hardwarového rozlišení zařízení vybere vhodný obrázek. Výpočet pro výběr obrázku je jednoduchý: šířka okna x poměr harwarových pixelů vůči CSS pixelům (_device-pixel-ratio_). (Vzpomeňmě si na předchozí lekci, kde jsme zmiňovali, že zařízení s vysokým rozlišením můžou mít poměr 2, 4 atp.)

Např.: U telefonu s velikostí displeje 400px a poměrem pixelů 2, vybere prohlížeč největší obrázek large-img, který se nejvíce blíží k ideální velikosti 800px.

Jak vidíte, připravit bitmapové obrázky pro responzivní web nemusí být jednoduché. Nejlepší je proto využívat vektorového formátu SVG, kde je to možné. Oproti bitmapám má menší datový objem a je nezávislý na zmíněném device-pixel-ratio. [Více o svg.](https://www.vzhurudolu.cz/prirucka/svg)

### Media queries

Hlavním nástrojem pro tvorbu responzivních stránek jsou media queries. Je to způsob, jak v CSS aplikovat nějaké styly pouze pokud zařízení odpovídá požadovaným parametrům.

```css
.button-login {
  width: 100%;
}

@media (min-width: 600px) {
  .button-login {
    width: 50%;
  }
}
```

Výše uvedený kód můžeme číst jako:
**element s třídou `button-login` má primárně šířku 100% svého rodiče a pokud je zařízení širší než 600px má šířku 50% svého rodiče.**

Kromě podmínky se šířkou se můžete často setkat s určením typu média - zda jde o obrazovku nebo tisk.

```css
@media screen and (min-width: 600px) {
}

@media print {
}
```

::fig[BEM Block]{src=assets/css-media-query.png}

I přesto, že je možné uvádět v media queries [více dalších podmínek](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), nás zajímá hlavně vlastnost `min-width`. Následujeme mobile-first přístup a tak začínáme od nejmenší velikosti a postupně přidáváme podmínky se zvětšující se šířkou displeje.

#### Breakpoint

Breakpoint se říká bodu, kdy se při překročení určité šířky displeje styl naší stránky změní. Neexistují oficiální breakpointy, dobrým pravidlem je **vytvořit breakpoint ve chvíli, kdy současný design už nedává smysl.** S počtem breakpointů to ale nesmíme přehánět, protože budeme muset pro každý přidávat další media query. Pro inspiraci je možné se podívat třeba na breakpointy populárních stylovacích knihoven jako [Boostrap](https://getbootstrap.com/docs/5.0/layout/breakpoints/), [Material UI](https://mui.com/customization/breakpoints/) nebo [Tailwind](https://tailwindcss.com/docs/screens). Ve vývojářských nástrojích je možné taky najít základní breakpointy.
