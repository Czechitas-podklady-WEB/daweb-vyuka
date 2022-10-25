---
title: E-maily - načítání dat
demand: 3
---

V aplikaci *E-maily* vyrobíme komponentu pro zobrazování složek pro přečtené a nepřečtené zprávy.

1. Ve vašem projektu předěleje metodu `renderSection` na komponentu `EmailSection`. Komponenta bude očekávat *props* ve tvaru:
   ```js
   const { heading, emails, folder } = props;
   ```
   V *prop* `folder` očekáváme hodnoty `'read'` nebo `'unread'`.
1. Založte pro komponentu složku, přesuňte CSS styly, jak už to znáte. Komponenta by měla vyrobit celou jednu sekci s e-maily. V HTML nám pak zůstane jen prázdný element `#app`.
1. V hlavním souboru použijte komponentu k zobrazení obou sekcí.
1. Zaříďte, aby si komponenta `EmailSection` stahovala vlastní data. Do *prop* s názvem `email` vložte jako výchozí hodnotu prázdný seznam.
