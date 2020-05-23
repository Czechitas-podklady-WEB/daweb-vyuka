---
title: Kontakty
demand: 3
---

Vytvořte webovou stránku, která zobrazuje seznam kontaktů. U každého kontaktu bychom chtěli evidovat jméno, příjmení, email a telefonní číslo.

1. Založte webovou aplikaci se soubory `index.html`, `style.css` a `index.js`.
1. Do hlavičky souboru `index.html` vložte odkaz na Handlebars šablony.
   ```
   <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"></script>
   ```
1. Uvnitř `index.js` si vytvořte pole objektů, které bude obsahovat jenotlivé kontakty.
1. Uvnitř `index.html` vytvořte šablonu pro jeden kontakt. Také vytvořte `div`, do kterého dubeme později naše kontakty vkládat.
1. V souboru `index.js` si zkompilujte Hanldebars šablonu pro jeden kontakt.
1. Vytvořte funkci `renderContact`, jejíž vstupem bude objektu kontaktu a výstupem DOM element vyrobený z vaší šablony.
1. Pomocí cyklu projděte všechny konsakty a zapojte je do stránky.
1. Nepovinně si můžeme pohrát se stylováním. U každého kontaktu se nám například může hodit takováto hezká [ikonka](../assets/contact.png).
