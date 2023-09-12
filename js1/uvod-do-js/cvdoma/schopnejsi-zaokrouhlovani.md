---
title: Schopnější zaokrouhlování
demand: 3
lead: Zaokrouhlete číslo na desetiny, setiny a celé stovky.
solutionAccess: lock
---

Mějme v proměnné `x` uloženo nějaké desetinné číslo. Pomocí funkce `Math.round` jej můžeme zaokrouhlit na celá čísla takto.

```jscon
> Math.round(x)
```

Co kdybychom však chtěli zaokrouhlit na desetiny, setiny nebo třeba celé stovky? Napište program, který pomocí funkce `Math.round`

1. zaokrouhlí číslo `x` s přesností na desetiny,
1. zaokrouhlí číslo `x` s přesností na setiny,
1. zaokrouhlí číslo `x` s přesností na celé stovky.

:::solution

```js
const x = 6543.14159;
const naDesetiny = Math.round(x * 10) / 10;
const naSetiny = Math.round(x * 100) / 100;
const naStovky = Math.round(x / 100) * 100;
```

:::
