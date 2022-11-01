---
title: Hlasování
demand: 2
---

Vytvoříme aplikaci, která umožní hlasovat pro jednotlivé možnosti na webu *Hlasování*. Pro tento účel si vyberte jednu otázku z nabídky, o které budete hlasovat.

1. Prohlédněte si dokumentaci [API pro hlasování](https://apps.kodim.cz/daweb/hlasovani/docs) a pomocí požadavku GET v prohlížeči najděte `id` otázky, kterou jste si ve skupině vybrali.
1. Založte si prázdnou stránku s JavaScriptovým programem. Na stránku přidejte tlačítko :i[Hlasovat]. Při stisknutí tlačíka pošlete na API požadavek POST, který zahlasuje vaším jménem pro nějakou vámi zvolenou možnost. Jméno i možnost zatím bude zapsaná natvrdo ve vašem kódu. Na stránce [hlavní aplikace](https://apps.kodim.cz/daweb/hlasovani) si ověřte, že se vám povedlo správně zahlasovat.
1. Dejte pozor na to, že aplikace nedovolí hlasovat dvakrát se stejným jménem pro tutéž možnost. Pokud chcete poslat další hlas, změňte v kódu jméno na jiné.

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-hlasovani-ryezq2?file=/index.js).
