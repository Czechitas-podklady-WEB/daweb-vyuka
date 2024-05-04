---
title: Žárovka
lead: 'Ovládejte žárovku.'
demand: 2
context: lekce
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-zarovka](https://github.com/Czechitas-podklady-WEB/cviceni-zarovka) se stránkou, která zobrazuje obyčejnou žárovku.

Cílem bude, aby se po stisknutí klávesy žárovka na stránce rozsvítila (k elementu žárovky `.bulb` se přidá třída `bulb--on`, která pomocí CSS zařídí rozsvícení žárovky). Po té vylepšíte program tak, aby dalším stisknutím klávesy žárovka zase zhasla – a tak stále dokola.

1. Budete potřebovat reagovat na událost `keydown`. Pozor na to, že události z klávesnice získávají pouze elementy, které mají :term{cs="zaměření" en="focus"}. Focus mají třeba formulářová políčka, když do nich uživatel klikne. Aby získal focus element `div` by ale bylo obtížné. Proto posluchač události navěsíme na `document`, tedy na celou webovou stránku. Tím pádem se o stisknutí klávesy dozvíme, ať má focus kterýkoli prvek na stránce. Při zkoušení vašeho kódu si ověřte, že má focus okno prohlížeče – než stisknete klávesu, klikněte myší do webové stránky.
1. Dá se zjistit, kterou klávesu uživatel stiskl. My chceme, aby žárovka reagovala na libovolnou klávesu, proto to nebudeme řešit – stačí nám informace, že došlo k události `keydown`.
1. Do ovladače události (funkce), který reaguje na událost `keydown`, přidejte kód, který elementu s žárovkou (s třídou `bulb`) přidá třídu `bulb--on`. Žárovka by se takto měla rozsvítit.
1. Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula (tj. odstraní se třída `bulb--on`).
1. Opakovaným mačkáním kláves tak můžeme žárovku rozsvěcovat a zhasínat.
1. Když držíte klávesu, prohlížeč automaticky opakovaně posílá událost `keydown`. Vyzkoušejte, že když podržíte nějakou klávesu, žárovka se bude rychle rozsvěcet a zhasínat.

::fig[ukázka řešení]{src=assets/ukazka.gif}

:::solution

Rozsvěcení žárovky:

```js
const bulbElm = document.querySelector('.bulb');
document.addEventListener('keydown', () => {
  bulbElm.classList.add('bulb--on');
});
```

Rozsvěcení a zhasínání žárovky:

```js
const bulbElm = document.querySelector('.bulb');
document.addEventListener('keydown', () => {
  if (bulbElm.classList.contains('bulb--on')) {
    bulbElm.classList.remove('bulb--on');
  } else {
    bulbElm.classList.add('bulb--on');
  }
});
```

Jednodušší rozsvěcení a zhasínání žárovky:

```js
const bulbElm = document.querySelector('.bulb');
document.addEventListener('keydown', () => {
  bulbElm.classList.toggle('bulb--on');
});
```

:::
