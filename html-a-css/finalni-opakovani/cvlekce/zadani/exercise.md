---
title: Seznámení se s projektem
demand: 1
---

Zadání úkolu je v [repozitáři chata arnica](https://github.com/Czechitas-podklady-WEB/chata-arnica). Udělejte si **fork** a naklonujte si ho k sobě. Přesuňte se do správně složky a pomocí `npx serve` si projekt spusťte.

Ve složce uvidíte několik souborů. Kromě složek s obrázky a ikonkami jsou tu soubory

- `index.html` - tady je html struktura projektu, není potřeba nijak upravovat, pouze si ji prohlédněte a všímejte si, jaké třídy jsou na jakých elementech. Část v html je zakomentovaná, ta je připravená pro bonusový úkol.
- `style.css` - tady jsou připravené styly. Styly **nepřepisujte**, pouze přidávejte své styly podle zadání
- `index.js` - tento soubor je připravený na bonusový úkol
- `toggle-switch.css` - tento soubor je připravený na bonusový úkol

### Připravené CSS

V souboru `style.css` vidíte připravené nějaké stylování, většinou marginy, paddingy a velikost fontů. Na začátku souboru je sekce **CSS variables**. V této sekci jsou definované barvy, které budeme v projektu používat. Použití proměnných v CSS je dobrá praktika, protože je možné si na začátku definovat nějaké hodnoty a ty potom pouze použít při stylování jednotlivých elementů.

V CSS se proměnné definují většinou v základním elementu souboru, může to být samotný element `html` a nebo element `:root`. Proměnné definujeme takto:

```css
html {
  --font-large: 2rem;
}
```

a používají se takto:

```css
.section-title {
  font-size: var(--font-large);
}
```

## Tipy pro práci na projektu

- Do souboru `index.html` není potřeba nic přidávat ani přepisovat. Třídy už jsou na elementech připravené.
- Při stylování používejte pouze selektory třídy (kromě stylování elementu `body`). Není potřeba používat kombinátory selektorů, píšeme ploché CSS
- Při stylování pište první styly pro mobil. V souboru je pište **nad** media queries pro desktop!
- Aktivně používejte devtools, styly si zkoušejte a kontrolujte si, že stylujete správný element
- Při stylování na mobil se v devtools dívejte na šířku displeje mobilu (cca 360px - 500px), při stylování šiřších displejů potom na odpovídající šířky
