---
title: Kontakt
demand: 1
---

Prohlédněte si kód následující komponenty vytvářející HTML pro kontakt na nějakou osobu. Každý kontakt obsahuje jméno, e-mail a telefon.

```js
const Contact = (name, email, phone) => {
  return `
    <div class="contact">
      <div class="contact__name">${name}</div>
      <div class="contact__email">${email}</div>
      <div class="contact__phone">${phone}</div>
    </div>
  `;
};
```

1. Přepište tuto komponentu tak, aby místo tří parametrů používala parametr `props`.
2. Zavolejte tuto komponentu v konzoli s alespoň dvěma různými objekty a sledujte výsledek.
