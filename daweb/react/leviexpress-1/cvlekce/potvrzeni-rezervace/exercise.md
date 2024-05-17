---
title: Potvrzení rezervace
lead: Umožníme uživateli potvrdit rezervaci jízdenky.
demand: 2
context: lekce
solutionAccess: protected
---

Nyn již máme ve stavu `journey` uložené všechny potřebné informace k tomu, abychom mohli provést rezervaci jizdenky. V tomto cvičení potvrdíme rezervaci kliknutím na tlačíko, zpracujeme odpověď ze serveru a přesměrujeme uživatele na detail rezervované jízdenky.

1. Vložte do komponenty `HomePage` oddíl s tlačítkem „Rezervovat" (zkopírujte potřebný kód z dodaného designu). Stále v komponentě `HomePage` vytvořte funkci `handleBuy` a zařiďte, aby byla tato funkce volána při kliknutí na tlačítko „Rezervovat". Ve funkci si zatím můžete vypsat nějakou zprávu do konzole (třeba `'Funguju!'`).
1. Nákup jízdenky se ve funkci `handleBuy` provede tak, že metodou POST zavoláte API endpoint

   > https://apps.kodim.cz/daweb/leviexpress/api/reservation

   Tělo požadavku bude obsahovat akci `create`, vlastnost `seat` – číslo sedadla vybrané uživatelem, a vlastnost `journeyId` – hodnota `journeyId` ze stavu. Příklad:

   ```js
   fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       action: 'create',
       seat: journey.autoSeat,
       journeyId: journey.journeyId,
     }),
   });
   ```

1. Volání tohoto API vrací JSON s daty, ze kterých nás bude zajímat hodnota `reservationId`. Vypište si ji do konzole.
1. Podle [dokumentace](https://reactrouter.com/en/main/hooks/use-navigate) React Routeru se podívejte, jak lze pomocí hooku `useNavigate` přímo v kódu změnit stránku, na které se uživatel nachází. Tedy jak uživatele navigovat na novou adresu a stránku.
1. Na začátku komponenty `HomePage` vytvořte proměnnou `navigate` (bude to funkce) s použitím hooku `useNavigate()`, nezapomeňte hook naimportovat z `react-router-dom`.
1. Pomocí funkce `navigate` a hodnoty `reservationId` přesměrujte uživatele na stránku detailu rezervace. Takové volání bude může vypadat následovně:
   ```js
   navigate(`/reservation/${reservationId}`);
   ```
1. Zkontrolujte, že po kliknutí na tlačíko „Rezervovat" se stránka přesměruje například na adresu

   > http://localhost:5173/reservation/HAQBAQASf7M

   kde záhy vytvoříme detail jízdenky.

   ::fig[náhled]{src=assets/nahled.png}

1. Odstraňte pomocné výpisy do konzole a jiné pozůstatky bitvy programátora se vzpurným kódem.
1. Commitněte a pushněte změny.
1. Nyní máte zcela hotovou první část projektu. Pokochejte se hotovou aplikací a pochvalte se za pořádný kus dobře odvedené práce. Po malé oslavě svých úspěchů se můžete vrhnout na druhou část.
