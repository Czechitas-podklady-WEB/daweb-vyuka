---
title: Podrobnosti cesty
demand: 1
---

V tomto cvičení vytvoříte komponentu pro zobrazení detailu cesty a komponentu pro zobrazení zastávky. Využijí se informace, které vrátilo API pro vyhledání spoje.

1. Ve svém projektu vyvořte komponentu s názvem `JourneyDetail`. Do komponenty `JourneyDetail` zatím zkopírujte HTML kód ze zadání – celý element `div` s třídami `journey-detail` a `container` i s jeho obsahem. Vytvoře v komponentě také soubor `style.css`, do kterého zkopírujte ze zadání styly pro třídy `stops` a `journey-detail`. Naimportujte soubor se styly do komponenty.
1. Použijete komponentu `JourneyDetail` v komponentě `Home` na místě, kde se nyní vypisuje id nalezeného spoje. Komponenta se bude zobrazovat jenom tehdy, když ve stavu `journey` v komponentě `Home` je něco jiného, než `null`. Ověřte, že po vyhledání spojení se na stránce zobrazí podrobnosti cesty s městy 1 až 4.
1. V samostatné složce vytvořte komponentu s názvem `BusStop`. V komponentě vytvořte také soubor se styly, do kterého ze zadání zkopírujete všechny styly pro třídy začínající `bus-stop`.
1. Do komponenty `BusStop` vložte ze zadání celý element `div`, který má třídu `bus-stop`. Je to jeden řádek ze seznamu zastávek.
1. V komponentě `JourneyDetail` smažte HTML kód se seznamem zastávek. Zbyde tam jen kontejner, v něm `h3` s textem „Podrobnosti cesty“ a pod ním `div` s třídou `stops`. Do tohoto divu vložte komponentu `BusStop`. Zkontrolujte v prohlížeči, že se zobrazí jedna zastávka.
1. Komponenta `BusStop` bude očekávat tři `props` – `name`, `station` a `time`. Tam, kde používáte komponentu `BusStop`, přidejte komponentě odpovídající atributy a nastavte jim hodnoty „Praha“, „ÚAN Florenc“ a „15:55“. Komponentu `BusStop` upravte tak, aby se tyto hodnoty propsaly na správná místa v HTML. Zkontrolujte, že se v prohlížeči zobrazují správné údaje pro jednu zastávku.
1. Komponenta `JourneyDetail` bude v `props` očekávat property `journey` s údaji o cestě. V property `journey` bude objekt, který má v sobě v property `stops` seznam zastávek. Property `journey` si můžete vypsat do konzole prohlížeče.
1. Místo jedné komponenty `BusStop` použité v komponentě napište kód, který projde všechny zastávky v `journey.stops` a pro každou zastávku vloží jednu komponentu `BusStop`, které předá správné údaje. Můžete si pomoci tak, že nejprve upravíte vloženou komponentu `BusStop`, ve které máte „Praha“, „ÚAN Florenc“ a „15:55“ tak, aby se místo těchto údajů vložily údaje z první zastávky v `journey.stops[0]` a následně kód upravíte tak, aby pomocí funkce `map` prošel všechny zastávky v `journey.stops`. Jako klíč (`key`) pro React můžete použít property `code`, která je uvedená v `journey.stops` u každé zastávky.
1. Nyní už zbývá jen poslat z komponenty `Home` do komponenty `JourneyDetail` údaje o cestě. Vraťte se do komponenty `Home`. Ve stavu `journey` tam jsou uloženy údaje o cestě. Nyní už jen stačí tento stav předat do prop `journey` komponenty `JourneyDetail`.
1. Ověřte v prohlížeči, že funguje vyhledání spojení a že se pod vyhledávacím formulářem zobrazí „jízdní řád“ spoje – seznam zastávek s časy. Zastávek je u spoje víc a když vyhledáte jiné spojení, změní se i seznam zastávek.
1. Commitněte změny.
