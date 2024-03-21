---
title: Pražský čas
lead: Vytvořte jednoduchou aplikaci, která zobrazuje aktuální čas v Praze.
demand: 2
context: lekce
solutionAccess: protected
---

::fig[ukázka řešení]{src=assets/ukazka-reseni.png}

1. Založte si novou React aplikaci podle klasického postupu.
1. Uvnitř komponenty `HomePage` vytvořte jednoduchý efekt, který se spustí pří prvním zobrazení komponenty. Uvnitř tohoto efektu zavolejte funkci `alert` a zobrazte vyskakovací okno s nějakou zprávou.
1. Přidejte do vaší komponenty stav `datetime`, jehož výchozí hodnota bude prázdný řetězec. V efektu smažte volání `alert` a uložte do stavu nějaký čas jako řetězec ve formátu

   ```
   '2020-11-13T22:46'
   ```

   Zobrazte čas někde na stránce a vyzkoušejte, že efekt správně nastaví stav při prvním zobrazení komponenty.

1. Upravte efekt tak, aby pomocí volání `fetch` získal aktuální datum a čas pro časovou zónu `Europe/Prague`. Hodnotu získáte na API endpointu

   ```text
   https://worldtimeapi.org/api/timezone/Europe/Prague
   ```

   pod položkou `datetime`. Získanou hodnotu uložte do stavu a vyzkoušejte, že vaše aplikace funguje.

:::solution

Řešení naleznete v samostatném [Codesandboxu zde](https://codesandbox.io/s/da-web-prazsky-cas-8n3ruv?file=/src/App.jsx).

:::
