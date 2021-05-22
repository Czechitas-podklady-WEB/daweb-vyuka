---
title: Potvrzení rezervace
demand: 3
---

V tomto kroku potvrdíme rezervaci kliknutím na tlačíko, zpracujeme odpověď ze serveru a přesměrujeme uživatele na detail rezervované jízdenky.

1. Nyní je potřeba zprovoznit tlačítko „Rezervovat". Stále v komponentě `SeatPicker` vytvořte funkci `handleBuy` a zařiďte, aby byla tato funkce volána při kliknutí na tlačítko „Rezervovat". Ve funkci si zatím můžete vypsat nějakou zprávu do konzole `('Funguju!')`.
1. Pomocí atributu `disabled` na tlačítku „Rezervovat" zabezpečte, aby bylo tlačítko přístupné jenom tehdy, když je vybrané nějaké sedadlo, tj. když stav `selectedSeatNumber` nemá hodnotu `null`. Ověřte v prohlížeči, že se tlačítko zpřístupní až po výběru sedadla a že se po kliknutí na tlačítko vypíše do konzole text, který máte ve funkci `handleBuy`.
1. Podle [dokumentace](https://reactrouter.com/web/api/Hooks/usehistory) React Routeru se podívejte, jak lze pomocí hooku `useHistory` přímo v kódu změnit stránka, na které se uživatel nachází. Tedy jak uživatele přesměrovat.
1. Nad funkcí `handleBuy` vytvořte proměnnou `history` s použitím hooku `useHistory()`, nezapomeňte hook naimportovat z `react-router-dom`. Za moment tuto proměnnou použijeme.
1. Nákup jízdenky se ve funkci `handleBuy` provede tak, že zavoláte API endpoint
   ```   
   https://leviexpress-backend.herokuapp.com/api/cities?seat=…&journeyId=…
   ```
   Parametr `seat` bude číslo sedadla vybrané uživatelem a parametr `journeyId` bude mít hodnotu `journeyId` z props.
1. Volání tohoto API vrací JSON s daty, ze kterých nás bude zajímat hodnota `reservationId`. Vypiště si ji do konzole.
1. Pomocí naší `history` proměnné, její metody `push` a hodnoty `reservationId` přesměrujte uživatele na stránku detailu rezervace. Takové volání bude může vypadat následovně:
   ```js
   history.push(`/reservation/${reservationId}`);
   ```
1. Zkontrolujte, že po vybrání sedadla a kliknutí na tlačíko „Rezervovat" se stránka přesměruje například na adresu
   ```
   http://localhost:8080/reservation/FwQBAAMcgLs
   ```
   kde záhy vytvoříme detail jízdenky!
