---
title: Počítání pomocí WHILE
demand: 2
---

Založte JavaScriptový program, který provede následující instrukce.

1. Vypište do konzole text `První WHILE cyklus`. Pomocí cyklu WHILE vypište všecha čísla **od jedné až do sta**.
1. Vypište do konzole text `Druhý WHILE cyklus`. Pomocí cyklu WHILE vypište všechna **sudá čísla od jedné až do sta**.
1. Vypište do konzole text `Třetí WHILE cyklus`. Pomocí cyklu WHILE vypište všechna **sudá čísla pozpátku od sta až k nule**.

---solution

1. ```js
   console.log('První WHILE cyklus')
   let i = 1
   while (i <= 100) {
   	console.log(i)
   	i += 1
   }
   ```
1. ```js
   console.log('Druhý WHILE cyklus')
   let i = 2
   while (i <= 100) {
   	console.log(i)
   	i += 2
   }
   ```
1. ```js
   console.log('Třetí WHILE cyklus')
   let i = 100
   while (i >= 0) {
   	console.log(i)
   	i -= 2
   }
   ```
