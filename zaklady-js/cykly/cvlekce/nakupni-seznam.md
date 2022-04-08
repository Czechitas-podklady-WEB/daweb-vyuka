---
title: Nákupní seznam
demand: 2
---

Mějme pole řetězců představující nákupní seznam

```js
const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice'];
```

1. Napište cyklus, který projde celé toto pole a všechny položky spojí dohromady do jednoho velkého řetězce jako níže.

   ```
   'moukamáslocukrjablkaskořice'
   ```

1. Upravte váš program tak, že výsledný řetězec bude vypadat takto:

   ```
   'mouka,máslo,cukr,jablka,skořice'
   ```

1. Upravte váš program tak, aby výsledný řetězec obsahoval HTML značky.

   ```
   '&lt;li&gt;mouka&lt;/li&gt;&lt;li&gt;m&aacute;slo&lt;/li&gt;&lt;li&gt;cukr&lt;/li&gt;&lt;li&gt;jablka&lt;/li&gt;&lt;li&gt;skořice&lt;/li&gt;'
   ```
1. Vytvořte někde na stránce prázdný číslovaný seznam `ol` a pomocí vlastnosti `innerHTML` do něj vložte řetězec sestavený v předchozím kroku.