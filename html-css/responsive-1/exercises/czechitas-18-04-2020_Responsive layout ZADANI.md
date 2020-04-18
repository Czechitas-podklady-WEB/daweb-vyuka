---
title: Responsivní layout s webovými technologiemi
demand: 3
---

Použijte základní HTML a CSS na stránce [vzoru](https://codepen.io/SimonB87/pen/ExVjXKJ). 

## Proveďte následující úpravy:


### HTML Úpravy

- Posuňte navigaci k pravému kraji obrazovky.
- Všem obrázkům log technologií odeberte atribut `height`

- Pracujte hlavně s CSS media queries pro jednotlivá zařízení.
  - Nejmenší zařízení: `@media screen and (max-width:320px)`
  - Mobily: `@media screen and (min-width: 321px) and (max-width:600px)`
  - Tablety: `@media screen and (min-width: 601px) and (max-width:800px)`
  - Malé Notebooky: `@media screen and (min-width: 801px) and (max-width:1200px)`
  - PC: `@media screen and (min-width: 1201px)`

#### Styly pro celou stránku (globální styly)

- elementu `main` dejte šířku 100%
- element `main` má margin a padding po všech stranách roven nule

- všechny elementy `article` v elementu `main` budou mít šířku 100% a margin po všech stranách roven nule
- všechny elementy `article` v elementu `main` budou mít šířku definovanou až k hranici elementu (box-sizing: border-box;)
- všechny elementy `article` v elementu `main` budou mít hranici silnou bílou čáru s šířkou 10px v bílé barvě po všech stranách 

- třída `".tech-logo"` bude mít výšku rovnou `3rem`

- element `footer` bude mít výšku `6rem`

#### Nejmenší zařízení

- třída `"logo-text"` nebude zobrazována

#### Mobily

- třída `"logo-text"` nebude zobrazována
- element `footer` bude mít výšku `3rem`

#### Tablety

- na každém řádku budou vidět dvě karty technologií
  - tedy: elementy `article` v `main` budou mít šířku poloviny šířky rodičovského elementu

#### Malé Notebooky

- elementy uvnitř `main` budou zarovnány na počátek (`flex-start;`)
- na každém řádku budou vidět tři karty technologií
  - tedy: elementy `article` v `main` budou mít šířku třetiny šířky rodičovského elementu 

#### PC:

- na každém řádku budou vidět čtyři karty technologií
  - tedy: elementy `article` v `main` budou mít šířku třetiny šířky rodičovského elementu 
- element `main` bude mít maximální šířku `1600px` a bude zarovnaná na střed řádku
  - podél něho tedy budou jen bílé okraje


- Proveďtě případně další úpravy, pokud to bude nutné, aby se stránka přiblížili co nejvíce výsledku na  [webu](https://codepen.io/SimonB87/full/rNOVgQv). Zkuste zmenšovat a zvětšovat okno prohlížeče a dívejte se, jak se stránka přizpůsobuje pro jednotlivé šířky okna
- Hotový kód je k dispozici na [webu] (https://codepen.io/SimonB87/pen/rNOVgQv)
