---
title: Vinařství
demand: 3
---

Vyrobte jednoduchý web pro malé rodinné vinařství. Web bude obsahovat několik stránek vztahujících se k výrobě a prodeji vín.

1. Pomocí `npm init kodim-app@latest` založte nový projekt s názvem `vinecko`.
1. Upravte soubor `index.html` tak, aby v `body` byl pouze `div` s _id_ `app`.
1. Vytvořte komponentu `HomePage`, která bode zobrazovat hlavní stránku. Zatím do ní vložte klidně pouze nadpis `h1`. V hlavním `index.js` celé aplikace zapojte tuto stránku pod _routu_ `/`.
1. Vytvořte komponentu `Navigation`, která bude představovat navigaci. Do navigace přidejte tyto odkazy

- Úvod (URL `/`)
- Katalog vín: (URL `/catalogue`)
- Degustace: (URL `/degustation`)
- Kontakty: (URL `/contact`)

1. Použijte komponentu `Navigation` uvnitř komonenty `IntroPage`.
1. Ke každé z dalších stránek vytvořte příslušnou komponentu: `CataloguePage`, `DegustationPage` a `ContactPage`. Zatím do všech komponent vložte pouze nadpis `h1`.
1. V hlavním `index.js` celé aplikace a zobrazte pro aktuální URL správnou stránku.
1. Vyzkoušejte, že váš web správně přepíná mezi stránkami.
1. Přidejte do komponenty `Navigation` schopnost zvýraznit odkaz aktuální stránky.
1. Dejte prostor své kreativitě a naplňte jednotlivé stránky obsahem dle vaší fantazie. Vaše stránka bude takzvaně _statická_, to znamená, že se neptá na žádné API. Obsah si tedy můžete uplně vymyslet například s pomocí [ChatGPT](https://chat.opanai.com).
