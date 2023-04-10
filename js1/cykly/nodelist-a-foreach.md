## `querySelectorAll` a `forEach`

`querySelectorAll` a `forEach` jsou velmi užitečné funkce v JavaScriptu, které vám umožní snadno vyhledat prvky na stránce a provést nějakou operaci na každém z těchto prvků.

Funkce `querySelectorAll` vám umožní vyhledávat prvky na stránce pomocí selektoru CSS. To znamená, že můžete vyhledávat prvky na stránce podle třídy, ID nebo jiného atributu. Vyhledané prvky jsou vráceny jako seznam, který lze použít k provedení operace na každém z nich.

Funkce `forEach` pak umožňuje provést operaci na každém prvku v seznamu. To vám umožní provést stejnou operaci na každém prvku bez nutnosti psát stejný kód pro každý prvek zvlášť.

```html
<!-- HTML struktura -->
<ul>
  <li>První položka</li>
  <li>Druhá položka</li>
  <li>Třetí položka</li>
</ul>
```

```js
// JavaScript kód
// vyhledání všech <li> prvků v <ul> a použití forEach smyčky k iteraci přes každý prvek
const liElements = document.querySelectorAll('ul li');
liElements.forEach((li) => {
  console.log(li.textContent); // vypíše text každého <li> prvku
  li.classList.add('fulfilled'); // přidá třídu fulfilled každému <li> prvku
});
```
