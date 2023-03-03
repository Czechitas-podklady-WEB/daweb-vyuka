---
title: Vizitka
demand: 4
---

1. Vytvořte na [GitHubu](https://github.com/new) nový repozitář.
   - *Repository template* (pokud se bude nabízet) ponechte volbu *No template*. 
   - Projekt nazvěte `vizitka-2023`.
   - Zvolte variantu `Public`.
   - V *Description* můžete vyplnit stručný popis projektu viditelný pro všechny (později jde změnit), třeba *DA Web – cvičení na Git*
   - Zaškrtněte *Add a README file*, aby ve vytvořeném repository vznikl alespoň jeden soubor.
   - Šablonu pro `.gitignore` ponechte na *None*.
   - Licenci ponechte na *None*.   
1. Z terminálu, příkazové řádky repozitář naklonujte k sobě na počítač.
   - `git clone https://github.com/{UZIVATELSKE_JMENO}/vizitka-2023.git` kde místo {UZIVATELSKE_JMENO} bude váš login na GitHubu
   - Pokud jste v předchozím kroku nevybrali *Add a README file*, zobrazí se varování *„warning: You appear to have cloned an empty repository“*, které můžete ignorovat.
1. V novém okně VS Code otevřete gitem vytvořenou složku `vizitka-2023`.
   - V okně zatím nic nebude. V panelu souborů vlevo bude soubor `README.md`.
1. Ve složce vytvořte soubor `index.html`.
1. Do souboru přidejte základní HTML strukturu (zkratka `!`+`enter`).
1. Mezi značky `<body>` a `</body>` vložte nadpis první úrovně `<h1>Vizitka</h1>`.
1. Otevřete si terminál ve správné složce.

   - Ověřte si, že opravdu jste ve správné složce, která obsahuje soubor `index.html`.
   - Ve Windows by vám příkaz `dir` měl vypsat zhruba toto:

     ::fig[dir]{src=assets/dir.png size=100}

   - Na Macu a v Linux by měl výstup příkazu `ls` vypadat nějak takto:

     ::fig[dir]{src=assets/ls.png size=50}

   - Pokud jste ve špatné složce, příkazem `cd` se přesuňte na správné umístění.

1. Následujícími příkazy v terminálu nově vytvořený soubor commitněte.
   - `git add index.html`
   - `git commit -m "Základní HTML"`
1. Commit nahrajte na GitHub příkazem `git push`. Při úspěchu by poslední řádek v příkazové řádce po nahrání měl vypadat začínající na jinou změť čísel a písmen přibližně takto:

   ```
   668612b..54c9a30 main     -> origin/main
   ```

1. Ověřte, že `index.html` se ukazuje v nahraných souborech v repozitáři na webu GitHubu.
