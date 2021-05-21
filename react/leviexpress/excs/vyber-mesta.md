---
title: Výběr města
demand: 2
---

Na konci tohoto cvičení by si měl uživatel být schopen vybrat startovní a cílové město ze saznamu měst stažených z API.

1. V komponentě `JourneyPicker` si vytvořte stav `cities`. Do něj si ze serveru stáhneme data o všech dostupných městech. 
1. Prohlédněte si data, která API vrací na endpointu `/cities`. Pomocí `useEffect` si je stáhněte do stavu `cities`. 
1. Komponenta `JourneyPicket` obsahuje dva selecty zobrazující města. Jeden pro start a druhý pro cíl. Naplňte oba selecty daty se stavu `cities`. Jako `value` pro jednotlivé `options` použijte mezinárodní kód města.
1. Vytvořte dva další stavy `fromCity` a `toCity`. Pomocí data-bindingu každý z nich svažte hodnotou odpovídajícícho selectu.
1. Vyzkoušejte, že si uživatel může vybrat start i cíl a commitněte změny. 