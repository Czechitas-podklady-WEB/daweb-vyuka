---
title: Kontakt
demand: 2
---

Prohlédněte si kód následující komponenty vytvářející HTML pro kontakt na nějakou osobu. Každý kontakt obsahuje jméno, příjmení a e-mail.

```js
const Contact = (props) => {
  return `
    <div class="contact">
      <div class="contact__first">${props.first_name}</div>
      <div class="contact__last">${props.last_name}</div>
      <div class="contact__email">${props.email}</div>
    </div>
  `;
};
```

1. Přepište tuto komponentu tak, aby používala destrukturování.
2. Zavolejte tuto komponentu v konzoli s alespoň dvěma různými objekty a sledujte výsledek.
