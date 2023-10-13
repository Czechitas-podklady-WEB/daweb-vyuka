---
title: Chat
demand: 3
---

1. Vytvořte si repozitář ze šablony stejně jako to děláme s úkoly. Odkaz na přijetí zadání najdete na [classroom.github.com/a/dKpD9cWy](https://classroom.github.com/a/dKpD9cWy).
1. Prohlédněte si soubor `index.html`. Stránka je nastylovaná pomocí [Bootstrapu](https://getbootstrap.com/). Nejsou potřeba žádné další CSS. Všimněte si formulářových inputů `#name-input` a `#message-input`, elementu `#messages`, se kterými budete později pracovat. Pro splnění zadání stačí upravovat pouze soubor `index.js`.
1. Upravte soubor `index.js` tak, aby stránka zobrazovala nejnovější zprávy z api.
   1. Doplňte tělo funkce `renderMessage`. Jejím úkolem bude vracet HTML jedné zprávy podle předlohy, kterou najdete v `index.html`. Správné chování můžete vyzkoušet například výpisem do konzole pomocí `console.log(renderMessage('Pavel', 'Ahoj 👋', '11. 5. 2020 17:30:00'))`.
   1. Dopište funkci `renderMessages`, ať pomocí for smyčky zavolá pro každou zprávu `renderMessage` a přidá ji do elementu s id `messages`. Nezapomeňte obsah `#messages` nejdříve vyčistit, jinak se vám zprávy budou časem opakovat.
   1. Vyzkoušejte, že volání přidává zprávy do stránky.
      ```js
      renderMessages([
        { name: 'Pavel', message: 'Ahoj 👋', date: '11. 5. 2020 17:30:00' },
        {
          name: 'Martina',
          message: 'Ja se máte?',
          date: '11. 5. 2020 17:29:54',
        },
        { name: 'Michal', message: 'Nazdar', date: '12. 5. 2020 12:17:21' },
        { name: 'Ivana', message: 'Ahoj', date: '12. 5. 2020 11:02:15' },
      ]);
      ```
   1. Pomocí zabudované funkce `fetch` stáhněte uvnitř `updateMessages` zprávy z api. Ukázkový kód najdete v [dokumentaci](https://czechichat.herokuapp.com/documentation/). Zprávy přes `renderMessages(data.messages)` zobrazte na stránce. Měly by se vám ukázat minimálně dvě.
1. Upravte soubor `index.js` tak, aby formulář pomocí api odesílal nové zprávy na server.
   1. Doplňte funkci `onSubmit`, která při uložení formuláře odešle jméno a text z inputů.
   1. Pozdravte ostatní v chatu. Vyplňte na stránce políčko pro vaše jméno a zprávu textem „Ahoj“. Odešlete.
