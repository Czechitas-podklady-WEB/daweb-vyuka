---
title: FIT Email
demand: 2
---

Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen email, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména `fit.cvut.cz`. Pro jméno Žaneta Procházková tak vznikne adresa `prochzan@fit.cvut.cz`.

1. Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. 
1. Pomocí metody `trim` zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. 
1. Pomocí metody `slice` vyřízněte ze jména i příjmení příslušné části.
1. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
