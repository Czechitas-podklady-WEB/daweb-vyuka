---
title: Vlastnosti a metody
demand: 1
---

V **konzoli prohlížeče** si založte proměnnou `title` a uložte do ní **název svého oblíbeného filmu** (např. _Pán prstenů_). Proveďte následující úkoly.

1. Vypište do konzole **počet znaků** názvu.
1. Vypište název filmu převedený na **velká písmena**.
1. Vyřízněte z názvu **prvních pět** písmen.
1. Vyřízněte z názvu **posledních pět** písmen.

---solution

```js
const title = "Lord of the Rings"
​
// Vypište do konzole počet znaků názvu.
​
title.length
​
// Převeďte název filmu na velká písmena.
​
title.toUpperCase()
​
// Vyřízněte z názvu prvních pět písmen.
​
title.slice(0, 5)
​
// Vyřízněte z názvu posledních pět písmen.
​
title.slice(title.length - 5, title.length)
```
