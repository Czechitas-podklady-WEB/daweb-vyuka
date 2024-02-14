---
title: Ultramaraton
demand: 2
lead: Spočítejte, v kolik hodin skončí ultramaratonský závod.
solutionAccess: protected
---

Představte si, že jste pořadatelé ultramaratonského závodu. Závod začíná ve **tři hodiny odpoledne**, což ve 24hodinovém formátu zapíšeme jako **15**. Nejlepší běžec zvládne vaši brutální trasu za **10 hodin**. Doběhne tedy **v jednu hodinu ráno**, v našem formátu zapsáno jako **1**.

1. Založte si JavaScriptový program a uložte čas startu závodu do proměnné `start`.
1. Do proměnné `delka` uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion.
1. Do proměnné `konec` spočítejte, v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky.
1. Vyzkoušejte různé délky a ověřte, že váš postup funguje.

:::solution

```js
const start = 15;
const delka = 10;
const konec = (start + delka) % 24;
document.body.innerHTML = 'Čas konce v hodinách: ' + konec;
```

:::
