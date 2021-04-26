---
title: Konflikt
demand: 3
---

V tuto chvíli se obě dámy nezávisle na sobě rozhodnou upravit stejnou část stránky.

Úkol pro **Barboru**. Alice čeká.

1. Barbora v souboru `index.html` přidá do elementu `.product__colors` následující HTML.
   ```html
   <p>Pomocí tlačítek vyberte barvu produktu</p>
   <div class="colors">
     <div class="color">
       <div class="color-box"></div>
       <p class="color__name">bílá</p>
     </div>
   </div>
   ```
1. Zatím neřeší stylování a změny rovnou commitne se zprávou "HTML pro výběr barvy."

Úkol pro **Alici**, Barbora čeká. 

1. Alice chce také vyrobit HTML pro výběr barvy. Nevšimne si však, že Barbora už commitnula úpravu stejné části kódu. Místo toho, aby si pullnula, vloží do elementu `.product__colors` svůj kód, který vypadá trochu jinak než ten, který vytvořila Barbora.
   ```html
   <p>Vyberte si barvu produktu</p>
   <div class="choose-colors">
     <div class="color-option">
       <div class="color-option__box"></div>
       <p class="color-option__name">bílá</p>
     </div>
   </div>
   ```
1. Provede commit svých změn se zprávou "Ukázka výběru barev."
1. Nyní se Alice pokusí provést push svých změn. Pushnutí však selže a Alice obdrží červenou zprávu `rejected`. Git nedovolí pushnout do repozitáře obsahující změny, které si Alice ještě nepullnula. Alice tedy musí nejdříve udělat pull. 
1. Během pullování však nastane konflikt v souboru `index.html`. 
   ```
   CONFLICT (content): Merge conflict in index.html
   ```
   Alice jej musí vyřešit. Kontaktuje Barboru a navzájem se domluví, jak konflikt vyřeší:
   - Buď přijmou změny, které provedla Alice (Accept Current Change),
   - nebo Alice svoje změny zahodí a přijme změny od Barbory (Accept Incoming Change),
   - nebo přijmou obě změny (Accept Both Changes) a nějakým způsobem je zkombinují dohromady. 
1. Jakmile je konflikt vyřešen, Alice pomocí `git add` přidá změny v `index.html` a provede commit se zprávou "Vyřešen konflikt.". 
1. Nakonec Alice pushne svoje změny do GitHub repozitáře. 

Úkol pro **Barboru**.

1. Barbora si pullne nový commit, ve kterém je vyřešen konflikt. Tím se lokální repozitáře u Alice i Barbory dostanou opět do synchronizovaného stavu. 