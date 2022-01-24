---
title: Mejlík - hlavička
demand: 2
---

Navážeme na předchozí cvičení a vytvořím komponentu pro hlavičku naší aplikace.

1. Pokračujte v React projektu z předchozího cvičení.
1. Stáhněte si [vzor stránky](assets/mejlik-hlavicka-zadani.zip). Najdete v něm nastylované dvě verze hlavičky pro naši aplikaci. Pozor, že soubory `index.html` a `style.css` slouží pouze jako vzor. Nekopírujte je do svého projektu. 
1. Uvnitř vašeho React projektu založte komponentu `Header`, která bude žít ve vlastní složce. Bude představovat hlavičku stránky. Jak napsat její JSX můžete okouknout ze vzorového `index.html`.
1. Podívejte se do vzoru jak je hlavička nastylovaná. Styly pro hlavičku ze vzorového `style.css` vložte do stylů vaší komponenty. 
1. Komponenta hlavičky používá dva obrázky. Vytvořte pro ně složku `img` uvnitř složky `Header`. Vložte do ní obrázky ze vzoru. 
1. Chceme zařídit, že pokud je komponenta použita takto

   ```js
   <Header user="Radovan Holátko" />
   ```

   zobrazí se hlavičku s přihlášeným uživatelem. Pokud je naopak použita takto

   ```js
   <Header />
   ```

   zobrazí se hlavička nabízející přihlášení. Pokud jsme prop při použití komponenty nezadali žádnou hodnotu, znamená to, že obsahuje hodnotu `undefined`.
