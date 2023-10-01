## Zpoždění a časovače

Dobrá zpráva pro začínající programátory je, že psát funkce očekávající jiné funkce na vstupu je spíše pokročilá věc a budeme ji používat až při práci v Reactu. Zatím budeme funkce tohoto ražení používat už hotové, zabuduované přímo v JavaScriptu.

Jedna ze situací, kdy se nám velmi hodí použít funkci jako argument, nastává, když chceme v JavaScriptu provedení nějaké funkce pozdržet nebo její volání pravidelně opakovat. Jako příklad vezměme aplikaci, kde uživatel odpovídá na kvízové otázky. Budeme chtít, aby uživatel měl na každou odpověď nějaký časový limit, například 5 vteřin, po jehož uplynutí vypíšeme „čas vypršel“. Vyrobíme si tedy funkci, která vypisuje naši zprávu, zatím pro jednoduchost přimo do `body`.

```js
const timeIsUp = () => {
  document.body.innerHTML += '<p>Čas vypršel</p>';
};
```

Tuto funkci chceme spustit pět vteřin poté, co se otevře naše stránka. K takovému účelu JavaScript poskytuje funkci `setTimeout`. Ta jako svůj vstup bere funkci a počet milisekund, které mají uplynout před tím, než se tato funkce zavolá. Použití tak vypadá následovně.

```js
setTimeout(timeIsUp, 5000);
```

Všimněte si, že `setTimeout` je funkce beroucí jinou funkci jako argument. Opět narážíme na to, že funkci `timeIsUp` nevoláme my, ale zavolá ji až JavaScript runtime po uplynutí 5000 milisekund. Celý program pak vypadá takto.

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
