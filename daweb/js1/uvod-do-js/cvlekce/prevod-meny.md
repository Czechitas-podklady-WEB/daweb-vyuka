---
title: Převod měny
demand: 2
context: lekce
lead: Spočítejte, kolik si vyděláte v českých korunách.
solutionAccess: protected
---

1. Založte si novou prázdnou stránku s JavaScriptovým programem.
1. Dejme tomu, že si jako programátoři vyděláváte **20 euro na hodinu**. Uložte tuto hodnotu do proměnné `wageInEur`.
1. Spočítejte, kolik je vaše **hodinová mzda v českých korunách**, jestliže kurz eura je `24.55` Kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné :var[wageInCzk].
1. Vypište obsah proměnné :var[wageInCzk] do webové stránky tak, aby na stránce byl nadpis `h1` s obsahem:

   > Mzda v korunách: 532 Kč

:::solution

```js
const wageInEur = 20;
const rate = 24.55;
const wageInCzk = Math.round(wageInEur * rate);
document.body.innerHTML = '<h1>Mzda v korunách: ' + wageInCzk + ' Kč</h1>';
```

:::
