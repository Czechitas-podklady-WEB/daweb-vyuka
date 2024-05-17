---
title: Vyhledání spoje
lead: Dokončíme komponentu pro vyhledání spojení.
demand: 3
context: lekce
solutionAccess: protected
---

V tomto cvičení dokončíte komponentu pro vyhledání spojení. V komponentě už funguje výběr výchozího a cílového města a také data cesty. Nyní napojíte komponentu na API pro vyhledávání spojení.

1. Pokračujte v komponentě `JourneyPicker`. Do tlačítka „Vyhledat spoj“ přidejte atribut `disabled` tak, aby tlačítko bylo povolené pouze v případě, že jsou vybrána obě města i datum. Vyzkoušejte, že povolení/zakázání tlačítka správně funguje.
1. Při kliknutí na tlačítko „Vyhledat spoj“ se volá funkce `handleSubmit`, která vypíše údaje zadané uživatelem. Nyní výpis do konzole nahradíte voláním API. Bude se volat následující API endpoint

   > https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=…&toCity=…&date=…

   Vytečkovaná místa se nahradí hodnotami vybranými uživatelem, které jsou uložené ve stavech `fromCity`, `toCity` a `date`.

1. Volání tohoto API vrací JSON s nalezenými spoji. Vypište si výsledek volání do konzole prohlížeče.
1. Nalezená spojení budeme potřebovat zobrazit v další komponentě na stránce. Potřebujeme je tedy poslat z komponenty `JourneyPicker` jejímu rodiči – to uděláme v následujících krocích.
1. V komponentě `HomePage` si připravte funkci `handleJourneyChange`. Funkce `handleJourneyChange` bude očekávat jeden parametr – objekt s údaji o nalezeném spojení. Nazvěte jej třeba `journeyData`. Ve funkci zatím vypište tento parametr do konzole. Volání funkce zařídíme v následujícím kroku.
1. V komponentě `HomePage` používáte komponentu `JourneyPicker`. Této komponentě předejte property jménem `onJourneyChange`, jako hodnotu jí předejte funkci (callback) `handleJourneyChange`.
1. V komponentě `JourneyPicker` bude property `onJourneyChange`, do které rodič (`HomePage`) vkládá funkci, která se zavolá s údaji nalezeném spoji. Všimněte si, že v hlavičce komponenty `JourneyPicker` už je property `onJourneyChange` připravená.
1. Ve funkci `handleSubmit` v komponentě `JourneyPicker` nyní vypisujete nalezená spojení jen do konzole prohlížeče. Tento výpis nahraďte voláním funkce uložené v property `onJourneyChange`, které jako parametr předáte data získaná z volání API pod klíčem `results`.
1. Vyzkoušejte, že když nyní kliknete na „Vyhledat spoj“, vyhledá se spojení a funkce `handleJourneyChange` jej vypíše do konzole.
1. Vraťte se do komponenty `HomePage`, ze které se volá komponenta `JourneyPicker`. V komponentě `HomePage` vytvořte pomocí `useState` nový stav `journey`, výchozí hodnota bude `null`.
1. Propojte komponentu `JourneyPicker` se stavem `journey` – když je volán callback `handleJourneyChange` s údaji o nalezeném spoji, nastaví se toto spojení do stavu `journey`.
1. Upravte komponentu `HomePage` tak, aby v případě, kdy ve stavu `journey` je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude `journeyId` z dat o nalezeném spojení.
1. Ověřte, že funguje výběr měst a data, že po zadání všech třech údajů můžete kliknout na „Vyhledat spoj“ a že se po kliknutí vyhledá spojení a vypíše se do stránky jeho id.
1. Odstraňte pomocné výpisy do konzole, pokud vám v komponentách zůstaly.
1. Commitněte změny.
