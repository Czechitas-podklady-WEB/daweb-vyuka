---
title: Hlasování
demand: 2
lead: Pomocí POST zahlasujte v aplikaci Hlasování.
solutionAccess: lock
---

Vytvoříme aplikaci, která umožní hlasovat pro jednotlivé možnosti na webu _Hlasování_. Pro tento účel si vyberte z nabídky jednu otázku, ve které budete hlasovat.

1. Založte si nový Vite/JSX projekt příkazem

```shell
npm init kodim-app@latest cviceni-hlasovani jsx
```

1. Otevřete si ve VS Code vytvořenou složku `cviceni-hlasovani`.
1. Prohlédněte si dokumentaci [API pro hlasování](https://apps.kodim.cz/daweb/hlasovani/docs) a pomocí požadavku GET v prohlížeči najděte `id` otázky, kterou jste si ve skupině vybrali.
1. Na stránku přidejte tlačítko :i[Hlasovat]. Pověste na toto tlačíko posluchač a zatím na stisk pouze vypište něco do konzole pro ověření, že posluchač funugje.
1. Při stisknutí tlačítka pošlete na API požadavek POST, který zahlasuje vaším jménem pro nějakou vámi zvolenou možnost. Auntentizujte se svým GitHub loginem. Login i možnost zatím budou zapsány natvrdo ve vašem kódu. **Nezapomeňte** posluchač události označit jako `async`.
1. Na stránce [hlavní aplikace](https://apps.kodim.cz/daweb/hlasovani) si ověřte, že se vám povedlo správně zahlasovat.

<!-- :::solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-hlasovani-ryezq2?file=/index.js).

::: -->
