---
title: Výběr města 
demand: 2
---

Na konci tohoto cvičení si uživatel bude schopen vybrat startovní a cílové město ze saznamu měst stažených z API. Vytvoříte komponentu `CityOptions`, která dostane na vstupu pole se seznamem destinací a vytvoří z něj elementy `<option>` do `select`ů pro výběr výchozího a cílového města. Seznam měst se bude stahovat v komponentě `JourneyPicker` z API endpointu [/api/cities](https://leviexpress-backend.herokuapp.com/api/cities). Prohlédněte si strukturu dat, která endpoint vrací.

1. Přímo v komponentě `JourneyPicker` si vytvořte novou komponentu `CityOptions`. Přesuňte do ní všechny `<option>` ze `select`u pro výběr výchozího města. Komponentu `CityOptions` použijte v obou `select`ech pro výběr města. Zkontrolujte, že v prhohlížeči vše funguje stejně.
1. Vytvořte si pomocí `useState` další stav `cities`. V tomto stavu bude seznam měst, mezi kterými lze cestovat. Pro otestování nastavte do seznamu dvě
   města:
   ```js
   [{name: 'Praha', code: 'CZ-PRG'}, {name: 'Brno', code: 'CZ-BRQ'}]
   ```
1. Komponenta `CityOptions` bude v `props` přijímat `cities`. V něm bude pole – seznam měst, které může uživatel vybrat. Upravte tedy příslušným způsobem hlavičku komponenty `CityOptions` a získanou property `cities` si vypište do konzole.
1. Na obou místech, kde máte komonentu `CityOptions` použitou, nastavte property/atribut `cities` na hodnotu stavu `cities`. V prohlížeči se teď při zobrazení stránky vypíše dvakrát do konzole seznam měst – Praha a Brno.
1. Upravte komponentu `CityOptions` tak, aby se na základě seznamu měst v property `cities` vypsaly jednotlivé `<option>`. Pro text `option` se použije název destinace, jako hodnota (atribut `value`) a také jako klíč pro React (`key`) se použije kód destinace.
1. Nechceme, aby při zobrazení stránky byla rovnou vybraná první města ze seznamu. Proto před elementy `option` vytvořené z pole ještě ručně vložíme jeden `option` s textem „Vyberte“. Atribut `value` tohoto `option` bude prázdný.
1. Odstraňte z komponenty `CityOptions` výpis do konzole a zkontrolujte v prohlížeči, že se v seznamu výchozích i cílových měst zobrazuje Praha a Brno a že stále správně funguje výběr měst.
1. Do hlavní komponenty `JourneyPicker` přidejte `useEffect`, který se bude volat při prvním zobrazení komponenty. Přesuňte do něj nastavení stavu `cities` – naše dvě testovací města. Výchozí stav pro `cities` tedy bude prázdné pole, teprve `useEffect` nastaví seznam měst na Prahu a Brno. Ověřte v prohlížeči, že se v `select`ech stále zobrazují obě města. Dejte pozor na to, aby se efekt volal opravdu jen při prvním zobrazení komponenty – můžete si to ověřit pomocným výpisem do konzole prohlížeče, který se musí objevit jen jednou – když budete překlikávat na jiná města, výpis už se nebude opakovat.
1. Upravte `useEffect` tak, že bude seznam měst získávat z API. Endpoint je na adrese 
   ```
   https://leviexpress-backend.herokuapp.com/api/cities
   ```
   a vrací seznam měst
   jako JSON ve formátu, který jsme použili výše. Získaná data použijte místo Prahy a Brna ve stavu `cities`. Ověřte v prohlížeči, že se v seznamu měst objeví i
   další města.
1. Commitněte změny.
