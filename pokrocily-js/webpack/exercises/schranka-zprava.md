---
title: Schránka - zpráva
demand: 3
---

Pokračujme v řešení předchozího příkladu.

1. Ve vašem JavaScriptovém souboru vytvořte objekt představující jednu emailovou zprávu.
   ```js
   const message = {
     sender: 'Milan Kouhoutek',
     subject: 'Nabídka spolupráce',
     date: 'po 13. března',
     time: '8:45',
   };
   ```
1. Ve vašem souboru `index.html` vytvořte šablonu pro vaši zprávu.
1. Ve vašem JavaScriptovém souboru importuje Handlebars šablony.
   ```js
   import Handlebars from 'handlebars';
   ```
1. Šablonu zkompilujte způsobem, který už znáte.
   ```js
   const messageTemplate = Handlebars.compile(/* obsah vaší šablony */);
   ```
1. Vytvořte funkci `renderMessage`, která z objektu zprávy vytvoří DOM element. Do HTML souboru přidejte nějaký hlavní `div` a pomocí vaší funkce do něj zapojte svoji zprávu.
1. Pomocí `npm run build` sestavte výš projekt a vyzkoušejte, že se zpráva správně zobrazí na obrazovce.
