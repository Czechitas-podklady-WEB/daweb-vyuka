---
title: Výběr země
demand: 2
---

Pokračujte v předchozím cvičení.

1. Přidejte do vašeho formuláře rozbalovací nabídku `select`, která bude sloužit k výběru země, ze které uživatel pochází.

   ```html
   <label>
     Země původu:
     <select>
       <option value="Chorvatsko">Chorvatsko</option>
       <option value="Česká republika">Česká republika</option>
       <option value="Polsko">Polsko</option>
       <option value="Slovenská republika">Slovenská republika</option>
     </select>
   </label>
   ```

1. Vytvořte stav `country`, který bude sloužit k uložení hodnoty z vaší nabídky. Výchozí hodnotu stavu nastavte na `Česká republika`.
1. Pomocí události `onChange` zařiďte one-way data binding mezi nabídkou `select` a stavem `country`.
1. Zařiďte two-way data binding mezi nabídkou `select` a stavem `country` tak, aby nabídka zobrazovala výchozí hodnotu uloženou ve stavu.
1. Zprávu vypisovanou do konzole po úspěšné registraci změňte na
   ```
   Registrován nový uživatel jaroslav ze země Polsko
   ```
   Ve zprávě zobrazte zemi, kteoru si uživatel při registraci vybral.
