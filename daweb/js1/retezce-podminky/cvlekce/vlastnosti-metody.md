---
title: Vlastnosti a metody
demand: 1
context: cvlekce
lead: Vyzkoušejte si vlastnosti a metody řetězců.
solutionAccess: protected
---

V JavaScriptovém programu si založte proměnnou `title` a uložte do ní **název svého oblíbeného filmu** (např. _Pán prstenů_). Proveďte následující úkoly.

1. Vypište do stránky **počet znaků** názvu.
1. Vypište název filmu převedený na **velká písmena**.
1. Vypište z názvu **prvních pět** písmen.
1. Vypište z názvu **posledních pět** písmen.

:::solution

```js
const title = "Lord of the Rings";​
document.body.innerHTML += title.length;
​document.body.innerHTML += `<br>`;​
​document.body.innerHTML += title.toUpperCase();​
​document.body.innerHTML += `<br>`;​
​document.body.innerHTML += title.slice(0, 5);
​document.body.innerHTML += `<br>`;​
​document.body.innerHTML += title.slice(title.length - 5, title.length)Ł
```

:::
