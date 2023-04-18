---
title: E-maily – načítání dat
demand: 3
---

V aplikaci _E-maily_ vyrobíme komponentu pro zobrazování složek pro přečtené a nepřečtené zprávy.

1. Ve vašem projektu předělejte metodu `renderSection` na komponentu `EmailSection`. Komponenta bude očekávat _props_ ve tvaru:
   ```js
   const { heading, emails, folder } = props;
   ```
   V _prop_ `folder` očekáváme hodnoty `'read'` nebo `'unread'`.
1. Založte pro komponentu složku, přesuňte CSS styly, jak už to znáte. Komponenta by měla vyrobit celou jednu sekci s e-maily. V HTML nám pak zůstane jen prázdný element `#app`.
1. V hlavním souboru použijte komponentu k zobrazení obou sekcí.
1. Zaříďte, aby si komponenta `EmailSection` stahovala vlastní data. Do _prop_ s názvem `emails` vložte jako výchozí hodnotu prázdný seznam.
