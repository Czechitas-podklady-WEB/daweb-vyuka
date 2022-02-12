---
title: Vstup pomocí formuláře
demand: 2
---

Upravte vaši aplikaci na kontrolu rodných čísel tak, aby obsahovala formulář.

1. Do HTML vaší stránky vložte formulář s textovým políčkem pro rodné číslo. Formulář se bude odesílat tlačítkem :i[Zkontrolovat].
1. Na událost `submit` formuláře pověste posluchač, který provede kontrolu zadaného rodného čísla tak, jak jsme ji dělali v předchozím cvičení.
1. Do HTML vložte `div` s nějakým vhodně zvoleným `id`. Tento `div` bude představovat zprávu pro uživatele.
1. Z přechozího cvičení máme hotovou funkci připravený kód, který pomocí `filter` generuje pole špatně zadaných znaků. Pokud je toto pole prázdné, vypište do vašeho `divu`

   ```
   V pořádku
   ```

1. Pokud pole prázdné není, vypište zprávu ve smyslu
   ```
   V rodném čísle jsou chyby
   ```
1. Pole objektů obsahující informace o jednotlivých cifrách zatím stále vypisujte do konzole. Vrátime se k němu v následujících cvičeních.
