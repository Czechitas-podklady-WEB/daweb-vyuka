## Povinné čtení na doma

### Interval

Pro pouštění jedné funkce opakovaně slouží zabudovaná funkce `setInterval`. Na rozdíl od nám už známého `setTimeout`, který po uplynutí doby pustí funkci jednou, třeba po pěti sekundách a dost, `setInterval` bude pouštět funkci opakovaně. Za pět sekund, deset sekund, patnáct sekund, … Zápisy pro jednorázový i opakovaný časovač jsou velmi podobné.

```js
const once = () => {
  document.body.innerHTML +=
    '<p>Tento text se přidal do stránky po pěti sekundách od načtení stránky.</p>';
};

setTimeout(once, 5000);

const everyThreeSeconds = () => {
  document.body.innerHTML +=
    '<p>Tento text se přidává opakovaně každé tři sekundy.</p>';
};

setInterval(everyThreeSeconds, 3000);
```

Pokud bychom chtěli počítat, kolikrát interval již proběhl, udělali bychom to například takto:

```js
let counter = 0;
const everyThreeSeconds = () => {
  counter = counter + 1;
  document.body.innerHTML += `<p>${counter}. Tento text se přidává opakovaně každé tři sekundy.</p>`;
};

setInterval(everyThreeSeconds, 3000);
```

::fig[ukázka intervalu]{src=assets/interval.gif}

### Rušení časovačů

Pokud spustíme nějaký časovač, často jej také chceme po určité době zrušit. Vyrobme například časovač, který každé 3 vteřiny řekne 'ahoj'.

```js
const sayHello = () => {
  document.body.innerHTML += '<p>ahoj</p>';
};

const timerId = setInterval(sayHello, 5000);
```

Všimněte si, že tentokrát jsme si uložili hodnotu, kterou funkce `setInterval` vrací. Tato hodnota je číslo identifikující náš časovač. Pokud kdykoliv chceme, aby časovač přestal běžet, stačí zavolat funkci `clearInterval` s identifikátorem našeho časovače.

```js
clearInterval(timerId);
```

Takto se dá předčasně zrušit i časovač vyrobený pomocí `setTimeout`. Musíme však použít metodu `clearTimeout`.

```js
const showHello = () => {
  document.body.innerHTML += '<p>ahoj</p>';
};

const timerId = setTimeout(showHello, 5000);

const dismissTimer = () => {
  clearTimeout(timerId);
};

setTimeout(dismissTimer, 2000);
```

Tento kód zařídí, že první časovač vůbec neproběhne. Jeho čas je nastaven na 5 vteřin. Už za dvě vteřiny se však spustí druhý časovač, který nekompromisně vypne ten první dřív, než stačil cokoli udělat.
