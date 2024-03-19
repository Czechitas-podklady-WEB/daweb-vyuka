---
title: Obrázky a styly
demand: 2
context: lekce
---

Úkol pro **Barboru**. Alice čeká.

1. Barbora vytvoří v projektu složku `img` a do ní vloží obrázky [bg.jpg](assets/bg.jpg) a [suit.jpg](assets/suit.jpg) pro hlavičku stránky.
1. Otevře soubor `style.css` a přidá do něj následující styl hlavičky těsně za třídu `.container`.
   ```css
   header {
     padding-top: 4rem;
     background-image: url(img/suit.jpg), url(img/bg.jpg);
     background-position: center, center;
     background-repeat: no-repeat, repeat-x;
     height: 360px;
   }
   ```
1. Pomocí `git add .` přidá do stage všechny změny a vyvoří commit se zprávou "Stylování hlavičky."
1. Pushne commit do vzdáleného repozitáře.
1. Na GitHubu zkontroluje, že se změny opravu zapsaly na server.

Úkol pro **Alici**, Barbora čeká.

1. Poté, co Barbora provedla commit, Alice si pullne změny z GitHub repozítáře k sobě do počítače.
1. Pomocí `git log` zkontroluje, že si opravdu stáhla Barbořin commit.
1. V projektu vytvoří složku `fonts` a vloží do ní font [Fashion Victim](assets/fashion-victim.woff2). Na začátek souboru `style.css` tento font vloží pomocí `@font-face`.
   ```css
   @font-face {
     font-family: 'Fashion Victim';
     src: url(fonts/fashion-victim.woff2) format('woff2');
   }
   ```
1. Dále do stylů přidá stylování nadpisu stránky hned za prvek `header`.

   ```css
   h1.site-title {
     font-family: 'Fashion Victim';
     font-size: 6rem;
     font-weight: normal;
     text-align: center;
   }

   h1.site-title span {
     margin: 0 2rem;
   }
   ```

1. Ověři si, že se stránka správně nastylovala a že nadpis nyní vypadá přesně podle zadání.
1. Přidá do stage všechny změny a provede commit se zprávou "Stylování nadpisu." Pushne commit do vzdáleného repozitáře.
1. Na GitHubu se přesvědčí, že její kód je opravdu na serveru.

Úkol pro **Barboru**, Alice čeká.

1. Poté, co Alice provedla commit, Barbora si pullne změny k sobě do počítače.
1. Pomocí `git log` zkontroluje, že obdržela Alicin commit.

Na konci tohoto cvičení jsou obě dámy opět synchronizované a obě mají projekt ve stejném stavu se správně nastylovanou havičkou i nadpisem stránky.
