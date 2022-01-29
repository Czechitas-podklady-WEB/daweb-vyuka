## Povinné čtení na doma

### Rušení časovačů

Pokud spustíme nějaký časovač, často jej také chceme po určité době zrušit. Vyrobme například časovač, který každé 3 vteřiny řekne 'ahoj'.

```js
const timerId = setInterval(() => console.log('ahoj'), 3000);
```

Všimněte si, že tentokrát jsme si uložili hodnotu, kterou funkce `setInterval` vrací. Tato hodnota je číslo, které identifikuje náš časovač. Pokud kdykoliv chceme, aby časovač přestal běžet, stačí zavolat funkci `clearInterval` s identifikátorem našeho časovače.

```js
clearInterval(timerId);
```

Takto se dá předčasně zrušit i časovač vyrobený pomocí `setTimeout`. Musíme však použít metodu `clearTimeout`.

```js
const timerId = setTimeout(() => console.log('ahoj'), 5000);
setTimeout(() => clearTimeout(timerId), 2000);
```

Tento kód zařídí, že první časovač vůbec neproběhne. Jeho čas je nastaven na 5 vteřin. Už za dvě vteřiny se však spustí druhý časovač, který jej nekompromisně vypne ten první dřív, než stačí cokoli udělat.
