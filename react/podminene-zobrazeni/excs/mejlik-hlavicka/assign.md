---
title: Mejlík - hlavička
demand: 2
---

Navážeme na předchozí cvičení a vytvořím komponentu pro hlavičku naší aplikace.

1. Pokračujte v React projektu z předchozího cvičení.
1. Stáhněte si [vzor stránky](assets/mejlik-hlavicka-zadani.zip) obsahující nastylované dvě verze hlavičky pro naši aplikace. Styly a HTML můžete použít jako základ pro to, jak má hlavička v naší aplikaci vypadat.
1. Uvnitř vašeho React projektu založte komponentu `Header`, která bude představovat hlavičku stránky. Hlavička se zobrazuje různě dle toho, jestli je zrovna uživatel přihlášený či nikoliv. Pokud je komponenta použita takto

   ```js
   <Header user="Radovan Holátko" />
   ```

   zobrazte hlavičku s přihlášeným uživatelem. Pokud je naopak použita takto

   ```js
   <Header />
   ```

   Zobrazte hlavičku nabízející přihlášení. Pokud jsme prop při použití komponenty nedali žádnou hodnotu, znamená to, že obsahuje hodnotu `udefined`.
