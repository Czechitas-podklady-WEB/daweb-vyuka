---
title: Odkšrtnutí nákupu
demand: 3
context: lekce
lead: Přidejte do aplikace Nákupy možnost odškrtnutí položky na seznamu jako nakoupené.
solutionAccess: protected
---

Pokračujte v aplikaci z předchozího příkladu. Rozšíříme náš nákupní seznam ještě o tlačítko _Nakoupeno_, které umožní označit položku jako zakoupenou.

Postup je velmi podobný jako v předchozím cvičení.

1. V komponentě `ShopItem` je tlačítko, které zobrazuje stav nakoupení a zároveň umožňuje označit položku jako nakoupenou.
1. V hlavní stránce vytvořte posluchač události `handleDone` a připojte jej na všechna tlačítka s třídou `btn-tick` – podobně, jako jste napojily `handleDelete`.
1. Založte `async` posluchač události `handleDone` a vyzkoušejte, že se zavolá při stisknutí prázdného kolečka.
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

:::solution
Kompletní řešení naleznete v branchi [reseni](https://github.com/Czechitas-podklady-WEB/ukazka-nakupy-fetch/tree/reseni).
:::