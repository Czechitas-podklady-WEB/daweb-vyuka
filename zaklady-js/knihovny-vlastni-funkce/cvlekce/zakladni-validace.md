---
title: Základní validace
demand: 2
offerSolution: true
---

:::assign
1. Vytvořte prázdnou stránku, do které vložte knihovnu `validator.js` a svůj JavaScript `index.js`.
1. Otevřete stránku v prohlížeči a v konzoli pomocí metody `validator.isEmail` ověřte svoji e-mailovou adresu.
1. Pokud máte po ruce svoji platební kartu, ověřte v konzoli, že má platné číslo pomocí metody `isCreditCard`.
1. Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.
   ```html
   <p id="msg" class="msg"></p>
   ```
1. Pomocí funkce `prompt` požádejte uživatele o jeho e-mail. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu "E-mail v pořádku". V opačném případě zobrazte "Neplatný e-mail".
1. Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu `msg--valid`. V opačném případě použijte třídu `msg--invalid`. Přidejte do stránky soubor `style.css` a třídy nastylujte například tak, že `msg--valid` bude mí zelené pozadí a `msg--invalid` naopak červené.
:::

:::solution
```
const email = prompt('Zadejte váš e-mail')

const isEmail = validator.isEmail(email)
const messageEl = document.querySelector('#message')

if (isEmail) {
  messageEl.textContent = 'E-mail v pořádku'
  messageEl.classList.add('msg--valid')
} else {
  messageEl.textContent = 'Neplatný e-mail'
  messageEl.classList.add('msg--invalid')
}
```
:::
