---
title: První kroky v Reactu
demand: 1
---

Vyzkoušíme si založení jednoduché React aplikace s jedním `index.jsx` a jednoduchým CSS. Přestože v Reactu se běžně veškerý kód dělí do komponent, v tomto cvičení je ještě používat nebudeme.

1. Vytvořte si nový reactový projekt. Použijte opět nástroj `kodim-app`, tentokrát ale místo `vanilla` šablony použijeme šablonu `react`:
   ```shell
   npm init kodim-app@latest prvni-kroky react
   ```
1. Projekt spusťte pomocí `npm run start`, jak už to znáte z dřívejška.
1. Prozatím nahraďte celý obsah souboru `index.jsx` tímto kódem.

   ```js
   import React from 'react';
   import { createRoot } from 'react-dom/client';

   createRoot(document.querySelector('#app')).render(
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
1. Uložte si JSX představující obsah stránky do seperátní proměnné `App` uvnitř `index.jsx` a tu pak použijte ve funkci `render`.
1. Uložte si své jméno do proměnné a obsah této proměnné vložte do hlavičky stránky.
1. Pomocí `import` přidejte do projektu soubor s CSS stylem. V souboru `style.css` vytvořte CSS třídu `intro` a nastavte v ní `font-style` na `italics`. Uložte si název této třídy do proměnné a tu pak použijte jako `className` pro odstavec `p` na vaší stránce.
