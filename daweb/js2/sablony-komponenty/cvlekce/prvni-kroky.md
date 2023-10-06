---
title: První kroky s JSX
demand: 1
lead: Vyzkoušejte si základní použití JSX.
solutionAccess: lock
---

Vyzkoušejte si založení jednoduché aplikace používající JSX s jedním `index.jsx` a jednoduchým CSS.

1. Pomocí nástroje `kodim-app` vytvořte nový vanilla Vite projekt.
   ```shell
   npm init kodim-app@latest prvni-kroky vanilla
   ```
1. Projekt spusťte pomocí `npm run dev`, jak už to znáte z dřívejška.
1. Prozatím nahraďte celý obsah souboru `index.jsx` tímto kódem.

   ```jsx
   import { render } from '@czechitas/render';

   document.querySelector('#root').innerHTML = render(
     <div className="container">
       <header>
         <h1>Emílie Zelenohorská</h1>
       </header>
       <main>
         <p>Moje první React aplikace</p>
       </main>
     </div>
   );
   ```

1. Přímo ve volání funkce `render` změňte nadpis stránky `h1` a v hlavičce uveďte svoje jméno.
1. Vytvořte komponentu pro hlavičku stránky. Uvnitř této komponenty uložte své vlastní jméno do proměnné a obsah této proměnné vložte do JSX. Vložte vaši komponentu na místo, kde je nyní použitý element `header`.
1. Pomocí `import` přidejte do projektu soubor s CSS stylem. V souboru `style.css` vytvořte CSS třídu `intro` a nastavte v ní `font-style` na `italics`. Uložte si název této třídy do proměnné a tu pak použijte jako `className` pro odstavec `p` na vaší stránce.
