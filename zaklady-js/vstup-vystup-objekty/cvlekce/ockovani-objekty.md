---
title: Očkování - objekty
demand: 2
---

Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

1. Vytvořte objekt `person`, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
   ```js
   {
     name: 'Květoslav Voňavý',
     age: 67,
   }
   ```
1. Poté, co uživatel zadá všechny údaje, vypište do stránky objekt `person` v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.

---solution

```js
const person = {
 name: prompt("Jake je vase jmeno a primeni?"),
  age: Number(prompt("Jaky je vas vek?")),
};
​
document.body.innerHTML += "<p>Zadane jmeno je: " + person.name + ", vas vek je: " + person.age + ", boli ste zaregistrovany na ockovanie.</p>";
```
