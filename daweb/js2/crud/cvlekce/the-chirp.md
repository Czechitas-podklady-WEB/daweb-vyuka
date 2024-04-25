---
title: The Chirp
demand: 3
lead: Rozšiřte stránku sociální sítě o možnost zobrazit profil uživatele.
context: cvlekce
---

Začneme s již připraveným projektem, který obsahuje hlavní stránku sociální sítě _The Chirp_. Tato stránka zobrazuje seznam příspěvků všech uživatelů. Vaším úkolem bude rozšířit tento web stránku zobrazující profil uživatele.

### Rozběhnutí projektu

1. Pro spuštění projektu budeme potřeba lokální API. To najdete v repoziáři [ukazka-the-chirp-api](https://github.com/Czechitas-podklady-WEB/ukazka-the-chirp-api). Repozitář si naklonujte a API spusťte příkazem `npx apidroid@latest`.
1. Prohlédněte si kolekce v API. Tentokrát máme kolekce hned dvě: `users` a `posts`. Kolekce `users` obsahuje informace o uživatelích, kolekce `posts` obsahuje všechny příspěvky.
1. Naklonujte si repozitář s frontendem [ukazka-the-chirp](https://github.com/Czechitas-podklady-WEB/ukazka-the-chirp). Otevřete jej ve VS Code a spusťte příkaz `npm install`, kterým nainstalujete potřebné závislosti. Poté spusťte příkaz `npm run dev`, kterým spustíte vývojový server.
1. V prohlížeči si vyzkoušejte, jak aplikace funguje. Prohlédněte si její zdrojový kód a seznamte se s tím, jak je aplikace strukturovaná.

### Přidání stránky s profilem uživatele

1. Vytvořte novou stránku pro zobrazení profilu uživatele. Stránka bude dostupná na URL `/profil.html`. Bude tedy potřeba vytvořit nové soubory `profil.html`, `profil.jsx` a `profil.css`.
1. Zatím na stránku vložte pouze nadpis `h1` s textem `Profil uživatele`. Stránku si otevřete v prohlížeči a ověřte, že se nadpis zobrazuje.
1. V komponentě `Post` máte již připravený odkaz na prvku s třídou `user__handle`. Zatím nikam nevede. Sestavte URL odkazu tak, aby vedl na stránku s profilem uživatele a předal jí ID uživatele skrze search parametr `?user=`. Například pro uživatele s ID 42 by URL měla vypadat takto: `/profil.html?user=42`.
1. Na stránce s profilem uživatele získejte ID uživatele z URL. Načtěte z API informace o uživateli s tímto ID. Na stránce zobrazte jméno, handle a bio uživatele.
1. Zobrazte také avatar uživatele. Cesta k obrázku je uložena v atributu `avatar` uživatele. Musíte tuto cestu složit s URL vašeho API stejně, jako to dělá komponenta `Post`.
1. Nyní byste měli mít funkční zobrazení profilu každého uživatele kliknutím na jeho handle v seznamu příspěvků.
