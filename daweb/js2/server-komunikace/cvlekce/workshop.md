---
title: Workshop
demand: 3
context: lekce
lead: Vytvořte aplikaci zobrazující informace o workshopu.
solutionAccess: protected
---

Vyzkoušejte si práci s lokálními daty, která už vypadají o kousek realističtěji.

1. Repozitář [cviceni-workshop-api](https://github.com/Czechitas-podklady-WEB/cviceni-workshop-api) obsahuje data pro lokální API, které poskytuje informace o smyšleném IT workshopu. Naklonujte si tento repozitář a spusťte lokální API server pomocí `npx apidroid@latest`.
1. Data o workshopu najdete na API endpointu `/api/workshops/0`. Vyzkoušejte si jej v prohlížeči a prohlédněte si strukturu dat.
1. Nechte API spuštěné a vytvořte nový projekt pomocí `npm init kodim-app@latest cviceni-workshop jsx`. V tomto projektu si v hlavním `index.jsx` stáhněte data pomocí `fetch` a zatím si je pro kontrolu vypište do konzole.
1. Pomocí JSX zobrazte na stránce nějaké základní informace o workshopu. Nemusíte zobrazovat vše, vyberte si pouze to, co vás zajímá. Zobrazte však alespoň název workshopu, jméno instruktora a místo konání workshopu.
