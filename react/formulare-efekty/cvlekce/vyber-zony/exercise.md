---
title: Výběr zóny
demand: 2
---

::fig[ukázka řešení]{src=assets/ukazka-reseni.gif}

Pokračujte v předchozím příkladu.

1. Vložte do stránky formulář, ze kterého si uživatel může vybrat časovou zónu. Uvnitř formuláře použijte následující `select`.
   ```html
   <select>
     <option value="America/New_York">New York</option>
     <option value="Europe/London">Londýn</option>
     <option value="Europe/Moscow">Moskva</option>
     <option value="Europe/Prague">Praha</option>
     <option value="Asia/Hong_Kong">Hong Kong</option>
     <option value="Asia/Jerusalem">Jeruzalém</option>
   </select>
   ```
1. Vytvořte stav `timezone` s výchozí hodnotou `Europe/Prague`.
1. Propojte stav `timezone` s prvkem `select`.
1. Zařiďte, aby se váš efekt volal při každé změně stavu `timezone`. Uvnitř efektu zkunstruujte URL pro váš dotaz tak, aby server poslal data pro uživatelem vybranou časovou zónu.
1. Vaše aplikace by měla fungovat tak, že když uživatel vybere z nabídky časovou zónu, rovnou se mu na stránce ukáže aktuální čas v této zóně.

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-vyber-zony-mlvz2e?file=/src/App.jsx).
