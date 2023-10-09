---
title: Workshop
demand: 3
lead: Vytvořte aplikaci zobrazující informace o workshopu.
solutionAccess: lock
---

Vyzkoušejte si práci s daty, která už vypadají o kousek realističtěji.

1. API endpoint na adrese https://apps.kodim.cz/daweb/trening-api/apis/workshop vrací JSON s informacemi o smyšleném IT workshopu. Prohlédněte si dobře strukturu dat, která API vrací.
1. Vytvořte nový projekt pomocí `npm init kodim-app@latest jsx`. V tomto projektu si v hlavním `index.jsx` stáhněte data pomocí `fetch` a zatím si je pro kontrolu vypište do konzole.
1. Pomocí destrukturování si dvou separátních proměnných uložte objekty představující instruktora a místo konání workshopu.
1. Pomocí JSX zobrazte na stránce nějaké základní informace o workshopu. Nemusíte zobrazovat vše, vyberte si pouze to, co vás zajímá. Zobrazte však alespoň název workshopu, jméno instruktora a místo konání workshopu.
