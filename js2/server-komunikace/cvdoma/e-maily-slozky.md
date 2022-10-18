---
title: E-maily, složky
demand: 3
---

V naší e-mailové aplikaci zobrazíme dvě oddělné sekce: přečtené zprávy a nepřečtené zprávy.

1. V HTML stránky vytvořte dvě sekce. Jedna bude sloužit k zobrazení přečtené a druhá nepřečtené pošty.
1. Naplňte každou sekci přislušnými zprávami načtenými z API.

---solution


Soubor `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>E-maily</title>
    <script src="index.js" type="module"></script>
  </head>

  <body>
    <div id="app" class="container">
      <h1>Příchozí pošta</h1>
    </div>
  </body>
</html>
```

Soubor `index.js`:

```js
const renderEmails = (emails, title) => {
  const appElm = document.querySelector('#app');
  let sectionHtml = `
  <div class="inbox">
    <h2>${title}</h2>`;
  sectionHtml += emails
    .map(
      (email) => `
  
    <div class="email">
      <div class="email__icon email__icon--closed"></div>
      <div class="email__fill">
        <div class="email__sender-name">${email.sender.name}</div>
        <div class="email__subject">${email.subject}</div>
      </div>
      <div class="email__end">
        <div class="email__time">${email.time}</div>
      </div>
    </div>
  
  `,
    )
    .join('');
  sectionHtml += `</div>`;
  appElm.innerHTML += sectionHtml;
};

const inboxes = [
  {
    type: 'unread',
    title: 'Nepřečtené',
  },
  {
    type: 'read',
    title: 'Přečtené',
  },
];

inboxes.forEach((inbox) => {
  fetch(
    `https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${inbox.type}`,
  )
    .then((response) => response.json())
    .then((data) => renderEmails(data.emails, inbox.title));
});

```