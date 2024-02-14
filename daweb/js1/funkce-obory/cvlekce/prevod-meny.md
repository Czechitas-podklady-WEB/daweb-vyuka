---
title: Převod měny
demand: 2
lead: Napište funkci, která převede částku na české koruny.
solutionAccess: protected
---

Napište funkci `convertToCZK`, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

| Měna           | Kód | Kurz   |
| -------------- | --- | ------ |
| Euro           | EUR | 24.47  |
| Britská libra  | GBP | 28.09  |
| Americký dolar | USD | 24.81  |
| Bitcoin        | BTC | 478637 |

Výslednou částku zakrouhlete na celé koruny. Příklad použití:

```js
document.body.innerHTML += convertToCZK(25, 'EUR');
```

Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek `null`. Otestujte funkci výpisem výsledku do stránky.

:::solution

```js
const convertToCZK = (amount, currency) => {
  let rate;

  if (currency === 'EUR') {
    rate = 24.47;
  } else if (currency === 'GBP') {
    rate = 28.09;
  } else if (currency === 'USD') {
    rate = 24.81;
  } else if (currency === 'BTC') {
    rate = 478637;
  } else {
    return null;
  }

  return Math.round(rate * amount);
};

document.body.innerHTML += `100 € je ${convertToCZK(100, 'EUR')} Kč<br>`;
document.body.innerHTML += `£ 100 je ${convertToCZK(100, 'GBP')} Kč<br>`;
document.body.innerHTML += `$ 100 je ${convertToCZK(100, 'USD')} Kč<br>`;
document.body.innerHTML += `100 bitcoinů je ${convertToCZK(100, 'BTC')} Kč<br>`;
```

:::
