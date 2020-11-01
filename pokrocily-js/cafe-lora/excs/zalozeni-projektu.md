---
title: Založení projektu
demand: 2
---

Stáhněte si [základ projektu](https://github.com/Czechitas-podklady-WEB/cafelora-zadani/archive/main.zip) Café Lóra a vytvořte pro něj GitHub repozitář. Postupujte dle následujících kroků.

1. Pod svým GitHub účtem si založte zcela prázdný (tedy bez `README.md`) veřejný repozitář s názvem `cafelora`.
1. Rozbalte stažený ZIP a pomocí příkazu `git init` (zavolaného uvnitř složky, kde jsou mimo jiné soubory `package.json` a `webpack.config.js`), řekněte, že budete obsah verzovat.
1. Přdejte všechny soubory pomocí `git add` a proveďte `commit` všech souborů.
1. Podle návodu na GitHubu, `…or push an existing repository from the command line`, nahrajte soubory do repozitáře.
   1. Příkazem `git remote add origin https://github.com/{DOPLŇ_TVŮJ_ÚČET}/cafelora.git` propojte vaši lokální složku s GitHub repozitářem.
   1. Pojmenujte hlavní větev `git branch -M main`.
   1. Proveďte první push `git push -u origin main`.
1. Nainstalujte závislosti pomocí `npm install` a spusťte projekt pomocí `npm run start`.
1. Prohlédněte si design stránky a vyzkoušejte si její responzivitu. Všimněte si, že například ikonka navigace zatím moc nefunguje.
