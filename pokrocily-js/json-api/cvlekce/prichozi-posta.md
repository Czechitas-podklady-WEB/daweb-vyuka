---
title: Příchozí pošta
demand: 3
---

Pokračujte v předchozím příkladu.

1. Prohlédněte si data, která poskytuje API na adrese https://api.kodim.cz/daweb/inbox. 
1. Pomocí funkce `fetch` tato data stáhněte, projděte je cyklem a zapojte do stránky. 
1. Vytvořte komponentu `Inbox`, která bude zobrazovat celý seznam e-mailů. Jako svoje `props` komponenta obdrží objekt, který vypadá takto:
   ```js
   {
     inbox: // pole e-mailů
   }
   ```
   V komponentě použíjte váš cyklus zobrazující jednotlivé e-maily.
1. Smažte z HTML prvek `#inbox` a vytvořte obsah stránky tak, že výsledek komponenty `Inbox` zapojíte do prvku `#app`.
