## Událost change

Kromě události `submit` se nám ve formulářích bude hodit také událost `change`. Tuto událost vyhazují formulářové prvky ve chvíli, kdy se mění jejich obsah. U textového políčka tak událost nastane po každém stisknutí klávesy. Pojďme zaexperimentovat a zkusme průběžně měnit legendu formuláře podle toho, co uživatel píše do políčka pro křestní jméno.

```js
document.querySelector('#firstName').addEventListener('change', (e) => {
  const legendElm = document.querySelector('#registration legend');
  legendElm.textContent = `Přihláška pro ${e.target.value}`;
});
```

Takováto ukázka je spíše pro demonstraci. V praxi se nám událost `change` najčastěji hodí například ke kontrole správnosti vstupu přímo během toho jak uživatel píše. Můžeme tak nechat zčervenat rámeček kolem políčka pokud například uživatel zadává číslo platební karty a pořád jej nezadal správně. 