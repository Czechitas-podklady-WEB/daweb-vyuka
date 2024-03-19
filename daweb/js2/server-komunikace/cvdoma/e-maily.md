---
title: E-maily
demand: 2
context: cvdoma
---

Vytvoříme jednoduchou aplikaci, která zobrazuje obsah e-mailové schránky.

1. Vytvořte si repozitář ze šablony [cviceni-emaily](https://github.com/Czechitas-podklady-WEB/cviceni-emaily) aplikace pro práci s e-maily.
1. Prohlédněte si dokumentaci k [e-mailovému API](https://apps.kodim.cz/daweb/trening-api/docs/e-mailove-api). V prohlížeči si vyzkoušejte, jak API funguje.
1. Podívejte se, jak se v HTML vytváří jeden e-mail.
1. Smažte v HTML obsah elementu `#inbox`. Zobrazte na stránce e-maily stažené z API. Tělo e-mailu nechte prozatím prázdné.

:::solution

Soubor `index.js`:

```js
const renderEmails = (emails) => {
  const inboxElm = document.querySelector('#inbox');
  inboxElm.innerHTML = emails
    .map(
      (email) => `
        <div class="email">
          <div class="email__head">
            <div class="email__icon email__icon--closed"></div>
            <div class="email__info">
              <div class="email__sender">${email.sender.name}</div>
              <div class="email__subject">${email.subject}</div>
            </div>
            <div class="email__time">${email.time}</div>
          </div>
          <div class="email__body"></div>
        </div>
      `
    )
    .join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
  .then((response) => response.json())
  .then((data) => renderEmails(data.emails));
```

:::
