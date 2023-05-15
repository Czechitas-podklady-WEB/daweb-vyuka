---
title: Mejlík – hlavička
demand: 2
---

Navážeme na předchozí cvičení a vytvoříme komponentu pro hlavičku naší aplikace.

1. Pokračujte v React projektu z předchozího cvičení.
1. Vzor stránky je na GitHubu v repozitáři [cviceni-mejlik-hlavicka-vzor](https://github.com/Czechitas-podklady-WEB/cviceni-mejlik-hlavicka-vzor). Tento repozitář slouží jen jako vzor, proto z něj **nebudeme vytvářet vlastní repozitář** (nebudeme ho používat jako šablonu).
1. Místo toho naklonujeme na lokální disk rovnou původní repozitář – tj. rovnou ho naklonujte pomocí příkazu `git clone https://github.com/Czechitas-podklady-WEB/cviceni-mejlik-hlavicka-vzor.git`.
1. Ve staženém repozitáři `cviceni-mejlik-hlavicka-vzor` najdete nastylované dvě verze hlavičky pro naši aplikaci. Pozor, že soubory `index.html` a `style.css` slouží pouze jako vzor. Nekopírujte je do svého projektu.
1. Uvnitř vašeho React projektu založte komponentu `Header`, která bude žít ve vlastní složce. Bude představovat hlavičku stránky. Jak napsat její JSX, můžete okouknout ze vzorového `index.html` (nezapomeňte atributy `class` změnit na `className`. Pro hromadnou náhradu se bude ve VS Code hodit zkratka <kbd>Ctrl+Shift+L</kbd> (na Windows a Linuxu) nebo <kbd>Command+Shift+L</kbd> (na MacOS), která označí všechny výskyty daného slova).
1. Podívejte se do vzoru, jak je hlavička nastylovaná. Styly pro hlavičku ze vzorového `style.css` vložte do stylů vaší komponenty.
1. Komponenta hlavičky používá dva obrázky. Vytvořte pro ně složku `img` uvnitř složky `Header`. Vložte do ní obrázky ze vzoru.
1. Chceme zařídit, že pokud je komponenta použita takto

   ```js
   <Header user="Radovan Holátko" />
   ```

   zobrazí se hlavičku s přihlášeným uživatelem. Pokud je naopak použita takto

   ```js
   <Header />
   ```

   zobrazí se hlavička nabízející přihlášení. Pokud jsme do `props` při použití komponenty nevložili žádnou hodnotu, znamená to, že obsahuje hodnotu `undefined`.
