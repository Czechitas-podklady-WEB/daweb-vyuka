---
title: Vision board
demand: 1
context: lekce
solutionAccess: protected
---

V tomto cvičení si osvěžíte základy HTML a CSS.

1. Vytvořte u sebe na počítači složku. Pojmenujte ji třeba `Vision-board`.

1. Přidejte do ní `index.html`.

1. V html nachystejte základní strukturu `<!DOCTYPE html><html>…</html>`.

1. Do těla stránky, mezi tagy `<body>` a `</body>`, přidejte hlavní nadpis úrovně 1 s textem `Vision board digitální akademie`.

1. Spusťte vývojový server na příkazové řádce pomocí `npx serve` a otevři stránku v prohlížeči.

1. Do html přidejte další obsah.

   - Pomocí tagu `<img>` přidejte svou inspirativní fotku nebo jakoukoli oblíbenou, která tě bude na cestě motivovat. Použít můžete například [unsplash](https://unsplash.com/s/photos/girl-developer)

   - Krátký odstavec s textem co od akademie očekávám.

   - Číselný seznam alespoň tří technologií, které se naučíte.

   - K technologiím doplňte jejich loga. Můžete je najít například na [flaticon.com](https://www.flaticon.com/)

   - Odrážkový seznam pěti věcí, na které se na akademii těším.

   - Označte tagem `<strong>` tu věc, na kterou se těšíte nejvíc.

   - Přidejte tag `footer` a do něj vložte odkaz na svůj github účet.

1. Nastavte celé stránce jinou barvu pozadí.

   - Vytvořte soubor pro styly `style.css`.

   - Do souboru přidejte kód s libovolnou oblíbenou barvou:

     ```css
     body {
       background-color: lightcyan;
     }
     ```

   - Nalinkujte stylový soubor v hlavičce html.

     ```html
     <link rel="stylesheet" href="style.css" />
     ```

1. Dostylujte stránku podle svého uvážení.

   - Nastavte bezpatkový font.

   - Vystřeďte text na stránce.

   - Skryjte seznamům odrážky, číslování. Spojte selektory v jeden pomocí čárky.

     ```css
     ul,
     ol {
       list-style-type: none;
     }
     ```

   - Opravte seznamům odsazení. Všimněte si, že nejsou úplně na středu a lehce posunuté doprava. V devtools najdete, která vlastnost to způsobuje.

   - Zmenšete ikonky podle velikosti textu.

     ```
     width: 1em;
     height: 1em;
     ```

   - Zkuste změnit velikost odkazů.

   - Zaoblete okraje fotce. Přidejte jí css třídu, ať styly novlivňujete i ikonky u technologií v seznamu.

   - Obravěte odkazy a zrušte jim výchozí podtržení.

   - Po najetí myši je zvýrazněte jinou barvou.

### Bonus

Publikujte stránku na github pages, aby si ji mohli prohlédnout i ostatní.
