---
title: Výběr země
demand: 2
---

::fig[ukázka řešení]{src=assets/ukazka-reseni.gif}

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

1. Do stylů přidejte `display: block;` na prvky `label`, aby se formulář nesléval do jednoho řádku.

   ```css
   label {
     display: block;
   }
   ```

1. Vytvořte stav `country`, který bude sloužit k uložení hodnoty z vaší nabídky. Výchozí hodnotu stavu nastavte na `Česká republika`.
1. Pomocí události `onChange` zařiďte one-way data binding mezi nabídkou `select` a stavem `country`.
1. Zařiďte two-way data binding mezi nabídkou `select` a stavem `country` tak, aby nabídka zobrazovala výchozí hodnotu uloženou ve stavu.
1. Zprávu vypisovanou pomocí funkce `alert` po odeslání formuláře změňte na
   ```text
   Uživatel „???“ ze země „???“ se chce zaregistrovat.
   ```
   Ve zprávě zobrazte jméno a zemi, kterou si uživatel při registraci vybral.

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-registrace-vyber-zeme-klztj1?file=/src/App.jsx).
