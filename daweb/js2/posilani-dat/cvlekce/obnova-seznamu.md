---
title: Odkšrtnutí nákupu
demand: 3
context: lekce
lead: Přidejte do aplikace Nákupy možnost odškrtnutí položky na seznamu jako nakoupené.
solutionAccess: protected
---

Pokračujte v aplikaci z předchozího příkladu. Rozšíříme náš nákupní seznam ještě o tlačítko _Nakoupeno_, které umožní označit položku jako zakoupenou.

Postup je velmi podobný jako v předchozím cvičení.

1. Do aplikace přidejte tlačítko _vymazat_.
1. Založte `async` posluchač události `handleDone` a vyzkoušejte, že se zavolá při stisknutí tlačítka.
1. V obsluze události pošlete autentizovaný `PATCH` požadavek na stejnou adresu jako v předchozím příkladu
   ```
   https://nakupy.czechitas.dev/api/:day/:id
   ```
   Tentokrát je třeba odeslat toto JSON _body_:
   ```json
   {
     "done": true
   }
   ```
1. Opět vyzkoušejte, že aplikace funguje, a že můžete označit položku nákupu jako zakoupenou.
