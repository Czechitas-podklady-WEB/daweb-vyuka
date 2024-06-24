---
title: Detail jízdenky
lead: Vytvořte detail jízdenky.
demand: 3
context: lekce
solutionAccess: protected
---

V předešlé lekci jsme dospěli k vytvoření rezervace a získání `reservationId`. K dokončení základní verze projektu tak stačí vytvořit detail pro jednu jízdenku a zobrazit data z jízdenky.

::fig[náhled]{src=assets/nahled.png}

1. V routeru připravte již existující komponentu `ReservationPage` na správné zpracování detailu jízdenky. Upravte `path` v routeru tak, aby dynamicky zpracovávala `:id` parametr. Výsledná cesta bude vypadat takto: `path: '/reservation/:id'`.
1. Do komponenty `ReservationPage` zkopírujte příslušný HTML kód ze zadání designu. Ze souboru `reservation.html` převezměte element `div` s třídou `reservation` i s jeho obsahem.
1. Vytvořte v komponentě soubor `style.css`, do kterého zkopírujte ze zadání styly pro třídy začínající `reservation`. Naimportujte soubor se styly do komponenty.
1. Komponenta musí zjistit, na detailu které jízdenky se nachází. Naimportujte si `useParams` hook z `react-router-dom`. Uvnitř komponenty tento hook zavolejte a získejte z něj parametr `id`. Podívejte se na [příklad použití hooku useParam](https://reactrouter.com/en/main/hooks/use-params).
1. Pomocí `useState` vytvořte nový stav `reservation`, výchozí hodnota bude `null`.
1. Přidejte `useEffect` volaný při prvním zobrazení komponenty. Bude z API získávat podrobné informace o jedné jízdence. Endpoint je na adrese

   > https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=…

   kde tečky nahradí `id` konkrétní jízdenky. Toto `id` vezměte z proměnné `id` načtené z `useParams` hooku.

1. Endpoint vrací údaje o jízdence. Vypište si je do konzole a podívejte se na jejich formát. Porovnejte strukturu získaných dat s tím, co je natvrdo v JSX (vykopírované z `reservation.html`).
1. Pomocí funkce `setReservation` z `useState` hooku nastavte do proměnné `reservation` objekt s údaji o jízdence získaný z volání uvedeného endpointu.
1. Nahraďte data jízdenky vepsaná natvrdo za ta, která jsou nyní uložená v proměnné `reservation`. Nezapomeňte zobrazení dat podmínit tím, že stav `reservation` nemá hodnotu `null`, jinak bude prohlížeč hlásit chybu, že nelze číst z `undefined`. Když data ještě nejsou k dispozici, ponechte příslušné místo prázdné – budeme spoléhat na to, že server odpoví rychle a než uživatel zjistí, že žádné údaje nevidí, údaje se tam objeví.
1. Zkontrolujte, že stránka vzhledově odpovídá [zadání](https://czechitas-podklady.cz/leviexpress-design/reservation).
1. Pročistěte kód od nepotřebných výpisů, ať vám to nevrací k opravě hypotetická kolegyně či kolega při code review.
1. Commitněte změny.
