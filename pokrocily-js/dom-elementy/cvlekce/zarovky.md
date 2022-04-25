---
title: Žárovky
demand: 2
---

Vzpomínáte ještě na příklad se zapínámím a vypínáním žárovky? V tomto cvíčení žárovku naprogramujeme pomocí komponent a DOM elementů.

1. Zdrojové kódy k zadání najdete v [tomto repozitář](https://github.com/Czechitas-podklady-WEB/zarovka-zadani).
1. Otevřete si stránku v přohlížeči. Měli byste vidět jednu žárovku.
1. Prohlédněte si soubor `index.html` a podívejte se, jak je žárovka vytvořena.
1. V oddělené složce vytvořte komponentu `Bulb`, která vyrobí DOM element pro žárovku. Smažte obsah elementu `#app` v `index.html`. Pomocí `appendChild` do něj vložte element vytvořený vaší komponentou.
1. Na element uvnitř komponenty připojte posluchač událost `click`. Tento žárovku při kliknutí rozsvítí přidáním třídy `bulb--on`.
1. Opět pomocí `appendChild` na stránku vložte tři žárovky. Vyzkoušejte, že je dokážete na stránce nezávisle rozsvítit.
