---
title: Obsah elipsy
demand: 1
offerSolution: true
---

:::assign
Zlovolní zahrádkáři nám chtějí stížit výměru pozemků a proto si pořídíli pozemek ve tvaru elipsy.

::fig[Elipsa]{src=assets/ellipse.png size=60}

Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π.

Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci `ellipseArea`, která spočítá plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné `Math.PI`.
:::

:::solution
```
const ellipseArea = (width, height) => {
  return (width / 2) * (height / 2) * Math.PI
}
```
:::