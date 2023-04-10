---
title: Nezaplacené objednávky
demand: 3
---

Pracujete na velkém e-shopu a vaším úkolem je z nezaplacených objednávek vybrat všechny identifikátory a e-maily zákazníků pro zpracování dalšímy systémy.

1. Vycházejte ze šablony na GitHubu [cviceni-nezaplacene-objednavky](https://github.com/Czechitas-podklady-WEB/cviceni-nezaplacene-objednavky).

1. Upravte soubor `app.js` tak, aby nachystal dvě nová pole `identifikatory` a `emaily`.

   1. Pole `const identifikatory = []`a `const emaily = []` jsou již nachystané. Upravte části za rovnítky. Využijte metodu `map` na poli `nezaplaceneObjednavky`.

   1. Zařiďte, aby v prvním poli byly pouze čísla, jednotlivá `id` z původního pole. Představte si, že čísla bude zpracovávat skladový systém, který je potřebuje přesně v této podobě.

   1. V druhém poli by měly být pouze řetězce, e-maily zákazníků ve formátu `Jméno <jmeno@server.cz>`, aby se daly snadno zpracovat e-mailovým serverem.

1. Poslední dva předchystané řádky nijak neupravujte. Představte si, že místo nich bude jednou kód, který předá vámi vytvořená pole dalším systémům.

   ```js
   processEmails(emaily);
   processIdentifiers(identifikatory);
   ```

::fig[ukázka výsledku]{src=assets/vysledek.png}

---solution

[app.js](https://github.com/Czechitas-podklady-WEB/cviceni-nezaplacene-objednavky/blob/reseni/app.js)
