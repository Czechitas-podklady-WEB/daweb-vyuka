---
title: Aplikace
demand: 1
---

1. Z odkazu na začátku lekce si stáhněte základ pro Webpack project s Reactem, nainstalujte závislostí pomocí a spusťte projekt.
1. V souboru `index.jsx` vytvořte komponentu `App`, která nebude mít žádné `props`. Přesuňte do ní obsah, který je původně přímo ve volání funkce `render`.
1. Do volání funkce `render` pošlete JSX obsahující pouze komponentu `App`.
1. Vytvořte komponentu `Header`, která bude obsahovat kód pro hlavičku stránky. Jediná její `prop` bude `title` udávající obsah elementu `h1`. Vytvořte pro komponentu speciální složku a správně ji exportujte. V hlavním souboru `index.jsx` komponentu importujte a použijte ji uvnitř komponenty `App`.
1. Následujte stejný postup jako výše a vytvořte komponentu `Footer`, která bude představovat patičku stránky. Tato komponenta bude mít také jednu `prop` s názvem `author`, která udává jméno autora stránky.
1. Do třetice vytvořte komponentu `Main`, která bude představovat hlavní obsah stránky. Tato komponenta bude mít opět jednu `prop` s názvem `content`, která bude udávat obsah odstavce.
