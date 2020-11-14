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
         <option value="hr">Chorvatsko</option>
         <option value="cz">Česká republika</option>
         <option value="pl">Polsko</option>
         <option value="sk">Slovenská republika</option>
      </select>
   </label>
   ```

1. Vytvořte stav `country`, který bude sloužit k uložení hodnoty z vaší nabídky. Výchozí hodnotu stavu nastavte na `cz`. Zařiďte, aby nabídka zobrazovala hodnotu uloženou ve stavu.
1. Pomocí události `onChange` zařiďte, aby se stav `country` měnil podle toho, co uživatel z nabídky vybere.
1. Zprávu po úspěšné regitraci změňte na
   ```
   Registrován nový uživatel jaroslav ze země Polsko
   ```
   Ve zprávě zobrazte zemi, kteoru si uživatel při registraci vybral.
