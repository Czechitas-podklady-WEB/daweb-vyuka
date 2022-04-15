---
title: Počítání hodin
demand: 3
---

Napište cyklus WHILE, který do konzole postupně vypíše všechny časové údaje v rámci jednoho dne od 0:00 až po 23:59.

**Ukázka výstupu:**

```
0:00
0:01
0:02
…
23:58
23:59
```

---solution

```js
for (let hodiny = 0; hodiny < 24; hodiny++) {
  for (let minuty = 0; minuty < 60; minuty++) {
    console.log(`${hodiny}:${minuty.toString().padStart(2, '0')}`);
  }
}
```
