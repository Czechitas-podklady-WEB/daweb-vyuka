## `map`

Metoda `map` slouží k transformaci prvků pole. Prochází pole a každý prvek převádí na upravenou hodnotu. Výsledkem je nové pole s transformovanými prvky.

### Syntaxe

```js
const teplotyVeStupnichFahrenheit = [0, 32, 100, 212];
const teplotyVeStupnichCelsiu = teplotyVeStupnichFahrenheit.map((teplota) => {
  return ((teplota - 32) * 5) / 9;
});
```

### `querySelectorAll` a `map`

Na rozdíl od `forEach` metoda `map` neexistuje na objektu `NodeList` (návratová hodnota volání `querySelectorAll`). Proto je potřeba před použitím `map` z `NodeList` udělat klasické pole pomocí funkce `Array.from` například takto:

```html
<h2>Počet ujetých kilometrů firemním autem</h2>
<ul>
  <li>1. dubna <span class="vzdalenost">30</span> km</li>
  <li>2. dubna <span class="vzdalenost">15</span> km</li>
  <li>3. dubna <span class="vzdalenost">0</span> km</li>
  <li>4. dubna <span class="vzdalenost">76</span> km</li>
  <li>5. dubna <span class="vzdalenost">22</span> km</li>
  <li>6. dubna <span class="vzdalenost">8</span> km</li>
  <li>7. dubna <span class="vzdalenost">140</span> km</li>
</ul>
```

```js
const seznam = document.querySelector('ul');
const polozkyVSeznamu = seznam.querySelectorAll('li');
const polePolozekVSeznamu = Array.from(polozkyVSeznamu);

const vzdalenosti = polePolozekVSeznamu.map((polozka) => {
  return Number(polozka.querySelector('.vzdalenost').textContent);
});

let celkovaVzdalenost = 0;
vzdalenosti.forEach((vzdalenost) => {
  celkovaVzdalenost += vzdalenost;
});
console.log(`Celková najetá vzdálenost je ${celkovaVzdalenost} km.`);

const prumernaVzdalenostZaDen = Math.round(
  celkovaVzdalenost / vzdalenosti.length
);
console.log(`Průměrná vzdálenost za den je ${prumernaVzdalenostZaDen} km.`);
```

V tomto příkladu se každý prvek pole `polePolozekVSeznamu` prochází a z jeho zanořeného spanu se třídou `vzdalenost` se bere číslo. Výsledkem je nové pole `vzdalenosti` obsahující pouze čísla, se kterémi se lépe dělají další výpočty.
