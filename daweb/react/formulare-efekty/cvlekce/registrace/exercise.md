---
title: Registrace
lead: Vytvořte jednoduchý formulář pro registraci uživatele.
demand: 3
context: lekce
solutionAccess: protected
---

::fig[ukázka řešení]{src=assets/ukazka-reseni.gif}

1. Založte si novou React aplikaci dle klasického postupu.
1. V komponentě `HomePage` vytvořte jednoduchý formulář pro registraci uživatele. Formulář bude obsahovat jedno textové políčko pro zadání uživatelského jména a tlačítko pro odeslání formuláře s textem _Registrovat_.
1. Uvnitř `HomePage` vytvořte stav `userName` s výchozí hodnotou prázdný řetězec. Vytvořte obousměrný (two-way) data binding mezi textovým políčkem a stavem `userName`.
1. V reakci na událost `onSubmit` pomocí funkce `alert` vypište jméno uživatele uložené ve stavu `userName`.
1. Na stránku vložte `div` se zprávou
   ```text
   Uživatelské jméno je povinný údaj
   ```
   Tato zpráva bude vidět pouze pokud je ve stavu `userName` prázdný řetězec. V opačném případě tento div nezobrazujte.
1. Vzpomeňte si na vlastnost `disabled` a zařiďte, aby registrační tlačítko bylo klikatelné pouze v případě, že ve stavu `userName` není prázdný řetězec. HTML atributy, které mají formu příznaku (tj. atribut nemá žádnou hodnotu, ale důležité je, zda se atribut v HTML elementu vyskytuje či nevyskytuje), se v JSX předávají pomocí přiřazení hodnoty `true` nebo `false`. Tj. když v JSX uvedete `<button disabled={true}>Stiskni mne</button>`, je to jako kdybyste v HTML napsali `<button disabled>Stiskni mne</button>`. Pokud naopak uvedete v JSX `<button disabled={false}>Stiskni mne</button>`, výsledné HTML bude vypadat takto: `<button>Stiskni mne</button>`.

:::solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-registrace-t1ogp1?file=/src/App.jsx).

:::
