---
title: Flexbox cardio
demand: 2
solutionAccess: protected
---

Vytvořte si repozitář na základě šablony .
Na procvičení všech vlastnostní flex kontejneru a flex položek je pro vás v repozitáři [cviceni-cardio](https://github.com/Czechitas-podklady-WEB/cviceni-cardio) připravena sada cvičení.
Vytvořte si z této šablony svůj repozitář a naklonujte si ho k sobě.
V jednotlivých složkách je HTML a CSS soubor a také ukázka výsledku.
Nastylujte jednotlivé stránky podle zadání na výsledných obrázcích.

Nezapomeňte, že při spouštění pomocí `npx serve` musíte být v terminálu ve správné složce – v tomto případě tedy ve složce konkrétního cvičení, třeba `flex1`.

:::solution

V řešení jsou uváděny pouze styly doplněné v rámci cvičení. Původní styly ani HTML kód se nemění.

### flex1

```css
.kontejner {
  display: flex;
}

.ctverecek {
  flex: 1 0 25%;
}

.prvni {
  order: 3;
}

.druhy {
  order: 1;
}

.treti {
  order: 4;
}

.ctvrty {
  order: 2;
}
```

### flex2

```css
.kontejner {
  display: flex;
}

.prvni {
  flex: 200px 0 0;
  order: 1;
  /*
  Zde není nutné order zadávat, ale protože
  je zadané u ostatních prvků, je srozumitelnější,
  když se zde uvede a vývojář si ho nemusí domýšlet.
  */
}
.druhy {
  flex: 1;
  order: 3;
}
.treti {
  flex: 1;
  order: 2;
}

.ctvrty {
  flex: 100px 0 0;
  order: 4;
}
```

### flex3

```css
.kontejner {
  display: flex;
}

.prvni {
  flex-grow: 1;
}

.druhy,
.treti {
  flex: 100px 0 0;
}

.ctvrty {
  flex-grow: 2;
}
```

### flex-layout01

```css
.kontejner {
  display: flex;
}

.levy {
  order: 1;
  flex: 25%;
}

.pravy {
  order: 3;
  flex: 20%;
}

.hlavni {
  order: 2;
  flex: 55%;
}
```

### flex-layout02

```css
.kontejner,
.pravy {
  display: flex;
}

.pravy {
  flex-direction: column;
}

.levy,
.pravy,
.horni,
.dolni {
  flex: 50%;
}
```

### flex-layout03

```css
.kontejner {
  display: flex;
  flex-wrap: wrap;
}

.horni {
  flex: 100%;
}

.dolni {
  display: flex;
}

.prvni,
.druhy,
.treti {
  flex: calc(1 / 3);
  /*
  Mohli bychom dát i třeba 33.3%, ale
  3*33.3% bude 99.9%, pořád by nám 0.1% chybělo.
  calc(1 / 3) je přesně jedna třetina a nic nezbyde.
  */
}
```

:::
