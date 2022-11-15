---
title: Vinařství
demand: 3
---

Vyrobte jednoduchý web pro malé rodinné vinařství. Web bude obsahovat několik stránek vztahujících se k výrobě a prodeji vín.

1. Pomocí `create-czechitas-app` založte nový projekt s názvem `vinecko`.
1. Upravte soubor `index.html` tak, aby měl prázdné `body`.
1. Vytvořte komponentu `App`, která zatím bude vracet pouze prázdný `div`. Zapojte tuto komponentu do stránky.
1. Vytvořte komponentu `Navigation`, která bude představovat navigaci. Do navigace přidejte tyto odkazy
  - Úvod (URL `/intro`)
  - Katalog vín: (URL `/catalogue`)
  - Degustace: (URL `/degustation`)
  - Kontakty: (URL `/contact`)
1. Použijte komponentu `Header` uvnitř komonenty `App`.
1. Ke každé z těchto stránek vytvořte příslušnou komponentu: `IntroPage`, `CataloguePage`, `DegustationPage` a `ContactPage`. Zatím do všech komponent vložte pouze nadpis `h1`.
1. V komponentě `App` vytvořte klientské routování a zobrazte pro aktuální URL správnou stránku.
1. Vyzkoušejte, že váš web správně přepíná mezi stránkami.
1. Dejte prostor své kreativitě a naplňte jednotlivé stránky obsahem dle vaší fantazie.
