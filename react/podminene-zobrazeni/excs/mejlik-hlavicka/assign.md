---
title: Mejlík - hlavička
demand: 2
---

Navážeme na předchozí cvičení a vytvořím komponentu pro hlavičku naší aplikace.

1. Pokračujte v React projektu z předchozího cvičení.
1. Stáhněte si [vzor stránky](assets/mejlik-hlavicka-zadani.zip). Najdete v něm nastylované dvě verze hlavičky pro naši aplikaci. Pozor, že tyto soubory slouží pouze jako vzor. Připravené CSS styly můžete rovnou použít jako základ pro to, jak má hlavička v naší aplikaci vypadat. Soubor `index.html` však do svého React projektu nekopírujte. React projekty mají svůj vlastní `index.html`, který má předem danou strukturu.
1. Uvnitř vašeho React projektu založte komponentu `Header`, která bude žít ve vlastní složce. Bude představovat hlavičku stránky. Jak napsat její JSX můžete okouknout ze vzorového `index.html`.
1. CSS komponenty používá dva obrázky. Nezapomeňte je vložit do složky `img` uvnitř složky `Header`.
1. Chceme zařídit, že pokud je komponenta použita takto

   ```js
   <Header user="Radovan Holátko" />
   ```

   zobrazí se hlavičku s přihlášeným uživatelem. Pokud je naopak použita takto

   ```js
   <Header />
   ```

   zobrazí se hlavička nabízející přihlášení. Pokud jsme prop při použití komponenty nedali žádnou hodnotu, znamená to, že obsahuje hodnotu `undefined`.
