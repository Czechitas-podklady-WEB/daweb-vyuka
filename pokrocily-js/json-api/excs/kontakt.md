---
title: Kontakt
demand: 2
---

Prohlédněte si kód následující komponenty vytvářející HTML pro kontakt na nějakou osobu. Každý kontakt obsahuje jméno, e-mail a telefon.

```js
const Contact = (props) => {
  return `
    <div class="contact">
      <div class="contact__name">${props.name}</div>
      <div class="contact__email">${props.email}</div>
      <div class="contact__phone">${props.phone}</div>
    </div>
  `;
};
```

1. Přepište tuto komponentu tak, aby používala destrukturování.
2. Zavolejte tuto komponentu v konzoli s alespoň dvěma různými objekty a sledujte výsledek.
