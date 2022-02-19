---
title: Saturejka - vývoj
demand: 2
---

Vše máme připraveno a můžeme začít programovat. 

1. Ve složce projektu založte soubor `index.html`. Vložte to něj následující kód. 
   ```html
   <!DOCTYPE html>
   <html lang="cs">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Saturejka</title>
     </head>
     <body>
       <h1>Naše nabídka</h1>
       <p>
         Vybraná jídla z našeho jarního menu přepravená našimi prvotřídními
         šefkuchaři.
       </p>
     </body>
   </html>
   ```
1. Přidejte tento soubor do stage pomocí `git add`.
1. Pomocí `git status` zkontrolujte, že soubor `index.html` je připraven ke commitu.
1. Vytvořte nový commit pomocí `git commit`. Ke commitu napište zprávu „Základní HTML“
1. Pomocí `git log` zkontrolujte, že commit se opravdu vytvořil.
1. Pomocí `git push` publikujte nový commit na GitHub.
1. Stejným postupem jako výše vytvořte soubor `style.css` s tímto obsahem
   ```css
   @import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display:700&display=swap&subset=latin-ext');

   html {
     font-family: 'Open Sans', sans-serif;
     font-size: 15px;
   }
   
   h1,
   h2 {
     font-family: 'Playfair Display', serif;
   }
   ```
1. Soubor se styly správně nalinkujte do vašeho HTML a provedené změny opět commitněte stejným postupem jako výše. 

Pokračujte ve tvorbě stránky vlastním tempem. Vždy, když dokončíte i třeba jen malou část, udělejte nový commit. Stránku rozhodně nemusíte dokončit. Cílem cvičení je především si vyzkoušet reálnou práci s Gitem.

Jakmile budete se svou stránkou spokojeni, publikujte ji pomocí GitHub Pages.
