---
title: Výběr datumu cesty
demand: 2
---

Na konci tohoto cvičení by si měl uživatel být schopen vybrat datum cesty podle dat stažených z API.

1. V komponentě `JourneyPicker` nám zbývá ještě jeden select s výběrem datumu cestu. Vytvořte si proto další stav jménem `dates`. Do něj si ze serveru stáhněte jednotlivé dny (endpoint `/dates`). Pro stažení dat si vytvořte nový `useEffect`.  
1. V komponentě `JourneyPicket` stav `selectedDate` a pomocí data-bindingu svažte s hodnotou selectu pro výběr datumu.
1. Vyzkoušejte, že si uživatel může vybrat datum a commitněte změny. 