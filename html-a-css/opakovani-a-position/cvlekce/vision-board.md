---
title: Vision board
demand: 1
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

   - Odrážkový seznam s odkazy, kde jsi online k zastižení.

   - Přidejte tag `footer` a do něj vložte odkaz na svůj github účet. 

1. Nastav celé stránce jinou barvu pozadí.

   - Vytvoř soubor pro styly s příponou `.css`.

   - Do souboru přidej kód s libovolnou oblíbenou barvou:

      ```css
      body {
      	background-color: lightcyan;
      }
      ```

   - Nalinkuj stylový soubor v hlavičce html.

      ```html
      <link rel="stylesheet" href="nazev_souboru.css" />
      ```

1. Dostyluj stránku podle svého uvážení.

   - Nastav bezpatkový font.

   - Vystřeď text na stránce.

   - Skryj seznamům odrážky, číslování. Spoj selektory v jeden pomocí čárky.

     ```css
     ul,
     ol {
     	list-style-type: none;
     }
     ```

   - Oprav seznamům odsazení. Všimni si, že nejsou úplně na středu a lehce posunuté doprava.

   - Zmenši ikonky podle velikosti textu.

     ```
     width: 1em;
     height: 1em;
     ```

   - Zkus změnit velikost odkazů. Pokud se ti budou, líbit nech je klidně třeba zvětšené.

   - Zaobli okraje fotce. Přidej jí css třídu, ať styly novlivňuješ i ikonky u odkazů.

   - Obravi odkazy a zruš jim výchozí podtržení.

   - Po najetí myši je zvýrazni jinou barvou.

### Bonus 

Publikuj stránku na github pages, aby si ji mohli prohlédnout i ostatní. 

