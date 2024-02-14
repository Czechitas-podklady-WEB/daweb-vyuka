---
title: První kroky s JSX
demand: 1
lead: Vyzkoušejte si základní použití JSX.
solutionAccess: protected
---

Vyzkoušejte si založení jednoduché aplikace používající JSX s jednout stránkou a jednoduchým CSS.

1. Pomocí nástroje `kodim-app` vytvořte nový JSX Vite projekt.
   ```shell
   npm init kodim-app@latest prvni-kroky jsx
   ```
1. Projekt spusťte pomocí `npm run dev`.
1. Prohlédněte si soubor `src/pages/index.jsx`. Přímo ve volání funkce `render` změňte nadpis stránky `h1` v hlavičce a uveďte zde svoje jméno.
1. Stále v souboru `index.jsx` vytvořte komponentu pro hlavičku stránky. Uvnitř této komponenty uložte své vlastní jméno do proměnné a obsah této proměnné vložte do JSX. Vložte vaši komponentu na místo, kde je nyní použitý element `header`.
1. V souboru `index.css` vytvořte CSS třídu `intro` a nastavte v ní `font-style` na `italic`. Uložte si název této třídy do proměnné a tu pak použijte jako `className` pro odstavec `p` na vaší stránce.
