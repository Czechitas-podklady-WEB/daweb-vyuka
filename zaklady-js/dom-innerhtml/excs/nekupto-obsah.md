---
title: Nekup to, obsah
demand: 2
---

Pokračujte v předchozím cvičení. Všimněte si, že v souboru `index.js` jsou uloženy údaje k jednotlivým produktům.

1. Otevřete si soubor `index.html` a ručně vymažte obsah prvního produktu. HTML pro tento produkt pak bude vypadat takto. 
   ```html
   <div id="product1" class="card mb-4 box-shadow"></div>
   ```
1. Na konec souboru `index.js` vložte JavaScriptový kód, který použije vlastnosti `image` a `name` z prvního objektu `product1` a pomocí interpolace řetězců sestaví takovýto řetězec. 
   ```js
   '<img class="card-img-top" src="img/destniklobouk.jpg" alt="Card image cap">'
   ```
1. Do nějaké proměnné si uložte element prvního produktu a nastavte jeho `innerHTML` na tento řetězec. Tímto na stránku vložíme obrázek prvního produktu. 
1. Pomocí objektu `product1` sestavte řetězec obsahující kompletní HTML pro první produkt včetně obrázku, názvu, popisu a tlačítka. Nastavte jej jako `innerHTML` pro první produkt. 
1. Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor `index.html` vůbec neosahuje vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.
