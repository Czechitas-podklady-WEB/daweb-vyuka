---
title: Výběr zóny
demand: 2
---

Pokračujte v předchozím příkladu.

1. Vložte do stránky formulář, ze kterého si uživatel může vybrat časovou zónu. Uvnitř formuláře použijte následující `select`.
   ```html
   <select>
     <option value="America/New_York">New York</option>
     <option value="Europe/London">Londýn</option>
     <option value="Europe/Moscow">Moskva</option>
     <option value="Asia/Hong_Kong">Hong Kong</option>
     <option value="Asia/Jerusalem">Jeruzalém</option>
   </select>
   ```
1. Vytvořte stav `timezone` a funkci `handleTimezoneChange`, která propojí stav s hodnotou uvnitř prvku `select`.
1. Zrušte prozatím efekt, který při zobrazení komponenty získává čas ze serveru. Funkci `fetch` místo toho zavolejte uvnitř funkce `handleTimezoneChange`. V této funkci zkustruujte URL pro váš dotaz tak, aby server poslal data pro uživatelem vybranou časovou zónu.
1. Vaše aplikace by měla fungovat tak, že když uživatel vybere z nabídky časovou zónu, rovnou se mi na stránce ukáže aktuální čas v této zóně.
