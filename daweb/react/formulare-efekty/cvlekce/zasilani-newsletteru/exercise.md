---
title: Zasílání newsletteru
lead: Přidejte do formuláře zaškrtávací políčko pro zasílání novinek.
demand: 3
context: lekce
solutionAccess: protected
---

::fig[ukázka řešení]{src=assets/ukazka-reseni.gif}

Pokračujte v předchozím cvičení.

1. Přidejte do vašeho formuláře zaškrtávací políčko označené textem

   ```text
   Chci pravidelně dostávat novinky do mé e-mailové schránky.
   ```

1. Vytvořte si stav `newsletterAccepted`, ve kterém budete mít uloženo, zda si uživatel přeje či nepřeje dostávat e-mailové novinky – tedy stav zaškrtávacího políčka.

1. Přes dvoucestný (two-way) binding propojte stav `newsletterAccepted` a zaškrtávací políčko. Použijete k otmu událost `onChange` a atribut `value`, jako u textových políček. Jako hodnota se bude předávat `true` nebo `false`.

1. Do výpisu ve funkci `alert` přidejte informaci o tom, jestli uživatel chce dostávat novinky.

   ```text
   Uživatel „???“ ze země „???“ se chce zaregistrovat a dostávat pravidelně novinky.
   ```

   ```text
   Uživatel „???“ ze země „???“ se chce zaregistrovat a o novinky nemá zájem.
   ```

:::solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-registrace-zasilani-newsletteru-ibp3g3?file=/src/App.jsx).

:::
