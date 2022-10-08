---
title: E-maily
demand: 2
---

Vytvoříme jednoduchou aplikaci, která zobrazuje obsah e-mailové schránky.

1. Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/emaily-zadani) aplikace pro práci s e-maily.
1. Podívejte se, jak se v HTML vytváří jeden e-mail.
1. Smažte v HTML obsah elementu `#inbox` a vytvořte v oddělené složce komponentu s názvem `Email`, která vytvoří HTML pro jeden e-mail. Objekt `props` pro tuto komponenty bude vždy obsahovat položky `sender`, `subject` a `time`.
1. Pomocí vaší komponenty vložte na stránku jeden e-mail. Nezapomeňte komponentu správně exportovat a importovat.
1. Vytvořte ve vaší aplikaci pole s emaily, které bude mít následující strukturu.
   ```js
   const emails = [
     {
       sender: {
         name: 'Richard Kukátko',
       },
       subject: 'Převoz ledničky',
       time: '17:35',
     },
     {
       sender: {
         name: 'Mnislava Slaměná',
       },
       subject: 'Objednávka dortu',
       time: '6:31',
     },
   ];
   ```
   Přidejte si do pole ještě pár e-mailů dle tohoto vzoru.
1. Použijte cyklus `for` a zobrazte tyto e-maily na stránce pomocí komponenty `Email` jako nepřečtené emaily.
