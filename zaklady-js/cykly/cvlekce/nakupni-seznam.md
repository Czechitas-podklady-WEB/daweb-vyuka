---
title: Nákupní seznam
demand: 2
---

Mějme pole řetězců představující nákupní seznam

```js
const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
```

1. Napište cyklus, který projde celé toto pole a všechny položky spojí dohromady do jednoho velkého řetězce jako níže. A výsledek vypište do konzole.

   ```
   'moukamáslocukrjablkaskořice'
   ```

1. Upravte váš program tak, že výsledný řetězec bude vypadat takto:

   ```
   'mouka,máslo,cukr,jablka,skořice'
   ```

1. Upravte váš program tak, aby výsledný řetězec obsahoval HTML značky.

   ```
   '<li>mouka</li><li>máslo</li><li>cukr</li><li>jablka</li><li>skořice</li>'
   ```

1. Vytvořte někde na stránce prázdný číslovaný seznam `ol` a pomocí vlastnosti `innerHTML` do něj vložte řetězec sestavený v předchozím kroku.

---solution

1. ```js
   const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
   let vysledek = ''
   for (let i = 0; i < list.length; i++) {
   	vysledek += list[i]
   }
   console.log(vysledek)
   ```

1. ```js
   const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
   let vysledek = ''
   for (let i = 0; i < list.length; i++) {
   	if (i > 0) {
   		vysledek += ','
   	}
   	vysledek += list[i]
   }
   console.log(vysledek)
   ```

1. ```js
   const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
   let vysledek = ''
   for (let i = 0; i < list.length; i++) {
   	vysledek += `<li>${list[i]}</li>`
   }
   console.log(vysledek)
   ```

1. ```js
   document.querySelector('ol').innerHTML = vysledek
   ```
