---
title: Aplikace
demand: 1
---

1. Založte si nový Reactový projekt:
    ```shell
    npm init kodim-app@latest aplikace-react react
    ```
1. Projekt spusťte pomocí `npm run start` jak už to znáte z dřívejška.
1. Vytvořte komponentu `Header`, která bude obsahovat kód pro hlavičku stránky. Jediná její `prop` bude `title` udávající obsah elementu `h1`. Vytvořte pro komponentu speciální složku a správně ji exportujte pomocí `export default`. V hlavním souboru `index.jsx` komponentu importujte a použijte ji uvnitř komponenty `App`.
1. Následujte stejný postup jako výše a vytvořte komponentu `Footer`, která bude představovat patičku stránky. Tato komponenta bude mít také jednu `prop` s názvem `author`, která udává jméno autora stránky.
1. Do třetice vytvořte komponentu `Main`, která bude představovat hlavní obsah stránky. Tato komponenta bude mít opět jednu `prop` s názvem `content`, která bude udávat obsah odstavce.
