## Povinné čtení na doma

### Rušení časovačů

Pokud spustíme nějaký časovač, často jej také chceme po určité době zrušit. Vyrobme například časovač, který každé 3 vteřiny řekne 'ahoj'.

```js
const timerId = setInterval(
  () => document.body.innerHTML += '<p>ahoj</p>', 
  3000
);
```

Všimněte si, že tentokrát jsme si uložili hodnotu, kterou funkce `setInterval` vrací. Tato hodnota je číslo identifikující náš časovač. Pokud kdykoliv chceme, aby časovač přestal běžet, stačí zavolat funkci `clearInterval` s identifikátorem našeho časovače.

```js
clearInterval(timerId);
```

Takto se dá předčasně zrušit i časovač vyrobený pomocí `setTimeout`. Musíme však použít metodu `clearTimeout`.

```js
const timerId = setTimeout(
  () => document.body.innerHTML += '<p>ahoj</p>',
  5000
);
setTimeout(() => clearTimeout(timerId), 2000);
```

Tento kód zařídí, že první časovač vůbec neproběhne. Jeho čas je nastaven na 5 vteřin. Už za dvě vteřiny se však spustí druhý časovač, který nekompromisně vypne ten první dřív, než stačil cokoli udělat.
