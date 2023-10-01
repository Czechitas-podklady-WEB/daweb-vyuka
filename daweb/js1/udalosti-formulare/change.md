## Událost input a change

Kromě události `submit` se nám ve formulářích bude hodit také událost `input`. Tuto událost vyhazují formulářové prvky ve chvíli, kdy se mění jejich obsah. U textového políčka tak událost nastane po každém stisknutí klávesy. Pojďme zaexperimentovat a zkusme průběžně měnit nadpis formuláře podle toho, co uživatel píše do políčka pro křestní jméno.

```js
document.querySelector('#firstName').addEventListener('input', (e) => {
  const titleElm = document.querySelector('#registration h1');
  titleElm.textContent = `Přihláška pro ${e.target.value}`;
});
```

Takováto ukázka je spíše pro demonstraci. V praxi se nám událost `input` najčastěji hodí například ke kontrole správnosti vstupu přímo během toho jak uživatel píše. Můžeme tak nechat zčervenat rámeček kolem políčka pokud například uživatel zadává číslo platební karty a pořád jej nezadal správně.

Velmi podobně se chová i událost `change`, která nastává, když uživatel dopíše.

::fig[Události input a change]{src=assets/input-a-change.gif}
