---
title: Vizitka
demand: 4
---

1. Vytvořte si na GitHubu nový repozitář ze šablony [cviceni-vizitka-2023](https://github.com/Czechitas-podklady-WEB/cviceni-vizitka-2023).
1. Z terminálu, příkazové řádky repozitář naklonujte k sobě na počítač.
   - `git clone https://github.com/{UZIVATELSKE_JMENO}/cviceni-vizitka-2023.git` kde místo {UZIVATELSKE_JMENO} bude váš login na GitHubu
   - Pokud jste v předchozím kroku nevybrali _Add a README file_, zobrazí se varování _„warning: You appear to have cloned an empty repository“_, které můžete ignorovat.
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
1. Commit nahrajte na GitHub příkazem `git push`. Při úspěchu by poslední řádek v příkazové řádce po nahrání měl vypadat přibližně takto, i když bude začína jinou změtí čísel a písmen:

   ```
   668612b..54c9a30 main     -> origin/main
   ```

1. Ověřte, že se `index.html` ukazuje v nahraných souborech v repozitáři na webu GitHubu.
