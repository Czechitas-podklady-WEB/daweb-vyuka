---
title: Kontrola dostupnosti
lead: 'Oživte objednávkové tlačítko'
demand: 2
solutionAccess: lock
---

Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

1. Zařiďte úpravou přímo **v HTML souboru**, aby při načtení stránky tlačítko obsahovalo zprávu _Kontroluji dostupnost…_
1. Přidejte do stránky zpoždění pomocí funkce `setTimeout`, která zařídí, že **8 vteřin** po načtení stránky se zpráva na tlačítku změní na _Objednat_.
1. Tlačítka mají speciální HTML atribut s názvem `disabled`. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento **atribut do HTML** kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné/neklikatelné. Až **po uplynutí časovače jej zpřístupněte** nastavením vlastnosti `disabled` v JavaScriptu na `false`.

::fig[ukázka řešení]{src=assets/ukazka.gif}

:::solution

```html
<button id="button-order" disabled>Kontroluji dostupnost…</button>
```

```js
const button = document.querySelector('#button-order');
setTimeout(() => {
  button.textContent = 'Objednat';
  button.disabled = false;
}, 8000);
button.addEventListener('click', () => {
  button.textContent = 'Objednáno';
});
```

:::
