---
title: Vinařství
demand: 3
---

Vyrobte jednoduchý web pro malé rodinné vinařství. Web bude obsahovat několik stránek vztahujících se k výrobě a prodeji vín.

1. Pomocí `create-czechitas-app` založte nový projekt s názvem `vinecko`.
1. Upravte soubor `index.html` tak, aby obsahoval pouze jeden element `#app`.
1. Vytvořte komponentu `Navigation`, která bude představovat navigaci na stránce. Do navigace přidejte tyto odkazy
  - Úvod (URL `/intro`)
  - Katalog vín: (URL `/catalogue`)
  - Degustace: (URL `/degustation`)
  - Kontakty: (URL `/contact`)
1. Ke každé z těchto stránek vytvořte příslušnou komponentu: `IntroPage`, `CataloguePage`, `DegustationPage` a `ContactPage`. Zatím do všech komponent vložte pouze nadpis `h1`.
1. V hlavním souboru `index.js` vytvořte v reakci na událost `DOMContentLoaded` klientské routování a zobrazte pro aktuální URL správnou stránku.
1. Vyzkoušejte, že váš web správně přepíná mezi stránkami.
1. Dejte prostor své kreativitě a naplňte jednotlivé stránky obsahem dle vaší fantazie.
