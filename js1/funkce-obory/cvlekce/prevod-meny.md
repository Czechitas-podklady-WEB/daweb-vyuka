---
title: Převod měny
demand: 2
---

Napište funkci `convertToCZK`, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

| Měna           | Kód | Kurz   |
| -------------- | --- | ------ |
| Euro           | EUR | 24.47  |
| Britská libra  | GBP | 28.09  |
| Americký dolar | USD | 24.81  |
| Bitcoin        | BTC | 478637 |

Výslednou částku zakrouhlete na celé koruny. Příklad použití:

```jscon
> convertToCZK(25, 'EUR')
612
```

Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek `null`. Otestujte funkci v konzoli.

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
```

:::
