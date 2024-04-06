---
title: Objednávka
lead: 'Vytvořte stránku s objednávacím tlačítkem.'
demand: 1
context: lekce
solutionAccess: protected
---

Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

1. Založte HTML stránku s jedním tlačítkem
   ```html
   <button id="button-order">Objednat</button>
   <p id="message"></p>
   ```
1. Doplňte do stránky JavaScriptový program, který zařídí, že po stisknutí tlačítka se do stránky do připraveného elementu `#message` vypíše text „Objednáno“.
1. Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.

::fig[ukázka řešení]{src=assets/ukazka.gif}

:::solution

```js
const buttonElm = document.querySelector('#button-order');
const messageElm = document.querySelector('#message');
buttonElm.addEventListener('click', () => {
  //messageElm.textContent = 'Objednáno';
  buttonElm.textContent = 'Objednáno';
});
```

:::
