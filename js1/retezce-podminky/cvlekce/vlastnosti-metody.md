---
title: Vlastnosti a metody
demand: 1
lead: Vyzkoušejte si vlastnosti a metody řetězců.
solutionAccess: lock
---

V JavaScriptovém programu si založte proměnnou `title` a uložte do ní **název svého oblíbeného filmu** (např. _Pán prstenů_). Proveďte následující úkoly.

1. Vypište do stránky **počet znaků** názvu.
1. Vypište název filmu převedený na **velká písmena**.
1. Vypište z názvu **prvních pět** písmen.
1. Vypište z názvu **posledních pět** písmen.

:::solution

```js
const title = "Lord of the Rings";​
document.innerHTML += title.length;
​document.innerHTML += `<br>`;​
​document.innerHTML += title.toUpperCase();​
​document.innerHTML += `<br>`;​
​document.innerHTML += title.slice(0, 5);
​document.innerHTML += `<br>`;​
​document.innerHTML += title.slice(title.length - 5, title.length)Ł
```
:::
