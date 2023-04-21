---
title: Vymazání seznamu položek
demand: 3
---

Pokračujte v aplikaci z předchozího příkladu. Rozšíříme náš nákupní seznam o možnost přídání nové položky.

1. Najděte si v dokumentaci k API, jakým způsobem se do seznamu přidává nová položka.
1. V komponentě `ShopList` vytvořte formulář pro zadání nové položky. Vytvořte políčko pro název produktu, množství a jednotku.
1. Při odeslání formuláře pošlete POST na příslušný endpoint. Tento endpoint by měl vrátit celý aktualizovaný seznam položek. Pomocí `replaceWith` překreslete komponentu s novými daty získanými ze serveru.
