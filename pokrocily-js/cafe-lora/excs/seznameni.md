---
title: Seznámení s projektem a úprava menu
demand: 2
---

Seznamte se se zdrojovým kódem, který je pro vás v projektu připraven. Postupujte dle následujících kroků.

1. Prohlédněte si HTML a CSS projektu.
1. Podívejte se do složky `assets`. Toto je speciální složka, kterou Webpack beze změny zkopíruje do výsledné `dist` složky. Složka `assets` obsahuje obrázky. Ty nejsou nalinkovány uvnitř CSS a nejsou tedy součástí designu, ale budou tvořit obsah stránky a my pomocí nich vytvoříme naše interaktivní café menu.
1. Všimněte si, že ikonka pro zobrazení navigace se zobrazuje i v případě, že jsme na širokém monitoru. Upravte CSS v souboru `style.css` tak, aby se ikonka na široké obrazovce nezobrazovala. Breakpoint zjistíte při prohlížení různých šířek stránky v devtools. Po úpravě CSS proveďte commit vašich změn s nějakou dobře popisnou zprávou.
1. Položky navigace v hlavičce stránky nefungují. Doplňte tedy v `index.html` atributy `id` pro jednotlivé sekce a pozměňte odkazy v nabídce tak, abychom se vždy po kliknutí na odkaz přesunuli na správnou část stránky. Commitněte vaše změny se smysluplnou commit zprávou.
1. Sekce s názvem galerie je momentálně jen jeden velký obrázek. My budeme chtít, aby přes obrázek byl text popisující kavárnu. Doplňte do sekce odstaveček textu popisující interiér kavárny a nastylujte ho tak, aby byl přes obrázek čitelný (přidejte například zašednutí nebo rozmazání pod text).
1. Opět proveďte commit vašich změn s odpovídající commit zprávou. Pushněte do repozitáře na GitHubu.
