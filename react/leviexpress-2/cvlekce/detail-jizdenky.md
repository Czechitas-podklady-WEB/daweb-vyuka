---
title: Detail jízdenky
demand: 3
---

V minulé lekci jsme se dostali k vytvoření rezervace a sízkání `reservationId`. K dokončení základní verze projektu tak stačí vytvořit detail pro jednu jízdenku a zobrazit její data.

1. V komponentě `App` připravte již existující `<Route path="/reservation">` komponentu na správné zpracování detailu jízdenky. Upravte `path` prop tak, aby dynamicky zpracovávala `:id` parametr. Výsledná path bude vypadat takto: `path="/reservation/:id"`. Uvnitř `<Route>` komponenty ponechte `<Reservation />`.
1. Do komponenty `Reservation` zkopírujte HTML kód ze zadání. Ze souboru `reservation.html` převezměte element `div` s třídou `reservation` i s jeho obsahem.
1. Vytvoře v komponentě soubor `style.css`, do kterého zkopírujte ze zadání styly pro třídy začínající `reservation`. Naimportujte soubor se styly do komponenty.
1. Komponenta musí zjistit, na detailu které jízdenky se nachází. Naimportujte si `useParams` hook z `react-router-dom`. Uvnitř komponenty tento hook zavolejte a získejte z něj parametr `id`. [Příklad použití](https://reactrouter.com/web/api/Hooks/useparams).
1. Pomocí `useState` vytvořte nový stav `reservation`, výchozí hodnota bude `null`.
1. Přidejte `useEffect` volaný při prvním zobrazení komponenty. Bude z API získávat podrobné informace o jedné jízdence. Endpoint je na adrese
   ```
   https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=…
   ```
   kde tečky nahradí `id` konkrétní jízdenky. Toto `id` vezměte z vytvořené proměnné `id` z `useParams` hooku.
1. Endpoint vrací údaje o jízdence, pomocí funkce `setReservation` z `useState` hooku nastavte do proměnné `reservation` výsledek volání uvedeného endpointu.
1. Data z endpointu si také můžete vypsat do konzole. Podívejte se na jejich formát a porovnejte strukturu dat s daty, která jsou natvrdo v JSX (vykopírované z `reservation.html`).
1. Nahraďte data jízdenky vepsaná natvrdo za ta, která jsou nyní uložená v proměnné `reservation`. Nezapomeňte zobrazení dat podmínit tím, že stav `reservation` nemá hodnotu `null`, jinak bude prohlížeč hlásit chybu, že nelze číst z `undefined`.
1. Zkontrolujte, že stránka vzhledově odpovídá [zadání](https://czechitas-podklady-web.github.io/leviexpress-zadani/reservation).
1. Commitněte a pushněte změny a kochejte se hotovou aplikací!
