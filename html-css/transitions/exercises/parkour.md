---
title: Dostihy
demand: 2
---

Zábava na dostizích nekončí! Druhým závodem dne je [parkurové skákání](https://cs.wikipedia.org/wiki/Parkurov%C3%A9_sk%C3%A1k%C3%A1n%C3%AD). Pro tento sport je k dispozici [dřevěná ohrada s koněm](https://codepen.io/ondrejzara/pen/mdeERzb).

Pozici koně v ohradě lze měnit nejlépe vlastnostmi `left` a `top`. Vlevo nahoře je to:
```css
li {
  left: 0px;
  top: 0px;
}
```

Vpravo dole zhruba:
```css
li {
  left: calc(100% - 1.5em);
  top: calc(100% - 1.5em);
}
```

  1. Definujte klíčové snímky (`@keyframes`) animace, která odpovídá pohybu koně uvnitř ohrady. Je na vás, bude-li ji obíhat dokolečka, nebo nějak méně pravidelně.

  1. Přidejte koni tuto animaci s časem osmi vteřin a nekonečným počtem opakování.

  1. Přidejte více koní; každý ať používá tu samou animaci, ale každý s různým časem začátku (`animation-delay`).

