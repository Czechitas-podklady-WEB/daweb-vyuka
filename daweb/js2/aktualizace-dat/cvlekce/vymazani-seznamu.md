---
title: Vymazání seznamu položek
demand: 3
---

Pokračujte v aplikaci z předchozího příkladu. Rozšíříme náš nákupní seznam ještě o tlačítko _vymazat_, které naopak umožní odstranit najednou všechny položky seznamu.

Postup je velmi podobný jako v předchozím cvičení.

1. Do prvku `shoplist__toolbar` přidejte tlačítko _vymazat_ s třídou `clear-btn`.
1. Založte posluchač události `handleClear` a vyzkoušejte, že se zavolá při stisknutí tlačítka.
1. V obsluze události pošlete autentizovaný POST požadevek na stejnou adresu jako v předchozím příkladu
   ```
   https://nakupy.kodim.app/api/me/week/:day/actions
   ```
   Tentokrát je třeba odeslat toto JSON _body_:
   ```json
   {
     "type": "clear"
   }
   ```
1. Opět vyzkoušejte, že aplikace funguje, a že můžete seznamy hravě mazat nebo obnovovat zcela dle libosti.
