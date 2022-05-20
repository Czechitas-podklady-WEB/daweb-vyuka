---
title: Výběr data cesty
demand: 2
---

Na konci tohoto cvičení bude uživatel schopen vybrat datum cesty podle dat stažených z API. Budeme postupovat obdobně, jako s komponentou `CityOptions`. Tentokrát však vytvoříme komponentu `DatesOptions`, která vygeneruje elementy `option` do výběru termínů cesty. Termíny cest se budou získávat z API endpointu [/api/dates](https://apps.kodim.cz/daweb/leviexpress/api/dates). Prohlédněte si strukturu dat, která tento endpoint vrací.

1. Komponentu `DatesOptions` vytvořte opět přímo v souboru s komponentami `JourneyPicker` a `CityOptions`.
1. HTML kód s elementy `<option>` pro výběr termínu přesuňte ze `select`u pro výběr data do komponenty `DatesOptions`. V `select`u použijte vytvořenou komponentu `DatesOptions`. Zkontrolujte v prohlížeči, že se výběr termínů zobrazuje stále stejně.
1. Podobně jako `CityOptions` získává seznam měst v property `cities`, bude i `DatesOptions` získávat seznam termínů v property `dates`. V elementech `<option>` (s výjimkou prvního ručně vloženého s textem „Vyberte“) požijte jako `value` a `key` hodnotu `dateBasic` a jako hodnotu `dateCs` použíjte jako obsah.
1. Připravte si pomocí `useState` další stav `dates`. Pro otestování si do něj vložte tato data:
   ```json
   [
     {
       "dateBasic": "28.05.2021",
       "dateCs": "pá 28. květen 2021"
     },
     {
       "dateBasic": "29.05.2021",
       "dateCs": "so 29. květen 2021"
     }
   ]
   ```
1. Použijte stav `dates` pro naplnění hodnot property `dates` tam, kde je použita komponenta `DatesOptions`. Ověřte v prohlížeči, že se ve výběru termínů zobrazují dvě uvedená data.
1. Upravte `useEffect` volaný při prvním zobrazení komponenty. Vedle seznamu měst bude z API získávat také seznam termínů. Endpoint je na adrese

   https://apps.kodim.cz/daweb/leviexpress/api/dates

   a vrací seznam termínů ve formátu, který máme připraven. Změňte výchozí stav `dates` na prázdné pole a po té do něj nastavte výsledek volání uvedeného endpointu.

1. Ověřte v prohlížeči, že se do `select`ů načítají data (města a termíny) a že po kliknutí na tlačítko „Vyhledat spoj“ se uživatelem zvolené údaje vypíší do konzole prohlížeče.
1. Commitněte změny.
