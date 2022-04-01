---
title: Kontrola dostupnosti
demand: 2
offerSolution: true
---

:::assign
Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

1. Zařiďte, aby při načtení stránky tlačítko obsahovalo zprávu _Kontroluji dostupnost…_
1. Přidejte do stránky zpoždění pomocí funkce `setTimeout`, která zařídí, že 8 vteřin po načtení stránky se zpráva na tlačítku změní na _Objednat_.
1. Tlačítka mají speciální HTML atribut s názvem `disabled`. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné. Až po uplynutí časovače jej zpřístupněte nastavením vlastnosti `disabled` na `false`.
:::

:::solution

```html
<button id="btn-order" disabled>Kontroluji dostupnost…</button>
```

```js
const button = document.querySelector('#btn-order');
setTimeout(() => {
  button.textContent = 'Objednat';
  button.disabled = false;
}, 8000);
button.addEventListener('click', () => {
  button.textContent = 'Objednáno';
});
```
:::
