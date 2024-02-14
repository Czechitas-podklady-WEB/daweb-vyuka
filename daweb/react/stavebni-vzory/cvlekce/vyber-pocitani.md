---
title: Počítání vybraných položek
lead: Přidejte do vzoru vícenásobný výběr počítání položek.
demand: 3
solutionAccess: protected
---

Vezměte vzor _Vícenásobný výběr_ ze vzorového repozitáře a rozšiřte jej o možnost počítání vybraných položek. Chceme, aby se v hlavní komponentě zobrazovalo číslo udávající, kolik položek je právě vybráno.

1.  Vyjděte z repozitáře [ukazka-vzory](https://github.com/Czechitas-podklady-WEB/ukazka-vzory). Pomocí _Use template_ si vytvořte vlastní kopii repozitáře a naklonujte si ji na disk.
1.  Zprovozněte aplikaci:
    1. nainstalujte závislosti pomocí `npm install`,
    1. v jednom terminálu spusťte API server pomocí `npx jsonhost@latest`,
    1. v druhém terminálu spusťte vývojový server pomocí `npm run dev`.
1.  Rozmyslete si, jak do zobrazení seznamu přidat počitadalo položek. Dříve, než začnete programovat, rozmyslete si všechno následující:

    1. Budete potřebovat nějaké nové stavy? Pokud ano, jaké a v jakých komponentách? Zaneste je do diagramu komponent.
    1. Použijete nějakou techniku, kterou jsme se učili? Například jednoduchá komunikace dítě rodič, pokročilá komunikace dítě rodič, obousměrný data binding apod.?
