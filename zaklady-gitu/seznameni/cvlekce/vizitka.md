---
title: Vizitka
demand: 4
---

1. Vytvořte na [GitHubu](https://github.com/new) nový repozitář.
   - S názvem `vizitka-2022`.
   - Zvolte variantu `Public`.
   - Popisek, README, `.gitignore` a licenci nemusíte řešit.
1. Z terminálu, příkazové řádky repozitář naklonujte k sobě na počítač.
   - `git clone https://github.com/{UZIVATELSKE_JMENO}/vizitka-2022.git`
   - Případné varování „`warning: You appear to have cloned an empty repository`“ můžete ignorovat.
1. V novém okně VS Code otevřete gitem vytvořenou složku `vizitka-2022`.
   - V okně zatím nic nebude.
1. Ve složce vytvořte soubor `index.html`.
1. Do souboru přidejte základní HTML strukturu (zkratka `!`+`enter`).
1. Mezi značky `<body>` a `</body>` vložte nadpis první úrovně `<h1>Vizitka</h1>`.
1. Příkazy v terminálu příslušného okna nově vytvořený soubor commitněte.
   - `git add index.html`
   - `git commit -m "Základní HTML"`
1. Commit nahrajte na GitHub.

   - `git push`
   - Pokud vás počítač vyzve k přihlášení v malém okně s bílým pozadím, tlačítkem `Cancel` ho zavřete. Okno totiž nemusí fungovat spolehlivě.

     ::fig[okno]{src=assets/login.png size=50}

   - Pokračujte na příkazové řádce, která se vás v zápětí zeptá na uživatelské jméno a heslo.

     ::fig[terminál]{src=assets/terminal-login.png size=70}

   - U hesla vás čeká další chyták. Z bezpečnostních důvodů od srpna 2021 GitHub nepřijímá běžná hesla. V [nastavení vašeho GitHub účtu](https://github.com/settings/tokens/new) si proto vytvořte heslo náhradní (token). Pojmenujte ho třeba `Czechitas git`. Nastavte mu dobu vypršení na neurčito a zaškrtněte první políčko `repo`. Pokračujte tlačítkem `Generate token` na konci formuláře.

     ::fig[nový token]{src=assets/novy-token.png size=100}

   - Na následující stránce zkopírujte váš tajný token začínající na `ghp_` a použijte ho na příkazové řádce místo hesla.

     ::fig[token]{src=assets/token.png size=60}

   - Při úspěchu by poslední řádek po nahrání měl vypadat přibližně takto:
     ```
     668612b..54c9a30 main     -> origin/main
     ```
     nebo
     ```
     734713b..c047d87 master   -> origin/master
     ```

1. Ověřte, že `index.html` se ukazuje v nahraných souborech v repozitáři na GitHubu.
