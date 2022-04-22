---
title: Citát jako komponenta
demand: 3
---

Pokračujte v projektu z předchozího cvičení. Dle již známých postupů vytvoříme v oddělené složce komponentu pro jeden citát.

1. Ve složce `src` vytvořte ve složce `Quote` komponentu, která očekává `props` ve formátu:
   ```js
   {
     text: 'text citátu',
     author: 'autor citátu',
   }
   ```
   Komponenta nechť vytvoří HTML pro jeden citát.
1. Do složky s komponentou nezapomeňte vložit souvisjící styly a ty správně importujte v souboru `Quote/index.js`.
1. Předejte vaší komponentě nějaký citát a zapojte výsledek do elementu `#app`.
1. Ve složce `Quote` vytvořte složku `img` a do ní si stáhněte [ikonku citátu](assets/quote-icon.svg)
1. Upravte komponentu `Quote` a její CSS styly tak, aby zobrazovala citát s touto ikonkou. Ikonku použíjte v CSS jako `backround-image`.
