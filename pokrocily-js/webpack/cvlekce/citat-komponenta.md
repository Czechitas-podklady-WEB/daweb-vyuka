---
title: Citát jako komponenta
demand: 2
---

Pokračujte v projektu z předchozího cvičení. 

1. V souboru `index.js` ponechte první řádek `import './style.css';`. Jeho význam si vysvětlíme v druhé části lekce. 
1. Vytvořte komponentu `Quote`, která očekává `props` ve formátu:
   ```js
   {
     text: 'text citátu',
     author: 'autor citátu',
   }
   ```
   Komponenta nechť vytvoří HTML pro jeden citát.
1. Předejte vaší komponentě nějaký citát a zapojte výsledek do elementu `#app`. 
