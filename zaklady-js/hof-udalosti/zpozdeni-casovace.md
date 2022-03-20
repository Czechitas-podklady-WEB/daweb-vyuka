## Zpoždění a časovače

Dobrá zpráva pro začínající programátory je, že psát vlastní funkce vyšších řádů je spíš pokročilá věc a budeme ji používat až při práci v Reactu. Zatím budeme používat funkce vyšších řádů, které nám JavaScript nabízí už hotové.

Jedna ze situací, kdy se nám velmi hodí funkce vyššího řádu, je chvíle, kdy chceme v JavaScriptu provedení nějaké funkce pozdržet nebo její volání pravidelně opakovat. Vzpomeňte si na příklad [kvíz](../dom-innerhtml/cv-manipulace#cvlekce%3Ekviz). Představme si, že chceme, aby uživatel měl na každou odpověď nějaký časový limit. Po zobrazení otázky chceme počkat 5 vteřin a poté vypsat něco jako "čas vypršel". Vyrobíme si tedy funkci, která vypisuje naši zprávu, zatím pro jednoduchost přimo do `body`.

```js
const timeIsUp = () => {
  document.body.innerHTML += '<p>Čas vypršel</p>';
};
```

Tuto funkci chceme spustit pět vteřin poté, co se otevře naše stránka. K takovému účelu JavaScript poskytuje funkci `setTimeout`. Ta jako svůj vstup bere funkci a počet milisekund, které mají uplynout před tím, než se tato funkce zavolá. Použití tak vypadá následovně.

```js
setTimeout(timeIsUp, 5000);
```

Všimněte si, že `setTimeout` je funkce vyššího řádu, neboť bere jako svůj první vstup funkci. Opět vidíme, že funkci `timeIsUp` nevoláme my, ale zavolá ji až JavaScript runtime po uplynutí 5000 milisekund. Celý program pak vypadá takto.

```js
const timeIsUp = () => {
  document.body.innerHTML += '<p>Čas vypršel</p>';
};

setTimeout(timeIsUp, 5000);
```

Pokud chceme, aby se nějaká funkce volala opakovaně, například každých pět vteřín, stačí místo `setTimeout` použít `setInterval`.

```js
setInterval(timeIsUp, 5000);
```
