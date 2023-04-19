---
title: Hlasování
demand: 2
---

Vytvoříme aplikaci, která umožní hlasovat pro jednotlivé možnosti na webu _Hlasování_. Pro tento účel si vyberte z nabídky jednu otázku, ve které budete hlasovat.

1. Založte si nový projekt příkazem

```shell
npm init kodim-app cviceni-hlasovani html-css-js
```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-hlasovani`.
1. Prohlédněte si dokumentaci [API pro hlasování](https://apps.kodim.cz/daweb/hlasovani/docs) a pomocí požadavku GET v prohlížeči najděte `id` otázky, kterou jste si ve skupině vybrali.
1. Na stránku (do `index.html`) přidejte tlačítko :i[Hlasovat]. Při stisknutí tlačítka pošlete na API požadavek POST, který zahlasuje vaším jménem pro nějakou vámi zvolenou možnost. Jméno i možnost zatím budou zapsány natvrdo ve vašem kódu. Na stránce [hlavní aplikace](https://apps.kodim.cz/daweb/hlasovani) si ověřte, že se vám povedlo správně zahlasovat.
1. Dejte pozor na to, že aplikace nedovolí hlasovat dvakrát se stejným jménem pro tutéž možnost. Pokud chcete poslat další hlas, změňte v kódu jméno na jiné.

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-hlasovani-ryezq2?file=/index.js).
