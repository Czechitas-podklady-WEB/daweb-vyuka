---
title: Založení projektu
demand: 2
---

Nejprve pro naši aplikace založíme projekt.

1. Pod svým GitHub účtem si založte nový veřejný repozitář s Readme se souborem `README.md` a názvem `cafelora`.
1. V terminálu se přesuňte do složky, ve které skladujete své projekty a naklonujte si váš repozitář. Ve VS Code si otevřete svou složku naklonovanou z GitHubu `cafelora`. Ve složce byste měli vidět pouze soubor `README.md`.
1. Otevřete v této složce terminál a pomocí `create-czechitas-app` vytvořte v této složce vanilla Webpack projekt s vlastním názvem.
   ```sh
   npx create-czechitas-app [můj název] vanilla
   ```
1. Z projektu smažte vygenerovanou složku `src`. Stáhněte si [základ projektu](https://github.com/Czechitas-podklady-WEB/cafelora-zadani/archive/main.zip) Café Lóra. Ve staženém ZIPu naleznete složku `src` s již připravným základem aplikace. Tuto složku vložte do vaší složky `cafelora` na místo původní složky src.
1. Pomocí `npm run start`, spusťte vývojový server. Prohlédněte si design stránky a vyzkoušejte si její responzivitu. Všimněte si, že například ikonka navigace zatím moc nefunguje.
1. Pomocí `git add` přidejte do stage všechny nové soubory a proveďte `commit`. Změny pushněte na server.
