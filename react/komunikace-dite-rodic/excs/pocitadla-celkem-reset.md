---
title: Počitadla celkem, reset
demand: 3
---

Pokračujte v aplikaci z předchozího příkladu. Chceme přidat další událost, která nastane, když počitadlo resetujeme. V tomto případě s událostí musíme poslat i hodnotu, která na počitadle byla, když jsme jej restartovali.

1. Zařiďte, aby každé počitadlo vyhazovalo událost `reset`, která ponese hodnotu, která na počitadle byla před restartováním.
1. Zareaguje ne tuto událost v hlavní komponentě `App` tak, že snížíte celkový součet o hodnotu, která přišla v události.

1. A hlavní komponentě `App` vytvořte datovou položku `countersSum`, která bude obsahovat výsledný součet.
1. U každého počitadla zareagujte na událost `oneUp` a přičtěte jedničku k celkovému součtu. Součet zobrazte na stránce.
