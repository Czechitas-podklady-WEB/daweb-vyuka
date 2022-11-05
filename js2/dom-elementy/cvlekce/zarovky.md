---
title: Žárovky
demand: 2
---

Vzpomeňte na příklad se zapínámím a vypínáním žárovky. V tomto cvíčení žárovku naprogramujeme pomocí komponent a DOM elementů.

1. Zdrojové kódy k zadání najdete v [tomto repozitář](https://github.com/Czechitas-podklady-WEB/zarovka-zadani).
1. Otevřete si stránku v prohlížeči. Měli byste vidět jednu žárovku.
1. Prohlédněte si soubor `index.html` a podívejte se, jak je žárovka vytvořena.
1. V oddělené složce vytvořte komponentu `Bulb`, která vyrobí DOM element pro žárovku. Komponenta bude vyžadovat jednu _prop_ s názvem `isOn` udávajcí, zda je žárovka zpnutá či nikoliv.
1. Smažte obsah elementu `#app` v `index.html`. Pomocí `append` do něj vložte tři žárovky, jednu zapnutou a dvě vypnuté.
1. Na `div` element uvnitř komponenty připojte posluchač událost `click`. Tento žárovku při kliknutí rozsvítí/zhasne tím, že pomocí `replaceWith` nahradí starou žárovku novou žárovkou.
1. Vyzkoušejte, že dokážete na stránce nezávisle rozsvítit a zhasnout všechny tři žárovky.

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/zarovky-reseni-forked-z7917z).
